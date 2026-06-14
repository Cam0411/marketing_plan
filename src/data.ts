import { CampaignPhase, KOCSelection, CoffeeShop, BudgetAlloc } from './types';

export const campaignPhases: CampaignPhase[] = [
  {
    id: 'trigger',
    name: 'Phase 1: Trigger',
    vnName: 'Giai Đoạn 1: Nhận Diện',
    timeframe: 'Tháng 1 - Tháng 2',
    budget: 95000000,
    insight: 'Người trẻ không thiếu thông tin về tầm quan trọng của nghỉ ngơi — họ thiếu sự cho phép. Xã hội dạy họ phải kiếm lấy quyền được nghỉ.',
    contextAndProblem: 'Người trẻ 22-32 tuổi tại TP.HCM đang sống trong văn hóa "hustle" — Năng suất là thước đo giá trị bản thân. Nghỉ ngơi bị gắn với cảm giác tội lỗi. Thương hiệu nến xuất hiện với vai trò tạo ra khoảng lặng có chủ đích.',
    objectiveText: 'Tạo nhận thức ban đầu — gợi lên câu hỏi tâm điểm: "Lần cuối bạn thực sự nghỉ ngơi là khi nào?" trong tâm trí người trẻ. Giai đoạn này chưa lộ diện thương hiệu và chưa bán hàng.',
    reachTarget: 'Reach: 200,000 - 300,000 lượt tiếp cận',
    engagementTarget: 'Interaction: 300+ tương tác thực chất trên social',
    conversionTarget: 'Workshop 1: 20+ người tham gia & 5+ UGC',
    keyMessage: '"Lần cuối cùng bạn thực sự dành thời gian cho bản thân là khi nào?" — Không phán xét, không giải pháp, chỉ đặt câu hỏi chạm vào cảm giác mơ hồ âm thầm mang theo.',
    keyHook: 'Teaser "Cảnh nến trôi" + Poster typography tối giản',
    keyHookDetail: 'Loạt video TikTok/Reels 15-20s quay cận cảnh nến cháy chậm, wax tan, không lời, chỉ kèm caption câu hỏi. Poster typography chữ lớn trên nền kem đặt tại quán cà phê đối tác: "Lần cuối bạn thực sự nghỉ ngơi là khi nào?" không logo, không sản phẩm, gây tò mò cực độ.',
    milestones: [
      'Tháng 1: Setup — Chụp hình phong cách warm minimalism, quay teaser, in poster, liên hệ 2-3 quán cafe đối tác, lên danh sách KOC.',
      'Tháng 2: Bắt đầu đăng teaser content diện rộng. Workshop buổi 1 (cuối tháng 2). Thúc đẩy ads/boost nhẹ.'
    ],
    quickWins: [
      'Poster tại quán cà phê được chụp lại và đăng lên MXH tự nhiên (earned media).',
      'Có ít nhất 1 video teaser TikTok đạt 10.000 - 30.000 views tự nhiên.',
      'Workshop buổi 1 lấp đầy 20 chỗ và thu về tối thiểu 5 bài đăng UGC.'
    ],
    supportingTactics: [
      'Đặt poster tối giản trên giấy kraft cao cấp tại các quán đối tác Q.1, Q.3, Bình Thạnh.',
      'Hợp tác đổi quà (barter) nến trang trí cho quán để nhận chỗ đặt poster miễn phí.',
      'Sản xuất bộ ảnh "Nến trong quán café" sử dụng cho content cả tháng.'
    ],
    channels: [
      { name: 'A. Content Production', type: 'Sản xuất Nội dung', desc: 'Video teaser (8M), Ảnh warm minimalism (12M), Thiết kế poster (6M), In poster offset (1M), Rest Card (1.1M), Copywriting (9.9M)', budget: 38000000 },
      { name: 'B. Workshop Offline', type: 'Trực tiếp / Trải nghiệm', desc: 'Venue quán cafe đối tác barter (0M) & Chi phí tổ chức nước uống, setup, in tài liệu cho học viên (8M)', budget: 8000000 },
      { name: 'C. KOC Seeding', type: 'Influencer Marketing', desc: 'Micro KOC (10M) + Nano KOC (4M) và Bộ quà tặng unboxing gửi kèm (6M)', budget: 20000000 },
      { name: 'D. Ads & Paid Media', type: 'Paid Media Awareness', desc: 'TikTok Ads boost video (14M), Facebook/Instagram Ads target HCMC (10M), Zalo Ads local target (5M)', budget: 29000000 }
    ],
    communicationTools: [
      'Poster typography tối giản kích thước A2/A3, thiết kế mộc mạc.',
      'Short-form teaser quay chân thật bằng điện thoại mộc, độ ấm cao.',
      'Instagram Story Polls & Question stickers.'
    ],
    kpis: [
      { metric: 'Tổng lượt Reach', target: '200,000 - 300,000', current: '0' },
      { metric: 'View TikTok trung bình', target: '10,000 - 30,000 / video', current: '0' },
      { metric: 'Interaction thực tế', target: '300+ comment sâu sắc', current: '0' },
      { metric: 'Workshop #1', target: '20+ người tham gia & 5+ UGC', current: '0' },
      { metric: 'Followers mới', target: '+150 - 200 followers', current: '0' }
    ]
  },
  {
    id: 'engage',
    name: 'Phase 2: Engage',
    vnName: 'Giai Đoạn 2: Kết Nối',
    timeframe: 'Tháng 2 - Tháng 4',
    budget: 130000000,
    insight: '"Rest Is Not A Reward" — Nghỉ ngơi không phải phần thưởng. Bạn không cần phải cắm đầu làm việc đến kiệt sức rồi coi 10 phút nghỉ là phần thưởng thắt lưng buộc bụng.',
    contextAndProblem: 'Sau khi đã khơi gợi tò mò, thương hiệu ra mắt thông điệp chính diện. Tạo ra các không gian trò chuyện chuyên sâu thay vì quảng cáo sản phẩm thuần túy. Biến mùi hương nến thành điểm tựa vật chất cho khoảng lặng.',
    objectiveText: 'Thay đổi tư duy từ "làm xong mới nghỉ" sang "nghỉ là nền tảng". Tạo tương tác tích cực, lưu trữ bài viết, thảo luận sôi nổi về văn hóa kiệt sức. Củng cố lượng thành viên workshop.',
    reachTarget: 'Reach: 500,000+ thông quan KOC & PR',
    engagementTarget: 'Engagement: Rate trung bình 4-6% trên IG/TikTok',
    conversionTarget: 'Workshop: 25-35 người/buổi, tỷ lệ quay lại 30%+',
    keyMessage: '"Nghỉ ngơi không phải phần thưởng. Đó là nhu cầu bạn luôn xứng đáng có." — Thương hiệu đứng về phía khách hàng và mở ra quyền được dừng lại.',
    keyHook: 'Workshop offline thảo luận ấm cúng + Seeding KOC chân thật',
    keyHookDetail: 'Chuỗi workshop định kỳ 1 lần/tháng tại quán cafe gỗ ấm áp. Nội dung: Burnout thảo luận, viết journal, học thiền chuông hoặc cắm hoa kết hợp đốt nến. KOC tham dự trực tiếp buổi workshop để tạo nội dung tự nhiên, không thương mại.',
    milestones: [
      'Tháng 3: Chính thức công bố Big Idea "Rest Is Not A Reward". Triển khai KOC đợt 2, workshop buổi 2 và đăng bài editorial trên Pages cộng đồng.',
      'Tháng 4: Duy trì content kết nối đều đặn. KOC seeding đợt 3. Tổ chức workshop buổi 3. Đánh giá giữa kỳ.'
    ],
    quickWins: [
      'Ít nhất 1 bài viết KOC đạt 50.000+ reach tự nhiên.',
      'Bài viết PR được chọn đăng miễn phí trên các báo/page phong cách sống của người trẻ.',
      'Engagement rate Instagram tăng vượt mốc 4% và tăng >500 followers mới.'
    ],
    supportingTactics: [
      'In ấn "Rest Ritual Card" — tấm thiệp giấy kraft in 5 cách thực hành nghỉ ngơi dễ chịu, tặng kèm mỗi hộp nến.',
      'Pitch bài viết miễn phí đến các group như Humans of Saigon về văn hóa sống chậm của Gen Z.',
      'Lên bài carousel thiết kế thơ mộng trên IG giúp kích hoạt lượt SAVE bài cao.'
    ],
    channels: [
      { name: 'Instagram Feed/Carousel', type: 'Education & Vibes', desc: 'Đăng các bộ ảnh bento, hướng dẫn ritual và cách hồi phục.', budget: 15000000 },
      { name: 'TikTok KOC Stream', type: 'Influencer Seeding', desc: 'Seeding KOC chia sẻ nhật ký burnout thật của bản thân, thắp nến xoa dịu.', budget: 30000000 },
      { name: 'Facebook Community', type: 'Long-form Post', desc: 'Các bài viết dài chạm cảm xúc trên Group tâm lý, lối sống.', budget: 5000000 },
      { name: 'Workshop Offline', type: 'Direct Experience', desc: 'Bao gồm chi phí thuê quán đối tác, decor, đồ uống, quà tặng nến mini.', budget: 16000000 },
      { name: 'Boost Content Ads', type: 'Paid Media', desc: 'Quảng cáo tăng tương tác bài hướng dẫn, carousel lưu trữ.', budget: 25000000 },
      { name: 'PR & Editorial Pitching', type: 'Earned Media Focus', desc: 'Đặt bài viết sâu sắc hoặc chi ngân sách đăng tải trên các kênh trẻ chất lượng.', budget: 20000000 }
    ],
    communicationTools: [
      'Sách ảnh dạng Carousel hướng dẫn phục hồi sức khỏe tinh thần.',
      'Workshop gỗ ấm: Slide chia sẻ thân thiện, nến sáp đậu nành tỏa mùi hương dịu mát.',
      'Gift card "Rest Ritual Card" in offset mộc mạc.',
      'Sản phẩm nến hũ mini làm quà tặng thử nghiệm.'
    ],
    kpis: [
      { metric: 'Engagement Rate', target: '4% - 6% trên Instagram', current: '0' },
      { metric: 'Lượt xem KOC bài viết', target: '30,000 - 80,000 / bài', current: '0' },
      { metric: 'Workshop RSVP', target: '25 - 35 khách, quay lại 30%+', current: '0' },
      { metric: 'Lượt đọc PR Editorial', target: '5,000+ lượt đọc', current: '0' },
      { metric: 'Lưu trữ Carousel', target: 'Save rate > 3%', current: '0' }
    ]
  },
  {
    id: 'amplify',
    name: 'Phase 3: Amplify',
    vnName: 'Giai Đoạn 3: Lan Tỏa',
    timeframe: 'Tháng 5 - Tháng 6',
    budget: 90000000,
    insight: '"Bắt đầu khoảng lặng của bạn — chỉ với một ngọn nến." Chuyển từ suy nghĩ sang làm. Ngọn nến là công cụ dễ nhất, khi thắp lên, nó đánh dấu khoảnh khắc không lo lắng nữa.',
    contextAndProblem: 'Khách hàng mục tiêu đã trân trọng thông điệp. Giờ là lúc họ chia sẻ trải nghiệm nghỉ ngơi tự thân của họ, thúc đẩy UGC (User Generated Content). Ra mắt set sản phẩm bundle giới hạn để chốt doanh số và bùng nổ workshop tổng kết.',
    objectiveText: 'Tăng UGC thực tế tự nhiên, thúc đẩy hành vi mua nến để tạo ritual riêng. Đạt mức tăng trưởng doanh số 30% trước tháng 6.',
    reachTarget: 'Reach: Tiếp cận thêm 150,000 lượt qua UGC',
    engagementTarget: 'UGC Campaign: 200 - 400 bài đăng hashtag thực chất',
    conversionTarget: 'Doanh số tăng 30%. Sạch kho 100 set "Rest Kit" limited trong 2 tuần.',
    keyMessage: '"Bắt đầu khoảng lặng của bạn — chỉ với một ngọn nến." — Đốt nến không chỉ để thơm, mà để chính thức tuyên bố: Tôi bắt đầu dừng lại nghỉ ngơi.',
    keyHook: 'Hashtag Challenge "Khoảng Lặng Của Tôi" + Bundle giới hạn "Rest Kit"',
    keyHookDetail: 'Thử thách khoe góc bàn hoặc giường nghỉ ngơi mộc mạc có thắp nến ấm áp. Ra mắt "Rest Kit" hộp giấy lồng mộc mạc bao gồm 1 nến hũ lớn, 1 thiệp hướng dẫn, 1 túi giấy thắt dây thừng tối giản. Workshop tổng kết Tháng 6 quy mô lớn ấm cúng.',
    milestones: [
      'Tháng 5: Kích hoạt Hashtag UGC. Ra mắt set quà "Rest Kit". Triển khai ads retargeting bám đuổi hành vi mua. Tổ chức workshop buổi 4.',
      'Tháng 6: Chiến dịch cán đích doanh số. Workshop buổi 5 quy mô lớn (40-50 người) có trưng bày pop-up nến. Tổng kết, phân tích KPI chiến dịch.'
    ],
    quickWins: [
      'Bán hết toàn bộ 100 set Rest Kit giới hạn chỉ trong nửa tháng.',
      'Có hơn 200 bài UGC tự nhiên khoe nến và góc chill trên TikTok/Instagram.',
      'Workshop tổng kết đón nhận hơn 40 học viên tham dự vui vẻ.'
    ],
    supportingTactics: [
      'Thiết kế bao bì dạng túi kraft in tuyên ngôn "Rest is not a reward" để người mua cầm đi phố cũng lan tỏa thông điệp.',
      'Email marketing & Zalo nhắn gửi quà tri ân khách hàng cũ tham gia workshop để up-sell.',
      'Chạy quảng cáo đeo bám (retargeting) nhỏ hướng tới những người từng lưu trữ bài viết ở Phase 2.'
    ],
    channels: [
      { name: 'TikTok & IG Hashtag UGC', type: 'Community UGC', desc: 'Thử thách đăng ảnh/video chiếc nến bên khoảng lặng của khách hàng.', budget: 15000000 },
      { name: 'Retargeting Facebook/IG Ads', type: 'Paid Media Purchase', desc: 'Ads chuyển đổi hướng đến tệp đã tương tác, thu hút mua Rest Kit.', budget: 20000000 },
      { name: 'Rest Kit Production', type: 'Product Bundle', desc: 'Sản xuất bao bì túi kraft, hộp giấy thiết kế giới hạn chốt doanh số.', budget: 15000000 },
      { name: 'Workshop Buổi 4 & 5', type: 'Offline Finale', desc: 'Setup workshop tổng kết hoành tráng, kèm không gian trưng bày pop-up nến.', budget: 20000000 },
      { name: 'Zalo / Email Marketing', type: 'Owned CRM', desc: 'Hệ thống gửi thư mời, chăm sóc độc giả cũ từ workshop trước.', budget: 20000000 }
    ],
    communicationTools: [
      'Hashtag #RestIsNotAReward liên kết xuyên suốt.',
      'Bộ hộp quà giới hạn "Rest Kit" mộc mạc nhưng cá nhân hóa cực cao.',
      'Thư ngỏ cảm ơn viết tay đính kèm từ chính người sáng lập.',
      'Layout pop-up nến tràn ngập ánh nến ấm trong đêm workshop final.'
    ],
    kpis: [
      { metric: 'UGC Hashtag Posts', target: '200 - 400 bài thực chất', current: '0' },
      { metric: 'Doanh số bán Rest Kit', target: 'Bán hết 50 - 100 set trong 14 ngày', current: '0' },
      { metric: 'Tăng trưởng doanh thu', target: '+30% so với tháng 1', current: '0' },
      { metric: 'Thành viên workshop cuối', target: '40 - 50 người, đông đảo ấm cúng', current: '0' },
      { metric: 'ROAS Ads Retargeting', target: 'Tối thiểu 2x', current: '0' }
    ]
  }
];

