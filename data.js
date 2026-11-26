/* ============================================================
   data.js  —  แก้ข้อมูลทั้งหมดของเว็บที่ไฟล์นี้ไฟล์เดียว
   ข้อความที่ขึ้นต้นด้วย "(ตัวอย่าง)" หรือ 20XX คือข้อมูล mock-up ให้แทนที่ด้วยของจริง
   ============================================================ */
window.SITE = {
  /* วิธีเล่นคลิป TikTok: 'embed' = เล่นในหน้าเว็บ, 'card' = การ์ดปกคลิป กดแล้วเปิด TikTok ในแท็บใหม่, 'auto' = พรีวิวใช้การ์ด เว็บจริงเล่นอัตโนมัติ (ปิดเสียงไว้ก่อน ผู้ชมกดเปิดเสียง/หยุดเองที่ตัวเล่น)  (ถ้า embed ขึ้น error ให้ใช้ 'card') */
  clipMode: 'auto',
  name: 'Simpfolk',
  roles: ['Photographer', 'Editor', 'Videographer'],
  tagline: 'ช่างภาพ ตัดต่อ และผู้ผลิตวิดีโอ',

  /* ---------- หน้าแรก (Resume) ----------
     photo = รูปโปรไฟล์ของคุณ เช่น 'images/profile.jpg' (วางไฟล์ไว้ในโฟลเดอร์ images)
     เว้นว่าง '' = แสดงช่องว่างตัวอักษร S ไปก่อน   fullName = ชื่อจริง (เว้นว่างถ้าไม่ต้องการแสดง) */
  profile: {
    photo: 'images/profile.jpg',
    fullName: 'Nutchanon Pumduang',
    title: 'Photographer · Editor · Videographer',  // ตำแหน่งที่ต้องการแสดง
    intro: 'คณะนิเทศศาสตร์ เอกมัลติมีเดีย มหาวิทยาลัยรังสิต เกียรตินิยม',
    address: 'ลาดพร้าว 12 กรุงเทพมหานคร'                   // ที่อยู่ที่แสดงในเรซูเม่ (หน้า Info) เว้นว่าง = ไม่แสดง
  },

  /* ตัวอย่างผลงานในหน้า Home
     records = แผ่นเสียง 2 แผ่น: id = id ของหมวด, main = รูปหลักบนปก, minis = รูปย่อยที่ซ้อนอยู่ด้านหลัง (2–3 รูป)
     videos = ลำดับคลิปใน videos ด้านล่าง (เริ่มนับที่ 0) */
  home: {
    records: [
      { id: 'color', main: 'luna1.jpg', minis: ['prangfah1.jpg', 'luna2.jpg', 'prangfah3.jpg'] },
      { id: 'bw',    main: 'ply1.jpg',    minis: ['luna5.jpg', 'chompoo2.jpg', 'beer1.jpg'] }
    ],
    videos: [0, 1, 2, 3]
  },

  contact: {
    email: 'Nutchanonn.p02@gmail.com',
    line: 'f997745',                // LINE ID ส่วนตัว (ถ้าเป็น LINE Official ให้ใส่ @ นำหน้า) เว้นว่าง = ไม่แสดง
    instagram: ['ncnxyz.raw'],  // ใส่ได้หลายบัญชี ไม่ต้องใส่ @   (เว้นว่าง [] = ไม่แสดง)
    tiktok: '',                     // handle ไม่ต้องใส่ @
    phone: '0822383118'             // เว้นว่างถ้าไม่ต้องการแสดง
  },
  cv: '',                           // เช่น 'cv.pdf' (วางไฟล์ไว้โฟลเดอร์เดียวกับ index.html)

  /* ---------- หน้า Info ---------- */
  info: {
    summary: 'คณะนิเทศศาสตร์ เอกมัลติมีเดีย มหาวิทยาลัยรังสิต เกียรตินิยม',
    education: [
      { period: 'จบการศึกษา 2025', title: 'มหาวิทยาลัยรังสิต', detail: 'คณะนิเทศศาสตร์ เอกมัลติมีเดีย · เกียรตินิยม' }
    ],
    /* experience แสดงเป็นไทม์ไลน์ เรียงจากล่าสุดไปเก่าสุด  title = ตำแหน่ง (เว้นว่างได้ ถ้าไม่ใส่จะแสดงชื่อบริษัทเป็นหัวข้อ) */
    experience: [
      { period: '2025 – Now', title: '', org: 'COSDENT COMPANY LIMITED', points: ['Marketing', 'Video and Photographer'] },
      { period: 'July – October 2024', title: '', org: 'Mainstand Creator (Thailand) Co., Ltd', points: ['Video and Photographer', 'Livestream'] },
      { period: '2024 – 2026', title: 'Content Creator - Outsidezitys', org: '', points: ['Editor', 'Creative', 'Graphic'],
        links: [
          { label: 'TikTok', url: 'https://www.tiktok.com/@outsidezitys' },
          { label: 'YouTube', url: 'https://www.youtube.com/@OutsideZitys-ฟุตบอลปลายแถว' }
        ] }
    ],
    hard: [
      { group: 'Photography', items: ['Portrait', 'Candid', 'Studio lighting', 'Production'] },
      { group: 'Streaming', items: ['Switcher', 'Sound Engineer', 'Moderator'] },
      { group: 'Software', items: ['CapCut', 'Premiere Pro', 'Photoshop', 'OBS'] },
      /* Equipment: กลุ่มเดียว แบ่งเป็นบรรทัดตามยี่ห้อ (ใช้ lines แทน items) */
      { group: 'Equipment', lines: [{ label: 'Canon', items: ['R5', 'R8', 'Mark IV', '800D'] }, { label: 'Nikon', items: ['6D'] }] }
    ],
    soft: [
      { title: 'Communication', detail: 'ตัวอย่างสั้น ๆ ที่แสดงว่าทำได้จริง' },
      { title: 'Direction', detail: 'เช่น การกำกับท่าทางและบรรยากาศหน้ากล้อง' },
      { title: 'Time management', detail: 'เช่น ส่งงานตรงเวลาในงานอีเวนต์วันเดียว' },
      { title: 'Collaboration', detail: 'เช่น ทำงานกับทีมโปรดักชัน ช่างแต่งหน้า สไตลิสต์' }
    ]
  },

  /* ---------- หน้า Photographer ----------
     รูปวางไว้ที่ images/<id>/  แล้วเพิ่มชื่อไฟล์ในรายการ photos
     w,h = ขนาดพิกเซลของรูป (ไม่บังคับ)  t = 'portrait' หรือ 'candid' (ไม่บังคับ)  */
  hero: { src: 'images/luna/luna1.jpg', alt: 'Model in a black leather jacket kneeling in a white spotlight on a red backdrop' },
  /* หมวดภาพหน้า Photographer: id ต้องตรงกับ cat ของแต่ละภาพ  audio = เพลงตอนเลื่อนเมาส์ไปที่หมวดนั้น (เว้นว่าง = ไม่มีเสียง) */
  /* Artists (หน้า Photographer): handle = ชื่อ Instagram (ไม่ต้องใส่ @) ลิงก์ไป instagram.com/handle
     photos = ชื่อไฟล์รูปของ artist คนนั้น (ตอนนี้เป็นภาพตัวอย่าง mock-up) ภาพแรกใช้เป็นรูปโปรไฟล์ */
  artists: [
      /* คู่ (ภาพคู่): ใช้ handles = [คนที่ 1, คนที่ 2] จะเป็นกรอบใหญ่เต็มแถว มีโปรไฟล์ IG ของแต่ละคน */
      { handles: ['fay_riezz', 'maywyda'], avatar: 'faymay2.jpg', photos: ['faymay6.jpg', 'faymay8.jpg', 'faymay4.jpg', 'faymay5.jpg', 'faymay7.jpg', 'faymay1.jpg', 'faymay2.jpg', 'faymay3.jpg'] },
      { handle: 'dj.luna222', photos: ['luna1.jpg', 'luna2.jpg', 'luna5.jpg', 'luna6.jpg'] },
      { handle: '4moze', photos: [] /* ยังไม่มีรูปจริง: ใส่ชื่อไฟล์ภาพแล้วการ์ดจะแสดงเอง */ },
      { handle: 'chompu_konbai', photos: ['chompoo2.jpg', 'chompoo1.jpg'] },
      { handle: 'ppanward', avatar: 'ppanward4.jpg', photos: ['ppanward1.jpg', 'ppanward4.jpg', 'ppanward2.jpg', 'ppanward3.jpg', 'ppanward5.jpg'] },
      { handle: 'pai_makeup', photos: ['ply1.jpg', 'ply2.jpg', 'ply3.jpg'] },
      { handle: 'babarabeer_makeup', photos: ['beer1.jpg', 'beer2.jpg'] },
      { handle: 'boooon_20', photos: ['fah1.jpg', 'prangfah1.jpg', 'prangfah2.jpg', 'fah2.jpg', 'prangfah3.jpg', 'prangfah4.jpg', 'prangfah5.jpg', 'prangfah6.jpg'] },
      { handle: 'zanizina', photos: [] /* ยังไม่มีรูปจริง: ใส่ชื่อไฟล์ภาพแล้วการ์ดจะแสดงเอง */ },
      { handle: 'glufkanawut', photos: [] /* ยังไม่มีรูปจริง: ใส่ชื่อไฟล์ภาพแล้วการ์ดจะแสดงเอง */ }
  ],
  /* หมวดภาพ: ตอนนี้ไม่แยก Portrait / Candid (รวมเป็นหมวดเดียว)
     ถ้าอยากกลับไปแยก: ใช้ branch backup/portrait-candid บน GitHub */
  categories: [
    { id: 'photos', title: 'Photos', blurb: 'ภาพบุคคล เบื้องหลัง และช่วงเวลาระหว่างงาน รวมไว้ด้วยกัน', audio: 'audio/Song_BIRDS OF A FEATHER .mp3' }
  ],
  /* galleries = โฟลเดอร์รูปสี / ขาวดำ (ใช้กับ Color mode และแผ่นเสียงหน้า Home)
     แต่ละภาพ: cat = portrait | candid | landscape (ถ้าไม่ใส่ จะใช้ค่า t)  artist / event = ตัวอย่าง ให้แทนที่ด้วยของจริง */
  galleries: [
    { id: 'color', title: 'Color', folder: '', caption: 'ปี 2026 @cosdent', audio: 'audio/Song_BIRDS OF A FEATHER .mp3', /* เพลงตอนเลื่อนเมาส์ไปที่แผ่น (เว้นว่าง = ไม่มีเสียง) */
      blurb: 'Red sweeps, denim, white backdrops and silhouettes cut out by a single light.',
      photos: [
        /* ภาพจริง: fay_riezz & maywyda (images/faymay/)  ระบุ src เมื่อไฟล์อยู่นอกโฟลเดอร์ของหมวด */
        { f:'faymay6.jpg', src:'images/faymay/faymay6.jpg', artist:'fay_riezz & maywyda', event:'', w:1333, h:2000, t:'portrait', alt:'Two women smiling close to the camera, one resting her head on the other' },
        { f:'faymay8.jpg', src:'images/faymay/faymay8.jpg', artist:'fay_riezz & maywyda', event:'', w:1333, h:2000, t:'portrait', alt:'Two women in a tight hug, laughing, in a bright blue room' },
        { f:'faymay4.jpg', src:'images/faymay/faymay4.jpg', artist:'fay_riezz & maywyda', event:'', w:2000, h:1333, t:'candid', alt:'Two women laughing together on a floral sofa, one turned away from the camera' },
        { f:'faymay5.jpg', src:'images/faymay/faymay5.jpg', artist:'fay_riezz & maywyda', event:'', w:1333, h:2000, t:'candid', alt:'Woman in a striped shirt reading while another lies across her lap on a floral sofa' },
        { f:'faymay7.jpg', src:'images/faymay/faymay7.jpg', artist:'fay_riezz & maywyda', event:'', w:1333, h:2000, t:'portrait', alt:'Two women hugging and smiling on an armchair in a sunlit blue room' },
        { f:'faymay1.jpg', src:'images/faymay/faymay1.jpg', artist:'fay_riezz & maywyda', event:'', w:1024, h:1536, t:'candid', alt:'Two women on a floral sofa, one reading a book while the other lies across her lap' },
        { f:'faymay2.jpg', src:'images/faymay/faymay2.jpg', artist:'fay_riezz & maywyda', event:'', w:1535, h:1024, t:'portrait', alt:'Two women smiling, wrapped together in one striped blanket against a blue wall' },
        { f:'faymay3.jpg', src:'images/faymay/faymay3.jpg', artist:'fay_riezz & maywyda', event:'', w:1447, h:1087, t:'candid', alt:'Two women on a floral sofa, one lying down laughing while the other looks at her book' },
        /* ภาพจริงของ ppanward (images/panward) */
        { f:'ppanward1.jpg', src:'images/panward/ppanward1.jpg', artist:'ppanward', event:'', w:1357, h:2037, t:'portrait', alt:'Woman in a yellow dress sitting on the floor holding a paint palette beside a painted flower' },
        { f:'ppanward2.jpg', src:'images/panward/ppanward2.jpg', artist:'ppanward', event:'', w:2407, h:1603, t:'candid', alt:'Woman in a yellow dress sitting cross-legged and painting pink flowers on a glass wall' },
        { f:'ppanward3.jpg', src:'images/panward/ppanward3.jpg', artist:'ppanward', event:'', w:2375, h:1582, t:'candid', alt:'Woman in a yellow dress holding a paint palette and brush in front of pink flowers' },
        { f:'ppanward4.jpg', src:'images/panward/ppanward4.jpg', artist:'ppanward', event:'', w:982, h:1475, t:'portrait', alt:'Woman in a yellow halter dress leaning back on the floor, smiling, with a paint palette' },
        { f:'ppanward5.jpg', src:'images/panward/ppanward5.jpg', artist:'ppanward', event:'', w:1382, h:2075, t:'candid', alt:'Woman in a yellow dress seen through a dark blurred foreground, painting flowers' },
        /* ภาพจริงของ artist อื่น (images/luna, prangfah) */
        { f:'luna1.jpg', src:'images/luna/luna1.jpg', artist:'dj.luna222', event:'', w:1246, h:1870, t:'portrait', alt:'Model in a black leather jacket seated in a white spotlight on a red backdrop' },
        { f:'luna2.jpg', src:'images/luna/luna2.jpg', artist:'dj.luna222', event:'', w:1261, h:1893, t:'portrait', alt:'Model in a leather jacket leaning on the floor against a red backdrop' },
        { f:'prangfah1.jpg', src:'images/prangfah/prangfah1.jpg', artist:'boooon_20', event:'', w:1333, h:2000, t:'portrait', alt:'Two women in denim and light blue tops standing close on a white backdrop' },
        { f:'prangfah2.jpg', src:'images/prangfah/prangfah2.jpg', artist:'boooon_20', event:'', w:888, h:1333, t:'portrait', alt:'Two women in corset tops smiling at each other on a white backdrop' },
        { f:'prangfah3.jpg', src:'images/prangfah/prangfah3.jpg', artist:'boooon_20', event:'', w:1150, h:1726, t:'candid', alt:'Woman in a light blue top smiling with arms crossed, another woman in the foreground' },
        { f:'prangfah4.jpg', src:'images/prangfah/prangfah4.jpg', artist:'boooon_20', event:'', w:888, h:1333, t:'candid', alt:'Two women behind a dark panel, one resting her head on her arm' }
      ]},
    { id: 'bw', title: 'Black & White', folder: '', caption: 'ปี 2026 @cosdent', audio: 'audio/Song_505.mp3',
      blurb: 'Tuxedos, spotlights and long shadows. Contrast first, grain left in.',
      photos: [
        /* ภาพจริงของ artist (images/luna, chompoo, ply, beer, fah, prangfah) */
        { f:'luna5.jpg', src:'images/luna/luna5.jpg', artist:'dj.luna222', event:'', w:1333, h:2000, t:'portrait', alt:'Model in a leather jacket sitting in a pool of white light, black and white' },
        { f:'luna6.jpg', src:'images/luna/luna6.jpg', artist:'dj.luna222', event:'', w:1333, h:2000, t:'candid', alt:'Behind the scenes: model in a spotlight while the crew works in the dark' },
        { f:'chompoo1.jpg', src:'images/chompoo/chompoo1.jpg', artist:'chompu_konbai', event:'', w:1333, h:2000, t:'candid', alt:'Woman with long hair holding a makeup brush while a makeup artist works' },
        { f:'chompoo2.jpg', src:'images/chompoo/chompoo2.jpg', artist:'chompu_konbai', event:'', w:1333, h:2000, t:'portrait', alt:'Dancer in a long coat posing in a spotlight with a long shadow' },
        { f:'ply1.jpg', src:'images/ply/ply1.jpg', artist:'pai_makeup', event:'', w:1333, h:2000, t:'portrait', alt:'Man in a black suit and tie looking past the camera' },
        { f:'ply2.jpg', src:'images/ply/ply2.jpg', artist:'pai_makeup', event:'', w:1333, h:2000, t:'portrait', alt:'Man in a suit in profile, adjusting his collar' },
        { f:'ply3.jpg', src:'images/ply/ply3.jpg', artist:'pai_makeup', event:'', w:1333, h:2000, t:'candid', alt:'Man in a suit walking among studio stands and lights' },
        { f:'beer1.jpg', src:'images/beer/beer1.jpg', artist:'babarabeer_makeup', event:'', w:1333, h:2000, t:'portrait', alt:'Man in a tuxedo with a bow tie smiling, arms open' },
        { f:'beer2.jpg', src:'images/beer/beer2.jpg', artist:'babarabeer_makeup', event:'', w:1333, h:2000, t:'portrait', alt:'Man in a tuxedo standing in profile with shadows behind him' },
        { f:'fah1.jpg', src:'images/fah/fah1.jpg', artist:'boooon_20', event:'', w:1333, h:2000, t:'portrait', alt:'Woman with long black hair in a backless dress, looking over her shoulder' },
        { f:'fah2.jpg', src:'images/fah/fah2.jpg', artist:'boooon_20', event:'', w:1333, h:2000, t:'portrait', alt:'Woman with long black hair in profile, studio lights behind her' },
        { f:'prangfah5.jpg', src:'images/prangfah/prangfah5.jpg', artist:'boooon_20', event:'', w:1333, h:2000, t:'portrait', alt:'Two women embracing in black and white' },
        { f:'prangfah6.jpg', src:'images/prangfah/prangfah6.jpg', artist:'boooon_20', event:'', w:1333, h:2000, t:'portrait', alt:'Two women close together, one looking at the camera, black and white' }
      ]}
  ],
  /* แผ่นเสียงเพิ่มเติมที่คัดจากรูปทั้งหมดตามประเภท (t) */
  collections: [
    { id: 'portrait', title: 'Portrait', filter: 'portrait', blurb: 'Posed frames: one subject, one light, full attention.' },
    { id: 'candid',   title: 'Candid',   filter: 'candid',   blurb: 'Frames taken between poses, when nobody is performing.' }
  ],

  /* ---------- หน้า Videographer ----------
     url = ลิงก์ TikTok แบบเต็ม (…/video/ตัวเลข)   cover = รูปปก (วางไว้ใน images/video/ ได้)
     ตอนนี้เป็น mock-up: ใช้รูปถ่ายเป็นปกชั่วคราวและยังไม่มีลิงก์ */
  videos: [
    { title: 'Video 01', url: 'https://www.tiktok.com/@scrumpgelateria/video/7598813310141713672', cover: 'images/cover/cover-01.png', fb: 'images/luna/luna1.jpg' },
    { title: 'Video 02', url: '', cover: 'images/ply/ply1.jpg' },
    { title: 'Video 03', url: '', cover: 'images/prangfah/prangfah1.jpg' },
    { title: 'Video 04', url: '', cover: 'images/luna/luna5.jpg' },
    { title: 'Video 05', url: '', cover: 'images/luna/luna2.jpg' },
    { title: 'Video 06', url: '', cover: 'images/chompoo/chompoo2.jpg' },
    { title: 'Video 07', url: '', cover: 'images/prangfah/prangfah3.jpg' },
    { title: 'Video 08', url: '', cover: 'images/ply/ply2.jpg' },
    { title: 'Video 09', url: '', cover: 'images/prangfah/prangfah2.jpg' },
    { title: 'Video 10', url: '', cover: 'images/prangfah/prangfah5.jpg' }
  ],

  /* ---------- หน้า Editor ---------- */
  editor: {
    /* Before/After: ภาพจริง 2 ภาพ (ครอปและสัดส่วนเดียวกัน) */
    compare: { before: 'images/editor/before.jpg', after: 'images/editor/after.jpg', altBefore: 'ภาพต้นฉบับก่อนแต่งสี', altAfter: 'ภาพหลังเกรดสี' },
    /* Video edits: แบ่งเป็นหมวด  คลิปในหน้านี้แยกจากหน้า Videographer (แก้แยกกันได้)  ใส่ title / url (ลิงก์เต็ม /video/ตัวเลข) / cover (รูปปก) / fb (รูปสำรองถ้ายังไม่มีไฟล์ cover) */
    reelGroups: [
      { title: 'A-roll Editing', clips: [
        { title: 'A-roll 01', url: 'https://www.tiktok.com/@scrumpgelateria/video/7598813310141713672', cover: 'images/cover/cover-01.png', fb: 'images/luna/luna1.jpg' },
        { title: 'A-roll 02', url: 'https://www.tiktok.com/@scrumpgelateria/video/7605191703833857301', cover: 'images/cover/cover-02.png', fb: 'images/prangfah/prangfah1.jpg' },
        { title: 'A-roll 03', url: 'https://www.tiktok.com/@scrumpgelateria/video/7596193413217766664', cover: 'images/cover/cover-03.png', fb: 'images/luna/luna2.jpg' }
      ] },
      { title: 'Storytelling', clips: [
        { title: 'Storytelling 01', url: 'https://www.youtube.com/shorts/kYauhuUBqt0', cover: 'images/cover/cover-04.png', fb: 'images/ply/ply1.jpg' },
        { title: 'Storytelling 02', url: 'https://www.youtube.com/shorts/sBeK5mTBSk8', cover: 'images/cover/cover-05.png', fb: 'images/fah/fah1.jpg' },
        { title: 'Storytelling 03', url: 'https://www.youtube.com/shorts/FBRC4rA_XQo', cover: 'images/cover/cover-06.png', fb: 'images/prangfah/prangfah3.jpg' }
      ] }
    ],
    lead: 'รีทัชภาพ เกรดสี และตัดต่อวิดีโอสั้น ตั้งแต่ไฟล์ดิบจนถึงไฟล์ส่งมอบ',
    steps: [
      { t: 'Ingest', d: 'รับไฟล์ ตั้งชื่อ สำรองข้อมูล' },
      { t: 'Cull',   d: 'คัดภาพ คัดช็อตที่ดีที่สุด' },
      { t: 'Grade',  d: 'ปรับสี โทน และรีทัช' },
      { t: 'Deliver', d: 'ส่งไฟล์ตามขนาดและแพลตฟอร์มที่ต้องการ' }
    ]
  },

  /* ---------- หน้า Other ---------- */
  other: {
    events: {
      title: 'Events',
      lead: 'ประสบการณ์ทำอีเวนต์',
      items: ['Event photo & video coverage', 'Highlight reel', 'Same-day edit', 'Backstage & candid moments'],
      /* งานอีเวนต์ที่เคยร่วม: date = 'ปี-เดือน' ใช้เรียง (ใหม่ขึ้นก่อนอัตโนมัติ)  label = ข้อความที่แสดง  roles = บทบาท */
      list: [
        { title: 'TOA 3X3 Basketball', date: '2024-07', label: 'July 2024', roles: ['Content Creator'] },
        { title: 'CP innovation @true digital park', date: '2025-09', label: 'September 2025', roles: ['Staff', 'Coordinator'] }
      ]
    },
    kol: {
      title: 'KOL Sourcing',
      lead: 'จัดหา KOL และครีเอเตอร์ให้ตรงกับแบรนด์และงบประมาณ พร้อมประสานงานจนจบแคมเปญ',
      steps: [
        { t: 'Brief',    d: 'รับโจทย์ เป้าหมาย งบ และกลุ่มเป้าหมาย' },
        { t: 'Shortlist', d: 'คัด KOL ที่เหมาะสมพร้อมเหตุผล' },
        { t: 'Contact',  d: 'ติดต่อ เจรจา และยืนยันรายละเอียดงาน' },
        { t: 'Produce',  d: 'ดูแลการถ่ายทำและคอนเทนต์' },
        { t: 'Report',   d: 'สรุปผลหลังจบแคมเปญ' }
      ]
    },
    /* หนังสั้น (Short films): url = ลิงก์ YouTube  เล่นพรีวิวอัตโนมัติ (ปิดเสียง) เมื่อเลื่อนถึง  roles = บทบาทของคุณ */
    films: [
      { title: 'DELIRIUM AMANT', roles: ['ผู้ช่วยตากล้อง', 'โลเคชัน'], detail: 'หนังสั้นประกวดตอนมหาวิทยาลัย', concept: 'ความทรงจำที่ปวดร้าวจนก่อกำเนิดบุคลิกใหม่', url: 'https://youtu.be/5G3MFsJqRSs' },
      { title: '6 KINGS', roles: ['นักแสดง', 'โลเคชัน'], detail: 'หนังสั้นถ่ายแบบจำกัดเวลา 3 ชั่วโมง', concept: 'การดวลกันของเซียนพนัน', url: 'https://www.youtube.com/watch?v=yPkoxP4Oa-M' },
      { title: 'เส้นทางของฉัน ความฝันของเธอ', roles: ['Creative writing'], detail: 'สอนนักเรียนมัธยมทำหนัง ทั้งการแสดงและการใช้อุปกรณ์', concept: 'การเดินตามความฝัน', url: 'https://www.youtube.com/watch?v=iDL2yUQS8AM' }
    ]
  }
};
