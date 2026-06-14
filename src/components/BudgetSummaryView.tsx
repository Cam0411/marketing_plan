import React from 'react';

export function BudgetSummaryView() {
  const summaryData = [
    {
      phaseId: 'trigger',
      title: 'Phase 1: TRIGGER',
      subtitle: 'Nhận diện & Gợi mở (Tháng 1–2)',
      total: '95.000.000 VNĐ',
      allocation: [
        { name: 'Sản xuất nội dung (Content)', amount: '38.000.000 VNĐ' },
        { name: 'Quảng cáo trả phí (Ads)', amount: '29.000.000 VNĐ' },
        { name: 'KOC / Người ảnh hưởng', amount: '20.000.000 VNĐ' },
        { name: 'Sự kiện Workshop ban đầu', amount: '8.000.000 VNĐ' },
      ],
      description: 'Khơi gợi câu hỏi cảm xúc "Lần cuối bạn thực sự nghỉ ngơi là khi nào?" qua chuỗi phim tài liệu mộc và poster tối giản.'
    },
    {
      phaseId: 'engage',
      title: 'Phase 2: ENGAGE',
      subtitle: 'Kết nối trải nghiệm (Tháng 3–4)',
      total: '130.000.000 VNĐ',
      allocation: [
        { name: 'KOC Seeding cảm xúc', amount: '30.000.000 VNĐ' },
        { name: 'Quảng cáo tương tác truyền cảm', amount: '25.000.000 VNĐ' },
        { name: 'Sản xuất nội dung sâu (Editorial)', amount: '20.000.000 VNĐ' },
        { name: 'PR bài viết chính luận', amount: '20.000.000 VNĐ' },
        { name: 'Chuỗi Workshop gỗ mộc', amount: '16.000.000 VNĐ' },
        { name: 'Vật phẩm & Card thô mộc', amount: '19.000.000 VNĐ' },
      ],
      description: 'Lấy các buổi workshop tại quán cafe gỗ yên tĩnh làm trái tim chiến dịch, thúc đẩy thảo luận chuyên sâu về sức khỏe tinh thần.'
    },
    {
      phaseId: 'amplify',
      title: 'Phase 3: AMPLIFY',
      subtitle: 'Khuếch đại & Chuyển đổi (Tháng 5–6)',
      total: '90.000.000 VNĐ',
      allocation: [
        { name: 'Sự kiện Workshop tổng kết lớn', amount: '20.000.000 VNĐ' },
        { name: 'Quảng cáo bám đuổi (Retargeting)', amount: '20.000.000 VNĐ' },
        { name: 'Tri ân cá nhân hóa (CRM)', amount: '20.000.000 VNĐ' },
        { name: 'Sản xuất hộp quà Rest Kit limited', amount: '15.000.000 VNĐ' },
        { name: 'Cộng đồng tự sáng tạo (UGC)', amount: '15.000.000 VNĐ' },
      ],
      description: 'Kêu gọi cộng đồng chia sẻ khoảnh khắc tĩnh lặng cá nhân, kích thích chuyển đổi tự nhiên qua bộ sản phẩm giới hạn.'
    }
  ];

  return (
    <div className="bg-white border border-[#1A1A1A] p-6 rounded-none font-sans">
      <div className="border-b border-[#1A1A1A] pb-4 mb-6">
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#666]">
          IMC Campaign 2026 Budget
        </span>
        <h2 className="text-xl font-bold text-[#1A1A1A] mt-1 tracking-tight">
          Bản So Sánh Phân Bổ Ngân Sách 3 Giai Đoạn
        </h2>
        <p className="text-xs text-[#666] mt-1 leading-relaxed">
          Tổng quan side-by-side chi phí phân bổ cho từng hạng mục hành động chính thức trong chiến dịch 6 tháng.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
        {summaryData.map((phase) => (
          <div 
            key={phase.phaseId} 
            className="flex flex-col justify-between border border-[#1A1A1A]/20 p-5 bg-[#FAF8F5]/30 hover:border-[#1A1A1A]/60 transition-colors"
          >
            <div>
              {/* Stage Header */}
              <div className="border-b border-[#1A1A1A]/10 pb-3 mb-4">
                <span className="text-[9px] font-mono uppercase tracking-widest font-bold text-[#666]">
                  {phase.title}
                </span>
                <div className="text-2xl font-bold text-[#1A1A1A] tracking-tight mt-1 font-sans">
                  {phase.total}
                </div>
                <div className="text-[11px] text-[#333] font-semibold uppercase tracking-wider mt-0.5">
                  {phase.subtitle}
                </div>
              </div>

              {/* Items List without any icons */}
              <div className="space-y-2.5 mb-4 font-sans">
                {phase.allocation.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex justify-between items-start text-xs border-b border-[#1A1A1A]/5 pb-2 last:border-0"
                  >
                    <span className="text-[#555] font-light max-w-[65%] leading-relaxed">{item.name}</span>
                    <span className="font-semibold text-[#1A1A1A] text-right whitespace-nowrap">{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stage Description summary */}
            <div className="border-t border-[#1A1A1A]/10 pt-3 text-[11px] text-[#666] leading-relaxed mt-2">
              {phase.description}
            </div>
          </div>
        ))}
      </div>

      {/* Cross-phase summary footer */}
      <div className="mt-6 border-t border-[#1A1A1A] pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between text-[11px] text-[#444] font-mono uppercase tracking-wider gap-2">
        <div>
          Trọng số phân bổ: Phase 1 (30.2%) — Phase 2 (41.2%) — Phase 3 (28.6%)
        </div>
        <div>
          Tổng ngân sách toàn IMC chiến dịch: 315.000.000 VNĐ
        </div>
      </div>
    </div>
  );
}

export default BudgetSummaryView;