export const mockKOCs: KOCSelection[] = [
  {
    id: 'koc-1',
    name: 'An Nhiên Wellness',
    username: '@annhien.healing',
    followerCount: 45000,
    fee: 4000000,
    engagementRate: 6.8,
    category: 'Wellness',
    selected: true,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'koc-2',
    name: 'Thư Sài Gòn Độc Hành',
    username: '@thudidau',
    followerCount: 28000,
    fee: 3000000,
    engagementRate: 5.2,
    category: 'Lifestyle',
    selected: true,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'koc-3',
    name: 'Phương Vy - Minimalist',
    username: '@vy.itworks',
    followerCount: 75000,
    fee: 6500000,
    engagementRate: 4.5,
    category: 'Mindfulness',
    selected: false,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'koc-4',
    name: 'Linh Freelancer Sống Chậm',
    username: '@linh.freelance',
    followerCount: 15400,
    fee: 2500000,
    engagementRate: 7.4,
    category: 'Freelance',
    selected: true,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'koc-5',
    name: 'Hà Giang - Cô Gái Văn Phòng',
    username: '@hagiang.worklife',
    followerCount: 32000,
    fee: 4500000,
    engagementRate: 5.9,
    category: 'Office',
    selected: false,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  }
];

export const mockCoffeeShops: CoffeeShop[] = [
  {
    id: 'shop-1',
    name: 'Nấp Sài Gòn (Mộc & Yên)',
    address: 'Hẻm 3/5 Nguyễn Văn Thủ, Đa Kao, Quận 1',
    area: 'Q.1',
    feePerSession: 4000000,
    capacity: 25,
    aesthetic: 'Quiet Wood & Green Minimalism, rèm vải thô trắng, bàn ghế sồi cũ mộc mạc',
    selected: true,
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 'shop-2',
    name: 'Bản Cà Phê (Không Gian Sách & Trầm)',
    address: 'Lầu 2, 38/7 Lê Lợi, Bến Nghé, Quận 1',
    area: 'Q.1',
    feePerSession: 4500000,
    capacity: 35,
    aesthetic: 'Vintage Warm Gỗ Đậm Sâu, ánh sáng vàng mút mắt, tủ sách cao ngập tường',
    selected: true,
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 'shop-3',
    name: 'Ollin Cafe Premium',
    address: '300 Nguyễn Thị Thập, Tân Quy, Quận 7',
    area: 'Q.2',
    feePerSession: 6000000,
    capacity: 50,
    aesthetic: 'Industrial White Minimalism, tường xi măng thô mờ, ánh sáng giếng trời rộng',
    selected: false,
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 'shop-4',
    name: 'Chữ Ký Sài Gòn Cafeteria',
    address: '82 Ngô Tất Tố, Phường 19, Bình Thạnh',
    area: 'Bình Thạnh',
    feePerSession: 3500000,
    capacity: 30,
    aesthetic: 'Eco-minimalism, vườn rêu ẩm, lát đá xám nhạt, cửa kính ngập nắng ấm buổi chiều',
    selected: true,
    image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&q=80&w=500'
  }
];

