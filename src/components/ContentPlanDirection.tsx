import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  Layers, 
  Users, 
  Target, 
  Award, 
  Compass, 
  Plus, 
  Minus, 
  Volume2, 
  Search, 
  HelpCircle,
  Megaphone,
  TrendingUp,
  Share2,
  Gift,
  Coins,
  BadgeAlert,
  Sparkles,
  ChevronRight,
  BookOpen,
  CheckCircle2
} from 'lucide-react';

interface TrackerRow {
  metric: string;
  planValues: number[]; // 9 columns representing 9 Cycles (Weeks 1 to 18)
  actualValues: number[];
}

export function ContentPlanDirection() {
  const [activeSubTab, setActiveSubTab] = useState<'tracker' | 'direction' | 'media'>('tracker');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChannelFilter, setSelectedChannelFilter] = useState<'all' | 'tiktok' | 'instagram' | 'facebook'>('all');
  const [selectedPillarFilter, setSelectedPillarFilter] = useState<'all' | 'pillar1' | 'pillar2' | 'pillar3'>('all');
  
  // Active channel card index for Media Strategy tab
  const [selectedMediaChannel, setSelectedMediaChannel] = useState<string>('advertising');

  // Interactive state for Content Execution Tracker (Plan vs Actual)
  const [trackerData, setTrackerData] = useState<TrackerRow[]>([
    {
      metric: 'Tổng bài đã sản xuất',
      planValues: [12, 12, 16, 16, 12, 12, 10, 10, 8],
      actualValues: [12, 12, 15, 14, 11, 10, 8, 4, 0]
    },
    {
      metric: 'Số bài đã duyệt',
      planValues: [12, 12, 16, 16, 12, 12, 10, 10, 8],
      actualValues: [12, 11, 15, 13, 11, 9, 7, 3, 0]
    },
    {
      metric: 'Tổng bài đã đăng',
      planValues: [12, 12, 16, 16, 12, 12, 10, 10, 8],
      actualValues: [12, 11, 14, 12, 10, 8, 5, 2, 0]
    }
  ]);

  const cycleLabels = [
    'Đợt 1 (W1-2)', 'Đợt 2 (W3-4)', 'Đợt 3 (W5-6)', 'Đợt 4 (W7-8)',
    'Đợt 5 (W9-10)', 'Đợt 6 (W11-12)', 'Đợt 7 (W13-14)', 'Đợt 8 (W15-16)', 'Đợt 9 (W17-18)'
  ];

  // Modify actual metrics interactively
  const handleModifyValue = (rowIdx: number, valIdx: number, increment: boolean) => {
    setTrackerData(prev => prev.map((row, rIdx) => {
      if (rIdx === rowIdx) {
        const copy = [...row.actualValues];
        const current = copy[valIdx];
        const updated = increment ? current + 1 : Math.max(0, current - 1);
        copy[valIdx] = updated;
        return { ...row, actualValues: copy };
      }
      return row;
    }));
  };

  // Modify whole columns easily (e.g. fast filling for a cycle during meetings)
  const [editingCycleIdx, setEditingCycleIdx] = useState<number>(0);
  const handleFastUpdateCycle = (rowIdx: number, value: string) => {
    const num = parseInt(value, 10) || 0;
    setTrackerData(prev => prev.map((row, rIdx) => {
      if (rIdx === rowIdx) {
        const copy = [...row.actualValues];
        copy[editingCycleIdx] = Math.max(0, num);
        return { ...row, actualValues: copy };
      }
      return row;
    }));
  };

  // Content Direction Dataset from user request
  const directionRows = [
    {
      id: 'pillar1',
      channels: ['TikTok', 'Instagram', 'Facebook'],
      rawChannels: 'TikTok Instagram Facebook',
      target: 'Nam/Nữ 22–32 tuổi, đi làm văn phòng hoặc freelance tại TP.HCM. Thu nhập 8–20 triệu/tháng. Đang chịu áp lực năng suất, hay cảm thấy tội lỗi khi nghỉ ngơi. Thường xuyên lướt TikTok & Instagram, hay lui tới quán cà phê.',
      goals: [
        { phase: 'Nhận thức (Awareness)', desc: 'Hiểu rằng nghỉ ngơi không phải phần thưởng — đó là nhu cầu cơ bản. Không cần phải "kiếm lấy" quyền được dừng lại.' },
        { phase: 'Cân nhắc (Consideration)', desc: 'Thấy thương hiệu nến là người bạn đồng hành trong hành trình tạo ritual nghỉ ngơi — không phải sản phẩm xa xỉ hay trang trí đơn thuần.' },
        { phase: 'Chuyển đổi (Conversion)', desc: 'Mua nến như hành động đầu tiên để bắt đầu ritual nghỉ ngơi có chủ đích. Tham gia workshop hằng tháng.' }
      ],
      productOffer: 'Nến thương hiệu: Vật thể hoá của khoảng lặng có chủ đích. Không chỉ bán mùi hương hay thẩm mỹ — bán quyền được dừng lại và hiện diện với bản thân.',
      pillarTitle: 'PILLAR 1: GIÁO DỤC & GÓC NHÌN (Education)',
      pillarDesc: 'Thay đổi nhận thức về văn hóa nghỉ ngơi. Cung cấp góc nhìn mới về burnout, hustle culture, self-care thực chất.',
      angles: {
        awareness: [
          '5 dấu hiệu bạn đang nghỉ ngơi sai cách',
          'Sự khác biệt giữa nghỉ ngơi thực sự và chuyển áp lực',
          'Tại sao bạn cảm thấy tội lỗi khi không làm gì?',
          'Hustle culture đang lấy đi gì của bạn?'
        ],
        consideration: [
          'Nghỉ ngơi không có nghĩa là không làm gì',
          'Rest culture vs lazy culture — khác nhau ở đâu?',
          'Lần cuối bạn thực sự hiện diện với bản thân là khi nào?',
          'Người thành công nhất cũng biết cách dừng lại'
        ],
        conversion: [
          'Bắt đầu khoảng lặng của bạn — chỉ với một ngọn nến',
          'Thắp nến là cách tôi nói với bản thân: tôi được phép dừng lại'
        ]
      },
      format: [
        'Carousel Instagram (5–7 slides, typography tối giản)',
        'Video TikTok dạng "did you know" (15–30s)',
        'Bài viết dài Facebook (cảm xúc, không bán hàng)'
      ],
      toneRules: 'Không phán xét. Không thuyết giáo. Nói như một người bạn hiểu chuyện. Dùng "bạn" — gần gũi, không khoảng cách. Tránh ngôn ngữ clinical hay học thuật.'
    },
    {
      id: 'pillar2',
      channels: ['TikTok', 'Instagram'],
      rawChannels: 'TikTok Instagram',
      target: 'Nam/Nữ 22–32 tuổi, thích nội dung visual đẹp, cảm xúc. Hay xem video ASMR, slow-life, lifestyle. Đang tìm kiếm cảm giác bình yên trong cuộc sống bận rộn.',
      goals: [
        { phase: 'Nhận thức (Awareness)', desc: 'Gây ấn tượng bằng hình ảnh — không cần lời, chỉ cần cảm xúc. Tạo sự liên kết cảm xúc giữa ngọn nến và khoảnh khắc dừng lại.' },
        { phase: 'Cân nhắc (Consideration)', desc: 'Người xem bắt đầu liên kết hình ảnh ngọn nến với cảm giác được phép nghỉ ngơi — không phải với trang trí hay mùi hương đơn thuần.' },
        { phase: 'Lan tỏa (Amplify)', desc: 'UGC tự nhiên — người dùng tự quay "khoảng lặng của tôi" và tag thương hiệu.' }
      ],
      productOffer: 'Nến thương hiệu + Không gian sống: Visual sản phẩm trong môi trường tự nhiên — gỗ, linen, đất nung, ánh nến vàng. Không background trắng studio. Luôn trong không gian sống thực tế.',
      pillarTitle: 'PILLAR 2: CẢM XÚC & LIFESTYLE (Emotion & Lifestyle)',
      pillarDesc: 'Tạo cảm giác — không giải thích. Người xem thấy hình ảnh và tự cảm nhận được sự bình yên, quyền được dừng lại.',
      angles: {
        awareness: [
          'Cảnh nến cháy slow-motion, wax tan chảy, khói nến — không lời, chỉ ASMR âm thanh tự nhiên',
          'Góc tối giản của tôi vào cuối ngày',
          'Ritual buổi tối 10 phút của tôi',
          'Những thứ tôi làm khi không muốn làm gì cả',
          'POV: Bạn vừa cho phép bản thân nghỉ ngơi'
        ],
        consideration: [
          'Không cần lý do để thắp một ngọn nến',
          'Cuối ngày dài, chỉ cần điều này thôi',
          'Khoảng 10 phút trước khi ngủ — của riêng tôi',
          'Workshop recap: cảnh người ngồi trò chuyện, nến trên bàn, không gian ấm áp'
        ],
        conversion: [
          'Khoảng lặng của tôi trông như thế này (UGC prompt)',
          'Repost ảnh/video người dùng với caption ngắn của thương hiệu'
        ]
      },
      format: [
        'Reels TikTok/Instagram (15–30s, không lời hoặc voiceover nhẹ)',
        'Video ASMR nến (30–60s)',
        'POV video (góc nhìn thứ nhất, rất gần gũi)',
        'Ảnh lifestyle đơn (feed Instagram, tone warm minimalism)'
      ],
      toneRules: 'Không bao giờ dùng CTA bán hàng trong loại content này. Để cảm xúc tự nói. Caption ngắn — 1 câu hoặc 1 câu hỏi. Không hashtag dày đặc. Âm nhạc: lo-fi, ambient, không lời.'
    },
    {
      id: 'pillar3',
      channels: ['TikTok', 'Instagram', 'Facebook'],
      rawChannels: 'TikTok Instagram Facebook Shop Email Zalo_OA',
      target: 'Nam/Nữ 22-32 tuổi đã biết đến thương hiệu qua Pillar 1 & 2. Đang cân nhắc mua hoặc tham gia workshop. Cần một lý do cụ thể để hành động.',
      goals: [
        { phase: 'Cân nhắc (Consideration)', desc: 'Hiểu rõ sản phẩm, thấy được giá trị thực tế. Tò mò về workshop — muốn tham gia thử.' },
        { phase: 'Chuyển đổi (Conversion)', desc: 'Đăng ký workshop. Mua nến hoặc bundle Rest Kit. Giới thiệu bạn bè.' }
      ],
      productOffer: 'Nến thương hiệu (review thực tế) + Bundle Rest Kit + Workshop hằng tháng: Giới thiệu tự nhiên qua trải nghiệm thật — không quảng cáo cứng.',
      pillarTitle: 'PILLAR 3: CỘNG ĐỒNG & THỰC TẾ (Community & Social Proof)',
      pillarDesc: 'Người thật, trải nghiệm thật. KOC chia sẻ tự nhiên. Workshop recap. UGC từ người tham gia. Tạo cảm giác "có một cộng đồng ở đây dành cho mình".',
      angles: {
        awareness: [
          'KOC/người dùng chia sẻ: "Tôi đã thử tạo ritual nghỉ ngơi 7 ngày — đây là kết quả"',
          'Workshop recap video: cảnh người ngồi trò chuyện, nến, không gian quán cà phê ấm áp',
          'Tôi đã đến buổi workshop tháng này — và đây là điều tôi mang về',
          'Unboxing bundle Rest Kit tự nhiên (không kịch bản cứng)',
          'AOV (Add-on Value) content: video ngắn hướng dẫn cách tạo ritual với nến (15–30s)'
        ],
        consideration: [
          'Workshop tháng này còn [X] chỗ — đây là những gì chúng tôi sẽ nói về',
          'Testimonial ngắn từ người đã tham gia workshop tháng trước',
          'Rest Kit tháng này — limited 100 set'
        ],
        conversion: [
          'Đồng hồ điểm 10 giờ đêm, hương thảo mộc và không còn áp lực'
        ]
      },
      format: [
        'Video KOC (TikTok/Reels, 30–60s, chân thật — không quá commercial)',
        'Workshop recap video (60–90s, dạng mini vlog)',
        'Ảnh KOC lifestyle có sản phẩm xuất hiện tự nhiên',
        'Story Instagram (swipe up / link bio)',
        'Facebook post ngắn có CTA rõ ràng',
        'Email/Zalo OA cho khách cũ'
      ],
      toneRules: 'KOC không được dùng ngôn ngữ quảng cáo ("sản phẩm này tuyệt vời", "mua ngay"). Ưu tiên KOC kể câu chuyện cá nhân. Thương hiệu repost và comment tự nhiên. Không bao giờ fake review hay dàn dựng quá lộ liễu. Chỉ CTA ở Pillar 3 — không CTA ở Pillar 1 & 2. CTA phải nhẹ nhàng: "Nếu bạn tò mò, link ở bio." Không đếm ngược áp lực, không "mua ngay kẻo hết" — không phù hợp tone thương hiệu.'
    }
  ];

  // Media Strategy Dataset based entirely on the user's detailed table description
  const mediaStrategies = [
    {
      id: 'advertising',
      name: 'ADVERTISING',
      vietnameseName: 'Quảng cáo Trả phí',
      icon: Megaphone,
      color: 'blue',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-600',
      textColor: 'text-blue-900',
      accentColor: 'rgba(37, 99, 235, 1)',
      objective: 'Tạo nhận diện thương hiệu rộng rãi trong nhóm nữ 22–32 tuổi tại TP.HCM — gắn hình ảnh ngọn nến với thông điệp "quyền được nghỉ ngơi". Mục tiêu: đạt 300.000 lượt reach trong 6 tháng.',
      strategy: 'TikTok Ads + Meta Ads (Facebook/Instagram) + Zalo Ads chạy liên tục theo từng phase. Ưu tiên boost nội dung đã có tương tác tốt thay vì chạy ads thuần. Phase 1 tập trung reach rộng, Phase 3 chuyển sang retargeting chuyển đổi.',
      message: '"Bạn không cần phải kiếm lấy quyền được nghỉ ngơi — đó là thứ bạn luôn xứng đáng có." Ngọn nến là vật thể hoá của khoảng lặng có chủ đích giữa guồng quay hiện đại.',
      mediaDetails: [
        { label: 'TikTok Ads', text: 'Boost video teaser và hero content có tương tác tốt. Target: nữ 22–32, TP.HCM, interest: self-care, lifestyle, wellness. Ngân sách: 40tr/6 tháng (~7tr/tháng trung bình).' },
        { label: 'Meta Ads (Facebook + IG)', text: 'Phase 1–2 chạy awareness/engagement. Phase 3 chuyển sang retargeting những người đã xem website và tương tác với trang. Ngân sách: 34tr/6 tháng.' },
        { label: 'Zalo Ads', text: 'Tiếp cận nhanh tệp địa lý TP.HCM với chi phí tối ưu thấp hơn Meta Ads. Ngân sách: 14tr/6 tháng.' }
      ],
      influencerStrategy: 'Chạy ads boost trực tiếp bài đăng của các KOC có hiệu suất tương tác tốt nhất thay vì sử dụng visual quảng cáo thuần thương hiệu — giúp tăng độ tin cậy và giảm cảm giác commercial khi tiếp cận người xem.',
      budgetSplit: {
        total: '88.000.000 VNĐ',
        breakdown: 'TikTok Ads: 40.000.000 VNĐ • Meta Ads: 34.000.000 VNĐ • Zalo Ads: 14.000.000 VNĐ',
        phaseText: 'TikTok Ads detail: Phase 1: 14tr / Phase 2: 16tr / Phase 3: 10tr • Meta/Zalo Ads: Phân bổ linh động.'
      }
    },
    {
      id: 'pr',
      name: 'PUBLIC RELATIONS',
      vietnameseName: 'Quan hệ Công chúng',
      icon: Share2,
      color: 'purple',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-600',
      textColor: 'text-purple-900',
      accentColor: 'rgba(147, 51, 234, 1)',
      objective: 'Xây dựng góc nhìn mới mẻ và uy tín sâu rộng cho thương hiệu thông qua câu chuyện thật từ cộng đồng và truyền thông tự nhiên (earned). Mục tiêu: 3–5 bài PR cốt lõi được đăng tự nhiên, 50+ bài UGC chất lượng cao trong chiến dịch.',
      strategy: 'Workshop hằng tháng tại quán cà phê đối tác. KOC seeding tự nhiên. Pitch bài viết chất lượng cho Vietcetera / Spiderum / The Present Writer. Áp dụng poster OOH tại các điểm tiếp xúc vật lý của nhóm khách hàng mục tiêu.',
      message: '"Rest Is Not A Reward — Một cộng đồng của những người đang học cách dừng lại." Sử dụng câu chuyện thật từ người thật, xóa bỏ hoàn toàn định hướng thông điệp thương hiệu một chiều.',
      mediaDetails: [
        { label: 'Workshop Offline', text: 'Tổ chức 1 lần/tháng tại 2–3 quán cà phê đối tác dạng barter (quán được hỗ trợ tag truyền thông, brand đặt nến trang trí, đổi không gian). Quy mô 15–35 người/buổi, tăng dần. Đứng lớp chia sẻ trải nghiệm trong 2–3 tiếng.' },
        { label: 'KOC Seeding', text: 'Hợp tác Micro KOC (10k–50k followers) + Nano KOC (3k–10k) chia sẻ góc nhìn thảnh thơi, tuyệt đối không gửi kịch bản cứng, ưu tiên cảm xúc thật và trải nghiệm trực giác.' },
        { label: 'Earned Editorial', text: 'Pitch bài chuyên đề về chủ đề burnout và văn hóa "sợ rảnh rỗi" đến Vietcetera, Spiderum. Tập trung viết chuyên sâu, không mua bán bài thương mại.' },
        { label: 'Micro OOH Posters', text: 'Bố trí poster tinh giản chỉ chứa bộ chữ typography truyền cảm hứng tại các quán cà phê, co-working space lớn ở Quận 1, Quận 3, Bình Thạnh.' }
      ],
      influencerStrategy: 'Nano KOC (3K–10K): Ưu tiên tệp nữ văn phòng/freelancer sống tại TP.HCM. Kể câu chuyện trải nghiệm thật không gượng ép. Micro KOC (10K–50K): Lifestyle & Wellness creators tham dự workshop trực tiếp, tạo nội dung ghi hình tự nhiên tại điểm diễn. Chi phí: 3–8tr/người.',
      budgetSplit: {
        total: '103.000.000 VNĐ',
        breakdown: 'Hạng mục chi trả: Phí KOC gieo mầm • Tổ chức Workshop offline hằng tháng • Tài liệu in ấn PR, bài viết chất lượng.',
        phaseText: 'Chiến thuật: Phase 1: 28tr / Phase 2: 43tr / Phase 3: 32tr.'
      }
    },
    {
      id: 'digital',
      name: 'DIGITAL MARKETING',
      vietnameseName: 'Tiếp thị Kỹ thuật số',
      icon: TrendingUp,
      color: 'amber',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-600',
      textColor: 'text-amber-900',
      accentColor: 'rgba(217, 119, 6, 1)',
      objective: 'Tăng tương tác thực chất và chuyển đổi mua hàng thông qua phân phối nội dung đúng người, đúng thời điểm. Mục tiêu: đạt Engagement Rate ổn định từ 4–6%, doanh số chung tăng 25–30% vào tháng 6.',
      strategy: 'Duy trì đều đặn 10 bài viết/tháng theo cấu trúc 3 Pillar nội dung cốt lõi. Triển khai hashtag thử thách #RestIsNotAReward. Gửi bản tin Email & Zalo OA định kỳ cho tệp khách cũ. Chuẩn hóa landing page riêng cho Bundle Rest Kit.',
      message: '"Lần cuối bạn thực sự dành thời gian cho bản thân là khi nào?" Tiếp cận sâu sắc, xoa dịu nỗi đau áp lực một cách thầm lặng, không phán xét, không thuyết giáo.',
      mediaDetails: [
        { label: 'TikTok + Instagram', text: '10 bài/tháng phân bổ theo 3 Pillar. Video ngắn (Reels, TikTok) đăng giờ vàng 19:00 - 21:00. Đăng Story tương tác kích thích chia sẻ 3 lần/tuần. Carousel giáo dục 1–2 bộ/tháng.' },
        { label: 'Facebook Hub', text: '2-3 bài viết dài/tháng đắp đầy triết lý, hướng đến tệp lớn tuổi hơn (25-32 tuổi). Phát động chiến dịch UGC từ tháng 5, khích lệ cộng đồng chụp lại khoảng lặng của riêng họ.' },
        { label: 'Email / Zalo OA', text: 'Newsletter cá nhân hóa gửi 2 lần/tháng cho khách hàng thân thiết. Độc quyền chia sẻ cẩm nang tạo ritual nghỉ ngơi, gửi thiệp mời tham dự workshop sớm.' }
      ],
      influencerStrategy: 'KOC đăng bài xen kẽ theo sơ đồ lịch phân bổ nội dung của Agency nội bộ — tuyệt đối không đăng đồng loạt cùng một ngày để tránh tạo cảm giác gượng ép hoặc quảng cáo lộ liễu, giữ mạch tự nhiên tối đa.',
      budgetSplit: {
        total: '48.000.000 VNĐ',
        breakdown: 'Ngân sách phân bổ: Meta Ads + Zalo Ads chạy bổ trợ và theo đuổi chuyển đổi.',
        phaseText: 'Phát hành: Phase 1: 15tr / Phase 2: 18tr / Phase 3: 15tr.'
      }
    },
    {
      id: 'sales',
      name: 'SALES PROMOTION',
      vietnameseName: 'Xúc tiến Bán hàng',
      icon: Gift,
      color: 'emerald',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-600',
      textColor: 'text-emerald-900',
      accentColor: 'rgba(5, 150, 105, 1)',
      objective: 'Kích thích hành động mua hàng nhanh chóng và ghi danh tham gia các buổi workshop offline thông qua các gói sản phẩm & ưu đãi có giá trị cảm xúc cao. Mục tiêu: bán sạch 100 set "Rest Kit" trong 2 tuần ra mắt, lấp đầy 5 buổi workshop liên tiếp.',
      strategy: 'Ra mắt bundle đặc biệt "Rest Kit" giới hạn 100 bộ. Tặng kèm thẻ cứng "Rest Ritual Card" trong từng kiện hàng gửi đi. Áp dụng đăng ký sớm (early bird) cho workshop. Tạo vòng lặp giới thiệu bạn bè nhận chiết khấu.',
      message: '"Bắt đầu khoảng lặng của bạn — chỉ với một ngọn nến." Thúc đẩy một hành động thiết thực, nhỏ nhắn, dễ bắt đầu và mang lại cảm xúc thực chất ngay tại nhà.',
      mediaDetails: [
        { label: 'Bundle Rest Kit', text: '1 hũ nến lớn + Thẻ Rest Ritual Card đặc biệt + Túi giấy kraft mộc in thông điệp tinh xảo. Phiên bản giới hạn bán ra trong tháng 5.' },
        { label: 'Rest Ritual Card', text: 'Thẻ bài in trên giấy kraft mộc, gợi ý 5 ritual thư giãn nhanh, tặng kèm không điều kiện trong từng đơn nến phát hành.' },
        { label: 'Early Bird Ticket', text: 'Ưu đãi giảm giá vé khi đặt chỗ sớm trước 3 ngày. Giới hạn số lượng nghiêm ngặt (25–45 người) để đảm bảo không gian thiền sâu chân thật.' },
        { label: 'Referral Program', text: 'Chương trình giới thiệu người thân đi cùng workshop hoặc giới thiệu đặt combo nến để được tích lũy giảm giá 10-15% cho lượt mua sau.' }
      ],
      influencerStrategy: 'Ưu tiên kết nối lại các KOC đã đồng hành cùng thương hiệu từ các tuần trước đó để phục vụ giai đoạn Conversion cuối chiến dịch — KOC lúc này sẽ kể tiếp một câu chuyện liền mạch về thói quen thư giãn thực tế thay vì quảng cáo từ đầu.',
      budgetSplit: {
        total: '19.000.000 VNĐ',
        breakdown: 'Chi phí sản xuất quà tặng kèm, túi kraft thông điệp, bưu thiếp và ngân sách dự phòng phát sinh.',
        phaseText: 'Chi tổng cho 6 tháng: 19.000.000 VNĐ.'
      }
    }
  ];

  // Helper filters for lists
  const filteredRows = directionRows.filter(row => {
    const matchesSearch = 
      row.pillarTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.pillarDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.target.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.toneRules.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesChannel = 
      selectedChannelFilter === 'all' || 
      row.channels.map(c => c.toLowerCase()).includes(selectedChannelFilter);

    const matchesPillar = 
      selectedPillarFilter === 'all' || 
      row.id === selectedPillarFilter;

    return matchesSearch && matchesChannel && matchesPillar;
  });

  // Calculate global totals for tracker
  const totalProducedPlan = trackerData[0].planValues.reduce((a, b) => a + b, 0);
  const totalProducedActual = trackerData[0].actualValues.reduce((a, b) => a + b, 0);
  const totalApprovedPlan = trackerData[1].planValues.reduce((a, b) => a + b, 0);
  const totalApprovedActual = trackerData[1].actualValues.reduce((a, b) => a + b, 0);
  const totalPublishedPlan = trackerData[2].planValues.reduce((a, b) => a + b, 0);
  const totalPublishedActual = trackerData[2].actualValues.reduce((a, b) => a + b, 0);

  // Active media strategies details
  const activeMedia = mediaStrategies.find(m => m.id === selectedMediaChannel) || mediaStrategies[0];

  return (
    <div className="flex flex-col gap-6">
      
      {/* EXQUISITE TAB CONTROLS AT TOP */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border border-[#1A1A1A] bg-[#FAF8F5] p-2 gap-2 rounded-none">
        <div className="flex flex-wrap gap-1">
          <button
            onClick={() => setActiveSubTab('tracker')}
            className={`px-4 py-2 text-xs font-mono font-black uppercase tracking-wider transition-all cursor-pointer rounded-none border ${
              activeSubTab === 'tracker'
                ? 'bg-[#1A1A1A] text-[#FAF8F5] border-[#1A1A1A]'
                : 'text-neutral-700 bg-white hover:bg-neutral-50 border-neutral-300'
            }`}
          >
            📈 1. KPIs &amp; Tiến Độ Sản Xuất
          </button>
          
          <button
            onClick={() => setActiveSubTab('direction')}
            className={`px-4 py-2 text-xs font-mono font-black uppercase tracking-wider transition-all cursor-pointer rounded-none border ${
              activeSubTab === 'direction'
                ? 'bg-[#1A1A1A] text-[#FAF8F5] border-[#1A1A1A]'
                : 'text-neutral-700 bg-white hover:bg-neutral-50 border-neutral-300'
            }`}
          >
            🎯 2. Content Direction (3 Pillars)
          </button>

          <button
            onClick={() => setActiveSubTab('media')}
            className={`px-4 py-2 text-xs font-mono font-black uppercase tracking-wider transition-all cursor-pointer rounded-none border ${
              activeSubTab === 'media'
                ? 'bg-[#1A1A1A] text-[#FAF8F5] border-[#1A1A1A]'
                : 'text-neutral-700 bg-white hover:bg-neutral-50 border-neutral-300'
            }`}
          >
            📡 3. Media &amp; Channel Strategy
          </button>
        </div>

        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-semibold px-2">
          Chiến dịch "REST IS NOT A REWARD"
        </span>
      </div>

      {/* ==================== SUB-TAB 1: INTERACTIVE PLAN VS ACTUAL TRACKER ==================== */}
      {activeSubTab === 'tracker' && (
        <div className="bg-white border border-[#1A1A1A] p-4 sm:p-6 rounded-none space-y-6">
          
          <div className="border-b border-[#1A1A1A] pb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#2E7D32] bg-emerald-50 px-2 py-0.5 border border-emerald-600">
                  Interactive KPI Dashboard
                </span>
                <span className="text-[10px] font-mono text-[#666] uppercase font-bold tracking-widest">
                  Theo Dõi Phát Hành Sát Sườn
                </span>
              </div>
              <h2 className="text-xl font-bold text-[#1A1A1A] tracking-tight mt-1.5 font-sans">
                Thống Kê Tiến Độ Nội Dung Theo Từng Đợt (Kế Hoạch vs Thực Tế)
              </h2>
              <p className="text-xs text-[#666] font-sans mt-1 leading-relaxed">
                Khắc phục triệt để lỗi mất cột kéo dài của bảng tính gốc. Cho phép theo dõi song song chỉ số <strong>Kế Hoạch</strong> và <strong>Thực Tế</strong> của cả 9 đợt phát hành (W1 đến W18). Hãy lăn chuột ngang để xem đầy đủ hoặc cập nhật nhanh số liệu trực tiếp.
              </p>
            </div>

            <a
              href="https://docs.google.com/spreadsheets/d/1BJx4onrGBTsfS-07Uo8pKwZRDYg2Pdg3w6w-bTfgdlc/edit?gid=1330286519#gid=1330286519"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 border border-emerald-700 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 rounded-none px-3.5 py-1.5 text-[10px] uppercase font-bold tracking-wider transition-all cursor-pointer shadow-[2px_2px_0px_0px_rgba(4,120,87,1)] self-start md:self-auto"
              title="Mở Google Sheets gốc để so sánh"
            >
              <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-700" />
              <span>Gốc Google Sheets 🔗</span>
            </a>
          </div>

          {/* Quick Mini Dashboard Scoreboard */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border border-neutral-300 p-4 bg-neutral-50/50 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono text-neutral-500 uppercase font-bold block">Tỉ lệ hoàn thành sản xuất</span>
                <span className="text-xl font-mono font-black text-[#1A1A1A] mt-1 block">
                  {totalProducedActual} / {totalProducedPlan} bài
                </span>
              </div>
              <div className="mt-3">
                <div className="flex justify-between items-center text-[10px] font-mono mb-1 text-neutral-600">
                  <span>Tiến trình chung</span>
                  <span>{Math.round((totalProducedActual / totalProducedPlan) * 100)}%</span>
                </div>
                <div className="w-full bg-neutral-200 h-1.5 rounded-none overflow-hidden">
                  <div className="h-full bg-stone-800" style={{ width: `${Math.min((totalProducedActual / totalProducedPlan) * 100, 100)}%` }} />
                </div>
              </div>
            </div>

            <div className="border border-neutral-300 p-4 bg-neutral-50/50 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono text-neutral-500 uppercase font-bold block">Tỉ lệ bài viết đã được duyệt</span>
                <span className="text-xl font-mono font-black text-amber-800 mt-1 block">
                  {totalApprovedActual} / {totalApprovedPlan} bài
                </span>
              </div>
              <div className="mt-3">
                <div className="flex justify-between items-center text-[10px] font-mono mb-1 text-neutral-600">
                  <span>Tiến trình duyệt bài</span>
                  <span>{Math.round((totalApprovedActual / totalApprovedPlan) * 100)}%</span>
                </div>
                <div className="w-full bg-neutral-200 h-1.5 rounded-none overflow-hidden">
                  <div className="h-full bg-amber-700" style={{ width: `${Math.min((totalApprovedActual / totalApprovedPlan) * 100, 100)}%` }} />
                </div>
              </div>
            </div>

            <div className="border border-neutral-300 p-4 bg-neutral-50/50 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono text-neutral-500 uppercase font-bold block">Hiệu suất đăng tải (Live On Air)</span>
                <span className="text-xl font-mono font-black text-emerald-800 mt-1 block">
                  {totalPublishedActual} / {totalPublishedPlan} bài
                </span>
              </div>
              <div className="mt-3">
                <div className="flex justify-between items-center text-[10px] font-mono mb-1 text-[#2E7D32]">
                  <span>Đã publish thực tế</span>
                  <span>{Math.round((totalPublishedActual / totalPublishedPlan) * 100)}%</span>
                </div>
                <div className="w-full bg-neutral-200 h-1.5 rounded-none overflow-hidden">
                  <div className="h-full bg-emerald-700" style={{ width: `${Math.min((totalPublishedActual / totalPublishedPlan) * 100, 100)}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* TABLE SCROLLER - DESIGNED WITH MAXIMUM CARE */}
          <div className="border border-[#1A1A1A] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1050px] border-collapse text-left text-xs font-sans">
                <thead>
                  <tr className="bg-[#FAF8F5] border-b border-[#1A1A1A] text-[10px] font-mono font-extrabold uppercase select-none">
                    <th className="py-4 px-4 w-[16%] border-r border-[#1A1A1A] sticky left-0 bg-[#FAF8F5] z-10 text-neutral-800">
                      Chỉ số sản xuất
                    </th>
                    <th className="py-4 px-3 w-[7%] border-r border-[#1A1A1A]/20 text-center bg-stone-100 text-[#1A1A1A]">
                      Phiên bản
                    </th>
                    {cycleLabels.map((lbl, idx) => (
                      <th key={idx} className="py-4 px-1 border-r border-stone-200 text-center w-[8%]">
                        <span className="block text-[8px] text-neutral-500 font-normal tracking-wider lowercase">
                          {lbl.match(/\((.*?)\)/)?.[1] || ''}
                        </span>
                        <span className="text-[#1A1A1A] font-black font-mono">
                          {lbl.replace(/\s*\(.*?\)/, '').replace('Đợt', 'ĐỢT')}
                        </span>
                      </th>
                    ))}
                    <th className="py-4 px-3 text-center w-[10%] bg-[#F2EFE8] font-mono font-black border-l border-[#1A1A1A]">
                      Hiệu suất đạt
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1A1A1A]/30">
                  {trackerData.map((row, rowIdx) => {
                    const totalPlan = row.planValues.reduce((a, b) => a + b, 0);
                    const totalActual = row.actualValues.reduce((a, b) => a + b, 0);
                    const percentage = totalPlan > 0 ? Math.round((totalActual / totalPlan) * 100) : 0;

                    return (
                      <React.Fragment key={rowIdx}>
                        {/* PLAN ROW */}
                        <tr className="bg-white hover:bg-neutral-50/40">
                          <td 
                            className="py-4 px-4 font-bold text-[#1A1A1A] border-r border-[#1A1A1A] sticky left-0 bg-white z-10 text-xs shadow-[2px_0_5px_rgba(0,0,0,0.02)]"
                            rowSpan={2}
                          >
                            <div className="flex flex-col">
                              <span className="text-xs font-bold leading-tight">{row.metric}</span>
                              <span className="text-[10px] font-mono text-[#666] font-normal mt-1 block">
                                Sáu tháng: {totalActual} / {totalPlan} bài
                              </span>
                            </div>
                          </td>
                          <td className="py-2.5 px-3 border-r border-[#1A1A1A]/20 text-center font-mono text-[9px] font-extrabold text-neutral-500 bg-neutral-50/50">
                            KẾ HOẠCH
                          </td>
                          {row.planValues.map((val, idx) => (
                            <td key={idx} className="py-2.5 px-1 border-r border-neutral-100 text-center font-mono font-bold text-neutral-700 bg-neutral-50/20">
                              {val}
                            </td>
                          ))}
                          <td 
                            className="py-4 px-3 text-center border-l border-[#1A1A1A] bg-[#FAF8F5]/80 z-10 font-mono font-black text-sm" 
                            rowSpan={2}
                          >
                            <div className="flex flex-col items-center justify-center">
                              <span className={`text-base ${percentage >= 95 ? "text-emerald-800" : percentage >= 80 ? "text-amber-800" : "text-stone-800"}`}>
                                {percentage}%
                              </span>
                              <span className="text-[9px] text-[#666] font-normal font-sans uppercase tracking-tighter mt-1 block">đáp ứng</span>
                            </div>
                          </td>
                        </tr>

                        {/* ACTUAL ROW (WITH INTEGRATED INTERACTIVE MODIFIERS) */}
                        <tr className="bg-stone-50/40 border-b border-stone-200 hover:bg-stone-50">
                          <td className="py-3 px-3 border-r border-[#1A1A1A]/20 text-center font-mono text-[9px] font-extrabold text-emerald-800 bg-emerald-50/30">
                            THỰC TẾ
                          </td>
                          {row.actualValues.map((val, idx) => {
                            const isDone = val >= row.planValues[idx] && row.planValues[idx] > 0;
                            const isUnder = val < row.planValues[idx];
                            return (
                              <td 
                                key={idx} 
                                className={`py-3 px-1 border-r border-stone-200 text-center transition-all ${
                                  isDone ? 'bg-emerald-50/10' : 'bg-amber-50/10'
                                }`}
                              >
                                <div className="flex flex-col items-center justify-center gap-1 group/btn">
                                  <span className={`font-mono font-semibold text-xs transition-colors ${
                                    isDone ? 'text-emerald-900 font-black' : isUnder ? 'text-amber-800' : 'text-[#1A1A1A]'
                                  }`}>
                                    {val}
                                  </span>
                                  
                                  {/* Step Incrementor/Decrementor */}
                                  <div className="flex items-center border border-neutral-300 rounded-none bg-white opacity-0 group-hover/btn:opacity-100 focus-within:opacity-100 transition-opacity">
                                    <button 
                                      onClick={() => handleModifyValue(rowIdx, idx, false)}
                                      className="p-1 hover:bg-neutral-100 text-neutral-600 border-r border-neutral-300 cursor-pointer"
                                      title="Giảm 1 bài"
                                    >
                                      <Minus className="h-2 w-2" />
                                    </button>
                                    <button 
                                      onClick={() => handleModifyValue(rowIdx, idx, true)}
                                      className="p-1 hover:bg-neutral-100 text-[#1A1A1A] cursor-pointer"
                                      title="Tăng 1 bài"
                                    >
                                      <Plus className="h-2 w-2" />
                                    </button>
                                  </div>
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* INTEGRATED FAST PANEL EDITOR - FIXES ACCURACY ISSUES FOR END-USERS */}
          <div className="bg-[#FAF8F5] border border-[#1A1A1A] p-4">
            <h4 className="text-xs font-mono font-bold text-[#1A1A1A] uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-700" />
              <span>Bàn Chỉnh Sửa Số Liệu Nhanh (Hỗ Trợ Họp Báo Cáo Tuần)</span>
            </h4>
            <p className="text-[11px] text-[#555] font-sans mt-1">
              Hãy chọn đợt phát hành, sau đó điều chỉnh trực tiếp số lượng ghi nhận thực tế để hệ thống tự tái cấu trúc tỉ lệ vàng:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 items-end">
              <div>
                <label className="block text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1.5">1. Chọn đợt muốn sửa:</label>
                <select
                  value={editingCycleIdx}
                  onChange={(e) => setEditingCycleIdx(parseInt(e.target.value, 10))}
                  className="w-full p-2 border border-[#1A1A1A] text-xs font-mono bg-white focus:outline-none"
                >
                  {cycleLabels.map((c, idx) => (
                    <option key={idx} value={idx}>{c}</option>
                  ))}
                </select>
              </div>

              {trackerData.map((row, rowIdx) => (
                <div key={rowIdx}>
                  <label className="block text-[10px] font-mono text-neutral-500 uppercase font-bold mb-1.5">
                    {row.metric.split(' ')[2] || row.metric}:
                  </label>
                  <div className="flex items-center">
                    <span className="bg-neutral-100 border border-r-0 border-[#1A1A1A] px-2.5 py-2 text-xs font-mono text-neutral-600">
                      K.Hoạch: {row.planValues[editingCycleIdx]}
                    </span>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={row.actualValues[editingCycleIdx]}
                      onChange={(e) => handleFastUpdateCycle(rowIdx, e.target.value)}
                      className="w-full p-2 border border-[#1A1A1A] text-xs font-mono focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#E5DFD3]/40 border border-[#1A1A1A] p-4 text-xs font-sans text-neutral-800 space-y-2">
            <strong>📌 Chu kỳ sản xuất &amp; Quy tắc duyệt bài chiến dịch:</strong>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Mỗi 2 tuần là một đợt (Cycle) phát hành, yêu cầu viết đều 10-12 bài phục vụ Instagram, TikTok Reels và Facebook bài dài.</li>
              <li>Bộ ba chìa khóa vàng: <strong>Sản xuất</strong> đủ số bài nháp &rarr; <strong>Duyệt chọn</strong> nội dung chất lượng cao &rarr; <strong>Đăng tải đúng khung giờ vàng</strong> (19:00 - 21:00 tối).</li>
              <li>Tất cả các số liệu mang tính thời gian thực này được gắn chặt mỏ neo với triết lý tối giản, nghiêm cấm fake số liệu.</li>
            </ul>
          </div>

        </div>
      )}

      {/* ==================== SUB-TAB 2: CONTENT DIRECTION MATRIX ==================== */}
      {activeSubTab === 'direction' && (
        <div className="bg-white border border-[#1A1A1A] p-4 sm:p-6 rounded-none space-y-6">
          <div className="border-b border-[#1A1A1A] pb-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#9A3412] bg-amber-50 px-2 py-0.5 border border-amber-600">
                  Strategic Content Blueprint
                </span>
                <h2 className="text-xl font-bold text-[#1A1A1A] tracking-tight mt-1.5 font-sans">
                  Khung Định Hướng Sáng Tạo Nội Dung: "Rest Is Not A Reward"
                </h2>
                <p className="text-xs text-[#666] font-sans mt-1">
                  Định hướng phong cách, tệp độc giả mục tiêu, các góc viết (angles) mẫu và quy định khắt khe về từ ngữ ứng xử.
                </p>
              </div>

              {/* Filter search controllers */}
              <div className="flex flex-wrap items-center gap-2 self-stretch lg:self-auto">
                <div className="relative w-full sm:w-auto">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Tìm kiếm góc viết / angle..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8 pr-3 py-2 w-full sm:w-[220px] border border-[#1A1A1A] rounded-none text-xs bg-white focus:outline-none focus:ring-1 focus:ring-black font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Quick Filter Badges */}
            <div className="mt-4 flex flex-wrap gap-2 items-center text-xs">
              <span className="text-[9px] font-mono text-neutral-500 uppercase font-bold">Lọc theo Kênh:</span>
              {['all', 'tiktok', 'instagram', 'facebook'].map(chan => (
                <button
                  key={chan}
                  onClick={() => setSelectedChannelFilter(chan as any)}
                  className={`px-3 py-1 text-[9px] font-mono font-extrabold uppercase transition-all cursor-pointer border ${
                    selectedChannelFilter === chan 
                      ? 'bg-[#1A1A1A] text-white border-black' 
                      : 'bg-neutral-50 hover:bg-neutral-100 border-neutral-300 text-neutral-700'
                  }`}
                >
                  {chan === 'all' ? 'Tất cả kênh' : chan.toUpperCase()}
                </button>
              ))}

              <div className="h-4 w-[1px] bg-neutral-300 mx-2 hidden sm:block" />

              <span className="text-[9px] font-mono text-neutral-500 uppercase font-bold">Lọc theo Pillar:</span>
              {['all', 'pillar1', 'pillar2', 'pillar3'].map(pAnd => (
                <button
                  key={pAnd}
                  onClick={() => setSelectedPillarFilter(pAnd as any)}
                  className={`px-3 py-1 text-[9px] font-mono font-extrabold uppercase transition-all cursor-pointer border ${
                    selectedPillarFilter === pAnd 
                      ? 'bg-[#1A1A1A] text-white border-black' 
                      : 'bg-neutral-50 hover:bg-neutral-100 border-neutral-300 text-neutral-700'
                  }`}
                >
                  {pAnd === 'all' ? 'Tất cả Pillar' : `Pillar ${pAnd.slice(-1)}`}
                </button>
              ))}
            </div>
          </div>

          {/* Pillars List Render with Pristine Sub-grid Layouts */}
          <div className="space-y-6">
            {filteredRows.length > 0 ? (
              filteredRows.map((row) => (
                <div 
                  key={row.id} 
                  className="border border-[#1A1A1A] bg-white hover:shadow-xs transition-shadow"
                >
                  {/* Title Bar */}
                  <div className="bg-[#FAF8F5] border-b border-[#1A1A1A] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="bg-[#1A1A1A] text-white text-[9px] font-mono font-extrabold px-2 py-0.5 uppercase tracking-widest">
                          {row.id.toUpperCase()}
                        </span>
                        {row.channels.map(ch => (
                          <span key={ch} className="bg-white border border-stone-400 text-neutral-800 text-[9px] font-mono font-bold px-2 py-0.5">
                            {ch}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-sm font-bold text-[#1A1A1A] tracking-tight font-sans">
                        {row.pillarTitle}
                      </h3>
                    </div>
                    
                    <span className="text-[10px] text-neutral-500 font-mono italic max-w-sm sm:text-right">
                      {row.pillarDesc}
                    </span>
                  </div>

                  {/* Core Content Body Splitted */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#1A1A1A]/20">
                    
                    {/* Left Column (4 cols): Target Audiences & Goals */}
                    <div className="lg:col-span-4 p-4 space-y-4">
                      <div className="space-y-1.5">
                        <h4 className="text-[10px] font-mono uppercase font-black text-neutral-500 tracking-wider flex items-center gap-1.5">
                          <Users className="h-3 w-3 text-[#1A1A1A]" />
                          <span>Mục Tiêu Độc Giả (Who We Reach)</span>
                        </h4>
                        <p className="text-xs text-neutral-800 leading-relaxed font-sans bg-stone-50/50 p-2.5 border border-stone-200">
                          {row.target}
                        </p>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-dashed border-neutral-200">
                        <h4 className="text-[10px] font-mono uppercase font-black text-neutral-500 tracking-wider flex items-center gap-1.5">
                          <Target className="h-3 w-3 text-[#1A1A1A]" />
                          <span>Hành Trình Giai Đoạn (Goals Phase)</span>
                        </h4>
                        <div className="space-y-2">
                          {row.goals.map((g, idx) => (
                            <div key={idx} className="bg-neutral-50/50 p-2 border border-neutral-200/50">
                              <span className="text-[8px] font-mono font-extrabold text-[#1A1A1A] bg-neutral-200 px-1.5 py-0.5 uppercase leading-none block w-max mb-1">
                                {g.phase}
                              </span>
                              <p className="text-[11px] text-neutral-700 leading-relaxed">
                                {g.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Middle Column (5 cols): Product Offer & Content Angles */}
                    <div className="lg:col-span-5 p-4 space-y-4">
                      <div className="space-y-1.5">
                        <h4 className="text-[10px] font-mono uppercase font-black text-neutral-500 tracking-wider flex items-center gap-1.5">
                          <Award className="h-3.5 w-3.5 text-[#1A1A1A]" />
                          <span>Vật Thể Hóa Sản Phẩm (Product Offer)</span>
                        </h4>
                        <p className="text-xs font-semibold text-neutral-800 bg-[#FAF8F5] p-3 border border-neutral-300 leading-relaxed font-sans">
                          {row.productOffer}
                        </p>
                      </div>

                      <div className="space-y-2.5 pt-2 border-t border-dashed border-neutral-200">
                        <h4 className="text-[10px] font-mono uppercase font-black text-neutral-500 tracking-wider flex items-center gap-1.5">
                          <Compass className="h-3 w-3 text-[#1A1A1A]" />
                          <span>Các Góc Viết Gợi Ý (Content Angles)</span>
                        </h4>
                        
                        <div className="space-y-3">
                          {Object.entries(row.angles).map(([phase, list]) => {
                            const phaseLabel = phase === 'awareness' ? 'Góc Nhận Thức' : phase === 'consideration' ? 'Góc Cân Nhắc' : 'Góc Chuyển Đổi / Lan Toả';
                            const colClass = phase === 'awareness' ? 'border-sky-300' : phase === 'consideration' ? 'border-amber-300' : 'border-emerald-300';
                            return (
                              <div key={phase} className={`pl-2.5 border-l-2 ${colClass} py-0.5`}>
                                <span className="text-[8.5px] font-mono font-bold uppercase text-neutral-500 tracking-tight block mb-1">
                                  — {phaseLabel}
                                </span>
                                <ul className="space-y-1.5">
                                  {list.map((ang, aIdx) => (
                                    <li key={aIdx} className="text-[11px] text-neutral-800 leading-snug flex items-start gap-1">
                                      <span className="text-[#1A1A1A] mt-1 text-[8px] select-none">▪</span>
                                      <span>{ang}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Right Column (3 cols): Format & Tone Rules */}
                    <div className="lg:col-span-3 p-4 space-y-4 bg-stone-50/20">
                      <div className="space-y-1.5">
                        <h4 className="text-[10px] font-mono uppercase font-black text-neutral-500 tracking-wider flex items-center gap-1.5">
                          <Layers className="h-3 w-3 text-[#1A1A1A]" />
                          <span>Định Dạng Sáng Tạo (Formats)</span>
                        </h4>
                        <div className="space-y-1.5">
                          {row.format.map((fmt, fIdx) => (
                            <div 
                              key={fIdx} 
                              className="bg-white border border-neutral-300 p-2.5 text-[10.5px] text-neutral-700 leading-snug font-sans shadow-[1px_1px_0px_0px_#1A1A1A]/10"
                            >
                              {fmt}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-2 border-t border-dashed border-neutral-200">
                        <h4 className="text-[10px] font-mono uppercase font-black text-red-700 tracking-wider flex items-center gap-1.5">
                          <Volume2 className="h-3.5 w-3.5 text-red-600" />
                          <span>Quy Tắc Biên Tập (Tone of Voice)</span>
                        </h4>
                        <p className="text-[10.5px] text-stone-900 bg-red-50/50 border border-red-200 p-2.5 font-sans leading-relaxed">
                          {row.toneRules}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 border border-dashed border-neutral-300">
                <HelpCircle className="h-8 w-8 mx-auto text-neutral-400 mb-2" />
                <p className="text-xs text-neutral-500 font-mono">Không tìm thấy Pillar hoặc Góc viết khớp với từ khóa tìm kiếm.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==================== SUB-TAB 3: MEDIA & CHANNEL STRATEGY (NEW DATASET) ==================== */}
      {activeSubTab === 'media' && (
        <div className="bg-white border border-[#1A1A1A] p-4 sm:p-6 rounded-none space-y-6">
          
          <div className="border-b border-[#1A1A1A] pb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-800 bg-blue-50 px-2 py-0.5 border border-blue-600">
                  Media &amp; Channel Hub
                </span>
                <span className="text-[10px] font-mono text-[#666] uppercase font-bold tracking-widest">
                  Kế Hoạch Đa Kênh Toàn Diện
                </span>
              </div>
              <h2 className="text-xl font-bold text-[#1A1A1A] tracking-tight mt-1.5 font-sans">
                Media and Channel Strategy: Phân Bổ Ngân Sách &amp; Chỉ Tiêu Đa Phương Tiện
              </h2>
              <p className="text-xs text-[#666] font-sans mt-1">
                Lên lộ trình phân tán thông điệp có hệ thống thông qua bốn trụ cột chính: <strong>Advertising</strong>, <strong>PR</strong>, <strong>Digital Marketing</strong> và <strong>Sales Promotion</strong>.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-[#F2EFE8] px-3.5 py-2 border border-[#1A1A1A] text-xs font-mono text-neutral-800 uppercase font-bold tracking-wider">
              <span>Media budget allocation: 258.000.000 VNĐ</span>
            </div>
          </div>

          {/* Channels Selector Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {mediaStrategies.map((chan) => {
              const IconComp = chan.icon;
              const isActive = selectedMediaChannel === chan.id;
              
              const borderStyle = isActive ? `border-[#1A1A1A] ring-1 ring-[#1A1A1A] shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]` : `border-neutral-300 hover:border-[#1A1A1A]/40`;
              const bgStyle = isActive ? `bg-neutral-50` : `bg-white`;

              return (
                <button
                  key={chan.id}
                  onClick={() => setSelectedMediaChannel(chan.id)}
                  className={`flex flex-col items-start p-3 sm:p-4 border text-left cursor-pointer transition-all rounded-none ${borderStyle} ${bgStyle}`}
                >
                  <div className={`p-2 border ${isActive ? chan.borderColor : 'border-neutral-300'} mb-3`}>
                    <IconComp className={`h-4.5 w-4.5 ${isActive ? chan.textColor : 'text-neutral-500'}`} />
                  </div>
                  
                  <span className="text-[9px] font-mono font-bold tracking-widest text-[#666] block uppercase">{chan.name}</span>
                  <span className="text-xs font-bold font-sans text-neutral-800 mt-1 block">{chan.vietnameseName}</span>
                  
                  <div className="mt-3 flex items-center justify-between w-full">
                    <span className="text-[10px] font-mono font-semibold text-neutral-600 block">Tổng NS:</span>
                    <span className="text-[10px] font-mono font-black text-neutral-900 block">{chan.budgetSplit.total}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ACTIVE MEDIA DEEP DIVE PANEL (THE HEART OF THE STRATEGY MATRIX) */}
          <div className="border border-[#1A1A1A]">
            
            {/* Header of Active Strategy */}
            <div className={`border-b border-[#1A1A1A] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${activeMedia.bgColor}`}>
              <div className="flex items-center gap-2.5">
                <div className={`p-2 border ${activeMedia.borderColor} bg-white`}>
                  {React.createElement(activeMedia.icon, { className: `h-4.5 w-4.5 ${activeMedia.textColor}` })}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono uppercase tracking-widest font-black text-neutral-500">Kênh hoạt động</span>
                    <span className="text-[8px] font-mono uppercase font-extrabold px-1.5 py-0.5 bg-white border border-stone-300 text-stone-700">6 tháng</span>
                  </div>
                  <h3 className="text-base font-bold text-[#1A1A1A] font-sans">
                    {activeMedia.name} — {activeMedia.vietnameseName}
                  </h3>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1">
                <span className="text-[10px] font-mono text-neutral-500 uppercase font-semibold">Tỷ trọng ngân sách</span>
                <span className="text-sm font-mono font-black text-[#1A1A1A]">{activeMedia.budgetSplit.total}</span>
              </div>
            </div>

            {/* Deep-dive content blocks */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#1A1A1A]">
              
              {/* Pillar Left (5/12 cols): Column 1: Objectives, Strategy & Key Message */}
              <div className="lg:col-span-5 p-4 sm:p-5 space-y-5">
                
                {/* Objective Block */}
                <div className="space-y-1.5">
                  <h4 className="text-[10px] font-mono uppercase font-black text-neutral-500 tracking-wider flex items-center gap-1.5">
                    <Target className="h-3.5 w-3.5 text-neutral-800" />
                    <span>Mục tiêu Kênh (Objective)</span>
                  </h4>
                  <p className="text-xs text-neutral-800 leading-relaxed font-sans bg-stone-50 p-3 border border-stone-200">
                    {activeMedia.objective}
                  </p>
                </div>

                {/* Strategy Block */}
                <div className="space-y-1.5 pt-3 border-t border-dashed border-neutral-200">
                  <h4 className="text-[10px] font-mono uppercase font-black text-neutral-500 tracking-wider flex items-center gap-1.5">
                    <Compass className="h-3.5 w-3.5 text-neutral-800" />
                    <span>Phương pháp tiếp cận (Strategy)</span>
                  </h4>
                  <p className="text-xs text-neutral-800 leading-relaxed font-sans">
                    {activeMedia.strategy}
                  </p>
                </div>

                {/* Core Hook message */}
                <div className="space-y-1.5 pt-3 border-t border-dashed border-neutral-200">
                  <h4 className="text-[10px] font-mono uppercase font-black text-neutral-500 tracking-wider flex items-center gap-1.5">
                    <Volume2 className="h-3.5 w-3.5 text-neutral-800" />
                    <span>Thông điệp khai thác (Message Hook)</span>
                  </h4>
                  <p className="text-xs font-semibold text-neutral-900 bg-amber-50/50 border border-amber-200 p-3 italic font-sans leading-relaxed">
                    {activeMedia.message}
                  </p>
                </div>

              </div>

              {/* Pillar Middle (4/12 cols): Implementation Channel Details */}
              <div className="lg:col-span-4 p-4 sm:p-5 space-y-4">
                <h4 className="text-[10px] font-mono uppercase font-black text-neutral-500 tracking-wider flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-neutral-800" />
                  <span>Kênh Thực Thi Chi Tiết (Media Strategy)</span>
                </h4>

                <div className="space-y-3.5">
                  {activeMedia.mediaDetails.map((det, idx) => (
                    <div key={idx} className="border border-neutral-200 p-3 bg-white">
                      <span className="text-[9px] font-mono font-black text-[#1A1A1A] bg-stone-100 px-1.5 py-0.5 uppercase tracking-wide block w-max mb-1.5">
                        {det.label}
                      </span>
                      <p className="text-[11px] text-neutral-700 leading-relaxed font-sans">
                        {det.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pillar Right (3/12 cols): KOC & Budget Breakdown */}
              <div className="lg:col-span-3 p-4 sm:p-5 space-y-5 bg-[#FAF8F5]/30">
                
                {/* Influencer cụ thể */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono uppercase font-black text-neutral-500 tracking-wider flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-neutral-800" />
                    <span>KOC / Influencer Quy Định</span>
                  </h4>
                  <p className="text-[11px] text-neutral-800 bg-white p-3 border border-stone-200 leading-relaxed font-sans font-medium">
                    {activeMedia.influencerStrategy}
                  </p>
                </div>

                {/* Allocation details */}
                <div className="space-y-2 pt-2 border-t border-dashed border-neutral-300">
                  <h4 className="text-[10px] font-mono uppercase font-black text-neutral-500 tracking-wider flex items-center gap-1.5">
                    <Coins className="h-3.5 w-3.5 text-neutral-800" />
                    <span>Tách nhỏ ngân sách</span>
                  </h4>
                  
                  <div className="space-y-2 text-[11px]">
                    <div className="bg-stone-50 p-2.5 border border-stone-200 font-mono">
                      <div className="text-neutral-500 text-[8px] font-bold uppercase mb-0.5">Phân chia chi tiết:</div>
                      <div className="font-semibold text-neutral-800 leading-relaxed">{activeMedia.budgetSplit.breakdown}</div>
                    </div>

                    <div className="p-2.5 border border-stone-200 italic text-neutral-600 leading-snug font-sans text-[10.5px]">
                      {activeMedia.budgetSplit.phaseText}
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* EXQUISITE TABULAR SUMMARY GRID FOR THE ENTIRE MEDIA MIX */}
          <div>
            <div className="border-l-2 border-[#1A1A1A] pl-3.5 mb-4">
              <h4 className="text-sm font-bold text-[#1A1A1A] font-sans">Bảng Ma Trận Đối Chiếu Media Channels Toàn Diện</h4>
              <p className="text-xs text-neutral-500 font-sans mt-0.5">Góc nhìn bách khoa toàn thư giúp đội ngũ điều phối bao quát toàn cảnh các khía cạnh cùng lúc.</p>
            </div>

            <div className="overflow-x-auto border border-[#1A1A1A]">
              <table className="w-full min-w-[900px] border-collapse text-left text-xs font-sans">
                <thead>
                  <tr className="bg-[#FAF8F5] border-b border-[#1A1A1A] text-[9px] font-mono font-extrabold uppercase">
                    <th className="py-3 px-4 w-[16%] border-r border-[#1A1A1A]">TIÊU CHÍ</th>
                    <th className="py-3 px-3 w-[21%] border-r border-stone-200 bg-blue-50/40 text-blue-900">ADVERTISING</th>
                    <th className="py-3 px-3 w-[21%] border-r border-stone-200 bg-purple-50/40 text-purple-900">PUBLIC RELATIONS</th>
                    <th className="py-3 px-3 w-[21%] border-r border-stone-200 bg-amber-50/40 text-amber-900">DIGITAL MARKETING</th>
                    <th className="py-3 px-3 w-[21%] bg-emerald-50/40 text-emerald-900">SALES PROMOTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr className="align-top">
                    <td className="py-3 px-4 font-mono font-bold uppercase text-neutral-500 border-r border-[#1A1A1A] text-[10px]">Mục tiêu chính</td>
                    <td className="py-3 px-3 border-r border-stone-200 text-neutral-700 leading-relaxed">Reach rộng 300.000 khách hàng trong 6 tháng, định vị nến với khoảng lặng.</td>
                    <td className="py-3 px-3 border-r border-stone-200 text-neutral-700 leading-relaxed">Tạo dựng uy tín, gieo mầm câu chuyện qua earned media &amp; workshop offline.</td>
                    <td className="py-3 px-3 border-r border-stone-200 text-neutral-700 leading-relaxed">Tăng bám đuổi hành vi, giữ chỉ số tương tác 4–6%, thúc đẩy khách quay lại.</td>
                    <td className="py-3 px-3 text-neutral-700 leading-relaxed">Kích hoạt chuyển đổi, bán hết 100 bộ giới hạn Rest Kit và vé workshop sớm.</td>
                  </tr>
                  <tr className="align-top">
                    <td className="py-3 px-4 font-mono font-bold uppercase text-neutral-500 border-r border-[#1A1A1A] text-[10px]">Lộ trình Phân bổ</td>
                    <td className="py-3 px-3 border-r border-stone-200 font-mono font-semibold text-neutral-800">88.000.000 VNĐ</td>
                    <td className="py-3 px-3 border-r border-stone-200 font-mono font-semibold text-neutral-800">103.000.000 VNĐ</td>
                    <td className="py-3 px-3 border-r border-stone-200 font-mono font-semibold text-neutral-800">48.000.000 VNĐ</td>
                    <td className="py-3 px-3 font-mono font-semibold text-neutral-800">19.000.000 VNĐ</td>
                  </tr>
                  <tr className="align-top">
                    <td className="py-3 px-4 font-mono font-bold uppercase text-neutral-500 border-r border-[#1A1A1A] text-[10px]">Trọng tâm KOC</td>
                    <td className="py-3 px-3 border-r border-stone-200 text-neutral-750">Chạy quảng cáo boost bài KOC có viral tự nhiên tốt nhất.</td>
                    <td className="py-3 px-3 border-r border-stone-200 text-neutral-750">Mời KOC dự workshop, kể chuyện đời thường kịch bản mở.</td>
                    <td className="py-3 px-3 border-r border-stone-200 text-neutral-750">Lên lịch đăng bài so le, tránh nhồi nhét feedback dồn dập.</td>
                    <td className="py-3 px-3 text-neutral-750">Tái ngộ KOC cũ để đóng vòng lặp bán hàng theo lối quen thuộc.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}

export default ContentPlanDirection;
