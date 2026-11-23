/* ==========================================================================
 * The Driver TH Premium Service - Shared Layout & Header Injector
 * ไฟล์กลางสำหรับสร้างและแทรกเมนูส่วนหัว (Header/Nav) และฟังก์ชันที่เกี่ยวข้อง
 * ช่วยให้การแก้ไขเมนูทำได้ในไฟล์เดียวและอัปเดตทั่วทั้งเว็บไซต์
 * ========================================================================== */

(function () {
  const FONT_SCALE_KEY = "tdt_font_scale_pct";
  let currentFontScale = 100;
  let toastTimer = null;

  /**
   * ตรวจสอบชื่อไฟล์หน้าปัจจุบัน เพื่อทำไฮไลต์ปุ่มเมนูที่เปิดอยู่
   */
  function getCurrentPageName() {
    try {
      const path = window.location.pathname || "";
      const file = path.split("/").pop();
      return file || "index.html";
    } catch (_) {
      return "index.html";
    }
  }

  /**
   * สร้าง HTML ของแถบนำทางส่วนหัว (Global Navigation Bar)
   */
  function buildGlobalNavHTML() {
    const currentPage = getCurrentPageName();
    const isHome = currentPage === "" || currentPage === "index.html";
    const isMemberReg = currentPage === "member_register.html";
    const isRegister = currentPage === "register.html";
    const isBlacklist = currentPage === "blacklist.html";

    return `
      <nav class="tdt-global-nav" aria-label="แถบนำทางหลักของเว็บไซต์">
        <div class="tdt-global-nav-inner">
          <div class="tdt-nav-top-row">
            <!-- โลโก้และชื่อเครือข่าย -->
            <a href="index.html" class="tdt-global-brand">
              <img src="TheDriverTH.jpg" alt="โลโก้ The Driver Thailand"
                onerror="this.onerror=null;this.src='https://placehold.co/80x80/0f172a/fbbf24?text=TDT';"
                class="tdt-brand-logo-img">
              <span class="tdt-brand-text-stack">
                <span>🚖 The Driver TH 🇹🇭 Premium Service</span>
                <span class="tdt-brand-subline-row">
                  <span class="tdt-brand-exec-pill"><i class="fa-solid fa-crown text-[9px]"></i> EXECUTIVE NETWORK</span>
                  <span>เครือข่ายคนขับรถรับส่งผู้โดยสารและบริการมืออาชีพแห่งประเทศไทย</span>
                </span>
              </span>
            </a>

            <!-- ปุ่มปรับขนาดตัวอักษร -->
            <div class="tdt-util-group ml-auto" title="ปรับขนาดตัวอักษร">
              <button type="button" onclick="changeFontScale(-1)" aria-label="ลดขนาดตัวอักษร" class="tdt-util-btn" title="ลดขนาดตัวอักษร">
                <span>A-</span>
              </button>
              <span id="font-scale-label" class="text-[11px] font-normal text-amber-300 px-1 select-none">${currentFontScale}%</span>
              <button type="button" onclick="changeFontScale(1)" aria-label="เพิ่มขนาดตัวอักษร" class="tdt-util-btn" title="เพิ่มขนาดตัวอักษร">
                <span>A+</span>
              </button>
            </div>
          </div>

          <!-- เมนูหลักและหมวดหมู่บริการ -->
          <div class="tdt-global-right-controls" aria-label="เมนูหลักของหน้าเว็บ">
            <a href="index.html" class="tdt-nav-btn ${isHome ? "active-home" : ""}">
              <i class="fa-solid fa-house"></i>
              <span>หน้าหลัก</span>
            </a>

            <a href="member_register.html" class="tdt-nav-btn is-quick-register ${isMemberReg ? "active-home" : ""}">
              <i class="fa-solid fa-file-signature"></i>
              <span>ลงทะเบียนสมาชิกใหม่</span>
            </a>

            <a href="register.html" class="tdt-nav-btn is-quick-check-code ${isRegister ? "active-home" : ""}">
              <i class="fa-solid fa-users-viewfinder"></i>
              <span>ตรวจสอบรหัสสมาชิก</span>
            </a>

            <span class="tdt-nav-divider" aria-hidden="true"></span>

            <!-- หมวดหมู่บริการสมาชิก -->
            <div class="tdt-cat-dropdown-wrap" id="dropdown-member-cat">
              <button type="button" onclick="toggleNavDropdown('member', event)" id="btn-cat-member" aria-expanded="false" class="tdt-nav-btn is-member-cat">
                <i class="fa-solid fa-users"></i>
                <span>หมวดหมู่บริการสมาชิก</span>
                <i id="chevron-cat-member" class="fa-solid fa-chevron-down text-[10px]" style="transition:transform 0.2s;"></i>
              </button>
              <div id="panel-cat-member" class="tdt-cat-menu-panel">
                <div class="tdt-cat-menu-header" style="background:rgba(6,78,59,0.55);color:#6ee7b7;border:1px solid rgba(16,185,129,0.25);">
                  <span><i class="fa-solid fa-users"></i> หมวดหมู่บริการสมาชิก</span>
                  <span style="font-size:10px;opacity:0.85;">3 เมนู</span>
                </div>
                <a href="member_edit.html" class="tdt-cat-menu-link">
                  <span class="tdt-cat-menu-icon" style="background:rgba(245,158,11,0.16);color:#fbbf24;border:1px solid rgba(251,191,36,0.3);"><i class="fa-solid fa-user-pen"></i></span>
                  <span><span class="tdt-cat-menu-title">แก้ไขข้อมูลสมาชิกเดิม</span><span class="tdt-cat-menu-sub">แจ้งเปลี่ยนรถ ทะเบียน หรือข้อมูลติดต่อ</span></span>
                </a>
                <a href="unblock_request.html" class="tdt-cat-menu-link">
                  <span class="tdt-cat-menu-icon" style="background:rgba(14,165,233,0.16);color:#38bdf8;border:1px solid rgba(56,189,248,0.3);"><i class="fa-solid fa-unlock-keyhole"></i></span>
                  <span><span class="tdt-cat-menu-title">ขอปลดล็อกห้อง Line OpenChat</span><span class="tdt-cat-menu-sub">ยื่นคำร้องชี้แจงกรณีถูกบล็อกหรือลบออก</span></span>
                </a>
                <a href="luxury_car_register.html" class="tdt-cat-menu-link">
                  <span class="tdt-cat-menu-icon" style="background:rgba(245,158,11,0.16);color:#fbbf24;border:1px solid rgba(251,191,36,0.3);"><i class="fa-solid fa-crown"></i></span>
                  <span><span class="tdt-cat-menu-title">ลงทะเบียนห้อง Luxury Car</span><span class="tdt-cat-menu-sub">สมัครเข้าห้องกลุ่มคนขับรถ Luxury Car</span></span>
                </a>
              </div>
            </div>

            <!-- หมวดหมู่บริการของกลุ่ม -->
            <div class="tdt-cat-dropdown-wrap" id="dropdown-group-cat">
              <button type="button" onclick="toggleNavDropdown('group', event)" id="btn-cat-group" aria-expanded="false" class="tdt-nav-btn is-group-cat">
                <i class="fa-solid fa-briefcase"></i>
                <span>หมวดหมู่บริการของกลุ่ม</span>
                <i id="chevron-cat-group" class="fa-solid fa-chevron-down text-[10px]" style="transition:transform 0.2s;"></i>
              </button>
              <div id="panel-cat-group" class="tdt-cat-menu-panel">
                <div class="tdt-cat-menu-header" style="background:rgba(120,53,15,0.45);color:#fcd34d;border:1px solid rgba(251,191,36,0.25);">
                  <span><i class="fa-solid fa-gem"></i> หมวดหมู่บริการของกลุ่ม</span>
                  <span style="font-size:10px;opacity:0.85;">5 เมนู</span>
                </div>
                <a href="pcard.html" class="tdt-cat-menu-link">
                  <span class="tdt-cat-menu-icon" style="background:rgba(245,158,11,0.16);color:#fbbf24;border:1px solid rgba(251,191,36,0.3);"><i class="fa-solid fa-id-badge"></i></span>
                  <span><span class="tdt-cat-menu-title">ทำบัตรสมาชิกประเมศฐ์ &amp; เช็คพัสดุ</span><span class="tdt-cat-menu-sub">สมัครทำบัตรเคลือบใสและตรวจสอบเลขพัสดุ</span></span>
                </a>
                <a href="vip_referral_guide.html" class="tdt-cat-menu-link">
                  <span class="tdt-cat-menu-icon" style="background:rgba(168,85,247,0.16);color:#c084fc;border:1px solid rgba(192,132,252,0.3);"><i class="fa-solid fa-map-location-dot"></i></span>
                  <span><span class="tdt-cat-menu-title">[VIP] ลายแทงสถานที่ท่องเที่ยว</span><span class="tdt-cat-menu-sub">ขอรับลายแทงร้านค้า/สถานที่เพื่อรับค่าแนะนำ</span></span>
                </a>
                <a href="rtaf_pass_register.html" class="tdt-cat-menu-link">
                  <span class="tdt-cat-menu-icon" style="background:rgba(59,130,246,0.16);color:#60a5fa;border:1px solid rgba(96,165,250,0.3);"><i class="fa-solid fa-plane-departure"></i></span>
                  <span><span class="tdt-cat-menu-title">ทำบัตรผ่านยานพาหนะ ทอ. (ดอนเมือง)</span><span class="tdt-cat-menu-sub">ขอทำบัตรผ่านเข้า - ออก เขตพื้นที่ ทอ.</span></span>
                </a>
                <a href="tour_book_order.html" class="tdt-cat-menu-link">
                  <span class="tdt-cat-menu-icon" style="background:rgba(20,184,166,0.16);color:#2dd4bf;border:1px solid rgba(45,212,191,0.3);"><i class="fa-solid fa-book"></i></span>
                  <span><span class="tdt-cat-menu-title">บริการสั่งซื้อสมุดทัวร์</span><span class="tdt-cat-menu-sub">โซนกรุงเทพฯ-ปริมณฑล และ พัทยา-ชลบุรี</span></span>
                </a>
                <a href="privacy_policy.html" class="tdt-cat-menu-link">
                  <span class="tdt-cat-menu-icon" style="background:rgba(148,163,184,0.16);color:#cbd5e1;border:1px solid rgba(148,163,184,0.3);"><i class="fa-solid fa-scale-balanced"></i></span>
                  <span><span class="tdt-cat-menu-title">ประกาศความเป็นส่วนตัว (PDPA)</span><span class="tdt-cat-menu-sub">นโยบายคุ้มครองข้อมูลส่วนบุคคลของกลุ่ม</span></span>
                </a>
              </div>
            </div>

            <span class="tdt-nav-divider" aria-hidden="true"></span>

            <a href="blacklist.html" class="tdt-nav-btn is-blacklist ${isBlacklist ? "active-home" : ""}">
              <i class="fa-solid fa-user-shield"></i>
              <span>ตรวจสอบ Blacklist</span>
            </a>

            <a href="admin.html" class="tdt-nav-btn is-admin-link">
              <i class="fa-solid fa-user-shield"></i>
              <span>ระบบหลังบ้าน (Admin)</span>
            </a>
          </div>
        </div>
      </nav>
    `;
  }

  /**
   * แทรกส่วนหัวลงในตำแหน่งที่กำหนด หรือแทรกไว้ต้น <body> อัตโนมัติ
   */
  function mountSharedHeader() {
    try {
      const placeholder = document.getElementById("shared-header-slot");
      if (placeholder) {
        placeholder.innerHTML = buildGlobalNavHTML();
        return;
      }
      if (!document.querySelector(".tdt-global-nav") && document.body) {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = buildGlobalNavHTML().trim();
        const navEl = wrapper.firstElementChild;
        if (navEl) {
          document.body.insertBefore(navEl, document.body.firstChild);
        }
      }
    } catch (err) {
      console.error("Failed to mount shared header:", err);
    }
  }

  function applyFontScale(pct) {
    currentFontScale = Math.min(130, Math.max(90, Number(pct) || 100));
    document.documentElement.style.fontSize = `${(currentFontScale / 100) * 16}px`;
    const labelEl = document.getElementById("font-scale-label");
    if (labelEl) labelEl.textContent = `${currentFontScale}%`;
    try {
      localStorage.setItem(FONT_SCALE_KEY, String(currentFontScale));
    } catch (_) {}
  }

  window.changeFontScale = function (step) {
    const nextScale = currentFontScale + (step * 10);
    applyFontScale(nextScale);
    if (typeof window.showToast === "function") {
      window.showToast(`ขนาดตัวอักษร: ${currentFontScale}%`);
    }
  };

  function closeAllDesktopDropdowns() {
    ["member", "group"].forEach(cat => {
      const panel = document.getElementById(`panel-cat-${cat}`);
      const btn = document.getElementById(`btn-cat-${cat}`);
      const chevron = document.getElementById(`chevron-cat-${cat}`);
      if (panel) panel.classList.remove("is-open");
      if (btn) btn.setAttribute("aria-expanded", "false");
      if (chevron) chevron.style.transform = "rotate(0deg)";
    });
  }

  window.toggleNavDropdown = function (category, event) {
    if (event) event.stopPropagation();
    const targetPanel = document.getElementById(`panel-cat-${category}`);
    const targetBtn = document.getElementById(`btn-cat-${category}`);
    const targetChevron = document.getElementById(`chevron-cat-${category}`);
    if (!targetPanel) return;

    const willOpen = !targetPanel.classList.contains("is-open");
    closeAllDesktopDropdowns();

    if (willOpen) {
      targetPanel.classList.add("is-open");
      if (targetBtn) targetBtn.setAttribute("aria-expanded", "true");
      if (targetChevron) targetChevron.style.transform = "rotate(180deg)";
    }
  };

  document.addEventListener("click", function (event) {
    const memberDrop = document.getElementById("dropdown-member-cat");
    const groupDrop = document.getElementById("dropdown-group-cat");
    const clickedInsideMember = memberDrop && memberDrop.contains(event.target);
    const clickedInsideGroup = groupDrop && groupDrop.contains(event.target);
    if (!clickedInsideMember && !clickedInsideGroup) {
      closeAllDesktopDropdowns();
    }
  });

  if (typeof window.showToast !== "function") {
    window.showToast = function (message) {
      const box = document.getElementById("toast-box");
      const textEl = document.getElementById("toast-text");
      if (!box || !textEl) return;
      textEl.textContent = message;
      box.classList.remove("hidden");
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        box.classList.add("hidden");
      }, 4000);
    };
  }

  if (typeof window.hideToast !== "function") {
    window.hideToast = function () {
      const box = document.getElementById("toast-box");
      if (box) box.classList.add("hidden");
    };
  }

  try {
    const savedScale = localStorage.getItem(FONT_SCALE_KEY);
    if (savedScale) currentFontScale = Math.min(130, Math.max(90, Number(savedScale) || 100));
  } catch (_) {}

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      mountSharedHeader();
      applyFontScale(currentFontScale);
    });
  } else {
    mountSharedHeader();
    applyFontScale(currentFontScale);
  }
})();