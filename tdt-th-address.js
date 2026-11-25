/* The Driver TH — Complete 77-Province Thailand Cascading Address Selector
 * Automatically upgrades address fields on registration & order forms with:
 * - Instant 5-digit Postal Code quick lookup
 * - Province (77) -> District (อำเภอ/เขต) -> Subdistrict (ตำบล/แขวง) -> Postal Code
 * - Auto-composes complete formatted Thai address into the existing target field
 */
(function () {
  "use strict";

  var DATA_URL = "tdt-th-address-data.json?v=20261125";
  var TARGET_IDS = ["member_address", "edit_address", "rtaf_address", "tb_shipping_address"];
  var thDataPromise = null;

  function loadThailandData() {
    if (!thDataPromise) {
      thDataPromise = fetch(DATA_URL)
        .then(function (r) {
          if (!r.ok) throw new Error("HTTP " + r.status);
          return r.json();
        })
        .catch(function () {
          return [];
        });
    }
    return thDataPromise;
  }

  function formatThaiAddress(house, sub, dist, prov, zip) {
    var parts = [];
    if (house) parts.push(house);
    var isBkk = prov === "กรุงเทพมหานคร";
    if (sub) {
      var subPrefix = isBkk ? (sub.indexOf("แขวง") === 0 ? "" : "แขวง") : (sub.indexOf("ต.") === 0 || sub.indexOf("ตำบล") === 0 ? "" : "ต.");
      parts.push(subPrefix + sub);
    }
    if (dist) {
      var distPrefix = isBkk ? (dist.indexOf("เขต") === 0 ? "" : "เขต") : (dist.indexOf("อ.") === 0 || dist.indexOf("อำเภอ") === 0 ? "" : "อ.");
      parts.push(distPrefix + dist);
    }
    if (prov) {
      var provPrefix = isBkk ? "" : (prov.indexOf("จ.") === 0 || prov.indexOf("จังหวัด") === 0 ? "" : "จ.");
      parts.push(provPrefix + prov);
    }
    if (zip) parts.push(zip);
    return parts.join(" ");
  }

  function enhanceAddressField(targetEl, data) {
    if (!targetEl || targetEl.dataset.tdtThAddrBound === "1") return;
    targetEl.dataset.tdtThAddrBound = "1";

    var uid = "tdt_addr_" + (targetEl.id || Math.random().toString(36).slice(2, 8));
    var wrap = document.createElement("div");
    wrap.className = "tdt-th-addr-widget bg-slate-950/75 border border-amber-400/30 rounded-2xl p-3.5 sm:p-4 space-y-3 mb-2.5";

    wrap.innerHTML =
      '<div class="flex flex-wrap items-center justify-between gap-2">' +
        '<span class="text-xs font-extrabold text-amber-300"><i class="fa-solid fa-map-location-dot mr-1"></i>เลือกที่อยู่อัตโนมัติ (ครบ 77 จังหวัดทั่วไทย)</span>' +
        '<span class="text-[11px] text-emerald-300 font-semibold"><i class="fa-solid fa-circle-check mr-1"></i>พร้อมใช้งาน ' + data.length + ' จังหวัด</span>' +
      '</div>' +
      '<div class="grid sm:grid-cols-12 gap-2.5 text-xs">' +
        '<div class="sm:col-span-4 space-y-1">' +
          '<label for="' + uid + '_zipsearch" class="block text-[11px] font-bold text-slate-300">ค้นหาด่วนด้วยรหัสไปรษณีย์ (5 หลัก)</label>' +
          '<input type="text" id="' + uid + '_zipsearch" maxlength="5" inputmode="numeric" placeholder="เช่น 10900, 20150..." class="dark-field dark-input w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-amber-300 font-mono font-bold">' +
        '</div>' +
        '<div class="sm:col-span-8 space-y-1">' +
          '<label for="' + uid + '_house" class="block text-[11px] font-bold text-slate-300">บ้านเลขที่ / หมู่ / หมู่บ้าน / ซอย / ถนน</label>' +
          '<input type="text" id="' + uid + '_house" placeholder="เช่น 123/45 หมู่ 5 ซอยพหลโยธิน 32 ถนนพหลโยธิน" class="dark-field dark-input w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-white">' +
        '</div>' +
      '</div>' +
      '<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">' +
        '<div class="space-y-1">' +
          '<label for="' + uid + '_prov" class="block text-[11px] font-bold text-slate-300">1. จังหวัด</label>' +
          '<select id="' + uid + '_prov" class="dark-field dark-input w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-white font-semibold"><option value="">-- เลือกจังหวัด --</option></select>' +
        '</div>' +
        '<div class="space-y-1">' +
          '<label for="' + uid + '_dist" class="block text-[11px] font-bold text-slate-300">2. เขต / อำเภอ</label>' +
          '<select id="' + uid + '_dist" disabled class="dark-field dark-input w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-white font-semibold disabled:opacity-50"><option value="">-- เลือกเขต / อำเภอ --</option></select>' +
        '</div>' +
        '<div class="space-y-1">' +
          '<label for="' + uid + '_sub" class="block text-[11px] font-bold text-slate-300">3. แขวง / ตำบล</label>' +
          '<select id="' + uid + '_sub" disabled class="dark-field dark-input w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-white font-semibold disabled:opacity-50"><option value="">-- เลือกแขวง / ตำบล --</option></select>' +
        '</div>' +
        '<div class="space-y-1">' +
          '<label for="' + uid + '_zip" class="block text-[11px] font-bold text-slate-300">4. รหัสไปรษณีย์</label>' +
          '<select id="' + uid + '_zip" disabled class="dark-field dark-input w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-amber-300 font-mono font-bold disabled:opacity-50"><option value="">-- รหัสไปรษณีย์ --</option></select>' +
        '</div>' +
      '</div>' +
      '<p class="text-[11px] text-slate-400"><i class="fa-solid fa-wand-magic-sparkles text-amber-400 mr-1"></i>เมื่อเลือกครบ ระบบจะรวมเป็นที่อยู่สมบูรณ์ลงในช่องด้านล่างให้อัตโนมัติ (สามารถแก้ไขเพิ่มเติมในช่องด้านล่างได้)</p>';

    targetEl.parentNode.insertBefore(wrap, targetEl);

    var zipSearchEl = document.getElementById(uid + "_zipsearch");
    var houseEl = document.getElementById(uid + "_house");
    var provEl = document.getElementById(uid + "_prov");
    var distEl = document.getElementById(uid + "_dist");
    var subEl = document.getElementById(uid + "_sub");
    var zipEl = document.getElementById(uid + "_zip");

    // Populate 77 provinces
    var provFrag = document.createDocumentFragment();
    data.forEach(function (pRow, pIdx) {
      var opt = document.createElement("option");
      opt.value = String(pIdx);
      opt.textContent = pRow[0];
      provFrag.appendChild(opt);
    });
    provEl.appendChild(provFrag);

    function syncToTarget() {
      var pIdx = provEl.value;
      var dIdx = distEl.value;
      var sIdx = subEl.value;
      var provName = pIdx !== "" && data[pIdx] ? data[pIdx][0] : "";
      var distName = (pIdx !== "" && dIdx !== "" && data[pIdx] && data[pIdx][1][dIdx]) ? data[pIdx][1][dIdx][0] : "";
      var subName = (pIdx !== "" && dIdx !== "" && sIdx !== "" && data[pIdx] && data[pIdx][1][dIdx] && data[pIdx][1][dIdx][1][sIdx]) ? data[pIdx][1][dIdx][1][sIdx][0] : "";
      var zipVal = zipEl.value || "";
      var houseVal = (houseEl.value || "").trim();
      var fullAddr = formatThaiAddress(houseVal, subName, distName, provName, zipVal);
      if (fullAddr) {
        targetEl.value = fullAddr;
        targetEl.dispatchEvent(new Event("input", { bubbles: true }));
        targetEl.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }

    function populateDistricts(pIdx, presetDistIdx) {
      distEl.innerHTML = '<option value="">-- เลือกเขต / อำเภอ --</option>';
      subEl.innerHTML = '<option value="">-- เลือกแขวง / ตำบล --</option>';
      zipEl.innerHTML = '<option value="">-- รหัสไปรษณีย์ --</option>';
      subEl.disabled = true;
      zipEl.disabled = true;

      if (pIdx === "" || !data[pIdx]) {
        distEl.disabled = true;
        return;
      }
      var dists = data[pIdx][1];
      var frag = document.createDocumentFragment();
      dists.forEach(function (dRow, dIdx) {
        var opt = document.createElement("option");
        opt.value = String(dIdx);
        opt.textContent = dRow[0];
        frag.appendChild(opt);
      });
      distEl.appendChild(frag);
      distEl.disabled = false;
      if (presetDistIdx !== undefined && presetDistIdx !== null) {
        distEl.value = String(presetDistIdx);
      }
    }

    function populateSubdistricts(pIdx, dIdx, presetSubIdx) {
      subEl.innerHTML = '<option value="">-- เลือกแขวง / ตำบล --</option>';
      zipEl.innerHTML = '<option value="">-- รหัสไปรษณีย์ --</option>';
      zipEl.disabled = true;

      if (pIdx === "" || dIdx === "" || !data[pIdx] || !data[pIdx][1][dIdx]) {
        subEl.disabled = true;
        return;
      }
      var subs = data[pIdx][1][dIdx][1];
      var frag = document.createDocumentFragment();
      subs.forEach(function (sRow, sIdx) {
        var opt = document.createElement("option");
        opt.value = String(sIdx);
        opt.textContent = sRow[0];
        frag.appendChild(opt);
      });
      subEl.appendChild(frag);
      subEl.disabled = false;
      if (presetSubIdx !== undefined && presetSubIdx !== null) {
        subEl.value = String(presetSubIdx);
        populateZips(pIdx, dIdx, presetSubIdx);
      }
    }

    function populateZips(pIdx, dIdx, sIdx) {
      zipEl.innerHTML = "";
      if (pIdx === "" || dIdx === "" || sIdx === "" || !data[pIdx] || !data[pIdx][1][dIdx] || !data[pIdx][1][dIdx][1][sIdx]) {
        zipEl.innerHTML = '<option value="">-- รหัสไปรษณีย์ --</option>';
        zipEl.disabled = true;
        return;
      }
      var zRaw = data[pIdx][1][dIdx][1][sIdx][1];
      var zList = Array.isArray(zRaw) ? zRaw : [zRaw];
      zList.forEach(function (z) {
        if (!z) return;
        var opt = document.createElement("option");
        opt.value = String(z);
        opt.textContent = String(z);
        zipEl.appendChild(opt);
      });
      zipEl.disabled = false;
      if (zList.length > 0) {
        zipEl.value = String(zList[0]);
        if (zipSearchEl && document.activeElement !== zipSearchEl) {
          zipSearchEl.value = String(zList[0]);
        }
      }
    }

    provEl.addEventListener("change", function () {
      populateDistricts(provEl.value);
      syncToTarget();
    });
    distEl.addEventListener("change", function () {
      populateSubdistricts(provEl.value, distEl.value);
      syncToTarget();
    });
    subEl.addEventListener("change", function () {
      populateZips(provEl.value, distEl.value, subEl.value);
      syncToTarget();
    });
    zipEl.addEventListener("change", syncToTarget);
    houseEl.addEventListener("input", syncToTarget);

    // Quick 5-digit postal code lookup
    zipSearchEl.addEventListener("input", function () {
      var digits = (zipSearchEl.value || "").replace(/\D/g, "").slice(0, 5);
      zipSearchEl.value = digits;
      if (digits.length !== 5) return;

      for (var p = 0; p < data.length; p++) {
        var dists = data[p][1];
        for (var d = 0; d < dists.length; d++) {
          var subs = dists[d][1];
          for (var s = 0; s < subs.length; s++) {
            var zRaw = subs[s][1];
            var match = Array.isArray(zRaw) ? zRaw.indexOf(digits) !== -1 : String(zRaw) === digits;
            if (match) {
              provEl.value = String(p);
              populateDistricts(String(p), d);
              populateSubdistricts(String(p), String(d), s);
              zipEl.value = digits;
              syncToTarget();
              return;
            }
          }
        }
      }
    });
  }

  function bootThAddressSelectors() {
    var targets = [];
    TARGET_IDS.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) targets.push(el);
    });
    document.querySelectorAll("[data-tdt-th-address]").forEach(function (el) {
      if (targets.indexOf(el) === -1) targets.push(el);
    });
    if (!targets.length) return;

    loadThailandData().then(function (data) {
      if (!Array.isArray(data) || !data.length) return;
      targets.forEach(function (el) {
        enhanceAddressField(el, data);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootThAddressSelectors);
  } else {
    bootThAddressSelectors();
  }
})();
