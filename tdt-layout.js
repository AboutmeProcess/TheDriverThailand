/* The Driver TH — Shared Layout, Navigation, Analytics & Auto Image Compressor */
(function () {
  "use strict";

  var SITE_SETTINGS_URL = "https://script.google.com/macros/s/AKfycbyeDCdxBD10D_AFZQY2NxeylLOiAmAHLesSDZHXYCb3TsYs4wYer_kRTPVOs3VpK2pP/exec?action=site_settings";
  var FONT_SCALE_KEY = "tdt_font_scale_pct";
  var THEME_KEY = "tdt_theme_mode";
  var SETTINGS_CACHE_KEY = "tdt_site_settings_cache_v1";

  var DEFAULT_ANNOUNCEMENTS = {
  "blacklist.html": {
    "pillColor": "rose",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-user-shield",
    "pillText": "BLACKLIST GUARD",
    "text": "ตรวจสอบเบอร์โทร เลขบัญชี และประวัติเตือนภัยก่อนรับงานทุกครั้ง",
    "badge": "เฝ้าระวังภัย 24 ชม."
  },
  "bolt_driver_register.html": {
    "pillColor": "emerald",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-bolt",
    "pillText": "BOLT DRIVER APPLY",
    "text": "สมัครขับ Bolt Economy / Comfort / XL ออนไลน์ อนุมัติไว",
    "badge": "สมัครคนขับ Bolt"
  },
  "captain_insurance.html": {
    "pillColor": "sky",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-shield-halved",
    "pillText": "CAPTAIN INSURANCE",
    "text": "เช็กเบี้ยประกันภัยรถยนต์ชั้น 1, 2+, 3+, ชั้น 3 และ พ.ร.บ. ราคาสมาชิก",
    "badge": "Captain Insurance"
  },
  "community.html": {
    "pillColor": "sky",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-comments",
    "pillText": "COMMUNITY FORUM",
    "text": "พื้นที่แลกเปลี่ยนเส้นทาง รีวิวสถานที่ และพูดคุยสำหรับสมาชิกเครือข่าย",
    "badge": "ชุมชนสมาชิก"
  },
  "driver_fleet_hub.html": {
    "pillColor": "emerald",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-wallet",
    "pillText": "FLEET & EXPENSE HUB",
    "text": "แจ้งเตือนวันหมดอายุ พ.ร.บ. ประกันภัย บัตรผ่าน ทอ. และจดบัญชีรายรับ-จ่าย",
    "badge": "ผู้ช่วยจัดการรถ"
  },
  "driver_news.html": {
    "pillColor": "emerald",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-newspaper",
    "pillText": "DRIVER NEWS HUB",
    "text": "อัปเดตข่าวสาร Grab, Bolt, Line Man, inDrive และกฎหมาย รย.17/รย.18",
    "badge": "ข่าวสารคนขับล่าสุด"
  },
  "driver_pitstop_reputation.html": {
    "pillColor": "amber",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-charging-station",
    "pillText": "EV PIT-STOP & RATING",
    "text": "รวมพิกัดสถานีชาร์จ EV จุดจอดรอสนามบิน และคะแนนความน่าเชื่อถือสมาชิก",
    "badge": "คลังพิกัด EV & เครดิต"
  },
  "empty_leg_matcher.html": {
    "pillColor": "sky",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-route",
    "pillText": "EMPTY-LEG MATCHER",
    "text": "ปักหมุดแจ้งพิกัดรถว่างขากลับต่างจังหวัด ลดการตีรถเปล่า",
    "badge": "จับคู่รถว่างขากลับ"
  },
  "fare_calculator.html": {
    "pillColor": "emerald",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-calculator",
    "pillText": "FARE CALCULATOR",
    "text": "ประเมินราคากลางงานเหมาต่างจังหวัดและรับ-ส่งสนามบินตามประเภทรถ",
    "badge": "มาตรฐานราคากลาง"
  },
  "grab_driver_register.html": {
    "pillColor": "emerald",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-car",
    "pillText": "GRAB DRIVER APPLY",
    "text": "สมัครขับ GrabCar / GrabTaxi / GrabSUV ออนไลน์พร้อมทีมดูแลเอกสาร",
    "badge": "สมัครคนขับ Grab"
  },
  "guide.html": {
    "pillColor": "slate",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-book-open",
    "pillText": "MEMBER GUIDE",
    "text": "คู่มือการใช้งาน กฎกติกาเครือข่าย วิธีตั้งชื่อ และช่องทางติดต่อแอดมิน",
    "badge": "คู่มือสมาชิก"
  },
  "index.html": {
    "pillColor": "amber",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-bullhorn",
    "pillText": "OFFICIAL NETWORK",
    "text": "ศูนย์รวมบริการเครือข่ายคนขับรถมืออาชีพ",
    "badge": "รอบส่งบัตร: 11 ธันวาคม 2569"
  },
  "job_board.html": {
    "pillColor": "emerald",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-handshake",
    "pillText": "DRIVER JOB BOARD",
    "text": "กระดานปล่อยงานและรับงานแทนเฉพาะสมาชิกที่ยืนยันรหัสแล้วเท่านั้น",
    "badge": "แลกเปลี่ยนงานสมาชิก"
  },
  "luxury_car_register.html": {
    "pillColor": "purple",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-crown",
    "pillText": "LUXURY CAR CLUB",
    "text": "คัดกรองรถหรู Executive Van และ VIP เพื่อเข้าห้อง OpenChat เฉพาะกลุ่ม",
    "badge": "เฉพาะกลุ่ม Luxury"
  },
  "member_card_digital.html": {
    "pillColor": "emerald",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-qrcode",
    "pillText": "DIGITAL MEMBER CARD",
    "text": "เปิดบัตรสมาชิกอิเล็กทรอนิกส์พร้อม QR Code ยืนยันตัวตนบนมือถือ",
    "badge": "บัตรดิจิทัล 24 ชม."
  },
  "member_edit.html": {
    "pillColor": "amber",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-user-pen",
    "pillText": "MEMBER UPDATE",
    "text": "แจ้งเปลี่ยนรถ ทะเบียน หรือข้อมูลติดต่อสำหรับสมาชิกที่มีรหัสแล้ว",
    "badge": "อัปเดตข้อมูลสมาชิก"
  },
  "member_register.html": {
    "pillColor": "emerald",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-file-signature",
    "pillText": "NEW MEMBER REGISTRATION",
    "text": "กรอกข้อมูลและแนบรูปถ่ายให้ครบถ้วน เพื่อรับรหัสสมาชิกภายใน 14 วัน",
    "badge": "เปิดรับสมัครออนไลน์"
  },
  "pcard.html": {
    "pillColor": "amber",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-id-badge",
    "pillText": "PRAMET MEMBER CARD",
    "text": "สมัครทำบัตรสมาชิกประเมศฐ์เคลือบใสกันน้ำ พร้อมเช็กเลขพัสดุย้อนหลัง",
    "badge": "รอบส่งบัตร: 11 ธันวาคม 2569"
  },
  "privacy_policy.html": {
    "pillColor": "slate",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-scale-balanced",
    "pillText": "PDPA PRIVACY POLICY",
    "text": "นโยบายคุ้มครองข้อมูลส่วนบุคคล (PDPA) ของเครือข่าย The Driver Thailand",
    "badge": "มาตรฐาน PDPA"
  },
  "register.html": {
    "pillColor": "emerald",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-users-viewfinder",
    "pillText": "MEMBER DIRECTORY",
    "text": "ค้นหารหัสสมาชิกจากชื่อในห้อง เบอร์โทร 4 ตัวท้าย หรือทะเบียนรถ",
    "badge": "ซิงก์ฐานข้อมูลล่าสุด"
  },
  "rtaf_pass_register.html": {
    "pillColor": "sky",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-plane-departure",
    "pillText": "RTAF VEHICLE PASS",
    "text": "ยื่นขอทำบัตรผ่านยานพาหนะเข้า-ออก เขตพื้นที่ ทอ. (ดอนเมือง)",
    "badge": "ขอใหม่ / ต่ออายุ"
  },
  "tour_book_order.html": {
    "pillColor": "emerald",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-book",
    "pillText": "TOUR BOOK ORDER",
    "text": "สั่งซื้อสมุดทัวร์โซน กทม.-ปริมณฑล และพัทยา-ชลบุรี จัดส่งถึงบ้าน",
    "badge": "พร้อมจัดส่งทั่วไทย"
  },
  "tracking.html": {
    "pillColor": "sky",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-satellite-dish",
    "pillText": "REQUEST TRACKING",
    "text": "ตรวจสอบสถานะคำร้องและเลขพัสดุทุกบริการได้ในหน้าเดียว",
    "badge": "ติดตามสถานะเรียลไทม์"
  },
  "trip_voucher.html": {
    "pillColor": "amber",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-file-invoice-dollar",
    "pillText": "TRIP E-VOUCHER",
    "text": "ออกใบยืนยันการจองรถและใบเสร็จดิจิทัลพร้อม QR Code ส่งลูกค้า",
    "badge": "E-Voucher พร้อมส่ง"
  },
  "unblock_request.html": {
    "pillColor": "sky",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-unlock-keyhole",
    "pillText": "OPENCHAT UNBLOCK",
    "text": "ยื่นคำร้องชี้แจงพร้อมหลักฐานกรณีถูกบล็อกหรือลบออกจากห้อง OpenChat",
    "badge": "ทีมแอดมินพิจารณา"
  },
  "vip_referral_guide.html": {
    "pillColor": "purple",
    "pillStyle": "solid",
    "pillIcon": "fa-solid fa-map-location-dot",
    "pillText": "VIP REFERRAL GUIDE",
    "text": "ขอรับลายแทงสถานที่ท่องเที่ยวและร้านค้าพันธมิตรเพื่อรับค่าแนะนำ",
    "badge": "สิทธิพิเศษ VIP"
  }
};

  var currentFile = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (!currentFile || currentFile.indexOf(".html") === -1) currentFile = "index.html";

  function escHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ------------------------------------------------------------------
   * 1. RENDER SHARED EXECUTIVE HEADER, DRAWER & ANNOUNCEMENT BAR
   * ------------------------------------------------------------------ */
  var mount = document.getElementById("tdt-layout-header");
  if (mount && !document.getElementById("tdt-direct-fallback-nav")) {
    var pageKey = (mount.getAttribute("data-page") || currentFile).toLowerCase();
    var ann = DEFAULT_ANNOUNCEMENTS[pageKey] || DEFAULT_ANNOUNCEMENTS["index.html"];

    mount.innerHTML =
      '<nav id="tdt-direct-fallback-nav" class="tdt-global-nav" aria-label="แถบนำทางหลักของเว็บไซต์">' +
        '<div class="tdt-nav-bar-inner">' +
          '<a href="index.html" class="tdt-brand-link">' +
            '<img src="TheDriverTH.jpg" alt="โลโก้ The Driver Thailand" onerror="this.onerror=null;this.src=\'https://placehold.co/80x80/0f172a/fbbf24?text=TDT\';" class="tdt-brand-logo">' +
            '<span class="tdt-brand-text-wrap">' +
              '<span class="tdt-brand-name"><span class="tdt-emoji">🚖</span> <span class="tdt-brand-gold">The Driver TH</span> <span class="tdt-emoji">🇹🇭</span> <span class="tdt-brand-gold">Premium Service</span></span>' +
              '<span class="tdt-brand-subline">' +
                '<span class="tdt-brand-exec-pill"><i class="fa-solid fa-crown"></i> EXECUTIVE NETWORK</span>' +
                '<span class="tdt-brand-tagline">เครือข่ายคนขับรถรับส่งผู้โดยสารและบริการมืออาชีพแห่งประเทศไทย</span>' +
              '</span>' +
            '</span>' +
          '</a>' +
          '<div class="tdt-desktop-menu">' +
            '<a href="index.html" class="tdt-d-btn" data-nav-href="index.html"><i class="fa-solid fa-house"></i> หน้าหลัก</a>' +
            '<div class="tdt-d-wrap">' +
              '<button type="button" class="tdt-d-btn" onclick="toggleNavDropdown(\'member\', event)" id="btn-cat-member" aria-expanded="false">' +
                '<i class="fa-solid fa-id-card"></i> สมาชิก &amp; บัตร <i id="chevron-cat-member" class="fa-solid fa-chevron-down text-xs"></i>' +
              '</button>' +
              '<div id="panel-cat-member" class="tdt-d-panel">' +
                '<a href="member_register.html" class="tdt-d-item"><i class="fa-solid fa-file-signature"></i> สมัครสมาชิกใหม่</a>' +
                '<a href="register.html" class="tdt-d-item"><i class="fa-solid fa-users-viewfinder"></i> ตรวจสอบรหัสสมาชิก</a>' +
                '<a href="member_edit.html" class="tdt-d-item"><i class="fa-solid fa-user-pen"></i> แก้ไขข้อมูลสมาชิก</a>' +
                '<a href="member_card_digital.html" class="tdt-d-item"><i class="fa-solid fa-qrcode"></i> บัตรสมาชิกดิจิทัล &amp; QR</a>' +
                '<a href="luxury_car_register.html" class="tdt-d-item"><i class="fa-solid fa-crown"></i> สมัครห้อง Luxury Car</a>' +
                '<a href="tracking.html" class="tdt-d-item"><i class="fa-solid fa-satellite-dish"></i> ติดตามสถานะคำร้อง</a>' +
                '<a href="unblock_request.html" class="tdt-d-item"><i class="fa-solid fa-unlock-keyhole"></i> ขอปลดล็อก OpenChat</a>' +
              '</div>' +
            '</div>' +
            '<div class="tdt-d-wrap">' +
              '<button type="button" class="tdt-d-btn" onclick="toggleNavDropdown(\'tools\', event)" id="btn-cat-tools" aria-expanded="false">' +
                '<i class="fa-solid fa-car-on"></i> งาน &amp; เครื่องมือ <i id="chevron-cat-tools" class="fa-solid fa-chevron-down text-xs"></i>' +
              '</button>' +
              '<div id="panel-cat-tools" class="tdt-d-panel">' +
                '<a href="job_board.html" class="tdt-d-item"><i class="fa-solid fa-handshake"></i> กระดานแลกเปลี่ยนงาน</a>' +
                '<a href="empty_leg_matcher.html" class="tdt-d-item"><i class="fa-solid fa-route"></i> จับคู่รถว่างขากลับ</a>' +
                '<a href="fare_calculator.html" class="tdt-d-item"><i class="fa-solid fa-calculator"></i> คำนวณค่าโดยสาร</a>' +
                '<a href="trip_voucher.html" class="tdt-d-item"><i class="fa-solid fa-file-invoice-dollar"></i> ออกใบจอง / E-Voucher</a>' +
                '<a href="driver_fleet_hub.html" class="tdt-d-item"><i class="fa-solid fa-wallet"></i> จัดการรถ &amp; บัญชีรายรับ-จ่าย</a>' +
                '<a href="driver_pitstop_reputation.html" class="tdt-d-item"><i class="fa-solid fa-charging-station"></i> จุดพักรถ EV &amp; เครดิตสมาชิก</a>' +
              '</div>' +
            '</div>' +
            '<div class="tdt-d-wrap">' +
              '<button type="button" class="tdt-d-btn" onclick="toggleNavDropdown(\'services\', event)" id="btn-cat-services" aria-expanded="false">' +
                '<i class="fa-solid fa-briefcase"></i> ขับแอป &amp; เสริม <i id="chevron-cat-services" class="fa-solid fa-chevron-down text-xs"></i>' +
              '</button>' +
              '<div id="panel-cat-services" class="tdt-d-panel">' +
                '<a href="pcard.html" class="tdt-d-item"><i class="fa-solid fa-id-badge"></i> ทำบัตรประเมศฐ์ &amp; เช็กพัสดุ</a>' +
                '<a href="grab_driver_register.html" class="tdt-d-item"><i class="fa-solid fa-car"></i> สมัครคนขับ Grab</a>' +
                '<a href="bolt_driver_register.html" class="tdt-d-item"><i class="fa-solid fa-bolt"></i> สมัครคนขับ Bolt</a>' +
                '<a href="captain_insurance.html" class="tdt-d-item"><i class="fa-solid fa-shield-halved"></i> ประกันภัยรถยนต์ (Captain)</a>' +
                '<a href="rtaf_pass_register.html" class="tdt-d-item"><i class="fa-solid fa-plane-departure"></i> บัตรผ่าน ทอ. (ดอนเมือง)</a>' +
                '<a href="vip_referral_guide.html" class="tdt-d-item"><i class="fa-solid fa-map-location-dot"></i> ลายแทงท่องเที่ยว [VIP]</a>' +
                '<a href="tour_book_order.html" class="tdt-d-item"><i class="fa-solid fa-book"></i> สั่งซื้อสมุดทัวร์</a>' +
              '</div>' +
            '</div>' +
            '<div class="tdt-d-wrap">' +
              '<button type="button" class="tdt-d-btn" onclick="toggleNavDropdown(\'community\', event)" id="btn-cat-community" aria-expanded="false">' +
                '<i class="fa-solid fa-shield-heart"></i> ชุมชน &amp; ปลอดภัย <i id="chevron-cat-community" class="fa-solid fa-chevron-down text-xs"></i>' +
              '</button>' +
              '<div id="panel-cat-community" class="tdt-d-panel" style="left:auto;right:0;">' +
                '<a href="blacklist.html" class="tdt-d-item"><i class="fa-solid fa-user-shield"></i> ศูนย์เช็ก Blacklist</a>' +
                '<a href="driver_news.html" class="tdt-d-item"><i class="fa-solid fa-newspaper"></i> ข่าวสารคนขับทุกแอป</a>' +
                '<a href="community.html" class="tdt-d-item"><i class="fa-solid fa-comments"></i> เว็บบอร์ดชุมชน</a>' +
                '<a href="guide.html" class="tdt-d-item"><i class="fa-solid fa-book-open"></i> คู่มือสมาชิก &amp; กฎกติกา</a>' +
                '<a href="privacy_policy.html" class="tdt-d-item"><i class="fa-solid fa-scale-balanced"></i> นโยบายความเป็นส่วนตัว (PDPA)</a>' +
                '<a href="admin.html" class="tdt-d-item" style="border-top:1px solid rgba(148,163,184,0.15);margin-top:4px;padding-top:10px;"><i class="fa-solid fa-sliders"></i> ระบบหลังบ้าน (Admin)</a>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="tdt-nav-actions">' +
            '<button type="button" id="tdt-lang-toggle" onclick="toggleTdtLang()" aria-label="Switch Language TH / EN" title="Switch to English (เปลี่ยนเป็นภาษาอังกฤษ)" class="tdt-lang-btn">' +
              '<span id="tdt-lang-label">EN</span>' +
            '</button>' +
            '<button type="button" id="tdt-theme-toggle" onclick="toggleTdtTheme()" aria-label="สลับโหมดสว่างหรือมืด" title="สลับโหมดสว่าง / มืด" class="tdt-theme-btn">' +
              '<i id="tdt-theme-icon" class="fa-solid fa-sun"></i>' +
            '</button>' +
            '<div class="tdt-font-pill" title="ปรับขนาดตัวอักษร">' +
              '<button type="button" onclick="changeScale(-1)" aria-label="ลดขนาดตัวอักษร" class="tdt-font-btn">A-</button>' +
              '<span id="tdt-font-pct" class="text-xs px-1 select-none hidden sm:inline" style="color:#fde68a;font-weight:700;">100%</span>' +
              '<button type="button" onclick="changeScale(1)" aria-label="เพิ่มขนาดตัวอักษร" class="tdt-font-btn">A+</button>' +
            '</div>' +
            '<button type="button" onclick="openTdtDrawer()" aria-label="เปิดเมนูทั้งหมด" class="tdt-menu-trigger">' +
              '<i class="fa-solid fa-bars"></i><span>เมนู</span>' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</nav>' +
      '<div id="tdt-nav-backdrop" class="tdt-drawer-backdrop" onclick="closeTdtDrawer()"></div>' +
      '<aside id="tdt-nav-drawer" class="tdt-drawer-panel" aria-label="เมนูบริการทั้งหมด">' +
        '<div class="tdt-drawer-head">' +
          '<span style="font-size:15px;font-weight:700;color:#fbbf24;">🚖 เมนูบริการทั้งหมด</span>' +
          '<button type="button" onclick="closeTdtDrawer()" aria-label="ปิดเมนู" class="tdt-drawer-close"><i class="fa-solid fa-xmark"></i></button>' +
        '</div>' +
        '<div class="tdt-drawer-body">' +
          '<input type="search" id="tdt-drawer-search" oninput="filterTdtDrawer(this.value)" placeholder="ค้นหาเมนูบริการ..." class="tdt-drawer-search">' +
          '<a href="index.html" class="tdt-drawer-link"><i class="fa-solid fa-house"></i> หน้าหลัก</a>' +
          '<div class="tdt-drawer-cat">' +
            '<div class="tdt-drawer-cat-title">1. สมาชิก &amp; บัตร (7)</div>' +
            '<a href="member_register.html" class="tdt-drawer-link"><i class="fa-solid fa-file-signature"></i> สมัครสมาชิกใหม่</a>' +
            '<a href="register.html" class="tdt-drawer-link"><i class="fa-solid fa-users-viewfinder"></i> ตรวจสอบรหัสสมาชิก</a>' +
            '<a href="member_edit.html" class="tdt-drawer-link"><i class="fa-solid fa-user-pen"></i> แก้ไขข้อมูลสมาชิก</a>' +
            '<a href="member_card_digital.html" class="tdt-drawer-link"><i class="fa-solid fa-qrcode"></i> บัตรสมาชิกดิจิทัล &amp; QR</a>' +
            '<a href="luxury_car_register.html" class="tdt-drawer-link"><i class="fa-solid fa-crown"></i> สมัครห้อง Luxury Car</a>' +
            '<a href="tracking.html" class="tdt-drawer-link"><i class="fa-solid fa-satellite-dish"></i> ติดตามสถานะคำร้อง</a>' +
            '<a href="unblock_request.html" class="tdt-drawer-link"><i class="fa-solid fa-unlock-keyhole"></i> ขอปลดล็อก OpenChat</a>' +
          '</div>' +
          '<div class="tdt-drawer-cat">' +
            '<div class="tdt-drawer-cat-title">2. งาน &amp; เครื่องมือคนขับ (6)</div>' +
            '<a href="job_board.html" class="tdt-drawer-link"><i class="fa-solid fa-handshake"></i> กระดานแลกเปลี่ยนงาน</a>' +
            '<a href="empty_leg_matcher.html" class="tdt-drawer-link"><i class="fa-solid fa-route"></i> จับคู่รถว่างขากลับ</a>' +
            '<a href="fare_calculator.html" class="tdt-drawer-link"><i class="fa-solid fa-calculator"></i> คำนวณค่าโดยสาร</a>' +
            '<a href="trip_voucher.html" class="tdt-drawer-link"><i class="fa-solid fa-file-invoice-dollar"></i> ออกใบจอง / E-Voucher</a>' +
            '<a href="driver_fleet_hub.html" class="tdt-drawer-link"><i class="fa-solid fa-wallet"></i> จัดการรถ &amp; บัญชีรายรับ-จ่าย</a>' +
            '<a href="driver_pitstop_reputation.html" class="tdt-drawer-link"><i class="fa-solid fa-charging-station"></i> จุดพักรถ EV &amp; เครดิตสมาชิก</a>' +
          '</div>' +
          '<div class="tdt-drawer-cat">' +
            '<div class="tdt-drawer-cat-title">3. สมัครขับแอป &amp; บริการเสริม (7)</div>' +
            '<a href="pcard.html" class="tdt-drawer-link"><i class="fa-solid fa-id-badge"></i> ทำบัตรประเมศฐ์ &amp; เช็กพัสดุ</a>' +
            '<a href="grab_driver_register.html" class="tdt-drawer-link"><i class="fa-solid fa-car"></i> สมัครคนขับ Grab</a>' +
            '<a href="bolt_driver_register.html" class="tdt-drawer-link"><i class="fa-solid fa-bolt"></i> สมัครคนขับ Bolt</a>' +
            '<a href="captain_insurance.html" class="tdt-drawer-link"><i class="fa-solid fa-shield-halved"></i> ประกันภัยรถยนต์ (Captain)</a>' +
            '<a href="rtaf_pass_register.html" class="tdt-drawer-link"><i class="fa-solid fa-plane-departure"></i> บัตรผ่าน ทอ. (ดอนเมือง)</a>' +
            '<a href="vip_referral_guide.html" class="tdt-drawer-link"><i class="fa-solid fa-map-location-dot"></i> ลายแทงท่องเที่ยว [VIP]</a>' +
            '<a href="tour_book_order.html" class="tdt-drawer-link"><i class="fa-solid fa-book"></i> สั่งซื้อสมุดทัวร์</a>' +
          '</div>' +
          '<div class="tdt-drawer-cat">' +
            '<div class="tdt-drawer-cat-title">4. ชุมชน &amp; ความปลอดภัย (5)</div>' +
            '<a href="blacklist.html" class="tdt-drawer-link"><i class="fa-solid fa-user-shield"></i> ศูนย์เช็ก Blacklist</a>' +
            '<a href="driver_news.html" class="tdt-drawer-link"><i class="fa-solid fa-newspaper"></i> ข่าวสารคนขับทุกแอป</a>' +
            '<a href="community.html" class="tdt-drawer-link"><i class="fa-solid fa-comments"></i> เว็บบอร์ดชุมชน</a>' +
            '<a href="guide.html" class="tdt-drawer-link"><i class="fa-solid fa-book-open"></i> คู่มือสมาชิก &amp; กฎกติกา</a>' +
            '<a href="privacy_policy.html" class="tdt-drawer-link"><i class="fa-solid fa-scale-balanced"></i> นโยบายความเป็นส่วนตัว (PDPA)</a>' +
          '</div>' +
          '<div class="tdt-drawer-cat" style="border-top:1px solid rgba(148,163,184,0.15);padding-top:10px;">' +
            '<a href="admin.html" class="tdt-drawer-link" style="color:#94a3b8;"><i class="fa-solid fa-sliders"></i> ระบบหลังบ้าน (Admin)</a>' +
          '</div>' +
        '</div>' +
      '</aside>' +
      '<div id="tdt-page-announce-wrap" class="tdt-page-announce-wrap" data-page="' + escHtml(pageKey) + '">' +
        '<div class="tdt-page-announce-bar">' +
          '<div class="tdt-page-announce-left">' +
            '<span id="tdt-page-announcement-pill" class="tdt-announce-pill is-' + escHtml(ann.pillColor) + ' is-' + escHtml(ann.pillStyle) + '" data-color="' + escHtml(ann.pillColor) + '" data-style="' + escHtml(ann.pillStyle) + '">' +
              '<i class="' + escHtml(ann.pillIcon) + '"></i>' +
              '<span id="tdt-page-announcement-pill-text">' + escHtml(ann.pillText) + '</span>' +
            '</span>' +
            '<span id="tdt-page-announcement-text">' + escHtml(ann.text) + '</span>' +
          '</div>' +
          '<span class="tdt-page-announce-badge">' +
            '<i class="fa-solid fa-calendar-check"></i>' +
            '<span id="tdt-page-announcement-badge">' + escHtml(ann.badge) + '</span>' +
          '</span>' +
        '</div>' +
      '</div>';
  }

  /* ------------------------------------------------------------------
   * 2. NAVIGATION, FONT SCALE & THEME CONTROLS
   * ------------------------------------------------------------------ */
  var scalePct = 100;

  function syncScaleLabels(pct) {
    ["tdt-font-pct", "font-pct", "font-scale-label"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.textContent = pct + "%";
    });
  }

  function applyScalePct(pct) {
    scalePct = Math.min(140, Math.max(90, Number(pct) || 100));
    document.documentElement.style.fontSize = ((scalePct / 100) * 16) + "px";
    syncScaleLabels(scalePct);
    try { localStorage.setItem(FONT_SCALE_KEY, String(scalePct)); } catch (_) {}
  }

  function unifiedChangeScale(step) {
    applyScalePct(scalePct + (Number(step) || 0) * 10);
  }

  function closeAllNavDropdowns() {
    ["member", "tools", "services", "community"].forEach(function (cat) {
      var panel = document.getElementById("panel-cat-" + cat);
      var btn = document.getElementById("btn-cat-" + cat);
      var chevron = document.getElementById("chevron-cat-" + cat);
      if (panel) panel.classList.remove("is-open");
      if (btn) btn.setAttribute("aria-expanded", "false");
      if (chevron) chevron.style.transform = "rotate(0deg)";
    });
  }

  function unifiedToggleNavDropdown(category, event) {
    if (event) event.stopPropagation();
    var panel = document.getElementById("panel-cat-" + category);
    var btn = document.getElementById("btn-cat-" + category);
    var chevron = document.getElementById("chevron-cat-" + category);
    if (!panel) return;
    var willOpen = !panel.classList.contains("is-open");
    closeAllNavDropdowns();
    if (willOpen) {
      panel.classList.add("is-open");
      if (btn) btn.setAttribute("aria-expanded", "true");
      if (chevron) chevron.style.transform = "rotate(180deg)";
    }
  }

  function openTdtDrawer() {
    closeAllNavDropdowns();
    var b = document.getElementById("tdt-nav-backdrop");
    var d = document.getElementById("tdt-nav-drawer");
    if (b) b.classList.add("is-open");
    if (d) d.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeTdtDrawer() {
    var b = document.getElementById("tdt-nav-backdrop");
    var d = document.getElementById("tdt-nav-drawer");
    if (b) b.classList.remove("is-open");
    if (d) d.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function filterTdtDrawer(query) {
    var q = (query || "").trim().toLowerCase();
    document.querySelectorAll("#tdt-nav-drawer .tdt-drawer-link").forEach(function (link) {
      var match = !q || link.textContent.toLowerCase().indexOf(q) !== -1;
      link.style.display = match ? "" : "none";
    });
    document.querySelectorAll("#tdt-nav-drawer .tdt-drawer-cat").forEach(function (cat) {
      var anyVisible = Array.from(cat.querySelectorAll(".tdt-drawer-link")).some(function (l) {
        return l.style.display !== "none";
      });
      cat.style.display = anyVisible ? "" : "none";
    });
  }

  function applyTdtTheme(mode) {
    var isLight = mode === "light";
    document.documentElement.setAttribute("data-theme", isLight ? "light" : "dark");
    var icon = document.getElementById("tdt-theme-icon");
    var btn = document.getElementById("tdt-theme-toggle");
    if (icon) icon.className = isLight ? "fa-solid fa-moon" : "fa-solid fa-sun";
    if (btn) btn.title = isLight ? "สลับเป็นโหมดมืด (Dark Mode)" : "สลับเป็นโหมดสว่าง (Light Mode)";
    try { localStorage.setItem(THEME_KEY, isLight ? "light" : "dark"); } catch (_) {}
  }

  function toggleTdtTheme() {
    var cur = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    applyTdtTheme(cur === "light" ? "dark" : "light");
  }

  // Highlight active page
  document.querySelectorAll(".tdt-d-btn[data-nav-href]").forEach(function (a) {
    a.classList.toggle("is-active", a.getAttribute("data-nav-href").toLowerCase() === currentFile);
  });
  document.querySelectorAll(".tdt-d-item, .tdt-drawer-link").forEach(function (a) {
    var href = (a.getAttribute("href") || "").toLowerCase();
    if (href === currentFile) {
      a.classList.add("is-current");
      var wrap = a.closest(".tdt-d-wrap");
      if (wrap) {
        var parentBtn = wrap.querySelector(".tdt-d-btn");
        if (parentBtn) parentBtn.classList.add("is-active");
      }
    }
  });

  window.toggleNavDropdown = unifiedToggleNavDropdown;
  window.tdtToggleDropdown = unifiedToggleNavDropdown;
  window.changeScale = unifiedChangeScale;
  window.tdtChangeFontScale = unifiedChangeScale;
  window.openTdtDrawer = openTdtDrawer;
  window.closeTdtDrawer = closeTdtDrawer;
  window.filterTdtDrawer = filterTdtDrawer;
  window.toggleTdtTheme = toggleTdtTheme;

  try {
    if (localStorage.getItem(THEME_KEY) === "light") applyTdtTheme("light");
  } catch (_) {}
  try {
    var savedScale = localStorage.getItem(FONT_SCALE_KEY);
    if (savedScale) applyScalePct(Number(savedScale));
    else syncScaleLabels(scalePct);
  } catch (_) {
    syncScaleLabels(scalePct);
  }

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".tdt-d-wrap")) closeAllNavDropdowns();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeAllNavDropdowns();
      closeTdtDrawer();
    }
  });

  /* ------------------------------------------------------------------
   * 3. FLOATING LINE BUTTON & SERVICE WORKER
   * ------------------------------------------------------------------ */
  function ensureFloatingLineBtn() {
    if (document.getElementById("tdt-floating-line-btn") || !document.body) return;
    var a = document.createElement("a");
    a.id = "tdt-floating-line-btn";
    a.href = "https://line.me/R/ti/p/@Thedrivethailand";
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute("aria-label", "ติดต่อแอดมินผ่าน LINE Official @Thedrivethailand");
    a.className = "tdt-floating-line-btn";
    a.innerHTML = '<i class="fa-brands fa-line"></i><span>ติดต่อแอดมิน</span>';
    document.body.appendChild(a);
  }

  /* ------------------------------------------------------------------
   * 4. ANALYTICS LOADER (GA4 + CLOUDFLARE WEB ANALYTICS)
   * ------------------------------------------------------------------ */
  var analyticsLoaded = { ga4: false, cf: false };

  function injectAnalytics(cfg) {
    if (!cfg || typeof cfg !== "object") return;
    var ga4Id = String(cfg.ga4Id || "").trim();
    if (!analyticsLoaded.ga4 && /^G-[A-Z0-9]{6,20}$/i.test(ga4Id)) {
      analyticsLoaded.ga4 = true;
      var s1 = document.createElement("script");
      s1.async = true;
      s1.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(ga4Id);
      document.head.appendChild(s1);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag("js", new Date());
      window.gtag("config", ga4Id, { anonymize_ip: true });
    }

    var cfToken = String(cfg.cfAnalyticsToken || "").trim();
    if (!analyticsLoaded.cf && /^[a-z0-9]{16,64}$/i.test(cfToken)) {
      analyticsLoaded.cf = true;
      var s2 = document.createElement("script");
      s2.defer = true;
      s2.src = "https://static.cloudflareinsights.com/beacon.min.js";
      s2.setAttribute("data-cf-beacon", JSON.stringify({ token: cfToken }));
      document.head.appendChild(s2);
    }
  }

  /* ------------------------------------------------------------------
   * 5. CLOUD SITE SETTINGS SYNC (ANNOUNCEMENTS, LINE, ANALYTICS, NEWS)
   * ------------------------------------------------------------------ */
  function applyAnnouncementEntry(entry) {
    if (!entry || typeof entry !== "object") return;
    var wrap = document.getElementById("tdt-page-announce-wrap");
    var pillEl = document.getElementById("tdt-page-announcement-pill");
    var pillTextEl = document.getElementById("tdt-page-announcement-pill-text");
    var textEl = document.getElementById("tdt-page-announcement-text");
    var badgeEl = document.getElementById("tdt-page-announcement-badge");
    if (!wrap || !textEl || !badgeEl) return;
    if (entry.enabled === false) {
      wrap.style.display = "none";
      return;
    }
    wrap.style.display = "";
    if (pillEl && pillTextEl) {
      if (typeof entry.pillText === "string") {
        pillTextEl.textContent = entry.pillText.trim();
        pillEl.style.display = entry.pillText.trim() ? "inline-flex" : "none";
      }
      var c = entry.pillColor || pillEl.getAttribute("data-color") || "amber";
      var s = entry.pillStyle || pillEl.getAttribute("data-style") || "solid";
      pillEl.className = "tdt-announce-pill is-" + c + " is-" + s;
    }
    if (typeof entry.text === "string" && entry.text.trim()) textEl.textContent = entry.text.trim();
    if (typeof entry.badge === "string" && entry.badge.trim()) badgeEl.textContent = entry.badge.trim();
  }

  function applyCloudSettings(cfg) {
    if (!cfg || typeof cfg !== "object") return;
    window.__TDT_SITE_SETTINGS__ = cfg;
    if (cfg.lineOfficial) {
      var lineBtn = document.getElementById("tdt-floating-line-btn");
      if (lineBtn) {
        var handle = String(cfg.lineOfficial).trim().replace(/^@?/, "@");
        lineBtn.href = "https://line.me/R/ti/p/" + encodeURIComponent(handle);
      }
    }
    if (cfg.pageAnnouncements) {
      try {
        var cloudMap = typeof cfg.pageAnnouncements === "string" ? JSON.parse(cfg.pageAnnouncements) : cfg.pageAnnouncements;
        if (cloudMap && cloudMap[currentFile]) applyAnnouncementEntry(cloudMap[currentFile]);
      } catch (_) {}
    }
    injectAnalytics(cfg);
    try {
      window.dispatchEvent(new CustomEvent("tdt:settings-loaded", { detail: cfg }));
    } catch (_) {}
  }

  function syncSiteSettings() {
    try {
      var rawLocal = localStorage.getItem("tdt_page_announcements_v1");
      var localMap = rawLocal ? JSON.parse(rawLocal) : {};
      if (localMap && localMap[currentFile]) applyAnnouncementEntry(localMap[currentFile]);
    } catch (_) {}

    try {
      var cached = localStorage.getItem(SETTINGS_CACHE_KEY);
      if (cached) applyCloudSettings(JSON.parse(cached));
    } catch (_) {}

    fetch(SITE_SETTINGS_URL + "&t=" + Date.now())
      .then(function (r) { return r.json(); })
      .then(function (json) {
        var cfg = json && json.settings ? json.settings : {};
        try { localStorage.setItem(SETTINGS_CACHE_KEY, JSON.stringify(cfg)); } catch (_) {}
        applyCloudSettings(cfg);
      })
      .catch(function () {});
  }

  /* ------------------------------------------------------------------
   * 6. AUTOMATIC CLIENT-SIDE IMAGE COMPRESSION FOR ALL UPLOAD FORMS
   * ------------------------------------------------------------------ */
  function formatFileSize(bytes) {
    if (bytes >= 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + " MB";
    return Math.max(1, Math.round(bytes / 1024)) + " KB";
  }

  function showCompressToast(msg) {
    if (!document.body) return;
    var el = document.getElementById("tdt-compress-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "tdt-compress-toast";
      el.style.cssText =
        "position:fixed;left:16px;bottom:20px;z-index:9999;max-width:340px;" +
        "background:rgba(6,78,59,0.96);color:#ecfdf5;border:1px solid rgba(52,211,153,0.55);" +
        "padding:10px 14px;border-radius:14px;font-size:12px;font-weight:600;" +
        "box-shadow:0 12px 28px rgba(0,0,0,0.45);transition:opacity 0.25s ease;pointer-events:none;";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.style.opacity = "1";
    clearTimeout(el._hideTimer);
    el._hideTimer = setTimeout(function () {
      el.style.opacity = "0";
    }, 4200);
  }

  function compressImageFile(file) {
    return new Promise(function (resolve) {
      if (!file || !/^image\/(jpeg|jpg|png|webp)$/i.test(file.type) || file.size <= 280 * 1024) {
        resolve({ file: file, compressed: false });
        return;
      }
      var url = URL.createObjectURL(file);
      var img = new Image();
      img.onload = function () {
        try {
          var maxDim = 1440;
          var w = img.naturalWidth || img.width;
          var h = img.naturalHeight || img.height;
          if (w > maxDim || h > maxDim) {
            if (w >= h) {
              h = Math.round((h * maxDim) / w);
              w = maxDim;
            } else {
              w = Math.round((w * maxDim) / h);
              h = maxDim;
            }
          }
          var canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          var ctx = canvas.getContext("2d");
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, w, h);
          ctx.drawImage(img, 0, 0, w, h);
          URL.revokeObjectURL(url);

          function tryExport(quality, allowRetry) {
            canvas.toBlob(function (blob) {
              if (!blob) {
                resolve({ file: file, compressed: false });
                return;
              }
              if (allowRetry && blob.size > 480 * 1024) {
                tryExport(0.66, false);
                return;
              }
              if (blob.size >= file.size) {
                resolve({ file: file, compressed: false });
                return;
              }
              var newName = (file.name || "photo").replace(/\.[^.]+$/, "") + ".jpg";
              var outFile = new File([blob], newName, { type: "image/jpeg", lastModified: Date.now() });
              resolve({ file: outFile, compressed: true, origSize: file.size, newSize: outFile.size });
            }, "image/jpeg", quality);
          }
          tryExport(0.80, true);
        } catch (_) {
          URL.revokeObjectURL(url);
          resolve({ file: file, compressed: false });
        }
      };
      img.onerror = function () {
        URL.revokeObjectURL(url);
        resolve({ file: file, compressed: false });
      };
      img.src = url;
    });
  }

  // Intercept <input type="file"> globally in capture phase
  document.addEventListener("change", function (e) {
    var input = e.target;
    if (!input || input.tagName !== "INPUT" || input.type !== "file") return;
    if (input.dataset.tdtNoCompress === "1") return;
    if (input.dataset.tdtCompressed === "1") {
      delete input.dataset.tdtCompressed;
      return;
    }
    if (!input.files || input.files.length === 0 || typeof DataTransfer === "undefined") return;

    var files = Array.from(input.files);
    var needsCompress = files.some(function (f) {
      return /^image\/(jpeg|jpg|png|webp)$/i.test(f.type) && f.size > 280 * 1024;
    });
    if (!needsCompress) return;

    e.stopImmediatePropagation();
    showCompressToast("⏳ กำลังบีบอัดรูปภาพอัตโนมัติเพื่อให้ส่งไวขึ้น...");

    Promise.all(files.map(compressImageFile)).then(function (results) {
      try {
        var dt = new DataTransfer();
        var origTotal = 0;
        var newTotal = 0;
        var anyCompressed = false;
        results.forEach(function (r) {
          dt.items.add(r.file);
          if (r.compressed) {
            anyCompressed = true;
            origTotal += r.origSize;
            newTotal += r.newSize;
          }
        });
        input.files = dt.files;
        if (anyCompressed) {
          var pct = Math.max(1, Math.round((1 - newTotal / origTotal) * 100));
          showCompressToast("⚡ บีบอัดภาพอัตโนมัติ: " + formatFileSize(origTotal) + " → " + formatFileSize(newTotal) + " (ประหยัด " + pct + "%)");
        }
      } catch (_) {}
      input.dataset.tdtCompressed = "1";
      input.dispatchEvent(new Event("change", { bubbles: true }));
    });
  }, true);

  /* ------------------------------------------------------------------
   * 7. PWA INSTALL BANNER (ANDROID NATIVE + IOS SAFARI GUIDE)
   * ------------------------------------------------------------------ */
  var deferredInstallPrompt = null;
  var PWA_DISMISS_KEY = "tdt_pwa_dismiss_until";

  function isStandaloneApp() {
    return (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone === true;
  }

  function isPwaDismissed() {
    try { return Number(localStorage.getItem(PWA_DISMISS_KEY) || 0) > Date.now(); } catch (_) { return false; }
  }

  function dismissPwaBanner() {
    var b = document.getElementById("tdt-pwa-banner");
    if (b) b.remove();
    try { localStorage.setItem(PWA_DISMISS_KEY, String(Date.now() + 7 * 86400000)); } catch (_) {}
  }

  function showPwaBanner(isIos) {
    if (isStandaloneApp() || isPwaDismissed() || document.getElementById("tdt-pwa-banner") || !document.body) return;
    var bar = document.createElement("div");
    bar.id = "tdt-pwa-banner";
    bar.style.cssText =
      "position:fixed;left:14px;bottom:76px;z-index:9980;max-width:320px;" +
      "background:linear-gradient(135deg,#0f172a,#1e293b);color:#f8fafc;" +
      "border:1px solid rgba(251,191,36,0.5);border-radius:16px;padding:12px 14px;" +
      "box-shadow:0 16px 36px rgba(0,0,0,0.55);font-size:12px;display:flex;align-items:center;gap:10px;";
    bar.innerHTML =
      '<img src="TheDriverTH.jpg" alt="TDT" style="width:36px;height:36px;border-radius:10px;border:1px solid #fbbf24;object-fit:cover;flex-shrink:0;">' +
      '<div style="flex:1;min-width:0;">' +
        '<div style="font-weight:700;color:#fbbf24;font-size:12px;">ติดตั้งแอป The Driver TH</div>' +
        '<div style="color:#cbd5e1;font-size:11px;line-height:1.3;">' +
          (isIos ? 'แตะปุ่มแชร์ (Share) แล้วเลือก "เพิ่มไปยังหน้าจอโฮม"' : 'เพิ่มไอคอนลงหน้าจอมือถือ เปิดใช้งานไวใน 1 แตะ') +
        '</div>' +
      '</div>' +
      (isIos ? '' : '<button type="button" id="tdt-pwa-install-btn" style="background:linear-gradient(135deg,#fbbf24,#d97706);color:#060911;font-weight:800;border:none;border-radius:10px;padding:6px 10px;font-size:11px;cursor:pointer;white-space:nowrap;">ติดตั้ง</button>') +
      '<button type="button" id="tdt-pwa-close-btn" aria-label="ปิด" style="background:transparent;border:none;color:#94a3b8;font-size:15px;cursor:pointer;padding:2px 4px;">✕</button>';
    document.body.appendChild(bar);

    var closeBtn = document.getElementById("tdt-pwa-close-btn");
    if (closeBtn) closeBtn.addEventListener("click", dismissPwaBanner);

    var installBtn = document.getElementById("tdt-pwa-install-btn");
    if (installBtn) {
      installBtn.addEventListener("click", function () {
        if (!deferredInstallPrompt) return;
        deferredInstallPrompt.prompt();
        deferredInstallPrompt.userChoice.then(function () {
          deferredInstallPrompt = null;
          dismissPwaBanner();
        }).catch(function () {});
      });
    }
  }

  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferredInstallPrompt = e;
    showPwaBanner(false);
  });

  /* ------------------------------------------------------------------
   * 8. BOOT ON DOM READY
   * ------------------------------------------------------------------ */
  function boot() {
    ensureFloatingLineBtn();
    syncSiteSettings();
    if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    }
    var isIos = /iphone|ipad|ipod/i.test(navigator.userAgent || "") && !window.MSStream;
    if (isIos && !isStandaloneApp() && !isPwaDismissed()) {
      setTimeout(function () { showPwaBanner(true); }, 3500);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
