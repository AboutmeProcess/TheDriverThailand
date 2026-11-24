/* The Driver TH — Professional Bilingual (TH / EN) i18n Engine */
(function () {
  const LANG_KEY = "tdt_lang";

  // Curated, natural Thai -> English dictionary covering:
  // 1) Header, 4-Category Menu & Drawer (all 26 pages)
  // 2) All 26 Per-Page Announcements & Badges
  // 3) Homepage Super App Grid (100%)
  // 4) Passenger-facing & Core Pages (Trip Voucher, Digital Card, Fare Calculator, Register, Blacklist, Guide)
  const EXACT_DICT = {
    // Header & Global UI
    "เครือข่ายคนขับรถรับส่งผู้โดยสารและบริการมืออาชีพแห่งประเทศไทย": "Professional Passenger Transport & Driver Network of Thailand",
    "หน้าหลัก": "Home",
    "เมนู": "Menu",
    "🚖 เมนูบริการทั้งหมด": "🚖 All Services Menu",
    "สมาชิก & บัตร": "Members & Cards",
    "งาน & เครื่องมือ": "Jobs & Tools",
    "ขับแอป & เสริม": "Apps & Services",
    "ชุมชน & ปลอดภัย": "Community & Safety",
    "1. สมาชิก & บัตร (7)": "1. Members & Cards (7)",
    "2. งาน & เครื่องมือคนขับ (6)": "2. Jobs & Driver Tools (6)",
    "3. สมัครขับแอป & บริการเสริม (7)": "3. Ride-Hailing & Services (7)",
    "4. ชุมชน & ความปลอดภัย (5)": "4. Community & Safety (5)",
    "ติดต่อแอดมิน": "Contact Admin",
    "ระบบหลังบ้าน (Admin)": "Admin Center",
    "คู่มือสมาชิก": "Member Guide",
    "นโยบาย PDPA": "PDPA Policy",

    // Menu Items (25 pages)
    "สมัครสมาชิกใหม่": "New Member Registration",
    "ตรวจสอบรหัสสมาชิก": "Verify Member ID",
    "แก้ไขข้อมูลสมาชิก": "Edit Member Info",
    "บัตรสมาชิกดิจิทัล & QR": "Digital Member Card & QR",
    "บัตรดิจิทัล & QR": "Digital Card & QR",
    "สมัครห้อง Luxury Car": "Luxury Car Club Apply",
    "ติดตามสถานะคำร้อง": "Track Request Status",
    "ขอปลดล็อก OpenChat": "OpenChat Unblock Appeal",
    "กระดานแลกเปลี่ยนงาน": "Driver Job Board",
    "จับคู่รถว่างขากลับ": "Empty-Leg Return Matcher",
    "คำนวณค่าโดยสาร": "Standard Fare Calculator",
    "ออกใบจอง / E-Voucher": "Trip Booking / E-Voucher",
    "จัดการรถ & บัญชีรายรับ-จ่าย": "Fleet & Expense Hub",
    "จัดการรถ & บัญชี": "Fleet & Expenses",
    "จุดพักรถ EV & เครดิตสมาชิก": "EV Pit-Stop & Reputation",
    "จุดพักรถ EV & เครดิต": "EV Pit-Stop & Rating",
    "ทำบัตรประเมศฐ์ & เช็กพัสดุ": "Pramet Card & Parcel Track",
    "ทำบัตรประเมศฐ์": "Pramet Member Card",
    "สมัครคนขับ Grab": "Grab Driver Registration",
    "สมัครคนขับ Bolt": "Bolt Driver Registration",
    "ประกันภัยรถยนต์ (Captain)": "Captain Car Insurance",
    "ประกันภัย (Captain)": "Captain Insurance",
    "บัตรผ่าน ทอ. (ดอนเมือง)": "RTAF Don Mueang Pass",
    "ลายแทงท่องเที่ยว [VIP]": "VIP Tourism Referral Guide",
    "สั่งซื้อสมุดทัวร์": "Order Tour Book",
    "ศูนย์เช็ก Blacklist": "Blacklist Guard Center",
    "ข่าวสารคนขับทุกแอป": "Driver News Hub",
    "เว็บบอร์ดชุมชน": "Community Forum",
    "คู่มือสมาชิก & กฎกติกา": "Member Guide & Rules",
    "คู่มือ & กฎกติกา": "Guide & Rules",
    "นโยบายความเป็นส่วนตัว (PDPA)": "Privacy Policy (PDPA)",
    "นโยบาย (PDPA)": "Privacy Policy (PDPA)",

    // Homepage (index.html)
    "เลือกบริการที่ต้องการ": "Select a Service",
    "ครบจบในที่เดียว สำหรับสมาชิก": "All-in-one hub for members of",
    "สมัครสมาชิก": "Register",
    "เช็กรหัสสมาชิก": "Verify Member ID",
    "เช็ก Blacklist": "Check Blacklist",
    "ทั้งหมด (25)": "All Services (25)",
    "สมาชิก & บัตร (7)": "Members & Cards (7)",
    "งาน & เครื่องมือ (6)": "Jobs & Tools (6)",
    "ขับแอป & เสริม (7)": "Apps & Services (7)",
    "ชุมชน & ปลอดภัย (5)": "Community & Safety (5)",
    "ไม่พบบริการที่ตรงกับคำค้นหา ลองพิมพ์คำอื่นอีกครั้ง": "No matching services found. Please try another keyword.",

    // Homepage Service Tile Subtitles
    "ลงทะเบียนรับรหัส": "Apply for Member ID",
    "ค้นหารายชื่อในระบบ": "Search member directory",
    "เปลี่ยนรถ / ทะเบียน": "Update car / plate",
    "เปิดบัตรบนมือถือ": "Show QR ID on mobile",
    "กลุ่มรถหรู / VIP": "Luxury / VIP group",
    "เช็กความคืบหน้า": "Check request progress",
    "ยื่นชี้แจงปลดบล็อก": "Submit unblock appeal",
    "ปล่อยงาน / รับงาน": "Post & accept trips",
    "ลดการตีรถเปล่า": "Match return trips",
    "ประเมินราคางานเหมา": "Estimate charter fare",
    "ส่งใบรับรองลูกค้า": "Issue passenger voucher",
    "เตือนเอกสาร / รายรับ": "Doc alerts & ledger",
    "สถานีชาร์จ / เรทติ้ง": "EV chargers & ratings",
    "สั่งทำบัตร & เช็กพัสดุ": "Order card & tracking",
    "สมัครขับออนไลน์": "Apply online easily",
    "เช็กเบี้ยประกัน & พ.ร.บ.": "Quotes & compulsory",
    "ขอใหม่ / ต่ออายุบัตร": "New pass / renewal",
    "จุดรับค่าแนะนำ": "Partner referral spots",
    "กทม. / พัทยา-ชลบุรี": "BKK / Pattaya-Chonburi",
    "ตรวจประวัติเตือนภัย": "Check scammer alerts",
    "อัปเดตข่าว & กฎหมาย": "App news & regulations",
    "พูดคุย / รีวิวเส้นทาง": "Discuss & route reviews",
    "วิธีใช้งานเครือข่าย": "How to use the network",
    "คุ้มครองข้อมูลส่วนตัว": "Personal data protection",

    // Per-Page Default Announcements & Badges (all 26 pages)
    "ศูนย์รวมบริการเครือข่ายคนขับรถมืออาชีพ": "Central Service Hub for Professional Drivers in Thailand",
    "รอบส่งบัตร: 11 ธันวาคม 2569": "Next Card Dispatch: 11 Dec 2026",
    "กรอกข้อมูลและแนบรูปถ่ายให้ครบถ้วน เพื่อรับรหัสสมาชิกภายใน 14 วัน": "Complete your details & photos to receive your Member ID within 14 days",
    "เปิดรับสมัครออนไลน์": "Online Registration Open",
    "ค้นหารหัสสมาชิกจากชื่อในห้อง เบอร์โทร 4 ตัวท้าย หรือทะเบียนรถ": "Search Member ID by chat name, last 4 phone digits, or license plate",
    "ซิงก์ฐานข้อมูลล่าสุด": "Live Database Synced",
    "แจ้งเปลี่ยนรถ ทะเบียน หรือข้อมูลติดต่อสำหรับสมาชิกที่มีรหัสแล้ว": "Update vehicle, license plate, or contact info for verified members",
    "อัปเดตข้อมูลสมาชิก": "Member Info Update",
    "เปิดบัตรสมาชิกอิเล็กทรอนิกส์พร้อม QR Code ยืนยันตัวตนบนมือถือ": "Display your Digital Member Card & QR Code for instant verification",
    "บัตรดิจิทัล 24 ชม.": "24/7 Digital ID",
    "คัดกรองรถหรู Executive Van และ VIP เพื่อเข้าห้อง OpenChat เฉพาะกลุ่ม": "Verification for Luxury Sedans, Executive Vans & VIP Drivers",
    "เฉพาะกลุ่ม Luxury": "Luxury Group Only",
    "ตรวจสอบสถานะคำร้องและเลขพัสดุทุกบริการได้ในหน้าเดียว": "Track all service requests and parcel tracking numbers in one place",
    "ติดตามสถานะเรียลไทม์": "Real-Time Tracking",
    "ยื่นคำร้องชี้แจงพร้อมหลักฐานกรณีถูกบล็อกหรือลบออกจากห้อง OpenChat": "Submit an explanation & evidence if removed or blocked from OpenChat",
    "ทีมแอดมินพิจารณา": "Admin Review",
    "กระดานปล่อยงานและรับงานแทนเฉพาะสมาชิกที่ยืนยันรหัสแล้วเท่านั้น": "Verified-member-only job exchange & substitute driver board",
    "แลกเปลี่ยนงานสมาชิก": "Member Job Exchange",
    "ปักหมุดแจ้งพิกัดรถว่างขากลับต่างจังหวัด ลดการตีรถเปล่า": "Post your empty return route from upcountry to match passengers",
    "จับคู่รถว่างขากลับ": "Empty-Leg Matching",
    "ประเมินราคากลางงานเหมาต่างจังหวัดและรับ-ส่งสนามบินตามประเภทรถ": "Estimate standard airport transfer & interprovincial charter fares",
    "มาตรฐานราคากลาง": "Standard Fare Rates",
    "ออกใบยืนยันการจองรถและใบเสร็จดิจิทัลพร้อม QR Code ส่งลูกค้า": "Generate digital trip booking vouchers & driver verification QR for passengers",
    "E-Voucher พร้อมส่ง": "Ready-to-Send E-Voucher",
    "แจ้งเตือนวันหมดอายุ พ.ร.บ. ประกันภัย บัตรผ่าน ทอ. และจดบัญชีรายรับ-จ่าย": "Track vehicle document expiry alerts & daily driver income/expenses",
    "ผู้ช่วยจัดการรถ": "Fleet Assistant",
    "รวมพิกัดสถานีชาร์จ EV จุดจอดรอสนามบิน และคะแนนความน่าเชื่อถือสมาชิก": "EV charging stations, airport waiting spots & member trust rankings",
    "คลังพิกัด EV & เครดิต": "EV Pit-Stops & Trust",
    "สมัครทำบัตรสมาชิกประเมศฐ์เคลือบใสกันน้ำ พร้อมเช็กเลขพัสดุย้อนหลัง": "Order waterproof laminated Pramet Member Cards & track parcel delivery",
    "สมัครขับ GrabCar / GrabTaxi / GrabSUV ออนไลน์พร้อมทีมดูแลเอกสาร": "Apply online for GrabCar / GrabTaxi / GrabSUV with document support",
    "สมัครขับ Bolt Economy / Comfort / XL ออนไลน์ อนุมัติไว": "Apply online for Bolt Economy / Comfort / XL with fast approval",
    "เช็กเบี้ยประกันภัยรถยนต์ชั้น 1, 2+, 3+, ชั้น 3 และ พ.ร.บ. ราคาสมาชิก": "Check member-rate auto insurance quotes (Class 1, 2+, 3+, 3 & Compulsory)",
    "ยื่นขอทำบัตรผ่านยานพาหนะเข้า-ออก เขตพื้นที่ ทอ. (ดอนเมือง)": "Apply for or renew RTAF (Don Mueang) vehicle entry pass",
    "ขอใหม่ / ต่ออายุ": "New Pass / Renewal",
    "ขอรับลายแทงสถานที่ท่องเที่ยวและร้านค้าพันธมิตรเพื่อรับค่าแนะนำ": "Access partner tourist attractions & shops for driver referral commissions",
    "สิทธิพิเศษ VIP": "VIP Privileges",
    "สั่งซื้อสมุดทัวร์โซน กทม.-ปริมณฑล และพัทยา-ชลบุรี จัดส่งถึงบ้าน": "Order Bangkok-Metro & Pattaya-Chonburi tour books with home delivery",
    "พร้อมจัดส่งทั่วไทย": "Nationwide Delivery",
    "ตรวจสอบเบอร์โทร เลขบัญชี และประวัติเตือนภัยก่อนรับงานทุกครั้ง": "Check phone numbers, bank accounts & scam alerts before accepting trips",
    "เฝ้าระวังภัย 24 ชม.": "24/7 Safety Guard",
    "อัปเดตข่าวสาร Grab, Bolt, Line Man, inDrive และกฎหมาย รย.17/รย.18": "Latest updates on Grab, Bolt, Line Man, inDrive & Thai ride-hailing laws",
    "ข่าวสารคนขับล่าสุด": "Latest Driver News",
    "พื้นที่แลกเปลี่ยนเส้นทาง รีวิวสถานที่ และพูดคุยสำหรับสมาชิกเครือข่าย": "Share route tips, reviews & discussions with fellow network members",
    "ชุมชนสมาชิก": "Member Community",
    "คู่มือการใช้งาน กฎกติกาเครือข่าย วิธีตั้งชื่อ และช่องทางติดต่อแอดมิน": "Network guidelines, profile naming rules & admin support contacts",
    "นโยบายคุ้มครองข้อมูลส่วนบุคคล (PDPA) ของเครือข่าย The Driver Thailand": "Personal Data Protection Act (PDPA) Privacy Policy of The Driver Thailand",
    "มาตรฐาน PDPA": "PDPA Compliant",

    // Passenger-facing & Core Pages (Trip Voucher, Digital Card, Fare Calculator, Register, Blacklist)
    "ใบรับรองการเดินทาง (E-Voucher) & ตรวจสอบคนขับ": "Trip E-Voucher & Driver Verification",
    "สร้างใบจอง / ใบเสร็จ (สำหรับคนขับ)": "Create Booking / Receipt (Driver)",
    "ตรวจสอบคนขับ (สำหรับผู้โดยสาร)": "Verify Driver (Passenger)",
    "พิมพ์ / บันทึก PDF": "Print / Save PDF",
    "คัดลอกลิงก์ตรวจสอบ": "Copy Verification Link",
    "ตรวจสอบตัวตนคนขับ": "Verify Driver Identity",
    "บัตรสมาชิกดิจิทัล & QR Code ยืนยันตัวตน": "Digital Member Card & Verification QR",
    "ค้นหาบัตรสมาชิกของคุณ": "Find Your Member Card",
    "คำนวณค่าโดยสารมาตรฐาน": "Standard Fare Calculator",
    "คำนวณราคา": "Calculate Fare",
    "คัดลอกใบเสนอราคา": "Copy Quote",
    "ระบบสมาชิก & ตรวจสอบรหัสสมาชิก": "Member System & ID Verification",
    "ค้นหารหัสสมาชิกของคุณ": "Search Your Member ID",
    "สถานะจำนวนสมาชิกปัจจุบัน": "Current Verified Members",
    "ซิงก์ข้อมูลอัตโนมัติจากระบบ": "Auto-synced with database",
    "ศูนย์เฝ้าระวังและแจ้งเตือนภัยกลุ่มขับรถรับจ้าง": "Driver Safety & Blacklist Alert Center",
    "แจ้งเบาะแสเตือนภัย": "Report Scammer Alert",
    "กลับหน้าหลัก": "Back to Home",
    "ส่งแบบฟอร์ม": "Submit Form",
    "ล้างข้อมูล": "Clear Form"
  };

  const PLACEHOLDER_DICT = {
    "ค้นหาเมนูบริการ...": "Search services...",
    "ค้นหาบริการ เช่น บัตร, Blacklist, Grab, ค่าโดยสาร, EV...": "Search services e.g. Card, Blacklist, Grab, Fare, EV...",
    "พิมพ์ชื่อในห้อง, เลขท้ายเบอร์โทร 4 หลัก หรือทะเบียนรถ...": "Enter chat name, last 4 phone digits, or license plate..."
  };

  const originalTextMap = new WeakMap();
  const originalPlaceholderMap = new WeakMap();

  function walkAndTranslate(lang) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.parentElement) return NodeFilter.FILTER_REJECT;
        const tag = node.parentElement.tagName;
        if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT" || tag === "TEXTAREA") {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(function (node) {
      if (!originalTextMap.has(node)) {
        originalTextMap.set(node, node.nodeValue);
      }
      const orig = originalTextMap.get(node);
      if (lang === "th") {
        if (node.nodeValue !== orig) node.nodeValue = orig;
        return;
      }
      const trimmed = orig.trim();
      if (!trimmed) return;
      if (EXACT_DICT[trimmed]) {
        const leading = orig.match(/^\s*/)[0];
        const trailing = orig.match(/\s*$/)[0];
        node.nodeValue = leading + EXACT_DICT[trimmed] + trailing;
      }
    });

    // Placeholders
    document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach(function (el) {
      if (!originalPlaceholderMap.has(el)) {
        originalPlaceholderMap.set(el, el.getAttribute("placeholder") || "");
      }
      const origPh = originalPlaceholderMap.get(el);
      if (lang === "th") {
        el.setAttribute("placeholder", origPh);
      } else if (PLACEHOLDER_DICT[origPh]) {
        el.setAttribute("placeholder", PLACEHOLDER_DICT[origPh]);
      }
    });
  }

  function applyTdtLang(lang) {
    const target = lang === "en" ? "en" : "th";
    document.documentElement.setAttribute("lang", target);
    document.documentElement.setAttribute("data-lang", target);
    const labelEl = document.getElementById("tdt-lang-label");
    const btnEl = document.getElementById("tdt-lang-toggle");
    if (labelEl) labelEl.textContent = target === "en" ? "TH" : "EN";
    if (btnEl) btnEl.title = target === "en" ? "เปลี่ยนเป็นภาษาไทย (Switch to Thai)" : "Switch to English (เปลี่ยนเป็นภาษาอังกฤษ)";
    try { localStorage.setItem(LANG_KEY, target); } catch (_) {}
    walkAndTranslate(target);
  }

  function toggleTdtLang() {
    const cur = document.documentElement.getAttribute("data-lang") === "en" ? "en" : "th";
    applyTdtLang(cur === "en" ? "th" : "en");
  }

  window.toggleTdtLang = toggleTdtLang;
  window.applyTdtLang = applyTdtLang;

  function initLang() {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved === "en") applyTdtLang("en");
      else {
        document.documentElement.setAttribute("data-lang", "th");
        const labelEl = document.getElementById("tdt-lang-label");
        if (labelEl) labelEl.textContent = "EN";
      }
    } catch (_) {}
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLang);
  } else {
    initLang();
  }
})();
