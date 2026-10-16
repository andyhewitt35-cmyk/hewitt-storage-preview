  function hsItemVol(it) {
    return it.pal
      ? HS_PAL[it.pal][0] * HS_PAL[it.pal][1]
      : it.d[0] * it.d[1] * it.d[2];
  }
  function calc() {
    var total = 0,
      lines = [],
      itemCount = 0,
      load = [];
    C.categories.forEach(function (cat) {
      cat.items.forEach(function (it) {
        var n = counts[it.id];
        if (n > 0) {
          total += n * it.cuft;
          itemCount += n;
          lines.push({ item: it, n: n, vol: n * it.cuft });
          load.push({ item: it, n: n });
        }
      });
    });
    total = Math.round(total * 100) / 100;
    var F = HS_FIT,
      L20 = F.L20,
      L10 = F.L10;
    if (!load.length)
      return {
        total: 0,
        ratio: 0,
        pct: 0,
        containers: 0,
        lines: lines,
        itemCount: 0,
        fits10: false,
        palLine: "",
        fitLine: "",
        floorPct: 0,
        volPct: 0,
        units: [],
        layout: "",
      };
    var r20 = hsEval(load, L20),
      ratio = r20.ratio,
      n = r20.containers;
    var r10 =
      C.container10 && C.pricing.small10
        ? hsEval(load, L10)
        : { containers: 99 };
    var fits10 = r10.containers === 1;
    var units = [];
    var laneNote = r20.forced
      ? "A middle lane leaves only " +
        fmt((F.W - F.LANE) / 2, 2) +
        "m each side, too narrow for some of your items, so the lane goes along one side. "
      : "";
    var lay = r20.layout,
      usableW = lay === "packed" ? F.W : F.W - F.LANE;
    var fitLine =
      laneNote +
      "How this is worked out: 20ft internal " +
      fmt(L20, 2) +
      " \u00d7 " +
      fmt(F.W, 2) +
      " \u00d7 " +
      fmt(F.INT_H, 2) +
      "m = " +
      fmt(F.CU20) +
      " cu ft (10ft " +
      fmt(L10, 2) +
      "m long = " +
      fmt(F.CU10) +
      " cu ft). " +
      (lay === "packed"
        ? "Packed wall to wall, no lane: all " +
          fmt(r20.usable) +
          " cu ft usable. "
        : "The " +
          fmt(F.LANE, 2) +
          "m loading lane (" +
          HS_LAYOUT_NAME[lay] +
          ", full length) is taken off first, leaving " +
          fmt(r20.usable) +
          " cu ft usable. ") +
      "Furniture assumed assembled. Your items: " +
      fmt(r20.cu) +
      " cu ft." +
      (load.every(function (x) {
        return !!x.item.pal;
      })
        ? ""
        : " Items go on the floor first, largest first; once the floor is full, boxes, chairs and bedside tables go on top of flat-topped furniture, beds, seats and appliances, and under tables and desks (tops no higher than " +
          fmt(F.H, 1) +
          "m; boxes to " +
          fmt(F.BOX_H, 1) +
          "m). Nothing goes on pallets.");
    var floorNote =
      n !== 1
        ? ""
        : r20.noStack
          ? "Container full: the floor is full and no stacking assumed for these items, so the next item needs another container."
          : r20.full
            ? "Container full: nothing more fits on the floor or on top, so the next item needs another container."
            : r20.floorFull
              ? "Floor space full: further items will need to be stacked on top of others."
              : "";
    var P = {
        E: counts.palleteuro || 0,
        H: counts.pallethalf || 0,
        U: counts.palletuk || 0,
        F: counts.pallet4ft || 0,
      },
      nPal = P.E + P.H + P.U + P.F;
    var pbLine =
      r20.pbOri === "edge"
        ? "Plasterboard is shown stored on edge."
        : r20.pbOri === "flat"
          ? "Plasterboard is shown stacked flat, as this fits the load better."
          : "";
    var palLine = nPal
      ? "Pallets are loaded on the available floor space only, not stacked."
      : "";
    return {
      total: total,
      ratio: ratio,
      pct: ratio * 100,
      containers: n,
      lines: lines,
      itemCount: itemCount,
      fits10: fits10,
      share10: r10.ratio,
      eval20: r20,
      eval10: r10,
      palLine: palLine,
      pbLine: pbLine,
      floorNote: floorNote,
      fitLine: fitLine,
      altLine: "",
      mode: HS_MODE,
      lane: HS_LANE,
      layout: lay,
      units: units,
      floorPct: 0,
      volPct: r20.V * 100,
    };
  }
