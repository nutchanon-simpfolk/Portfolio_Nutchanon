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
      { id: 'color', main: 'color-02.jpg', minis: ['color-05.jpg', 'color-07.jpg', 'color-01.jpg'] },
      { id: 'bw',    main: 'bw-01.jpg',    minis: ['bw-07.jpg', 'bw-04.jpg', 'bw-09.jpg'] }
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
      { title: 'Communication', detail: '(ตัวอย่าง) ตัวอย่างสั้น ๆ ที่แสดงว่าทำได้จริง' },
      { title: 'Direction', detail: '(ตัวอย่าง) เช่น การกำกับท่าทางและบรรยากาศหน้ากล้อง' },
      { title: 'Time management', detail: '(ตัวอย่าง) เช่น ส่งงานตรงเวลาในงานอีเวนต์วันเดียว' },
      { title: 'Collaboration', detail: '(ตัวอย่าง) เช่น ทำงานกับทีมโปรดักชัน ช่างแต่งหน้า สไตลิสต์' }
    ]
  },

  /* ---------- หน้า Photographer ----------
     รูปวางไว้ที่ images/<id>/  แล้วเพิ่มชื่อไฟล์ในรายการ photos
     w,h = ขนาดพิกเซลของรูป (ไม่บังคับ)  t = 'portrait' หรือ 'candid' (ไม่บังคับ)  */
  hero: { src: 'images/color/color-02.jpg', alt: 'Model in a black leather jacket kneeling in a white spotlight on a red backdrop' },
  /* หมวดภาพหน้า Photographer: id ต้องตรงกับ cat ของแต่ละภาพ  audio = เพลงตอนเลื่อนเมาส์ไปที่หมวดนั้น (เว้นว่าง = ไม่มีเสียง) */
  /* Artists (หน้า Photographer): handle = ชื่อ Instagram (ไม่ต้องใส่ @) ลิงก์ไป instagram.com/handle
     photos = ชื่อไฟล์รูปของ artist คนนั้น (ตอนนี้เป็นภาพตัวอย่าง mock-up) ภาพแรกใช้เป็นรูปโปรไฟล์ */
  artists: [
      /* คู่ (ภาพคู่): ใช้ handles = [คนที่ 1, คนที่ 2] จะเป็นกรอบใหญ่เต็มแถว มีโปรไฟล์ IG ของแต่ละคน */
      { handles: ['fay_riezz', 'maywyda'], photos: ['color-04.jpg', 'color-01.jpg', 'bw-01.jpg'] },
      { handle: 'dj.luna222', photos: ['color-07.jpg', 'bw-04.jpg', 'bw-11.jpg'] },
      { handle: '4moze', photos: ['color-10.jpg', 'bw-07.jpg', 'color-01.jpg'] },
      { handle: 'chompu_konbai', photos: ['bw-03.jpg', 'bw-10.jpg', 'color-04.jpg'] },
      { handle: 'ppanward', photos: ['bw-06.jpg', 'bw-13.jpg', 'color-07.jpg'] },
      { handle: 'pai_makeup', photos: ['bw-09.jpg', 'color-03.jpg', 'color-10.jpg'] },
      { handle: 'babarabeer_makeup', photos: ['bw-12.jpg', 'color-06.jpg', 'bw-03.jpg'] },
      { handle: 'zanizina', photos: ['color-02.jpg', 'color-09.jpg', 'bw-06.jpg'] },
      { handle: 'glufkanawut', photos: ['color-05.jpg', 'bw-02.jpg', 'bw-09.jpg'] }
  ],
  categories: [
    { id: 'portrait',  title: 'Portrait',  blurb: 'ภาพบุคคลที่จัดแสงและวางท่า เน้นสีหน้า เงา และคาแรกเตอร์ของคนในภาพ', audio: 'audio/Song_BIRDS OF A FEATHER .mp3' },
    { id: 'candid',    title: 'Candid',    blurb: 'ช่วงเวลาไม่ได้จัด ระหว่างเตรียมงานและเบื้องหลัง จับจังหวะที่เป็นธรรมชาติ', audio: 'audio/Song_505.mp3' },
    { id: 'landscape', title: 'Landscape', blurb: 'ภาพกว้างที่เห็นทั้งฉากและบรรยากาศ (ตอนนี้ใช้ภาพแนวนอนตัวอย่างแทนไปก่อน)', audio: 'audio/Song_BIRDS OF A FEATHER .mp3' }
  ],
  /* galleries = โฟลเดอร์รูปสี / ขาวดำ (ใช้กับ Color mode และแผ่นเสียงหน้า Home)
     แต่ละภาพ: cat = portrait | candid | landscape (ถ้าไม่ใส่ จะใช้ค่า t)  artist / event = ตัวอย่าง ให้แทนที่ด้วยของจริง */
  galleries: [
    { id: 'color', title: 'Color', folder: 'images/color/', caption: 'ปี 2026 @cosdent', audio: 'audio/Song_BIRDS OF A FEATHER .mp3', /* เพลงตอนเลื่อนเมาส์ไปที่แผ่น (เว้นว่าง = ไม่มีเสียง) */
      blurb: 'Red sweeps, denim, white backdrops and silhouettes cut out by a single light.',
      photos: [
        { f:'color-01.jpg', artist:'Artist A', event:'Event 01', w:1333, h:2000, t:'candid',   alt:'Woman in a blue denim set smiling, long hair falling across the foreground' },
        { f:'color-02.jpg', artist:'Artist B', event:'Event 02', w:1333, h:2000, t:'portrait', alt:'Model in a black leather jacket and stockings kneeling in a white spotlight on a red backdrop' },
        { f:'color-03.jpg', cat:'landscape', artist:'Artist C', event:'Event 03', w:2000, h:1333, t:'candid',   alt:'Man in a black suit with his back to the camera facing a woman in black, white studio backdrop' },
        { f:'color-04.jpg', artist:'Artist D', event:'Event 01', w:1333, h:2000, t:'portrait', alt:'Two women in denim and lace tops embracing against a white backdrop' },
        { f:'color-05.jpg', artist:'Artist A', event:'Event 02', w:1333, h:2000, t:'portrait', alt:'Silhouette of a person with a high ponytail, hands together, against a red backdrop' },
        { f:'color-06.jpg', cat:'landscape', artist:'Artist B', event:'Event 03', w:2000, h:1333, t:'portrait', alt:'Two women standing close in light blue and white outfits on a white backdrop' },
        { f:'color-07.jpg', artist:'Artist C', event:'Event 01', w:1333, h:2000, t:'portrait', alt:'Model in a leather jacket with a hand raised to her face, seated in a spotlight on red' },
        { f:'color-08.jpg', artist:'Artist D', event:'Event 02', w:2000, h:1333, t:'candid',   alt:'Two women with long hair looking out through a narrow gap between dark panels' },
        { f:'color-09.jpg', artist:'Artist A', event:'Event 03', w:1333, h:2000, t:'portrait', alt:'Silhouette of a person with a ponytail looking upward against a red backdrop' },
        { f:'color-10.jpg', cat:'landscape', artist:'Artist B', event:'Event 01', w:2000, h:1333, t:'candid',   alt:'Five people in black and white outfits standing in a row between studio lights' }
      ]},
    { id: 'bw', title: 'Black & White', folder: 'images/bw/', caption: 'ปี 2026 @cosdent', audio: 'audio/Song_505.mp3',
      blurb: 'Tuxedos, spotlights and long shadows. Contrast first, grain left in.',
      photos: [
        { f:'bw-01.jpg', artist:'Artist C', event:'Event 02', w:1333, h:2000, t:'portrait', alt:'Man in a tuxedo and bow tie lit by a hard spotlight, shadow on the wall' },
        { f:'bw-02.jpg', artist:'Artist D', event:'Event 03', w:1333, h:2000, t:'portrait', alt:'Standing portrait of a man in a tuxedo and bow tie against a spotlit backdrop' },
        { f:'bw-03.jpg', artist:'Artist A', event:'Event 01', w:1333, h:2000, t:'candid',   alt:'Woman in black having her makeup touched up, a brush at her face' },
        { f:'bw-04.jpg', artist:'Artist B', event:'Event 02', w:1333, h:2000, t:'portrait', alt:'Figure in a long coat with arms spread inside a pool of light, shadow behind' },
        { f:'bw-05.jpg', artist:'Artist C', event:'Event 03', w:1333, h:2000, t:'portrait', alt:'Woman in a black dress in profile with studio lights behind her' },
        { f:'bw-06.jpg', artist:'Artist D', event:'Event 01', w:1333, h:2000, t:'portrait', alt:'Two women in black leaning close together' },
        { f:'bw-07.jpg', artist:'Artist A', event:'Event 02', w:1333, h:2000, t:'portrait', alt:'Model crouched in a leather jacket and heels inside a white spotlight circle' },
        { f:'bw-08.jpg', artist:'Artist B', event:'Event 03', w:1333, h:2000, t:'candid',   alt:'Model in a leather jacket touching her face in a spotlight, crew in the dark beside her' },
        { f:'bw-09.jpg', artist:'Artist C', event:'Event 01', w:1333, h:2000, t:'portrait', alt:'Man in a dark suit in profile, hand at his collar' },
        { f:'bw-10.jpg', artist:'Artist D', event:'Event 02', w:1333, h:2000, t:'portrait', alt:'Man in a tuxedo standing in a spotlight with a long shadow behind him' },
        { f:'bw-11.jpg', artist:'Artist A', event:'Event 03', w:1333, h:2000, t:'portrait', alt:'Woman in a black dress in profile, studio equipment behind her' },
        { f:'bw-12.jpg', artist:'Artist B', event:'Event 01', w:1333, h:2000, t:'portrait', alt:'Two women in denim and lace tops embracing on a bright high-key backdrop' },
        { f:'bw-13.jpg', artist:'Artist C', event:'Event 02', w:1333, h:2000, t:'candid',   alt:'Man in a suit standing among studio stands and equipment' }
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
    { title: 'Video 01', url: 'https://www.tiktok.com/@scrumpgelateria/video/7598813310141713672', cover: 'images/cover/cover-01.png', fb: 'images/color/color-02.jpg' },
    { title: 'Video 02', url: '', cover: 'images/bw/bw-01.jpg' },
    { title: 'Video 03', url: '', cover: 'images/color/color-05.jpg' },
    { title: 'Video 04', url: '', cover: 'images/bw/bw-07.jpg' },
    { title: 'Video 05', url: '', cover: 'images/color/color-07.jpg' },
    { title: 'Video 06', url: '', cover: 'images/bw/bw-04.jpg' },
    { title: 'Video 07', url: '', cover: 'images/color/color-09.jpg' },
    { title: 'Video 08', url: '', cover: 'images/bw/bw-09.jpg' },
    { title: 'Video 09', url: '', cover: 'images/color/color-01.jpg' },
    { title: 'Video 10', url: '', cover: 'images/bw/bw-12.jpg' }
  ],

  /* ---------- หน้า Editor ---------- */
  editor: {
    /* Before/After: ภาพจริง 2 ภาพ (ครอปและสัดส่วนเดียวกัน) */
    compare: { before: 'images/editor/before.jpg', after: 'images/editor/after.jpg', altBefore: 'ภาพต้นฉบับก่อนแต่งสี', altAfter: 'ภาพหลังเกรดสี' },
    /* Video edits: แบ่งเป็นหมวด  คลิปในหน้านี้แยกจากหน้า Videographer (แก้แยกกันได้)  ใส่ title / url (ลิงก์เต็ม /video/ตัวเลข) / cover (รูปปก) / fb (รูปสำรองถ้ายังไม่มีไฟล์ cover) */
    reelGroups: [
      { title: 'A-roll Editing', clips: [
        { title: 'A-roll 01', url: 'https://www.tiktok.com/@scrumpgelateria/video/7598813310141713672', cover: 'images/cover/cover-01.png', fb: 'images/color/color-02.jpg' },
        { title: 'A-roll 02', url: 'https://www.tiktok.com/@scrumpgelateria/video/7605191703833857301', cover: 'images/cover/cover-02.png', fb: 'images/color/color-04.jpg' },
        { title: 'A-roll 03', url: 'https://www.tiktok.com/@scrumpgelateria/video/7596193413217766664', cover: 'images/cover/cover-03.png', fb: 'images/color/color-07.jpg' }
      ] },
      { title: 'Storytelling', clips: [
        { title: 'Storytelling 01', url: 'https://www.youtube.com/shorts/kYauhuUBqt0', cover: 'images/cover/cover-04.png', fb: 'images/bw/bw-01.jpg' },
        { title: 'Storytelling 02', url: 'https://www.youtube.com/shorts/sBeK5mTBSk8', cover: 'images/cover/cover-05.png', fb: 'images/bw/bw-05.jpg' },
        { title: 'Storytelling 03', url: 'https://www.youtube.com/shorts/FBRC4rA_XQo', cover: 'images/cover/cover-06.png', fb: 'images/color/color-09.jpg' }
      ] }
    ],
    lead: '(ตัวอย่าง) รีทัชภาพ เกรดสี และตัดต่อวิดีโอสั้น ตั้งแต่ไฟล์ดิบจนถึงไฟล์ส่งมอบ',
    steps: [
      { t: 'Ingest', d: '(ตัวอย่าง) รับไฟล์ ตั้งชื่อ สำรองข้อมูล' },
      { t: 'Cull',   d: '(ตัวอย่าง) คัดภาพ คัดช็อตที่ดีที่สุด' },
      { t: 'Grade',  d: '(ตัวอย่าง) ปรับสี โทน และรีทัช' },
      { t: 'Deliver', d: '(ตัวอย่าง) ส่งไฟล์ตามขนาดและแพลตฟอร์มที่ต้องการ' }
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
      lead: '(ตัวอย่าง) จัดหา KOL และครีเอเตอร์ให้ตรงกับแบรนด์และงบประมาณ พร้อมประสานงานจนจบแคมเปญ',
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