export const coreStakeholders = [
  { role: 'Khán Giả Mục Tiêu (Nữ 22-32)', priority: 'Độ ưu tiên 1', desc: 'Nữ văn phòng kiêm freelancer sống tại TP.HCM, thu nhập 8-20tr, thường xuyên burnout do sức ép xã hội, thích đi cà phê đẹp mộc mạc.' },
  { role: 'KOC (Tệp Sống Đẹp / Chữa Lành)', priority: 'Độ ưu tiên 2', desc: 'Có từ 10K - 100K followers, chia sẻ chân thành đời thường không phô trương, tương tác thực cao, chi phí hợp lý 3-8tr/bài.' },
  { role: 'Cộng Đồng Workshop Tận Tâm', priority: 'Độ ưu tiên 3', desc: 'Những học viên tham gia workshop cũ đóng vai trò là tiếng nói truyền tai tin cậy số một thúc đẩy UGC.' },
  { role: 'Quán Cà Phê Đối Tác Thơ Mộng', priority: 'Độ ưu tiên 4', desc: 'Địa điểm tĩnh lặng thích hợp tone màu mộc thô, tổ chức workshop và treo poster độc quyền dạng barter hoặc chi phí bồi dưỡng mỏng.' },
  { role: 'Các Trang Truyền Thông Tự Do (Earned)', priority: 'Độ ưu tiên 5', desc: 'Các group Humans of Saigon dòng tâm tình tự sự, viết bài sâu và có cảm xúc để kéo tin đăng tự nhiên.' },
  { role: 'Đội Ngũ Vận Hành Dự Án', priority: 'Độ ưu tiên 6', desc: 'Gồm 1 Brand Lead điều phối chung, 1 Content/Photographer kiêm nhiệm, và 1 Social Exec chạy việc mượt mà.' }
];
