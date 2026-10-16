# Storage calculator v3.3 – validation (16 Oct 2026, floor first, then stacking)

## Usable volume
| | Organise (0.65 m lane taken off first) | Packed (no lane) |
|---|---:|---:|
| 20ft (5.90 × 2.35 × 2.39 m, 1,172 cu ft) | 1,172 × 1.70/2.35 = **847.8 cu ft** | **1,172 cu ft** |
| 10ft (2.82 × 2.35 × 2.39 m, 560 cu ft) | 560 × 1.70/2.35 = **405.1 cu ft** | **560 cu ft** |

## Pallets
Pallets are never stacked, in any mode, and nothing goes on top of them. Whenever the load includes pallets, the result shows: **"Pallets are loaded on the available floor space only, not stacked."**

Standard loaded height **1.2 m including the pallet** (confirmed by Andy, 16 Oct), not stacked, nothing on top.
- Euro: 1.2×0.8×1.2 = 1.152 m³ ≈ **40.7 cu ft**
- UK: 1.2×1.0×1.2 = 1.44 m³ ≈ **50.9 cu ft**
- Half: 0.8×0.6×1.2 = 0.576 m³ ≈ **20.3 cu ft**

## Item cu ft: before and after (16 Oct)
New cu ft = L × W × H (m) × 35.315, using realistic UK assembled sizes. Beds stay assembled (bed handling still to be decided). Dining chair set to 0.45×0.50×0.90 m (Andy, 16 Oct): 0.2025 m³ × 35.315 = 7.15 ≈ **7.2 cu ft**; still nests 4 high (1.86 m).

