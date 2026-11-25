# 🚖 The Driver TH 🇹🇭 Premium Service

เว็บไซต์ศูนย์กลางบริการสำหรับเครือข่ายคนขับรถรับส่งผู้โดยสารและบริการมืออาชีพแห่งประเทศไทย (**Executive Network**) พัฒนาในรูปแบบ Static Web (HTML / Tailwind CSS CDN / Vanilla JS) รองรับ **Dark/Light Mode**, **2 ภาษา (TH/EN)**, **PWA ติดตั้งบนมือถือ**, และเชื่อมต่อฐานข้อมูลกลางผ่าน Google Apps Script

---

## โครงสร้างไฟล์ในโปรเจกต์

### 1. ไฟล์กลางและระบบ PWA (Core Shared Assets)
- `tdt-theme.css` — สไตล์หลักของแบรนด์ (Obsidian Dark & High-Contrast Light Mode, Mobile Responsive)
- `tdt-layout.js` — แถบนำทาง Executive Header, เมนู 4 หมวด, Slide-over Drawer มือถือ, แถบประกาศรายหน้า, ปุ่ม LINE ลอย, ระบบบีบอัดภาพอัตโนมัติก่อนอัปโหลด, Web Analytics (GA4 / Cloudflare), และ PWA Install Banner
- `tdt-i18n.js` — ระบบสลับภาษาไทย / อังกฤษ (TH/EN) ทั้งหน้าเว็บ
- `manifest.json`, `sw.js`, `robots.txt` — ไฟล์รองรับ PWA (Network-First Service Worker) และ SEO

### 2. หน้าหลักและระบบผู้ดูแล (Core & Admin)
- `index.html` — หน้าหลัก Super App Grid รวมทุกบริการ
- `admin.html` — ระบบหลังบ้านแอดมิน (KPI Dashboard, ตั้งค่าเว็บไซต์, แถบประกาศรายหน้า, Driver News CMS, Partner Perks CMS, อนุมัติสมาชิก/เว็บบอร์ด, อัปเดตพัสดุ, สำรองข้อมูล)
- `page_builder.html` — Visual Website Builder แก้ไขหน้าเว็บจริงทั้ง 26 หน้า พร้อมเผยแพร่ขึ้น GitHub ใน 1 คลิก
- `guide.html` — คู่มือสมาชิกและกฎกติกาเครือข่าย
- `privacy_policy.html` — นโยบายความเป็นส่วนตัว (PDPA)

### 3. ระบบสมาชิกและบัตร (7 หน้า)
- `member_register.html` — แบบฟอร์มสมัครสมาชิกใหม่
- `register.html` — ค้นหาและตรวจสอบรหัสสมาชิก
- `member_edit.html` — แจ้งแก้ไขข้อมูลสมาชิกเดิม / เปลี่ยนรถ
- `member_card_digital.html` — บัตรสมาชิกดิจิทัลพร้อม QR Code และดาวน์โหลดรูป PNG
- `luxury_car_register.html` — สมัครเข้าร่วมห้อง Luxury Car
- `tracking.html` — ติดตามสถานะคำร้องทุกบริการ
- `unblock_request.html` — ยื่นคำร้องขอปลดล็อก Line OpenChat

### 4. งานและเครื่องมือคนขับ (6 หน้า)
- `job_board.html` — กระดานแลกเปลี่ยนงานพร้อมตัวกรองและปุ่มคัดลอกส่ง LINE
- `empty_leg_matcher.html` — จับคู่รถว่างขากลับต่างจังหวัด
- `fare_calculator.html` — คำนวณค่าโดยสารมาตรฐานและส่งต่อไปสร้าง E-Voucher
- `trip_voucher.html` — ออกใบยืนยันการจอง / E-Voucher 2 ภาษา (PNG & QR Verify)
- `driver_fleet_hub.html` — จัดการรถ แจ้งเตือนวันหมดอายุเอกสาร และบัญชีรายรับ-จ่าย
- `driver_pitstop_reputation.html` — คลังพิกัด EV Charger, ทำเนียบระดับสมาชิก และคูปองพาร์ทเนอร์

### 5. สมัครขับแอปและบริการเสริม (7 หน้า)
- `pcard.html` — สมัครทำบัตรสมาชิกประเมศฐ์และเช็กเลขพัสดุ
- `grab_driver_register.html` — สมัครคนขับ Grab
- `bolt_driver_register.html` — สมัครคนขับ Bolt
- `captain_insurance.html` — ประกันภัยรถยนต์และ พ.ร.บ. (Captain Insurance)
- `rtaf_pass_register.html` — ยื่นขอทำบัตรผ่านยานพาหนะ ทอ. (ดอนเมือง)
- `vip_referral_guide.html` — ลายแทงสถานที่ท่องเที่ยวพันธมิตร [VIP]
- `tour_book_order.html` — สั่งซื้อสมุดทัวร์

### 6. ชุมชนและความปลอดภัย (3 หน้า)
- `blacklist.html` — ศูนย์ตรวจสอบและแจ้งเตือนภัย Blacklist
- `driver_news.html` — ศูนย์รวมข่าวสารคนขับทุกแอป (อัปเดตผ่าน Admin CMS)
- `community.html` — เว็บบอร์ดชุมชนสมาชิก

---

## การทดสอบบนเครื่อง (Local Preview)
```bash
python3 -m http.server 8000
```
จากนั้นเปิดเบราว์เซอร์ไปที่ `http://localhost:8000/`

## หมายเหตุด้านความปลอดภัย
- โค้ด Backend (Google Apps Script) และข้อมูลรับรองทั้งหมดถูกแยกเก็บนอก Repository สาธารณะนี้ และถูกป้องกันไม่ให้ Commit ด้วย `.gitignore`
