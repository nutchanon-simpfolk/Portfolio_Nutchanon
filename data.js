/* ============================================================
   data.js  —  แก้ข้อมูลทั้งหมดของเว็บที่ไฟล์นี้ไฟล์เดียว
   ข้อความที่ขึ้นต้นด้วย "(ตัวอย่าง)" หรือ 20XX คือข้อมูล mock-up ให้แทนที่ด้วยของจริง
   ============================================================ */
window.SITE = {
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
    intro: 'คณะนิเทศศาสตร์ เอกมัลติมีเดีย มหาวิทยาลัยรังสิต เกียรตินิยม'
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
    instagram: '',                  // handle ไม่ต้องใส่ @
    tiktok: '',                     // handle ไม่ต้องใส่ @
    phone: ''                       // เว้นว่างถ้าไม่ต้องการแสดง
  },
  cv: '',                           // เช่น 'cv.pdf' (วางไฟล์ไว้โฟลเดอร์เดียวกับ index.html)

  /* ---------- หน้า Info ---------- */
  info: {
    summary: 'คณะนิเทศศาสตร์ เอกมัลติมีเดีย มหาวิทยาลัยรังสิต เกียรตินิยม',
    education: [
      { period: '', title: 'มหาวิทยาลัยรังสิต', detail: 'คณะนิเทศศาสตร์ เอกมัลติมีเดีย · เกียรตินิยม' },
      { period: '20XX – 20XX', title: '(ตัวอย่าง) คอร์สหรือการอบรม', detail: 'ชื่อคอร์ส / ผู้สอน / ใบประกาศ (ถ้ามี)' }
    ],
    experience: [
      { period: '20XX – ปัจจุบัน', title: '(ตัวอย่าง) ตำแหน่ง', org: 'ชื่อองค์กร หรือ Freelance',
        points: ['สิ่งที่รับผิดชอบหลัก', 'ผลงานหรือโปรเจกต์เด่น'] },
      { period: '20XX – 20XX', title: '(ตัวอย่าง) ตำแหน่ง', org: 'ชื่อองค์กร หรือ Freelance',
        points: ['สิ่งที่รับผิดชอบหลัก', 'ผลงานหรือโปรเจกต์เด่น'] }
    ],
    hard: [
      { group: 'Photography', items: ['Portrait', 'Candid', 'Studio lighting'] },
      { group: 'Editing', items: ['Photo retouching', 'Color grading', 'Video editing'] },
      { group: 'Software', items: ['(ชื่อโปรแกรม 1)', '(ชื่อโปรแกรม 2)', '(ชื่อโปรแกรม 3)'] },
      { group: 'Equipment', items: ['(กล้อง)', '(เลนส์)', '(ไฟ / อุปกรณ์อื่น)'] }
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
  galleries: [
    { id: 'color', title: 'Color', folder: 'images/color/',
      blurb: 'Red sweeps, denim, white backdrops and silhouettes cut out by a single light.',
      photos: [
        { f:'color-01.jpg', w:1333, h:2000, t:'candid',   alt:'Woman in a blue denim set smiling, long hair falling across the foreground' },
        { f:'color-02.jpg', w:1333, h:2000, t:'portrait', alt:'Model in a black leather jacket and stockings kneeling in a white spotlight on a red backdrop' },
        { f:'color-03.jpg', w:2000, h:1333, t:'candid',   alt:'Man in a black suit with his back to the camera facing a woman in black, white studio backdrop' },
        { f:'color-04.jpg', w:1333, h:2000, t:'portrait', alt:'Two women in denim and lace tops embracing against a white backdrop' },
        { f:'color-05.jpg', w:1333, h:2000, t:'portrait', alt:'Silhouette of a person with a high ponytail, hands together, against a red backdrop' },
        { f:'color-06.jpg', w:2000, h:1333, t:'portrait', alt:'Two women standing close in light blue and white outfits on a white backdrop' },
        { f:'color-07.jpg', w:1333, h:2000, t:'portrait', alt:'Model in a leather jacket with a hand raised to her face, seated in a spotlight on red' },
        { f:'color-08.jpg', w:2000, h:1333, t:'candid',   alt:'Two women with long hair looking out through a narrow gap between dark panels' },
        { f:'color-09.jpg', w:1333, h:2000, t:'portrait', alt:'Silhouette of a person with a ponytail looking upward against a red backdrop' },
        { f:'color-10.jpg', w:2000, h:1333, t:'candid',   alt:'Five people in black and white outfits standing in a row between studio lights' }
      ]},
    { id: 'bw', title: 'Black & White', folder: 'images/bw/',
      blurb: 'Tuxedos, spotlights and long shadows. Contrast first, grain left in.',
      photos: [
        { f:'bw-01.jpg', w:1333, h:2000, t:'portrait', alt:'Man in a tuxedo and bow tie lit by a hard spotlight, shadow on the wall' },
        { f:'bw-02.jpg', w:1333, h:2000, t:'portrait', alt:'Standing portrait of a man in a tuxedo and bow tie against a spotlit backdrop' },
        { f:'bw-03.jpg', w:1333, h:2000, t:'candid',   alt:'Woman in black having her makeup touched up, a brush at her face' },
        { f:'bw-04.jpg', w:1333, h:2000, t:'portrait', alt:'Figure in a long coat with arms spread inside a pool of light, shadow behind' },
        { f:'bw-05.jpg', w:1333, h:2000, t:'portrait', alt:'Woman in a black dress in profile with studio lights behind her' },
        { f:'bw-06.jpg', w:1333, h:2000, t:'portrait', alt:'Two women in black leaning close together' },
        { f:'bw-07.jpg', w:1333, h:2000, t:'portrait', alt:'Model crouched in a leather jacket and heels inside a white spotlight circle' },
        { f:'bw-08.jpg', w:1333, h:2000, t:'candid',   alt:'Model in a leather jacket touching her face in a spotlight, crew in the dark beside her' },
        { f:'bw-09.jpg', w:1333, h:2000, t:'portrait', alt:'Man in a dark suit in profile, hand at his collar' },
        { f:'bw-10.jpg', w:1333, h:2000, t:'portrait', alt:'Man in a tuxedo standing in a spotlight with a long shadow behind him' },
        { f:'bw-11.jpg', w:1333, h:2000, t:'portrait', alt:'Woman in a black dress in profile, studio equipment behind her' },
        { f:'bw-12.jpg', w:1333, h:2000, t:'portrait', alt:'Two women in denim and lace tops embracing on a bright high-key backdrop' },
        { f:'bw-13.jpg', w:1333, h:2000, t:'candid',   alt:'Man in a suit standing among studio stands and equipment' }
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
    { title: 'Video 01', https://www.tiktok.com/@scrumpgelateria/video/7598813310141713672: '', cover: 'images/cover/cover-01.jpg' },
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
      lead: '(ตัวอย่าง) ถ่ายภาพและวิดีโออีเวนต์ ตั้งแต่เปิดงานจนปิดงาน ส่งไฮไลต์ได้เร็ว',
      items: ['Event photo & video coverage', 'Highlight reel', 'Same-day edit', 'Backstage & candid moments']
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
    }
  }
};
