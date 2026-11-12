SIMPFOLK PORTFOLIO — วิธีใช้ (ภาษาไทย)
=====================================

โครงโฟลเดอร์
  index.html      หน้าเว็บ (ไม่ต้องแก้)
  data.js         ข้อมูลทั้งหมด: ข้อมูลส่วนตัว, รูป, ลิงก์ TikTok, หน้า Other  <-- แก้ไฟล์นี้ไฟล์เดียว
  images/color/   รูปหมวดสี
  images/bw/      รูปหมวดขาวดำ
  images/video/   (ถ้าต้องการ) รูปปกวิดีโอ

1) ข้อมูลส่วนตัว
   - profile : รูปโปรไฟล์ (photo เช่น 'images/profile.jpg'), ชื่อจริง (fullName), ตำแหน่ง (title)
     หน้าแรกเป็นเรซูเม่สั้น ๆ ดึงข้อมูลจากส่วนนี้และ info ด้านล่าง
   เปิด data.js ด้วย Notepad / TextEdit / VS Code
   - contact : อีเมล, LINE, Instagram, TikTok, เบอร์โทร (เว้นว่าง '' = ไม่แสดง)
   - info    : summary, education, experience, hard, soft
   - ข้อความที่ขึ้นต้นว่า "(ตัวอย่าง)" หรือมี 20XX คือข้อมูลตัวอย่าง ให้แทนที่ด้วยของจริง
   - home    : ตัวอย่างผลงานหน้า Home  records = แผ่นเสียง 2 แผ่น (main = รูปปก, minis = รูปย่อย 2-3 รูป)  videos = ลำดับคลิป (เริ่มที่ 0)
   - contact.line : LINE ID ขึ้นต้น @ = LINE Official  ไม่มี @ = ID ส่วนตัว  (เว้นว่าง = ซ่อน)
   - cv : ใส่ชื่อไฟล์ PDF เช่น 'cv.pdf' แล้ววางไฟล์ไว้ข้าง index.html จะมีปุ่ม Download CV

2) รูปภาพ
   - ย่อรูปก่อน: ด้านยาว 1600-2000px, JPG, ไม่เกินราว 500 KB ต่อรูป
   - ตั้งชื่อเป็นอังกฤษ ไม่มีเว้นวรรค แล้ววางใน images/color หรือ images/bw
   - เพิ่มชื่อไฟล์ในรายการ photos ของหมวดนั้นใน data.js เช่น
       { f:'color-11.jpg', t:'portrait', alt:'คำอธิบายรูปสั้นๆ' },
     t = 'portrait' หรือ 'candid'   w,h (ขนาดพิกเซล) ไม่ใส่ก็ได้
   - อยากได้หมวดใหม่ ให้ copy ก้อน { id:'color', ... } แล้วเปลี่ยน id/title/folder
   - ลบ GPS/ข้อมูลตำแหน่งออกจากรูปก่อนเผยแพร่

3) วิดีโอ TikTok
   - ใน data.js หัวข้อ videos ใส่ลิงก์แบบเต็ม เช่น
       { title:'ชื่อคลิป', url:'https://www.tiktok.com/@ชื่อคุณ/video/1234567890123456789', cover:'images/video/01.jpg' }
   - ต้องเป็นลิงก์ที่มี /video/ตัวเลข (copy จากแถบ URL ในเบราว์เซอร์) ลิงก์สั้น vm.tiktok.com ฝังไม่ได้
   - วิดีโอต้องตั้งเป็นสาธารณะ และเปิดให้ฝัง (embed) ได้
   - cover = รูปปก (ไม่มีก็ใช้รูปถ่ายแทนชั่วคราว)

4) หน้า Other (Events / KOL)
   แก้ข้อความที่หัวข้อ other ใน data.js

5) เผยแพร่ (Vercel)
   - สมัคร vercel.com และ github.com (ฟรี)
   - อัปโหลดทั้งโฟลเดอร์นี้ขึ้น GitHub แล้ว Import ที่ Vercel กด Deploy
   - ตรวจเงื่อนไขการใช้งานเชิงพาณิชย์ของแพลนฟรีก่อนใช้รับงานจริง
     (ทางเลือกฟรีอื่น: Cloudflare Pages, Netlify, GitHub Pages)

ทดสอบในเครื่อง: ดับเบิลคลิก index.html ได้เลย (ฟอนต์ต้องมีอินเทอร์เน็ต)
หมายเหตุ: การฝัง TikTok จะทำงานเมื่อเว็บอยู่บนอินเทอร์เน็ตจริง