| Item | Dimensions L×W×H m | Old cu ft (Andy's list) | New cu ft |
|---|---|---:|---:|
| Chair | 0.55×0.70×0.95 | 10 | 12.9 |
| Armchair | 0.90×0.85×0.95 | 30 | 25.7 |
| 2 seat sofa | 1.60×0.90×0.85 | 40 | 43.2 |
| 3 seat sofa | 2.00×0.90×0.85 | 55 | 54.0 |
| Coffee table | 1.10×0.55×0.45 | 10 | 9.6 |
| TV / TV unit | 1.20×0.45×0.60 | 15 | 11.4 |
| Bookcase | 0.80×0.30×1.80 | 20 | 15.3 |
| Dining table (4–6) | 1.50×0.90×0.75 | 30 | 35.8 |
| Dining table (8+) | 2.00×1.00×0.75 | 50 | 53.0 |
| Dining chair | 0.45×0.50×0.90 | 6 | 7.2 |
| Single bed | 1.90×0.90×0.90 | 30 | 54.3 |
| Double bed | 1.90×1.35×0.90 | 60 | 81.5 |
| King bed | 2.00×1.50×0.90 | 70 | 95.4 |
| Wardrobe | 1.00×0.60×1.85 | 45 | 39.2 |
| Chest of drawers | 0.80×0.45×0.85 | 20 | 10.8 |
| Bedside table | 0.45×0.40×0.55 | 5 | 3.5 |
| Mattress | 1.90×0.25×1.35 | 25 | 22.6 |
| Fridge freezer | 0.60×0.65×1.80 | 40 | 24.8 |
| Washing machine | 0.60×0.60×0.85 | 20 | 10.8 |
| Dishwasher | 0.60×0.60×0.85 | 20 | 10.8 |
| Cooker | 0.60×0.60×0.90 | 20 | 11.4 |
| Small box | 0.45×0.30×0.30 | 1.4 | 1.4 |
| Medium box | 0.50×0.40×0.40 | 2.8 | 2.8 |
| Large box | 0.60×0.45×0.45 | 4.3 | 4.3 |
| Filing cabinet | 0.47×0.62×1.32 | 10 | 13.6 |
| Desk | 1.40×0.70×0.75 | 30 | 26.0 |
| Office chair | 0.65×0.65×1.05 | 10 | 15.7 |
| Shelving bay | 0.90×0.45×1.80 | 25 | 25.7 |
| Euro pallet | 1.20×0.80×1.20 (loaded) | none given | 40.7 |
| UK pallet | 1.20×1.00×1.20 (loaded) | none given | 50.9 |
| Half pallet | 0.80×0.60×1.20 (loaded) | none given | 20.3 |

## Trades section (new tab after Business; Business unchanged; no generator)
cu ft = L × W × H × 35.315. Steps are strictly additive and rounded to 1 decimal place, like every other item.

| Item | Dimensions L×W×H m | cu ft | Organise step | Packed step | Max per 20ft (organise) | Rules / assumptions |
|---|---|---:|---:|---:|---:|---|
| 4ft pallet of goods | 1.22×1.02 footprint × 1.2 loaded | 52.7 | 6.2% | 4.5% | 5 | Floor only, never stacked, nothing on top; shows the pallet note (assumed 1.2 m loaded height, like the other pallets) |
| Concrete mixer | 1.10×0.70×1.30 | 35.4 | 4.2% | 3.0% | 10 | Stays upright, never tipped; nothing goes on it |
| Wheelbarrow | 1.45×0.65×0.65 | 21.6 | 2.5% | 1.8% | 9 | Assumed upright on its wheel; nothing goes on it |
| Double ladder | 3.00×0.45×0.15 (2-section, closed) | 7.2 | 0.8% | 0.6% | 36 | Fixed orientation: lies flat lengthwise only. Assumed: ladders stack flat on each other up to 1.8 m; nothing else goes on them |
| Step ladder | 1.60×0.50×0.12 (6-tread, folded) | 3.4 | 0.4% | 0.3% | 165 | Fixed orientation: lies flat lengthwise only. Assumed: stack flat up to 1.8 m |
| Site box | 1.28×0.67×0.67 (steel) | 20.3 | 2.4% | 1.7% | 9 | Upright; flat top takes boxes and light items within the 2.1 m headroom; not stacked on others |
| Scaffold tower (folded) | 1.90×0.80×0.25 | 13.4 | 1.6% | 1.1% | 42 | Fixed orientation: lies flat lengthwise only. Stacks flat on each other up to 1.8 m (7 high; Andy, 16 Oct). Boxes can go on top within the headroom |
| Plasterboard bundle | 2.40×1.20×0.25 (about 20 sheets of 12.5 mm) | 25.4 | 3.0% | 2.2% | 14 | Lies flat. Stacks flat on each other up to 1.8 m (7 high; Andy, 16 Oct). Boxes can go on top within the headroom (a full 7-high stack leaves 0.35 m, enough for small boxes only) |

The trades items use the box icon as a placeholder; they have no icons of their own yet.

## Strictly additive % (16 Oct, v3.5)
- Each item has a fixed step = cu ft ÷ usable cu ft, rounded to 1 decimal place (worked in tenths of a %).
- **Total % = the sum of those steps**, so there's no rounding drift: chair 1.5 + armchair 3.0 = **4.5%**, and n of an item is always n × its step.
- Leftover gaps and floor share no longer add anything to the %. Floor and fit only trigger the floor-full / stacking notice, the "Container full" message, and **+1 container**.
- The % never goes over 100. A full floor no longer jumps the reading to 100%; the status text says "Container full" instead.
- Trade-off: rounding each step adds up over many small items. 100 small boxes read 20.0% (true 16.5%); 20 medium boxes read 6.0% (true 6.6%).

## One of each item: % step review (16 Oct)
Old display: whole numbers with a forced 1% minimum. New display: one decimal place, no minimum, and it only shows 100% when the container is truly full. The % is cu ft ÷ usable cu ft (organise 847.8, packed 1,172). The floor step (100 ÷ most that fit on the floor) never changes the %; it decides when the floor-full notice or +1 container appears.

| Item | cu ft | Exact % organise | % packed | Old shown | New shown | Floor step (max on floor) | Reason for difference |
|---|---:|---:|---:|---:|---:|---:|---|
| Chair | 12.9 | 1.52% | 1.10% | 2% | 1.5% | 2.1% (48) | rounding only: old was the exact % rounded to a whole number |
| Armchair | 25.7 | 3.03% | 2.19% | 3% | 3.0% | 8.3% (12) | rounding only: old was the exact % rounded to a whole number |
| 2 seat sofa | 43.2 | 5.10% | 3.69% | 5% | 5.1% | 8.3% (12) | rounding only: old was the exact % rounded to a whole number |
| 3 seat sofa | 54 | 6.37% | 4.61% | 6% | 6.4% | 8.3% (12) | rounding only: old was the exact % rounded to a whole number |
| Coffee table | 9.6 | 1.13% | 0.82% | 1% | 1.1% | 2.6% (39) | rounding only: old was the exact % rounded to a whole number |
| TV / TV unit | 11.4 | 1.34% | 0.97% | 1% | 1.3% | 2.9% (35) | rounding only: old was the exact % rounded to a whole number |
| Bookcase | 15.3 | 1.80% | 1.31% | 2% | 1.8% | 2.5% (40) | rounding only: old was the exact % rounded to a whole number |
| Dining table (4–6) | 35.8 | 4.22% | 3.05% | 4% | 4.2% | 16.7% (6) | rounding only: old was the exact % rounded to a whole number. Correct by volume; it reads high only because assembled it is large (35.8 cu ft). Floor-limited at 6 per 20ft, so the next one needs +1 container well before 100% |
| Dining table (8+) | 53 | 6.25% | 4.52% | 6% | 6.3% | 50.0% (2) | rounding only: old was the exact % rounded to a whole number. Correct by volume; it reads high only because assembled it is large (53 cu ft). Floor-limited at 2 per 20ft, so the next one needs +1 container well before 100% |
| Dining chair | 7.2 | 0.85% | 0.61% | 1% | 0.8% | 0.6% (156) | rounding only: old was the exact % rounded to a whole number |
| Single bed | 54.3 | 6.40% | 4.63% | 6% | 6.4% | 33.3% (3) | rounding only: old was the exact % rounded to a whole number. Correct by volume; it reads high only because assembled it is large (54.3 cu ft). Floor-limited at 3 per 20ft, so the next one needs +1 container well before 100% |
| Double bed | 81.5 | 9.61% | 6.95% | 10% | 9.6% | 33.3% (3) | rounding only: old was the exact % rounded to a whole number. Correct by volume; it reads high only because assembled it is large (81.5 cu ft). Floor-limited at 3 per 20ft, so the next one needs +1 container well before 100% |
| King bed | 95.4 | 11.25% | 8.14% | 11% | 11.3% | 50.0% (2) | rounding only: old was the exact % rounded to a whole number. Correct by volume; it reads high only because assembled it is large (95.4 cu ft). Floor-limited at 2 per 20ft, so the next one needs +1 container well before 100% |
| Wardrobe | 39.2 | 4.62% | 3.34% | 5% | 4.6% | 7.1% (14) | rounding only: old was the exact % rounded to a whole number |
| Chest of drawers | 10.8 | 1.27% | 0.92% | 1% | 1.3% | 3.7% (27) | rounding only: old was the exact % rounded to a whole number |
| Bedside table | 3.5 | 0.41% | 0.30% | 1% | 0.4% | 1.9% (54) | forced 1% minimum (true value is 0.41%) |
| Mattress | 22.6 | 2.67% | 1.93% | 3% | 2.7% | 3.7% (27) | rounding only: old was the exact % rounded to a whole number |
| Fridge freezer | 24.8 | 2.93% | 2.12% | 3% | 2.9% | 5.6% (18) | rounding only: old was the exact % rounded to a whole number |
| Washing machine | 10.8 | 1.27% | 0.92% | 1% | 1.3% | 5.6% (18) | rounding only: old was the exact % rounded to a whole number |
| Dishwasher | 10.8 | 1.27% | 0.92% | 1% | 1.3% | 5.6% (18) | rounding only: old was the exact % rounded to a whole number |
| Cooker | 11.4 | 1.34% | 0.97% | 1% | 1.3% | 5.6% (18) | rounding only: old was the exact % rounded to a whole number |
| Small box | 1.4 | 0.17% | 0.12% | 1% | 0.2% | 0.2% (426) | forced 1% minimum (true value is 0.17%) |
| Medium box | 2.8 | 0.33% | 0.24% | 1% | 0.3% | 0.5% (188) | forced 1% minimum (true value is 0.33%) |
| Large box | 4.3 | 0.51% | 0.37% | 1% | 0.5% | 0.7% (140) | 0.51% rounded up to 1%; now 0.5% |
| Euro pallet | 40.7 | 4.80% | 3.47% | 5% | 4.8% | 11.1% (9) | rounding only: old was the exact % rounded to a whole number. Correct: 1.2 m loaded height; floor-limited at 9 per 20ft, so it jumps to 100% there (no stacking) |
| UK pallet | 50.9 | 6.00% | 4.34% | 6% | 6.0% | 20.0% (5) | rounding only: old was the exact % rounded to a whole number. Correct: 1.2 m loaded height; floor-limited at 5 per 20ft, so it jumps to 100% there (no stacking) |
| Half pallet | 20.3 | 2.39% | 1.73% | 2% | 2.4% | 5.6% (18) | rounding only: old was the exact % rounded to a whole number. Correct: 1.2 m loaded height; floor-limited at 18 per 20ft, so it jumps to 100% there (no stacking) |
| Filing cabinet | 13.6 | 1.60% | 1.16% | 2% | 1.6% | 3.3% (30) | rounding only: old was the exact % rounded to a whole number |
| Desk | 26 | 3.07% | 2.22% | 3% | 3.1% | 12.5% (8) | rounding only: old was the exact % rounded to a whole number |
| Office chair | 15.7 | 1.85% | 1.34% | 2% | 1.9% | 5.6% (18) | rounding only: old was the exact % rounded to a whole number |
| Shelving bay | 25.7 | 3.03% | 2.19% | 3% | 3.0% | 5.3% (19) | rounding only: old was the exact % rounded to a whole number |

## How it works (v3.3, 16 Oct): furniture assumed assembled
1. **% = item cu ft ÷ usable cu ft**, so every unit adds the same step and mixed loads add up.
2. **Floor first.** Floor-only items go first, largest first, with the lane kept clear, then items that can also go on top. Items may turn any way if that fits more, so sofas can stand on end. Fridge, washer, dishwasher, cooker, chairs and assembled beds, tables, desks and wardrobes stay upright. Mattresses stand on edge on the floor. Mixed loads share the floor by real footprint; the biggest row gap of any one item type counts as used, so an item alone still goes up in equal steps.
3. **Assembled sizes:** single bed 1.9×0.9×0.9, double 1.9×1.35×0.9, king 2.0×1.5×0.9, dining table (4–6) 1.5×0.9×0.75, dining table (8+) 2.0×1.0×0.75 m.
4. **Floor full.** The notice reads **"Floor space full: further items will need to be stacked on top of others."** and the % stays the true volume %.
5. **Stacking (nothing higher than 2.1 m; a box column never taller than 1.8 m):**
   - Boxes, chairs (living chairs 2 high seat-to-seat), dining chairs (nest 4 high), office chairs and bedside tables go on any flat top or seat: beds, tables, desks, sofas, armchairs, chairs, drawers, coffee tables, TV units, fridge, washer, dishwasher, cooker, wardrobes, bookcases and shelving, where there is headroom.
   - Light furniture (coffee table, TV unit, chest of drawers, bedside, chairs) goes on beds, tables and desks.
   - A mattress lies flat on a bed frame.
   - Boxes and chairs also go under tables and desks (0.70 m clear). Nothing goes under beds (divan or low frame assumed). Nothing goes on pallets.
6. **Full and the next item.** When nothing on the item list can still go in, or the steps reach 100%, the status says the container is full and the next item shows **+1 container**. The % is always the sum of the steps, never above 100%, never dropping.
7. **Drawing.** Its length shows the real floor used and its height shows how high the load is stacked. The status text matches the floor-full, stacking and full states.

## Every item alone

### Organise (lane, Auto): usable 847.8 cu ft

| Item | cu ft | Step | ×1 | ×5 | ×10 | Floor full at | % at floor full | Max (with stacking) | % at max | Next | What stops it |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|
| Chair | 12.9 | 1.52% | 1.5% | 7.5% | 15.0% | 48 | 72.0% | 48 | 72.0% | +1 container | floor full and nothing in the load to stack it on (only a new flat-topped item, e.g. a chest of drawers, would make room) |
| Armchair | 25.7 | 3.03% | 3.0% | 15.0% | 30.0% | 12 | 36.0% | 12 | 36.0% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| 2 seat sofa | 43.2 | 5.10% | 5.1% | 25.5% | 51.0% | 12 | 61.2% | 12 | 61.2% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| 3 seat sofa | 54 | 6.37% | 6.4% | 32.0% | 64.0% | 12 | 76.8% | 12 | 76.8% | +1 container | nothing more fits on floor or on top |
| Coffee table | 9.6 | 1.13% | 1.1% | 5.5% | 11.0% | 39 | 42.9% | 39 | 42.9% | +1 container | floor full and nothing in the load to stack it on (only a new flat-topped item, e.g. a chest of drawers, would make room) |
| TV / TV unit | 11.4 | 1.34% | 1.3% | 6.5% | 13.0% | 35 | 45.5% | 35 | 45.5% | +1 container | floor full and nothing in the load to stack it on (only a new flat-topped item, e.g. a chest of drawers, would make room) |
| Bookcase | 15.3 | 1.80% | 1.8% | 9.0% | 18.0% | 40 | 72.0% | 40 | 72.0% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Dining table (4–6) | 35.8 | 4.22% | 4.2% | 21.0% | +1 container | 6 | 25.2% | 6 | 25.2% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Dining table (8+) | 53 | 6.25% | 6.3% | +2 container | +4 container | 2 | 12.6% | 2 | 12.6% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Dining chair | 7.2 | 0.85% | 0.8% | 4.0% | 8.0% | 156 | +1 container | 125 | 100% | +1 container | volume: the next one would go over the usable cu ft |
| Single bed | 54.3 | 6.40% | 6.4% | +1 container | +3 container | 3 | 19.2% | 3 | 19.2% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Double bed | 81.5 | 9.61% | 9.6% | +1 container | +3 container | 3 | 28.8% | 3 | 28.8% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| King bed | 95.4 | 11.25% | 11.3% | +2 container | +4 container | 2 | 22.6% | 2 | 22.6% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Wardrobe | 39.2 | 4.62% | 4.6% | 23.0% | 46.0% | 14 | 64.4% | 14 | 64.4% | +1 container | nothing more fits on floor or on top |
| Chest of drawers | 10.8 | 1.27% | 1.3% | 6.5% | 13.0% | 27 | 35.1% | 27 | 35.1% | +1 container | floor full and nothing in the load to stack it on (only a new flat-topped item, e.g. a chest of drawers, would make room) |
| Bedside table | 3.5 | 0.41% | 0.4% | 2.0% | 4.0% | 54 | 21.6% | 54 | 21.6% | +1 container | floor full and nothing in the load to stack it on (only a new flat-topped item, e.g. a chest of drawers, would make room) |
| Mattress | 22.6 | 2.67% | 2.7% | 13.5% | 27.0% | 27 | 72.9% | 27 | 72.9% | +1 container | floor full, no stacking assumed for this item (real jump) |
| Fridge freezer | 24.8 | 2.93% | 2.9% | 14.5% | 29.0% | 18 | 52.2% | 18 | 52.2% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Washing machine | 10.8 | 1.27% | 1.3% | 6.5% | 13.0% | 18 | 23.4% | 18 | 23.4% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Dishwasher | 10.8 | 1.27% | 1.3% | 6.5% | 13.0% | 18 | 23.4% | 18 | 23.4% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Cooker | 11.4 | 1.34% | 1.3% | 6.5% | 13.0% | 18 | 23.4% | 18 | 23.4% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Small box | 1.4 | 0.17% | 0.2% | 1.0% | 2.0% | 426 | 85.2% | 426 | 85.2% | +1 container | floor full and nothing in the load to stack it on (only a new flat-topped item, e.g. a chest of drawers, would make room) |
| Medium box | 2.8 | 0.33% | 0.3% | 1.5% | 3.0% | 188 | 56.4% | 188 | 56.4% | +1 container | floor full, no stacking assumed for this item (real jump) |
| Large box | 4.3 | 0.51% | 0.5% | 2.5% | 5.0% | 140 | 70.0% | 140 | 70.0% | +1 container | floor full, no stacking assumed for this item (real jump) |
| Euro pallet | 40.7 | 4.80% | 4.8% | 24.0% | +1 container | 9 | 43.2% | 9 | 43.2% | +1 container | floor full, no stacking assumed for this item (real jump) |
| UK pallet | 50.9 | 6.00% | 6.0% | 30.0% | +1 container | 5 | 30.0% | 5 | 30.0% | +1 container | floor full, no stacking assumed for this item (real jump) |
| Half pallet | 20.3 | 2.39% | 2.4% | 12.0% | 24.0% | 18 | 43.2% | 18 | 43.2% | +1 container | floor full, no stacking assumed for this item (real jump) |
| Filing cabinet | 13.6 | 1.60% | 1.6% | 8.0% | 16.0% | 30 | 48.0% | 30 | 48.0% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Desk | 26 | 3.07% | 3.1% | 15.5% | +1 container | 8 | 24.8% | 8 | 24.8% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Office chair | 15.7 | 1.85% | 1.9% | 9.5% | 19.0% | 18 | 34.2% | 18 | 34.2% | +1 container | floor full, no stacking assumed for this item (real jump) |
| Shelving bay | 25.7 | 3.03% | 3.0% | 15.0% | 30.0% | 19 | 57.0% | 19 | 57.0% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| 4ft pallet of goods | 52.7 | 6.22% | 6.2% | 31.0% | +1 container | 5 | 31.0% | 5 | 31.0% | +1 container | floor full, no stacking assumed for this item (real jump) |
| Concrete mixer | 35.4 | 4.18% | 4.2% | 21.0% | 42.0% | 10 | 42.0% | 10 | 42.0% | +1 container | floor full, no stacking assumed for this item (real jump) |
| Wheelbarrow | 21.6 | 2.55% | 2.5% | 12.5% | +1 container | 9 | 22.5% | 9 | 22.5% | +1 container | floor full, no stacking assumed for this item (real jump) |
| Double ladder | 7.2 | 0.85% | 0.8% | 4.0% | 8.0% | 36 | 28.8% | 36 | 28.8% | +1 container | floor full, no stacking assumed for this item (real jump) |
| Step ladder | 3.4 | 0.40% | 0.4% | 2.0% | 4.0% | 165 | 66.0% | 165 | 66.0% | +1 container | floor full, no stacking assumed for this item (real jump) |
| Site box | 20.3 | 2.39% | 2.4% | 12.0% | +1 container | 9 | 21.6% | 9 | 21.6% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Scaffold tower (folded) | 13.4 | 1.58% | 1.6% | 8.0% | 16.0% | 42 | 67.2% | 42 | 67.2% | +1 container | floor full, no stacking assumed for this item (real jump) |
| Plasterboard bundle | 25.4 | 3.00% | 3.0% | 15.0% | 30.0% | 14 | 42.0% | 14 | 42.0% | +1 container | floor full; this item cannot go on top (next one needs floor) |

### Packed (no lane): usable 1172.0 cu ft

| Item | cu ft | Step | ×1 | ×5 | ×10 | Floor full at | % at floor full | Max (with stacking) | % at max | Next | What stops it |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|
| Chair | 12.9 | 1.10% | 1.1% | 5.5% | 11.0% | 68 | 74.8% | 68 | 74.8% | +1 container | floor full and nothing in the load to stack it on (only a new flat-topped item, e.g. a chest of drawers, would make room) |
| Armchair | 25.7 | 2.19% | 2.2% | 11.0% | 22.0% | 12 | 26.4% | 12 | 26.4% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| 2 seat sofa | 43.2 | 3.69% | 3.7% | 18.5% | 37.0% | 12 | 44.4% | 12 | 44.4% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| 3 seat sofa | 54 | 4.61% | 4.6% | 23.0% | 46.0% | 12 | 55.2% | 12 | 55.2% | +1 container | nothing more fits on floor or on top |
| Coffee table | 9.6 | 0.82% | 0.8% | 4.0% | 8.0% | 53 | 42.4% | 53 | 42.4% | +1 container | floor full and nothing in the load to stack it on (only a new flat-topped item, e.g. a chest of drawers, would make room) |
| TV / TV unit | 11.4 | 0.97% | 1.0% | 5.0% | 10.0% | 48 | 48.0% | 48 | 48.0% | +1 container | floor full and nothing in the load to stack it on (only a new flat-topped item, e.g. a chest of drawers, would make room) |
| Bookcase | 15.3 | 1.31% | 1.3% | 6.5% | 13.0% | 54 | 70.2% | 54 | 70.2% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Dining table (4–6) | 35.8 | 3.05% | 3.1% | 15.5% | +1 container | 7 | 21.7% | 7 | 21.7% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Dining table (8+) | 53 | 4.52% | 4.5% | 22.5% | +1 container | 5 | 22.5% | 5 | 22.5% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Dining chair | 7.2 | 0.61% | 0.6% | 3.0% | 6.0% | 236 | +1 container | 166 | 99.6% | +1 container | volume: the next one would go over the usable cu ft |
| Single bed | 54.3 | 4.63% | 4.6% | 23.0% | +1 container | 6 | 27.6% | 6 | 27.6% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Double bed | 81.5 | 6.95% | 7.0% | +1 container | +2 container | 4 | 28.0% | 4 | 28.0% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| King bed | 95.4 | 8.14% | 8.1% | +1 container | +3 container | 3 | 24.3% | 3 | 24.3% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Wardrobe | 39.2 | 3.34% | 3.3% | 16.5% | 33.0% | 19 | 62.7% | 19 | 62.7% | +1 container | nothing more fits on floor or on top |
| Chest of drawers | 10.8 | 0.92% | 0.9% | 4.5% | 9.0% | 35 | 31.5% | 35 | 31.5% | +1 container | floor full and nothing in the load to stack it on (only a new flat-topped item, e.g. a chest of drawers, would make room) |
| Bedside table | 3.5 | 0.30% | 0.3% | 1.5% | 3.0% | 70 | 21.0% | 70 | 21.0% | +1 container | floor full and nothing in the load to stack it on (only a new flat-topped item, e.g. a chest of drawers, would make room) |
| Mattress | 22.6 | 1.93% | 1.9% | 9.5% | 19.0% | 39 | 74.1% | 39 | 74.1% | +1 container | floor full, no stacking assumed for this item (real jump) |
| Fridge freezer | 24.8 | 2.12% | 2.1% | 10.5% | 21.0% | 27 | 56.7% | 27 | 56.7% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Washing machine | 10.8 | 0.92% | 0.9% | 4.5% | 9.0% | 27 | 24.3% | 27 | 24.3% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Dishwasher | 10.8 | 0.92% | 0.9% | 4.5% | 9.0% | 27 | 24.3% | 27 | 24.3% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Cooker | 11.4 | 0.97% | 1.0% | 5.0% | 10.0% | 27 | 27.0% | 27 | 27.0% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Small box | 1.4 | 0.12% | 0.1% | 0.5% | 1.0% | 582 | 58.2% | 582 | 58.2% | +1 container | floor full and nothing in the load to stack it on (only a new flat-topped item, e.g. a chest of drawers, would make room) |
| Medium box | 2.8 | 0.24% | 0.2% | 1.0% | 2.0% | 256 | 51.2% | 256 | 51.2% | +1 container | floor full and nothing in the load to stack it on (only a new flat-topped item, e.g. a chest of drawers, would make room) |
| Large box | 4.3 | 0.37% | 0.4% | 2.0% | 4.0% | 195 | 78.0% | 195 | 78.0% | +1 container | floor full, no stacking assumed for this item (real jump) |
| Euro pallet | 40.7 | 3.47% | 3.5% | 17.5% | 35.0% | 11 | 38.5% | 11 | 38.5% | +1 container | floor full, no stacking assumed for this item (real jump) |
| UK pallet | 50.9 | 4.34% | 4.3% | 21.5% | +1 container | 9 | 38.7% | 9 | 38.7% | +1 container | floor full, no stacking assumed for this item (real jump) |
| Half pallet | 20.3 | 1.73% | 1.7% | 8.5% | 17.0% | 25 | 42.5% | 25 | 42.5% | +1 container | floor full, no stacking assumed for this item (real jump) |
| Filing cabinet | 13.6 | 1.16% | 1.2% | 6.0% | 12.0% | 46 | 55.2% | 46 | 55.2% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Desk | 26 | 2.22% | 2.2% | 11.0% | 22.0% | 12 | 26.4% | 12 | 26.4% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Office chair | 15.7 | 1.34% | 1.3% | 6.5% | 13.0% | 27 | 35.1% | 27 | 35.1% | +1 container | floor full, no stacking assumed for this item (real jump) |
| Shelving bay | 25.7 | 2.19% | 2.2% | 11.0% | 22.0% | 32 | 70.4% | 32 | 70.4% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| 4ft pallet of goods | 52.7 | 4.50% | 4.5% | 22.5% | +1 container | 9 | 40.5% | 9 | 40.5% | +1 container | floor full, no stacking assumed for this item (real jump) |
| Concrete mixer | 35.4 | 3.02% | 3.0% | 15.0% | 30.0% | 16 | 48.0% | 16 | 48.0% | +1 container | floor full, no stacking assumed for this item (real jump) |
| Wheelbarrow | 21.6 | 1.84% | 1.8% | 9.0% | 18.0% | 13 | 23.4% | 13 | 23.4% | +1 container | floor full, no stacking assumed for this item (real jump) |
| Double ladder | 7.2 | 0.61% | 0.6% | 3.0% | 6.0% | 60 | 36.0% | 60 | 36.0% | +1 container | floor full, no stacking assumed for this item (real jump) |
| Step ladder | 3.4 | 0.29% | 0.3% | 1.5% | 3.0% | 210 | 63.0% | 210 | 63.0% | +1 container | floor full, no stacking assumed for this item (real jump) |
| Site box | 20.3 | 1.73% | 1.7% | 8.5% | 17.0% | 13 | 22.1% | 13 | 22.1% | +1 container | floor full; this item cannot go on top (next one needs floor) |
| Scaffold tower (folded) | 13.4 | 1.14% | 1.1% | 5.5% | 11.0% | 49 | 53.9% | 49 | 53.9% | +1 container | floor full, no stacking assumed for this item (real jump) |
| Plasterboard bundle | 25.4 | 2.17% | 2.2% | 11.0% | 22.0% | 14 | 30.8% | 14 | 30.8% | +1 container | floor full; this item cannot go on top (next one needs floor) |


## Items that still jump, and why
- Chair: max 48 = 72.0% → 49 = +1 container (floor full and nothing in the load to stack it on (only a new flat-topped item, e.g. a chest of drawers, would make room))
- Armchair: max 12 = 36.0% → 13 = +1 container (floor full; this item cannot go on top (next one needs floor))
- 2 seat sofa: max 12 = 61.2% → 13 = +1 container (floor full; this item cannot go on top (next one needs floor))
- 3 seat sofa: max 12 = 76.8% → 13 = +1 container (nothing more fits on floor or on top)
- Coffee table: max 39 = 42.9% → 40 = +1 container (floor full and nothing in the load to stack it on (only a new flat-topped item, e.g. a chest of drawers, would make room))
- TV / TV unit: max 35 = 45.5% → 36 = +1 container (floor full and nothing in the load to stack it on (only a new flat-topped item, e.g. a chest of drawers, would make room))
- Bookcase: max 40 = 72.0% → 41 = +1 container (floor full; this item cannot go on top (next one needs floor))
- Dining table (4–6): max 6 = 25.2% → 7 = +1 container (floor full; this item cannot go on top (next one needs floor))
- Dining table (8+): max 2 = 12.6% → 3 = +1 container (floor full; this item cannot go on top (next one needs floor))
- Single bed: max 3 = 19.2% → 4 = +1 container (floor full; this item cannot go on top (next one needs floor))
- Double bed: max 3 = 28.8% → 4 = +1 container (floor full; this item cannot go on top (next one needs floor))
- King bed: max 2 = 22.6% → 3 = +1 container (floor full; this item cannot go on top (next one needs floor))
- Wardrobe: max 14 = 64.4% → 15 = +1 container (nothing more fits on floor or on top)
- Chest of drawers: max 27 = 35.1% → 28 = +1 container (floor full and nothing in the load to stack it on (only a new flat-topped item, e.g. a chest of drawers, would make room))
- Bedside table: max 54 = 21.6% → 55 = +1 container (floor full and nothing in the load to stack it on (only a new flat-topped item, e.g. a chest of drawers, would make room))
- Mattress: max 27 = 72.9% → 28 = +1 container (floor full, no stacking assumed for this item (real jump))
- Fridge freezer: max 18 = 52.2% → 19 = +1 container (floor full; this item cannot go on top (next one needs floor))
- Washing machine: max 18 = 23.4% → 19 = +1 container (floor full; this item cannot go on top (next one needs floor))
- Dishwasher: max 18 = 23.4% → 19 = +1 container (floor full; this item cannot go on top (next one needs floor))
- Cooker: max 18 = 23.4% → 19 = +1 container (floor full; this item cannot go on top (next one needs floor))
- Small box: max 426 = 85.2% → 427 = +1 container (floor full and nothing in the load to stack it on (only a new flat-topped item, e.g. a chest of drawers, would make room))
- Medium box: max 188 = 56.4% → 189 = +1 container (floor full, no stacking assumed for this item (real jump))
- Large box: max 140 = 70.0% → 141 = +1 container (floor full, no stacking assumed for this item (real jump))
- Euro pallet: max 9 = 43.2% → 10 = +1 container (floor full, no stacking assumed for this item (real jump))
- UK pallet: max 5 = 30.0% → 6 = +1 container (floor full, no stacking assumed for this item (real jump))
- Half pallet: max 18 = 43.2% → 19 = +1 container (floor full, no stacking assumed for this item (real jump))
- Filing cabinet: max 30 = 48.0% → 31 = +1 container (floor full; this item cannot go on top (next one needs floor))
- Desk: max 8 = 24.8% → 9 = +1 container (floor full; this item cannot go on top (next one needs floor))
- Office chair: max 18 = 34.2% → 19 = +1 container (floor full, no stacking assumed for this item (real jump))
- Shelving bay: max 19 = 57.0% → 20 = +1 container (floor full; this item cannot go on top (next one needs floor))
- 4ft pallet of goods: max 5 = 31.0% → 6 = +1 container (floor full, no stacking assumed for this item (real jump))
- Concrete mixer: max 10 = 42.0% → 11 = +1 container (floor full, no stacking assumed for this item (real jump))
- Wheelbarrow: max 9 = 22.5% → 10 = +1 container (floor full, no stacking assumed for this item (real jump))
- Double ladder: max 36 = 28.8% → 37 = +1 container (floor full, no stacking assumed for this item (real jump))
- Step ladder: max 165 = 66.0% → 166 = +1 container (floor full, no stacking assumed for this item (real jump))
- Site box: max 9 = 21.6% → 10 = +1 container (floor full; this item cannot go on top (next one needs floor))
- Scaffold tower (folded): max 42 = 67.2% → 43 = +1 container (floor full, no stacking assumed for this item (real jump))
- Plasterboard bundle: max 14 = 42.0% → 15 = +1 container (floor full; this item cannot go on top (next one needs floor))

## Mixed loads, worked in cu ft (organise, auto lane unless stated)
**Sofa + boxes + pallets** (lane side) → **25.0%**

- 1 × 3 seat sofa @ 54 = 54.0 cu ft (floor 1/12)
- 2 × Euro pallet @ 40.7 = 81.4 cu ft (floor 2/9)
- 30 × Medium box @ 2.8 = 84.0 cu ft (floor 30/188)
- Total 219.4 cu ft ÷ 847.8 = **25.0%**; floor demand 45% of one floor; stacked on top: 0 items

**Bedroom set** (lane side) → **26.6%**

- 1 × Double bed @ 81.5 = 81.5 cu ft (floor 1/3)
- 2 × Wardrobe @ 39.2 = 78.4 cu ft (floor 2/14)
- 1 × Mattress @ 22.6 = 22.6 cu ft (floor 1/27)
- 1 × Chest of drawers @ 10.8 = 10.8 cu ft (floor 1/27)
- 2 × Bedside table @ 3.5 = 7.0 cu ft (floor 2/54)
- 10 × Medium box @ 2.8 = 28.0 cu ft (floor 10/188)
- Total 228.3 cu ft ÷ 847.8 = **26.6%**; floor demand 61% of one floor; stacked on top: 0 items

**Kitchen + boxes** (lane side) → **12.8%**

- 1 × Fridge freezer @ 24.8 = 24.8 cu ft (floor 1/18)
- 1 × Cooker @ 11.4 = 11.4 cu ft (floor 1/18)
- 1 × Washing machine @ 10.8 = 10.8 cu ft (floor 1/18)
- 1 × Dishwasher @ 10.8 = 10.8 cu ft (floor 1/18)
- 20 × Medium box @ 2.8 = 56.0 cu ft (floor 20/188)
- Total 113.8 cu ft ÷ 847.8 = **12.8%**; floor demand 27% of one floor; stacked on top: 0 items

**Office** (lane side) → **33.2%**

- 4 × Desk @ 26 = 104.0 cu ft (floor 4/8)
- 2 × Shelving bay @ 25.7 = 51.4 cu ft (floor 2/19)
- 4 × Office chair @ 15.7 = 62.8 cu ft (floor 4/18)
- 2 × Filing cabinet @ 13.6 = 27.2 cu ft (floor 2/30)
- 20 × Small box @ 1.4 = 28.0 cu ft (floor 20/426)
- Total 273.4 cu ft ÷ 847.8 = **33.2%**; floor demand 85% of one floor; stacked on top: 0 items

**2-bed house** (lane side) → **+1 container** (2 × 20ft)

- 2 × Double bed @ 81.5 = 163.0 cu ft (floor 2/3)
- 1 × 3 seat sofa @ 54 = 54.0 cu ft (floor 1/12)
- 1 × 2 seat sofa @ 43.2 = 43.2 cu ft (floor 1/12)
- 2 × Wardrobe @ 39.2 = 78.4 cu ft (floor 2/14)
- 1 × Dining table (4–6) @ 35.8 = 35.8 cu ft (floor 1/6)
- 1 × Armchair @ 25.7 = 25.7 cu ft (floor 1/12)
- 1 × Fridge freezer @ 24.8 = 24.8 cu ft (floor 1/18)
- 2 × Mattress @ 22.6 = 45.2 cu ft (floor 2/27)
- 1 × TV / TV unit @ 11.4 = 11.4 cu ft (floor 1/35)
- 2 × Chest of drawers @ 10.8 = 21.6 cu ft (floor 2/27)
- 1 × Washing machine @ 10.8 = 10.8 cu ft (floor 1/18)
- 1 × Coffee table @ 9.6 = 9.6 cu ft (floor 1/39)
- 6 × Dining chair @ 7.2 = 43.2 cu ft (floor 6/156)
- 10 × Large box @ 4.3 = 43.0 cu ft (floor 10/140)
- 4 × Bedside table @ 3.5 = 14.0 cu ft (floor 4/54)
- 40 × Medium box @ 2.8 = 112.0 cu ft (floor 40/188)
- Total 735.7 cu ft ÷ 847.8 = **85.1%**; floor demand 179% of one floor; stacked on top: 0 items

**1-bed flat** (lane side) → **52.4%** — notice: “Floor space full: further items will need to be stacked on top of others.”

- 1 × Double bed @ 81.5 = 81.5 cu ft (floor 1/3)
- 1 × 3 seat sofa @ 54 = 54.0 cu ft (floor 1/12)
- 1 × Wardrobe @ 39.2 = 39.2 cu ft (floor 1/14)
- 1 × Dining table (4–6) @ 35.8 = 35.8 cu ft (floor 1/6)
- 1 × Armchair @ 25.7 = 25.7 cu ft (floor 1/12)
- 1 × Fridge freezer @ 24.8 = 24.8 cu ft (floor 1/18)
- 1 × Mattress @ 22.6 = 22.6 cu ft (floor 1/27)
- 1 × TV / TV unit @ 11.4 = 11.4 cu ft (floor 1/35)
- 1 × Chest of drawers @ 10.8 = 10.8 cu ft (floor 1/27)
- 1 × Washing machine @ 10.8 = 10.8 cu ft (floor 1/18)
- 1 × Coffee table @ 9.6 = 9.6 cu ft (floor 1/39)
- 4 × Dining chair @ 7.2 = 28.8 cu ft (floor 4/156)
- 5 × Large box @ 4.3 = 21.5 cu ft (floor 5/140)
- 2 × Bedside table @ 3.5 = 7.0 cu ft (floor 2/54)
- 25 × Medium box @ 2.8 = 70.0 cu ft (floor 25/188)
- Total 453.5 cu ft ÷ 847.8 = **52.4%**; floor demand 109% of one floor; stacked on top: 19 items

**12 armchairs + 20 medium boxes (stacking)** (lane side) → **42.0%** — notice: “Floor space full: further items will need to be stacked on top of others.”

- 12 × Armchair @ 25.7 = 308.4 cu ft (floor 12/12)
- 20 × Medium box @ 2.8 = 56.0 cu ft (floor 20/188)
- Total 364.4 cu ft ÷ 847.8 = **42.0%**; floor demand 110% of one floor; stacked on top: 20 items

**2-bed house — PACKED mode** (lane packed) → **61.4%** — notice: “Floor space full: further items will need to be stacked on top of others.”

- 2 × Double bed @ 81.5 = 163.0 cu ft (floor 2/4)
- 1 × 3 seat sofa @ 54 = 54.0 cu ft (floor 1/12)
- 1 × 2 seat sofa @ 43.2 = 43.2 cu ft (floor 1/12)
- 2 × Wardrobe @ 39.2 = 78.4 cu ft (floor 2/19)
- 1 × Dining table (4–6) @ 35.8 = 35.8 cu ft (floor 1/7)
- 1 × Armchair @ 25.7 = 25.7 cu ft (floor 1/12)
- 1 × Fridge freezer @ 24.8 = 24.8 cu ft (floor 1/27)
- 2 × Mattress @ 22.6 = 45.2 cu ft (floor 2/39)
- 1 × TV / TV unit @ 11.4 = 11.4 cu ft (floor 1/48)
- 2 × Chest of drawers @ 10.8 = 21.6 cu ft (floor 2/35)
- 1 × Washing machine @ 10.8 = 10.8 cu ft (floor 1/27)
- 1 × Coffee table @ 9.6 = 9.6 cu ft (floor 1/53)
- 6 × Dining chair @ 7.2 = 43.2 cu ft (floor 6/236)
- 10 × Large box @ 4.3 = 43.0 cu ft (floor 10/195)
- 4 × Bedside table @ 3.5 = 14.0 cu ft (floor 4/70)
- 40 × Medium box @ 2.8 = 112.0 cu ft (floor 40/256)
- Total 735.7 cu ft ÷ 1172.0 = **61.4%**; floor demand 131% of one floor; stacked on top: 62 items

### Why the 2-bed doesn't fit in organise mode
Usable floor with the lane: 5.90 × 1.70 = 10.03 m². Footprint of the items that must stand on the floor: 2 assembled double beds 5.13 m² (51%), dining table 1.35 m² (13.5%), 2 wardrobes 1.20 m² (12%), 3-seat sofa, 2-seat sofa and armchair on end 0.77 m² each (7.6% each, 23% together), fridge 0.39 m² (3.9%), washer 0.36 m² (3.6%). That's 107% before anything else. The rows of beds also leave a 0.35 m strip beside them, which counts as used (15.5%). Packed with no lane (13.9 m²), the same 2-bed fits one 20ft (61.4% as the sum of steps).

## Screenshots
shot-1bed.png, shot-pallet-note.png, shot-floorfull-notice.png (12 armchairs + 20 boxes: notice at 49%), shot-mobile-floorfull.png, shot-nostack-euro9.png, shot-2bed.png, shot-office.png

## Plasterboard: flat or on edge (Andy, 16 Oct 2026)
Plasterboard bundles (2.4 × 1.2 × 0.25 m) are now tried both ways, and the calculator uses whichever fits more:
- **Flat:** 2.4 × 1.2 footprint, stacked on each other up to 1.8 m (7 high). Boxes can go on top within the headroom rules.
- **On edge:** long edge down, 2.4 m long × 1.2 m high, 0.25 m deep, standing side by side. Nothing goes on top and they are not stacked.

| 20ft | flat | on edge | used |
|---|---|---|---|
| Organise (1.70 m usable width) | 2 × 1 × 7 = **14** | 2 × 6 = 12 | flat, 14 |
| Packed (2.35 m) | 2 × 1 × 7 = 14 | 2 × 9 = **18** | on edge, 18 |

The % step does not change (strictly additive). Only the floor-full point and the +1 container point move.

## Plasterboard sheet (new Trades item, 16 Oct 2026)
- Plasterboard sheet: 2.40 × 1.20 × 0.0125 m = 0.036 m³ × 35.315 = 1.27 → **1.3 cu ft**.
- Step: organise 1.3 / 847.8 = 0.153% → shows **0.2%**; packed 1.3 / 1172 = 0.111% → shows **0.1%** (rounded to one decimal place, sum in tenths). 1, 2, 3 sheets show 0.2 / 0.4 / 0.6% (organise). Because of the rounding, organise mode slightly over-reads the true volume (100 sheets shows 20.0% against a true 15.3%) and packed under-reads it (10.0% against 10.8%). That is the price of keeping the % strictly additive.
- Flat (up to 144 high to 1.8 m) or on edge (2.4 m long × 1.2 m high, one deep, nothing on top). 20ft max: **288 organise** (flat, 2 × 144), **376 packed** (on edge, 2 × 188). 10ft organise: 144.
- Stacks with sheets and bundles: if the load has any bundle, each sheet counts as 1/20 of a bundle (20 × 12.5 mm = 0.25 m) in the same columns, standing the way the bundles do. Example (organise): 13 bundles + 20 sheets = 14 bundle columns' worth, fits one 20ft; one more sheet needs +1 container.

## Orientation for the whole load (16 Oct 2026)
For mixed loads, orientation is no longer chosen once per item type. For each orientable item in the load, the engine takes two options: the one that fits most of that item on the floor, and (if different) the best one that can still take things on top. It then tries every combination against the whole load and keeps the one that fits (fewest containers, then least floor). Items with two options today: plasterboard bundle and sheet (packed: on edge vs flat), and the 3-seat sofa (on end vs seat-up base).
- Example, packed: 1 bundle + 245 medium boxes. Per-type choice (bundle on edge) needs 2 containers. The whole-load choice lays the bundle flat with boxes on it, so it fits in 1.
- Bundles alone in packed still stand on edge (18 per 20ft).
- The % is unchanged and strictly additive (sum of the displayed steps). Orientation only affects floor-full and +1 container. Every combination is still open when items are added, so adding never lowers the container count (tested).
