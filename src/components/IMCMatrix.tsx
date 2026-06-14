import React from 'react';
import { FileSpreadsheet } from 'lucide-react';

interface MatrixRow {
  category: string;
  trigger: string;
  engage: string;
  amplify: string;
}

export function IMCMatrix() {
  const matrixData: MatrixRow[] = [
    {
      category: "Tóm tắt Giai đoạn (Summary)",
      trigger: "Bối cảnh & Vấn đề:\nNgười trẻ 22–32 tuổi tại TP.HCM đang sống trong văn hóa hustle — Năng suất là thước đo giá trị bản thân. Nghỉ ngơi bị gắn với cảm giác tội lỗi. Thương hiệu nến xuất hiện với vai trò tạo ra khoảng lặng có chủ đích giữa guồng quay đó.\n\nMục tiêu giai đoạn:\nTạo nhận thức ban đầu — gợi lên câu hỏi \"Lần cuối bạn thực sự nghỉ ngơi là khi nào?\" trong tâm trí người trẻ. Chưa lộ thương hiệu, chưa bán hàng.\n\nKênh trọng tâm: TikTok teaser, Instagram Stories poll, poster tại quán cà phê.\n\nThời gian: Tháng 1–2.\n\nNgân sách phase: 95.000.000 VNĐ.",
      engage: "Bối cảnh & Vấn đề:\nSau khi đã gây tò mò, chiến dịch chính thức ra mắt Big Idea \"Rest Is Not A Reward\". Đây là giai đoạn xây dựng góc nhìn — thương hiệu không chỉ bán nến mà dẫn dắt một cuộc trò chuyện có chiều sâu về văn hóa nghỉ ngơi.\n\nMục tiêu giai đoạn:\nThay đổi nhận thức từ \"làm xong mới nghỉ\" sang \"nghỉ ngơi là nền tảng\". Tạo engagement thực chất — comment chia sẻ trải nghiệm, save bài, đọc bài PR.\n\nKênh trọng tâm: Workshop tại quán cà phê (1 lần/tháng), KOC seeding, bài viết editorial, hero content.\n\nThời gian: Tháng 2–4.\n\nNgân sách phase: 130.000.000 VNĐ.",
      amplify: "Bối cảnh & Vấn đề:\nCộng đồng đã hiểu thông điệp — giai đoạn này biến người tiếp nhận thành người lan truyền. Khuếch đại qua UGC, tiếp tục workshop, đẩy chuyển đổi doanh số cuối chiến dịch.\n\nMục tiêu giai đoạn:\nTăng UGC tự nhiên, duy trì nhận diện, chuyển đổi thành doanh thu thực tế. Workshop tháng cuối là sự kiện tổng kết cộng đồng.\n\nKênh trọng tâm: Hashtag UGC, retargeting ads nhẹ, workshop tổng kết, bundle \"Rest Kit\" limited.\n\nThời gian: Tháng 5–6.\n\nNgân sách phase: 90.000.000 VNĐ."
    },
    {
      category: "Stakeholders & Trật tự Ưu tiên (Priorities)",
      trigger: "Ưu tiên 1 — Primary audience:\nNữ 22–32 tuổi, đi làm văn phòng hoặc freelance tại TP.HCM, thu nhập 8–20 triệu/tháng, quan tâm self-care, thường xuyên dùng TikTok & Instagram, hay lui tới quán cà phê aesthetic.\n\nƯu tiên 4 — Quán cà phê đối tác:\n2–3 quán cà phê tại TP.HCM có không gian yên tĩnh, aesthetic phù hợp tone warm minimalism. Địa điểm tổ chức workshop và đặt poster. Hợp tác dạng đổi chéo (barter) hoặc phí venue thấp (~3–5 triệu/buổi).",
      engage: "Ưu tiên 2 — KOC (micro-creator):\nLifestyle/wellness creators 10K–100K followers. Ưu tiên KOC có tệp nữ văn phòng, nội dung chân thật, không quá commercial. Fee hợp lý với ngân sách thực tế (~3–8 triệu/bài).\n\nƯu tiên 5 — Media earned:\nFanpage/group cộng đồng người trẻ (Humans of Saigon, các group self-care, mindfulness). Ưu tiên earned media — không mua bài, chỉ pitch nội dung đủ hay để được đăng tự nhiên.",
      amplify: "Ưu tiên 3 — Cộng đồng workshop:\nNgười đã tham gia workshop tháng trước — nhóm này có khả năng trở thành brand advocate tự nhiên, tạo UGC và giới thiệu miệng.\n\nƯu tiên 6 — Internal team:\n1 brand/marketing lead, 1 content creator kiêm photographer, 1 social media executive. Có thể thuê freelance videographer theo từng shoot (~3–5 triệu/ngày shoot)."
    },
    {
      category: "Mục tiêu (Goals & Objectives)",
      trigger: "Mục tiêu chiến dịch tổng thể (6 tháng):\nXây dựng nhận diện thương hiệu nến gắn với thông điệp \"nghỉ ngơi có chủ đích\" trong tâm trí người trẻ đô thị TP.HCM. Tạo cộng đồng nhỏ nhưng thực chất xung quanh brand. Tăng doanh số sản phẩm tối thiểu 30% vào tháng thứ 6. Tổng ngân sách toàn IMC: 315.000.000 VNĐ / 6 tháng.\n\nTrigger — Objectives:\n• Đạt tổng reach 200.000–300.000 trong 2 tháng đầu (thực tế với ngân sách ~95 triệu gồm content + boost nhẹ).\n• Tổ chức thành công 2 buổi workshop đầu tiên, mỗi buổi 20–30 người tham gia.\n• Có tối thiểu 300 lượt tương tác thực chất (comment chia sẻ trải nghiệm) trên các bài teaser.",
      engage: "Engage — Objectives:\n• Đạt engagement rate trung bình 4–6% trên Instagram & TikTok (thực tế với tệp chưa lớn).\n• Mỗi buổi workshop tháng 3 & 4 có 25–35 người, tỷ lệ quay lại tháng sau tối thiểu 30%.\n• Có tối thiểu 3–5 KOC đăng bài tự nhiên về sản phẩm và workshop.\n• Bài PR/editorial đạt tối thiểu 5.000–8.000 lượt đọc.",
      amplify: "Amplify — Objectives:\n• Hashtag #RestIsNotAReward đạt 200–400 bài UGC (thực tế, không ảo).\n• Doanh số tháng 5–6 tăng tối thiểu 25–30% so với tháng 1.\n• Bundle \"Rest Kit\" limited bán hết trong 2 tuần ra mắt (số lượng vừa phải, 50–100 set).\n• Workshop tháng 6 (tổng kết) đạt 40–50 người — lớn nhất trong chiến dịch."
    },
    {
      category: "Ý tưởng lớn (Big Idea)",
      trigger: "\"Rest Is Not A Reward\" — Nghỉ ngơi không phải phần thưởng\n\nInsight cốt lõi:\nNgười trẻ không thiếu thông tin về tầm quan trọng của nghỉ ngơi — họ thiếu sự cho phép. Xã hội dạy họ phải kiếm lấy quyền được nghỉ.",
      engage: "Thương hiệu nến đứng ở phía họ và nói: \"Bạn không cần phải kiếm lấy điều đó.\"\n\nNgọn nến không chỉ là sản phẩm — đó là vật thể hoá của một khoảng lặng có chủ đích.",
      amplify: "Thắp một ngọn nến là hành động nhỏ nhưng có ý nghĩa:\n\"tôi đang chọn dừng lại.\"\nKhẳng định sự nghỉ ngơi là gốc rễ cơ bản hỗ trợ năng lượng, chứ không phải món quà tích lũy dồn nén."
    },
    {
      category: "Thông điệp cốt lõi (Key Message)",
      trigger: "Trigger: \"Lần cuối cùng bạn thực sự dành thời gian cho bản thân là khi nào?\"\n\nKhông phán xét, không giải pháp — chỉ đặt câu hỏi. Chạm vào cảm giác mơ hồ mà người trẻ đang âm thầm mang theo. Chưa lộ thương hiệu ở giai đoạn này.",
      engage: "Engage: \"Nghỉ ngơi không phải phần thưởng. Đó là nhu cầu bạn luôn xứng đáng có.\"\n\nThương hiệu công khai quan điểm. Không nói về mùi hương hay thẩm mỹ nến — nói về quyền được dừng lại. Tạo sự khác biệt rõ ràng với các brand nến thông thường.",
      amplify: "Amplify: \"Bắt đầu khoảng lặng của bạn — chỉ với một ngọn nến.\"\n\nTừ thông điệp tư duy chuyển sang hành động cụ thể. Ngọn nến là bước đầu tiên dễ nhất để tạo ritual nghỉ ngơi trong cuộc sống hằng ngày."
    },
    {
      category: "Điểm nhấn chính (Key Hook)",
      trigger: "Hook: Teaser câu hỏi + cảnh nến không logo\n\nLoạt video TikTok/Reels 15–20 giây: cảnh nến cháy chậm, wax tan, khói nến — hoàn toàn không lời, chỉ caption câu hỏi.\n\nPoster đặt tại quán cà phê đối tác: chỉ có typography trên nền kem — \"Lần cuối bạn thực sự nghỉ ngơi là khi nào?\" Không logo, không sản phẩm rõ ràng. Mục tiêu: gây tò mò, kích thích người đọc tự hỏi.",
      engage: "Hook: Workshop \"Rest Is Not A Reward\" tại quán cà phê\n\nTổ chức 1 buổi/tháng (tháng 2, 3, 4) tại quán cà phê đối tác có không gian ấm áp, yên tĩnh. Quy mô 20–35 người/buổi.\n\nNội dung: chia sẻ góc nhìn về nghỉ ngơi, burnout, cách tạo ritual cho bản thân — gần với buổi trò chuyện cà phê ấm cúng. Có nến thương hiệu, tặng người tham gia 1 hũ nến mini. KOC tham gia tự nhiên.",
      amplify: "Hook: UGC \"Khoảng lặng của tôi\" + Workshop tổng kết\n\nKhuyến khích cộng đồng đã theo dõi chiến dịch chia sẻ ảnh/video khoảnh khắc nghỉ ngơi của mình (có nến hoặc không) kèm hashtag.\n\nWorkshop tháng 5 & 6 mở rộng hơn — mời người đã tham gia trước chia sẻ lại hành trình.\n\nTháng 6: workshop tổng kết 40–50 người, kết hợp pop-up bày sản phẩm và bundle \"Rest Kit\" limited."
    },
    {
      category: "Cột mốc thời gian (Milestones)",
      trigger: "Tháng 1:\nSetup — chụp hình sản phẩm phong cách warm minimalism, quay teaser video, in poster, liên hệ và chốt 2–3 quán cà phê đối tác, lên danh sách KOC tiếp cận.\n\nTháng 2:\nBắt đầu đăng teaser content. Workshop buổi 1 (cuối tháng 2). Boost nhẹ các bài teaser TikTok/Instagram.",
      engage: "Tháng 3:\nRa mắt chính thức Big Idea \"Rest Is Not A Reward\". KOC seeding đợt 1. Workshop buổi 2. Đăng bài editorial/PR.\n\nTháng 4:\nTiếp tục content Engage. KOC seeding đợt 2. Workshop buổi 3. Đánh giá chiến dịch.",
      amplify: "Tháng 5:\nKhởi động hashtag UGC. Ra mắt bundle \"Rest Kit\" limited. Retargeting ads nhẹ. Workshop buổi 4.\n\nTháng 6:\nPush doanh số cuối chiến dịch. Workshop buổi 5 — tổng kết cộng đồng, quy mô lớn nhất (40-50 người). Tổng kết, chấm điểm KPI."
    },
    {
      category: "Thành tựu nhanh (Quick Win)",
      trigger: "Sau tháng 1–2:\n• Poster tại quán cà phê được chụp lại và đăng lên mạng xã hội tự nhiên (earned media).\n• Ít nhất 1 video teaser TikTok đạt 10.000–30.000 views tự nhiên.\n• Workshop buổi 1 đủ 20 người và có tối thiểu 5 bài đăng UGC từ người tham gia.",
      engage: "Sau tháng 3–4:\n• Ít nhất 1 bài KOC đạt 50.000+ reach tự nhiên.\n• Bài PR được đăng trên tối thiểu 1 nền tảng earned (không mua).\n• Engagement rate Instagram đạt 4%+.\n• Lượng follower tăng tối thiểu 500 trong giai đoạn này.",
      amplify: "Sau tháng 5–6:\n• Bundle \"Rest Kit\" (50–100 set) bán hết hoàn toàn trong vòng 2 tuần.\n• Doanh số tháng 6 tăng vọt 25–30% so với tháng 1.\n• Workshop tổng kết đạt 40+ người tham dự chất chất.\n• Có tối thiểu 200 bài UGC hashtag tự sướng thực chất."
    },
    {
      category: "Hoạt động bổ trợ (Supporting Tactics)",
      trigger: "Đặt poster tối giản tại 2–3 quán cà phê đối tác ở TP.HCM (khu vực Q.1, Q.3, Bình Thạnh — nơi tệp TG hay lui tới).\n\nHợp tác dạng barter: quán được tag, brand được đặt nến trang trí và treo poster miễn phí.\n\nTạo bộ ảnh chất lượng \"nến trong không gian quán\" để dùng cho content social xuyên suốt.",
      engage: "Tạo \"Rest Ritual Card\" — thẻ giấy kraft nhỏ in 5 gợi ý ritual nghỉ ngơi đơn giản. Tặng kèm khi mua nến hoặc phát tại workshop. Chi phí thấp nhưng tạo trải nghiệm có giá trị cảm nhận cao.\n\nPitch bài viết miễn phí cho các fanpage/group cộng đồng người trẻ khéo léo.",
      amplify: "Bundle \"Rest Kit\" limited (50–100 set):\n1 nến hũ lớn + 1 Rest Ritual Card + 1 túi giấy kraft có in thông điệp chiến dịch.\n\nGiá bundle hợp lý, đẩy mạnh trải nghiệm UGC.\nWorkhop tháng 6 kết hợp trưng bày sản phẩm pop-up nhỏ bán trực tiếp cho học viên."
    },
    {
      category: "Kênh truyền thông (Channels)",
      trigger: "• TikTok (teaser video 15–20s, boost nhẹ ~5–10 triệu/tháng).\n• Instagram Reels & Stories (poll, câu hỏi tương tác).\n• Poster đặt tại quán cà phê đối tác (OOH micro-scale cổ kính).",
      engage: "• Instagram feed (ảnh sản phẩm tĩnh, carousel góc nhìn).\n• TikTok (KOC video chân thật).\n• Facebook (bài viết dài cảm xúc cho nhóm bận rộn 25–32 tuổi).\n• Workshop offline cà phê (kênh trái tim chủ lực).\n• Earned PR.",
      amplify: "• TikTok & Instagram (UGC hashtag #RestIsNotAReward).\n• Facebook & Instagram Ads retargeting (ngân sách đeo bám nhỏ).\n• Workshop offline tổng kết.\n• E-commerce/Zalo Shop (landing page cho Rest Kit)."
    },
    {
      category: "Công cụ tiếp cận (Comms Tools)",
      trigger: "• Poster typography tối giản (in A2/A3, đặt quán cà phê mộc).\n• Short-form video teaser quay bằng điện thoại kết hợp ánh sáng tự nhiên đầy cảm xúc.\n• Instagram Stories sticker poll & câu hỏi mở bàn thảo.",
      engage: "• Workshop offline tại quán gỗ ấm (slide gỗ mộc, không gian trò chuyện ấm cúng).\n• KOC seeding post & video thảnh thơi.\n• Bài viết editorial sâu lắng pitch tự nhiên.\n• Instagram Carousel thiết kế tối cổ.\n• Rest Ritual Card (in offset mộc mạc).",
      amplify: "• Hashtag UGC campaign mộng mơ.\n• Bundle \"Rest Kit\" packaging thô mộc xịn mịn.\n• Retargeting ads Facebook/Instagram.\n• Email / Zalo OA cá nhân gửi khách hàng cũ.\n• Workshop pop-up lớn."
    },
    {
      category: "Tài nguyên & Vận hành (Resources)",
      trigger: "Ngân sách Trigger (95 triệu VNĐ):\n• Content production: 38.000.000 VNĐ.\n• Ads & Boost content: 29.000.000 VNĐ.\n• KOC Seeding đợt 1: 20.000.000 VNĐ.\n• Offline Workshop 1 & 2: 8.000.000 VNĐ.\n\n*Lưu ý: Không dùng agency tốn kém, vận hành hoàn toàn bằng đội ngũ nội bộ in-house.",
      engage: "Ngân sách Engage (130 triệu VNĐ):\n• KOC seeding đợt 2: 30.000.000 VNĐ.\n• Workshop buổi 2 & 3: 16.000.000 VNĐ.\n• Boost content: 25.000.000 VNĐ.\n• Editorial PR / Out of box: 20.000.000 VNĐ.\n• In ấn Rest Ritual Card: 5.000.000 VNĐ.\n• Content Production: 20.000.000 VNĐ.\n• Dự phòng: 14.000.000 VNĐ.\n\n*Nhân sự*: 1 Project Lead, 1 Content/Photographer in-house.",
      amplify: "Ngân sách Amplify (90 triệu VNĐ):\n• Bundle Rest Kit production: 15.000.000 VNĐ.\n• Retargeting ads chuyển đổi: 20.000.000 VNĐ.\n• Workshop buổi 4 & 5 (Pop-up): 20.000.000 VNĐ.\n• Creative Production: 15.000.000 VNĐ.\n• Dự phòng hoàn thiện: 20.000.000 VNĐ.\n\n*Lưu ý vận hành*: Mỗi tháng chỉ cần 1–2 ngày quay chụp tập trung là đủ content social sử dụng mượt cả tháng."
    },
    {
      category: "Thước đo thành công (Measure)",
      trigger: "Trigger KPIs:\n• Tổng reach kỳ vọng: 200.000–300.000 lượt.\n• TikTok views: 10k - 30k mỗi clip.\n• Story response rate: 5%+.\n• Workshop buổi 1: 10+ người tham gia & 5+ UGC.\n• Tăng trưởng followers: +150 - 200 người.",
      engage: "Engage KPIs:\n• Engagement rate IG/TikTok: 4-6%.\n• Lượt xem bài KOC: 30k - 80k/bài.\n• Người tham gia workshop: 25-35 người, 30% quay lại.\n• Lượt đọc bài PR: 5.000+.\n• Save rate mộc trên carousel: >3%.\n• Tăng trưởng followers: +400 - 600 follower/tháng.",
      amplify: "Amplify KPIs:\n• Hashtag UGC: 200 - 400 bài thực tế chất lượng.\n• Bundle Rest Kit: Sạch kho 50-100 set trong 14 ngày.\n• Doanh số tháng 6: Tăng 25-30% so với tháng 1.\n• Workshop finale: 40 - 50 người.\n• ROAS retargeting ads: tối thiểu 2.0x.\n• Tổng follow sau chiến dịch: +2.000 - 3.000 người."
    }
  ];

  const renderCellText = (text: string) => {
    return text.split('\n\n').map((para, idx) => (
      <p key={idx} className="mb-2.5 last:mb-0 leading-relaxed font-sans text-xs text-[#333]">
        {para.split('\n').map((line, lIdx) => {
          if (line.startsWith('•') || line.startsWith('• ')) {
            return (
              <span key={lIdx} className="block pl-3 relative my-0.5">
                <span className="absolute left-0 text-[#1A1A1A]">•</span>
                {line.replace(/^•\s*/, '')}
              </span>
            );
          }
          if (line.startsWith('*') && line.endsWith('*')) {
            return <em key={lIdx} className="block italic text-[#666] my-1 font-sans">{line.replace(/\*/g, '')}</em>;
          }
          if (line.includes(':') && !line.startsWith('http')) {
            const [boldPart, restPart] = line.split(/:(.+)/);
            return (
              <span key={lIdx} className="block my-0.5">
                <strong className="font-semibold text-[#1A1A1A]">{boldPart}:</strong>
                {restPart}
              </span>
            );
          }
          return <span key={lIdx} className="block my-0.5">{line}</span>;
        })}
      </p>
    ));
  };

  return (
    <div className="bg-white border border-[#1A1A1A] p-6 rounded-none">
      <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center md:justify-between border-b border-[#1A1A1A] pb-4">
        <div>
          <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-[#1A1A1A]">
            Ma Trận Kế Hoạch Truyền Thông IMC Chi Tiết
          </h2>
          <p className="text-xs text-[#666] font-sans mt-1">
            Bản đồ chiến dịch 6 tháng "Rest Is Not A Reward" - Scented Candle TP.HCM 2026.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://docs.google.com/spreadsheets/d/1BJx4onrGBTsfS-07Uo8pKwZRDYg2Pdg3w6w-bTfgdlc/edit?gid=1330286519#gid=1330286519"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 border border-emerald-700 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 rounded-none px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider transition-all cursor-pointer shadow-[2px_2px_0px_0px_rgba(4,120,87,1)] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(4,120,87,1)] active:translate-y-[1px]"
            title="Nhấp vào để mở file Google Sheets gốc"
          >
            <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-700" />
            <span>Gốc Google Sheets 🔗</span>
          </a>
          <div className="flex items-center gap-2 bg-[#F2EFE8] px-3 py-1.5 border border-[#1A1A1A] text-[10px] font-mono text-[#1a1a1a] uppercase font-bold tracking-wider">
            <span>Tổng ngân sách: 315.000.000 VNĐ</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto border border-[#1A1A1A]">
        <table className="w-full min-w-[900px] border-collapse text-left">
          <thead>
            <tr className="bg-[#FAF8F5] border-b border-[#1A1A1A]">
              <th className="py-4 px-4 font-mono text-[10px] uppercase tracking-wider text-[#1A1A1A] w-[18%] sticky left-0 bg-[#FAF8F5] z-10 border-r border-[#1A1A1A]">
                Hạng mục
              </th>
              <th className="py-4 px-4 font-mono text-[10px] uppercase tracking-wider text-[#1A1A1A] w-[27%] border-r border-[#1A1A1A]/30">
                <div className="flex items-center gap-2">
                  <div>
                    <div className="font-extrabold text-[#1A1A1A]">Phase 1: TRIGGER (Nhận diện)</div>
                    <div className="text-[9px] text-[#666] font-normal lowercase">Tháng 1 – Tháng 2 (~95M)</div>
                  </div>
                </div>
              </th>
              <th className="py-4 px-4 font-mono text-[10px] uppercase tracking-wider text-[#1A1A1A] w-[27%] border-r border-[#1A1A1A]/30">
                <div className="flex items-center gap-2">
                  <div>
                    <div className="font-extrabold text-[#1A1A1A]">Phase 2: ENGAGE (Kết nối)</div>
                    <div className="text-[9px] text-[#666] font-normal lowercase">Tháng 3 – Tháng 4 (~130M)</div>
                  </div>
                </div>
              </th>
              <th className="py-4 px-4 font-mono text-[10px] uppercase tracking-wider text-[#1A1A1A] w-[28%]">
                <div className="flex items-center gap-2">
                  <div>
                    <div className="font-extrabold text-[#1A1A1A]">Phase 3: AMPLIFY (Lan tỏa)</div>
                    <div className="text-[9px] text-[#666] font-normal lowercase">Tháng 5 – Tháng 6 (~90M)</div>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1A1A1A]/20">
            {matrixData.map((row, index) => (
              <tr key={index} className="hover:bg-[#FAF8F5]/30 transition-colors align-top">
                <td className="py-4 px-4 font-mono text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider bg-white border-r border-[#1A1A1A] sticky left-0 z-10">
                  <div className="pt-0.5">
                    {row.category}
                  </div>
                </td>
                <td className="py-4 px-5 text-xs text-[#333] border-r border-[#1A1A1A]/20 bg-[#FAF8F5]/10 leading-relaxed">
                  {renderCellText(row.trigger)}
                </td>
                <td className="py-4 px-5 text-xs text-[#333] border-r border-[#1A1A1A]/20 leading-relaxed">
                  {renderCellText(row.engage)}
                </td>
                <td className="py-4 px-5 text-xs text-[#333] leading-relaxed">
                  {renderCellText(row.amplify)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-4 bg-[#F2EFE8] border border-[#1A1A1A]">
        <h4 className="font-mono text-xs font-bold text-[#1a1a1a] uppercase tracking-widest">
          Lưu ý triển khai &amp; vận hành
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 text-xs text-[#444] font-sans leading-relaxed">
          <div>
            <p><strong>Cơ cấu nhân sự tinh gọn:</strong> Quyết định không thuê agency toàn phần để tiết kiệm chi phí. 1 Project Lead điều hướng, 1 Content Creator kiêm Photographer nội bộ (in-house) lo liệu hình ảnh sản phẩm mộc, thuê freelancer videographer theo buổi chụp (~3-5tr/chi phí ngày chụp).</p>
          </div>
          <div>
            <p><strong>Kỷ luật nội dung &amp; Pop-up Workshop:</strong> Chuỗi workshop offline tại quán cà phê Nấp Sài Gòn &amp; Bản Cà phê được tổ chức 1 lần/tháng. Đăng ký sớm trước 3 tuần. Toàn bộ sáp nến được thắp hữu cơ tạo ra mỏ neo kết nối thực chất.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IMCMatrix;
