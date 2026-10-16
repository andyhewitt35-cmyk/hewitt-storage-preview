/* =====================================================================
   STORAGE CALCULATOR ENGINE v3 (16/10/2026, Andy's spec: volume-based %)
   Internal size: 20ft 5.90 m long x 2.35 m wide x 2.39 m high; 10ft 2.82 m long, same width/height.
   Organise mode keeps a 0.65 m loading lane clear for the full length, along one side (one 1.70 m strip)
   or down the middle (two 0.85 m strips). Packed mode uses the full 2.35 m width.
   Practical packing height 2.1 m (internal 2.39 m, room to lift and clear the door). Boxes stack to 1.8 m.
   Furniture assumed assembled (beds, tables, desks, wardrobes). Rules: pallets never stacked; furniture never stacked except dining chairs (nest up to 4 high);
   appliances and wardrobes never stacked; fridge / washer / dishwasher / cooker stay upright;
   everything else may be turned any way if that fits more.
   How full: each item takes 1 / (most of that item one container holds) of the container. That share
   already includes the gaps a container full of that item leaves (gaps count as used). A mixed load
   adds the shares, so adding anything always raises the reading, one item type alone rises in equal
   steps and reads 100% when no more fit. Containers are filled largest items first.
   ===================================================================== */
var HS_FIT = {
  W: 2.35,
  LANE: 0.65,
  H: 2.1,
  INT_H: 2.39,
  BOX_H: 1.8,
  L20: 5.9,
  L10: 2.82,
  CU20: 1172,
  CU10: 560,
  PAL_H: 1.2,
  M3_CUFT: 35.3147,
  NEST_STEP: 0.32,
  NEST_MAX: 4,
  SHEET: 0.0125,
};
var HS_MODE = 'room'; // 'room' = organise (lane kept clear), 'max' = packed (no lane)
var HS_LANE = 'auto'; // 'auto' | 'side' | 'middle'
var HS_FIXED = {
  fridge: 1,
  washer: 1,
  dishwasher: 1,
  cooker: 1,
  chair: 1,
  bedsingle: 1,
  beddouble: 1,
  bedking: 1,
  dtable46: 1,
  dtable8: 1,
  desk: 1,
  wardrobe: 1,
  mixer: 1,
  wheelbarrow: 1,
  sitebox: 1,
  plasterboard: 1,
  pbsheet: 1,
  ladder2: 1,
  stepladder: 1,
  scaffold: 1,
}; // trades: ladders/tower lie flat lengthwise only, mixer never tipped
var HS_EDGEOK = { plasterboard: 1, pbsheet: 1 }; // plasterboard: flat OR on its long edge (2.4 long x 1.2 high); whichever fits more (Andy 16/10)
var HS_FLATSTACK = { ladder2: 1, stepladder: 1, plasterboard: 1, pbsheet: 1, scaffold: 1 }; // stack flat on each other up to 1.8 m (ladders: assumption; plasterboard + folded scaffold: Andy 16/10)   // assembled furniture stays upright (footprint may turn)
var HS_UNDER = { dtable46: 0.7, dtable8: 0.7, desk: 0.7 }; // clear height underneath (beds assumed divan / low frame: none)   // stay upright (sofas/armchairs/chairs seat up)
var HS_SEAT = { chair: 0.45 }; // living chairs go seat-to-seat 2 high: each extra chair adds 0.45 m
var HS_PAL = { F: [1.22, 1.02], E: [1.2, 0.8], U: [1.2, 1.0], H: [0.8, 0.6] };
function hsStrips(layout) {
  var F = HS_FIT;
  return layout === 'packed'
    ? [F.W]
    : layout === 'middle'
      ? [(F.W - F.LANE) / 2, (F.W - F.LANE) / 2]
      : [F.W - F.LANE];
}
function hsFl(x, a) {
  return a > 0 ? Math.floor(x / a + 1e-9) : 0;
}
// Every way the item may stand: footprint a x b and how many high.
function hsOrients(it, asTopper) {
  var F = HS_FIT,
    out = [];
  if (it.pal) {
    var p = HS_PAL[it.pal];
    return [{ a: p[0], b: p[1], layers: 1, h: 0 }];
  }
  var d = it.d,
    perms = HS_EDGEOK[it.id]
      ? [
          [d[0], d[1], d[2]],
          [d[0], d[2], d[1]],
        ]
      : HS_FIXED[it.id]
        ? [[d[0], d[1], d[2]]]
        : [
            [d[0], d[1], d[2]],
            [d[0], d[2], d[1]],
            [d[1], d[2], d[0]],
          ]; // (footprint pair, height); footprint is also turned 90 deg below
  perms.forEach(function (q) {
    var h = q[2];
    if (h > F.H + 1e-9) return;
    if (!asTopper && it.mode === 'edge' && h === d[1] && d[1] !== d[0] && d[1] !== d[2]) return; // beds, tables, mattresses stay on edge
    var layers = 1;
    if (it.box || (HS_FLATSTACK[it.id] && h === d[2]))
      layers = Math.max(1, hsFl(F.BOX_H, h)); // on edge: not stacked
    else if (HS_SEAT[it.id]) {
      layers = 1;
      while (layers < 2 && d[2] + layers * HS_SEAT[it.id] <= F.H + 1e-9) layers++;
    } else if (it.id === 'dchair' && q[2] === d[2]) {
      layers = 1;
      while (layers < F.NEST_MAX && d[2] + layers * F.NEST_STEP <= F.H + 1e-9) layers++;
    }
    var top = HS_SEAT[it.id]
      ? h + (layers - 1) * HS_SEAT[it.id]
      : it.id === 'dchair'
        ? h + (layers - 1) * F.NEST_STEP
        : it.box || HS_FLATSTACK[it.id]
          ? layers * h
          : h;
    out.push({ a: q[0], b: q[1], layers: layers, h: h, top: top });
  });
  return out;
}
// Most of one footprint (a x b, may be turned 90 deg) on a strip L long x W deep. Tries rows of one way then the other
// both along the length and across the width; plain guillotine rows that anyone can check with a tape measure.
function hsStripCount(L, W, a, b) {
  var best = 0,
    i,
    n;
  for (i = 0; i <= hsFl(L, a); i++) {
    n = i * hsFl(W, b) + hsFl(L - i * a, b) * hsFl(W, a);
    if (n > best) best = n;
  }
  for (i = 0; i <= hsFl(W, b); i++) {
    n = i * hsFl(L, a) + hsFl(W - i * b, a) * hsFl(L, b);
    if (n > best) best = n;
  }
  return best;
}
var hsMaxCache = {};
var hsOriCache = {};
// Whole-load orientation (Andy 16/10): hsPlace may pin an item to one of its orientations (index into hsOrients) for a trial.
var HS_OV = null;
function hsK(it, L, layout) {
  return (
    it.id + '|' + L + '|' + layout + (HS_OV && HS_OV[it.id] !== undefined ? '#' + HS_OV[it.id] : '')
  );
}
function hsOri(it, L, layout) {
  var k = hsK(it, L, layout);
  hsItemMax(it, L, layout);
  return hsOriCache[k];
}
function hsItemMax(it, L, layout) {
  // most of this item ONE container holds in this layout (on the floor, own stacking only)
  var k = hsK(it, L, layout);
  if (hsMaxCache[k] !== undefined) return hsMaxCache[k];
  var best = 0,
    bo = null,
    os = hsOrients(it),
    pin = HS_OV && HS_OV[it.id] !== undefined ? HS_OV[it.id] : -1;
  os.forEach(function (o, i) {
    if (pin >= 0 && i !== pin) return;
    var n =
      hsStrips(layout).reduce(function (s, W) {
        return s + hsStripCount(L, W, o.a, o.b);
      }, 0) * o.layers;
    if (n > best) {
      best = n;
      bo = o;
    }
  });
  hsOriCache[k] = bo;
  return (hsMaxCache[k] = best);
}
// How many containers' worth a load takes in one layout (1.0 = exactly one full container).
function hsShare(load, L, layout) {
  return load.reduce(function (s, x) {
    var m = hsItemMax(x.item, L, layout);
    return s + (m > 0 ? x.n / m : Infinity);
  }, 0);
}
// Layout used: packed, or the lane choice. Auto = side lane unless the middle lane holds this load in less space.
function hsLayout(load, L, mode, lane) {
  mode = mode || HS_MODE;
  lane = lane || HS_LANE;
  if (mode === 'max') return { layout: 'packed', share: hsShare(load, L, 'packed') };
  if (lane === 'side' || lane === 'middle') {
    var f = hsShare(load, L, lane);
    if (f === Infinity) {
      // e.g. UK pallets are wider than a 0.85 m middle-lane strip: lane moves to the side.
      // Kept monotonic: never less than the middle-lane share of the items that did fit plus the side share of the rest.
      var mix = load.reduce(function (s, x) {
        var m = hsItemMax(x.item, L, lane);
        return s + x.n / (m > 0 ? m : hsItemMax(x.item, L, 'side'));
      }, 0);
      return { layout: 'side', share: Math.max(hsShare(load, L, 'side'), mix), forced: lane };
    }
    return { layout: lane, share: f };
  }
  var s = hsShare(load, L, 'side'),
    m = hsShare(load, L, 'middle');
  return m < s - 1e-9 ? { layout: 'middle', share: m } : { layout: 'side', share: s };
}
function hsContainers(share) {
  return share <= 0 ? 0 : Math.max(1, Math.ceil(share - 1e-9));
}
var HS_LAYOUT_NAME = {
  side: 'along one side',
  middle: 'down the middle',
  packed: 'no lane (packed)',
};
function hsCatalog() {
  var a = [];
  CALC_CONFIG.categories.forEach(function (c) {
    c.items.forEach(function (it) {
      a.push(it);
    });
  });
  return a;
}
// ---- v3 volume model -------------------------------------------------------------
// Usable cu ft: organise = full volume x (2.35 - 0.65) / 2.35 (lane taken off first); packed = full volume.
function hsUsable(L, mode) {
  var F = HS_FIT,
    full = L === F.L10 ? F.CU10 : F.CU20;
  return (mode || HS_MODE) === 'max' ? full : (full * (F.W - F.LANE)) / F.W;
}
// Pallet cu ft (Andy gave footprint only): footprint x standard loaded height 1.2 m incl. pallet (confirmed by Andy 16/10): Euro 40.7, UK 50.9, Half 20.3 cu ft. Not stacked.
function hsCuft(it) {
  return it.pal
    ? Math.round(HS_PAL[it.pal][0] * HS_PAL[it.pal][1] * HS_FIT.PAL_H * HS_FIT.M3_CUFT * 10) / 10
    : it.cuft;
}
// ---- Phase 2: stacking on top (16/10/2026) ------------------------------------------
// Light items that may go ON TOP of other things: boxes, chairs, dining chairs (nest to 4), office chairs, bedside tables.
var HS_TOPPER = {
  mattress: 1,
  drawers: 1,
  tvunit: 1,
  coffeetable: 1,
  boxs: 1,
  boxm: 1,
  boxl: 1,
  chair: 1,
  dchair: 1,
  officechair: 1,
  bedside: 1,
};
// Things with a flat top (or a sofa / armchair seat, light items only, which all toppers are) that can take toppers.
// Not bases: pallets, beds / tables / mattresses on edge, wardrobes, bookcases and shelving (already 1.8 m+), toppers.
var HS_BASE = {
  sitebox: 1,
  plasterboard: 1,
  pbsheet: 1,
  bedsingle: 1,
  beddouble: 1,
  bedking: 1,
  dtable46: 1,
  dtable8: 1,
  chair: 1,
  wardrobe: 1,
  bookcase: 1,
  shelving: 1,
  sofa2: 1,
  sofa3: 1,
  armchair: 1,
  coffeetable: 1,
  tvunit: 1,
  drawers: 1,
  fridge: 1,
  washer: 1,
  dishwasher: 1,
  cooker: 1,
  filing: 1,
  desk: 1,
};
var hsTopCache = {};
// Light furniture goes only on beds, tables and desks (a mattress lies flat only on a bed frame).
var HS_LIGHTFURN = {
  mattress: { bedsingle: 1, beddouble: 1, bedking: 1 },
  drawers: 1,
  tvunit: 1,
  coffeetable: 1,
  bedside: 1,
  chair: 1,
  dchair: 1,
  officechair: 1,
};
var HS_FLATBASE = { bedsingle: 1, beddouble: 1, bedking: 1, dtable46: 1, dtable8: 1, desk: 1 };
// How many of topper s fit on ONE base b (as b stands on the floor): footprint rows x layers up to 1.8 m (boxes) / 2.1 m.
// Capped so a base never gives more room than the floor it stands on would (keeps "adding never lowers %").
function hsTopCap(b, s, L, layout) {
  var k = hsK(b, L, layout) + '>' + hsK(s, L, layout);
  if (hsTopCache[k] !== undefined) return hsTopCache[k];
  var F = HS_FIT,
    bo = hsOri(b, L, layout),
    best = 0;
  var lf = HS_LIGHTFURN[s.id],
    allowed =
      !lf ||
      (lf === 1
        ? HS_FLATBASE[b.id] || !(s.id in { mattress: 1, drawers: 1, tvunit: 1, coffeetable: 1 })
        : lf[b.id]);
  if (bo && HS_EDGEOK[b.id] && bo.h !== b.d[2]) bo = null; // on edge: nothing goes on top
  if (bo && allowed) {
    var top = bo.top !== undefined ? bo.top : bo.h;
    var fit = function (room) {
      // most of s in one space of the base's footprint with this headroom
      var best1 = 0;
      hsOrients(s, true).forEach(function (o) {
        if (o.h > room + 1e-9) return;
        var layers = s.box
          ? hsFl(Math.min(room, F.BOX_H), o.h)
          : HS_SEAT[s.id]
            ? Math.max(1, Math.min(o.layers, 1 + hsFl(room - o.h, HS_SEAT[s.id])))
            : s.id === 'dchair' && o.layers > 1
              ? Math.max(1, Math.min(o.layers, 1 + hsFl(room - o.h, F.NEST_STEP)))
              : 1;
        var n = hsStripCount(bo.a, bo.b, o.a, o.b) * layers;
        if (n > best1) best1 = n;
      });
      return best1;
    };
    best = fit(F.H - top) + (HS_UNDER[b.id] ? fit(HS_UNDER[b.id]) : 0); // on top (to 2.1 m) + underneath (tables, desks)
    var Mb = hsItemMax(b, L, layout),
      Ms = hsItemMax(s, L, layout);
    best = Math.min(best, Math.floor((Ms * bo.layers) / Mb + 1e-9)); // per floor column of the base   // never more than the same floor would hold
  }
  return (hsTopCache[k] = best);
}
// Does the load fit in k containers? Largest items first onto the floor; toppers that find no floor go on top of bases.
// Floor share of one unit: its real footprint (as it stands, per stacked column) / usable floor area. Mixed loads add
// footprints, so a gap beside a sofa can take a chair. One item type alone is also limited to its own row count M.
function hsArea(it, L, layout) {
  var o = hsOri(it, L, layout);
  if (!o) return Infinity;
  var A =
    L *
    hsStrips(layout).reduce(function (s, W) {
      return s + W;
    }, 0);
  return (o.a * o.b) / o.layers / A;
}
// Does the load fit in k containers? Largest items first onto the floor; toppers that find no floor go on top of bases.
function hsPlace1(load, L, layout, k) {
  // Floor-only items first (largest first), then items that can also go on top (largest first).
  var sorted = load.slice().sort(function (p, q) {
    return (
      (HS_TOPPER[p.item.id] ? 1 : 0) - (HS_TOPPER[q.item.id] ? 1 : 0) ||
      hsCuft(q.item) - hsCuft(p.item)
    );
  });
  // Gaps: one item type packed in rows leaves gaps (n x (1/M - footprint share)). The biggest such gap in the load counts as
  // used (rule 6) - other items can't be assumed to fill it. So one item alone is exactly n/M, as before.
  var need = [],
    bases = [],
    Pa = 0,
    G = 0,
    stacked = 0;
  sorted.forEach(function (x) {
    var m = hsItemMax(x.item, L, layout),
      a = hsArea(x.item, L, layout);
    Pa += x.n * a;
    G = Math.max(G, m > 0 ? x.n * Math.max(0, 1 / m - a) : Infinity);
  });
  var P = Pa + G,
    R = k - G;
  for (var i = 0; i < sorted.length; i++) {
    var x = sorted[i],
      m = hsItemMax(x.item, L, layout),
      a = hsArea(x.item, L, layout);
    if (m <= 0) return { ok: false, P: Infinity, stacked: 0 };
    var lb = (hsOri(x.item, L, layout) || {}).layers || 1;
    if (!HS_TOPPER[x.item.id]) {
      if (x.n > k * m + 1e-9) return { ok: false, P: P, stacked: 0, floorFull: true };
      R -= x.n * a;
      if (HS_BASE[x.item.id]) bases.push({ it: x.item, u: x.n / lb });
      continue;
    }
    var onFloor = Math.min(x.n, Math.max(0, R) / a + 1e-9, k * m);
    R -= onFloor * a;
    if (HS_BASE[x.item.id] && onFloor > 0) bases.push({ it: x.item, u: onFloor / lb });
    if (x.n - onFloor > 1e-9) need.push({ it: x.item, r: x.n - onFloor });
  }
  if (R < -1e-9) return { ok: false, P: P, stacked: 0, floorFull: true };
  bases.sort(function (p, q) {
    return hsCuft(q.it) - hsCuft(p.it);
  });
  for (var j = 0; j < need.length; j++) {
    var s = need[j];
    for (var b = 0; b < bases.length && s.r > 1e-9; b++) {
      var c = hsTopCap(bases[b].it, s.it, L, layout);
      if (c <= 0 || bases[b].u <= 1e-9) continue;
      var q = Math.min(s.r, bases[b].u * c);
      s.r -= q;
      bases[b].u -= q / c;
      stacked += q;
    }
    if (s.r > 1e-9)
      return { ok: false, P: P, stacked: stacked, floorFull: true, fail: s.it.id, left: s.r };
  }
  return { ok: true, P: P, stacked: stacked, floorFull: P >= 1 - 1e-9 };
}
// Orientation options worth trying for an item in a mixed load: the one that fits most of it on the floor, plus (if
// different) the best one that can still take things on top (e.g. plasterboard flat rather than on edge).
function hsAlts(it, L, layout) {
  if (it.pal || HS_TOPPER[it.id]) return null;
  var F = HS_FIT,
    os = hsOrients(it),
    cnt = function (o) {
      return (
        hsStrips(layout).reduce(function (s, W) {
          return s + hsStripCount(L, W, o.a, o.b);
        }, 0) * o.layers
      );
    };
  var b0 = -1,
    b1 = -1;
  os.forEach(function (o, i) {
    var n = cnt(o);
    if (n <= 0) return;
    if (b0 < 0 || n > cnt(os[b0])) b0 = i;
    var baseOK =
      HS_BASE[it.id] &&
      !(HS_EDGEOK[it.id] && o.h !== it.d[2]) &&
      (o.top !== undefined ? o.top : o.h) < F.H - 0.1;
    if (baseOK && (b1 < 0 || n > cnt(os[b1]))) b1 = i;
  });
  return b1 >= 0 && b1 !== b0 && b0 >= 0 ? [b0, b1] : null;
}
// Plasterboard sheets and bundles share columns: with any bundle in the load, sheets count as 1/20 of a bundle
// (20 x 12.5 mm = 0.25 m) and stand the way the bundles do.
function hsPool(load) {
  var b = null,
    sh = 0;
  load.forEach(function (x) {
    if (x.item.id === 'plasterboard') b = x;
    if (x.item.id === 'pbsheet') sh += x.n;
  });
  if (!b || !sh) return load;
  var out = load.filter(function (x) {
    return x.item.id !== 'pbsheet' && x.item.id !== 'plasterboard';
  });
  out.push({ item: b.item, n: b.n + (sh * HS_FIT.SHEET) / b.item.d[2] });
  return out;
}
// Does the load fit in k containers? Tries every combination of the items' orientation options against the WHOLE load
// and keeps the best (fits; then least floor used). Same items in a bigger load can still use any option, so adding never lowers containers.
function hsPlace(load, L, layout, k) {
  load = hsPool(load);
  var alts = [];
  load.forEach(function (x) {
    var a = hsAlts(x.item, L, layout);
    if (a) alts.push({ id: x.item.id, a: a });
  });
  if (!alts.length) return hsPlace1(load, L, layout, k);
  var best = null,
    combos = 1 << Math.min(alts.length, 8);
  for (var c = 0; c < combos; c++) {
    var ov = {},
      tag = [];
    alts.forEach(function (al, i) {
      var oi = al.a[(c >> i) & 1];
      ov[al.id] = oi;
      tag.push(al.id + ':' + oi);
    });
    HS_OV = ov;
    var r = hsPlace1(load, L, layout, k);
    HS_OV = null;
    r.ori = ov;
    if (
      !best ||
      (r.ok && !best.ok) ||
      (r.ok === best.ok &&
        (r.P < best.P - 1e-9 || (Math.abs(r.P - best.P) < 1e-9 && r.stacked < best.stacked)))
    )
      best = r;
  }
  return best;
}
function hsLayoutFor(load, L, mode, lane) {
  // lane choice: Auto = side unless middle needs fewer containers / less floor
  mode = mode || HS_MODE;
  lane = lane || HS_LANE;
  if (mode === 'max') return { layout: 'packed' };
  var fitsIn = function (lay) {
    for (var k = 1; k < 999; k++) if (hsPlace(load, L, lay, k).ok) return k;
    return 999;
  };
  if (lane === 'side' || lane === 'middle') {
    if (
      load.some(function (x) {
        return hsItemMax(x.item, L, lane) <= 0;
      })
    )
      return { layout: 'side', forced: lane };
    return { layout: lane };
  }
  var s = fitsIn('side'),
    m = fitsIn('middle');
  if (m < s) return { layout: 'middle' };
  return { layout: 'side' };
}
// Reading: V = item cu ft / usable cu ft (equal steps). Containers = smallest k that holds the load (floor, then stacking)
// with V <= k. In one container it shows V; 100% only when nothing on the item list could still go in (leftover = used).
function hsStepT(it, U) {
  return Math.round((hsCuft(it) / U) * 1000);
} // step in tenths of a %
function hsEval(load, L, mode, lane) {
  var lay = hsLayoutFor(load, L, mode, lane),
    U = hsUsable(L, mode),
    cu = load.reduce(function (s, x) {
      return s + x.n * hsCuft(x.item);
    }, 0);
  // Strictly additive (16/10): each item has a fixed step in tenths of a percent = round(cu ft / usable x 1000).
  // Total = sum of steps, so no rounding drift and no gap/floor contributions. Fit only decides notices / containers.
  var T = load.reduce(function (s, x) {
      return s + x.n * hsStepT(x.item, U);
    }, 0),
    V = T / 1000,
    n = 1,
    pl;
  while (n < 999) {
    pl = hsPlace(load, L, lay.layout, n);
    if (pl.ok && T <= n * 1000) break;
    n++;
  }
  if (lay.forced) {
    // middle lane asked for but some items too wide: never fewer containers than the middle needs for the rest
    var rest = load.filter(function (x) {
        return hsItemMax(x.item, L, lay.forced) > 0;
      }),
      nm = 1;
    var extra = load.reduce(function (s, x) {
      return hsItemMax(x.item, L, lay.forced) > 0 ? s : s + x.n / hsItemMax(x.item, L, 'side');
    }, 0);
    while (rest.length && nm < 999 && !hsPlace(rest, L, lay.forced, nm - extra).ok) nm++;
    if (nm > n) {
      n = nm;
      pl = hsPlace(load, L, lay.layout, n);
    }
  }
  var full = false;
  if (n === 1)
    full = hsCatalog().every(function (it) {
      if (T + hsStepT(it, U) > 1000) return true;
      return !hsPlace(load.concat([{ item: it, n: 1 }]), L, lay.layout, 1).ok;
    });
  var ratio = n === 1 ? Math.min(1, V) : n - 1 + Math.max(1e-6, Math.min(1, V - (n - 1)));
  var anyTop = load.some(function (x) {
    return HS_BASE[x.item.id];
  });
  // Plasterboard orientation actually used (bundle decides when both are present: sheets share its columns).
  var pbx =
      load.filter(function (x) {
        return x.item.id === 'plasterboard';
      })[0] ||
      load.filter(function (x) {
        return x.item.id === 'pbsheet';
      })[0],
    pbOri = null;
  if (pbx) {
    var pit = pbx.item,
      po =
        pl.ori && pl.ori[pit.id] !== undefined
          ? hsOrients(pit)[pl.ori[pit.id]]
          : hsOri(pit, L, lay.layout);
    pbOri = po && po.h === pit.d[2] ? 'flat' : 'edge';
  }
  return {
    T: T,
    full: full,
    layout: lay.layout,
    forced: lay.forced,
    usable: U,
    cu: cu,
    V: V,
    P: pl.P,
    stacked: pl.stacked,
    pbOri: pbOri,
    floorFull: n === 1 && pl.P >= 1 - 1e-9,
    noStack: full && pl.P >= 1 - 1e-9 && !(pl.stacked > 0) && !anyTop,
    containers: n,
    ratio: ratio,
  };
}
/* ======================= END OF ENGINE ======================= */
