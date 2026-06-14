import React from 'react';
import { CampaignPhaseId } from '../types';

interface DetailedBudgetTableProps {
  phaseId: CampaignPhaseId;
}

interface BudgetItem {
  category: string;
  item: string;
  unit: string;
  qty: string;
  unitPrice: string;
  totalPrice: number;
  note: string;
}

export function DetailedBudgetTable({ phaseId }: DetailedBudgetTableProps) {
  const getPhaseData = (): { name: string; total: string; items: BudgetItem[] } => {
    switch (phaseId) {
      case 'trigger':
        return {
          name: 'Phase 1: TRIGGER (Nhận diện)',
          total: '95,000,000 VNĐ',
          items: [
            // A. Content Production
            {
              category: 'A. CONTENT PRODUCTION (38.000.000 đ)',
              item: 'Video TikTok/Reels (teaser)',
              unit: 'Video',
              qty: '10 hoặc 20 video (10 video/tháng × 2 tháng)',
              unitPrice: '400.000 đ',
              totalPrice: 8000000,
              note: 'Quay điện thoại, lighting đơn giản, edit cơ bản',
            },
            {
              category: 'A. CONTENT PRODUCTION (38.000.000 đ)',
              item: 'Ảnh sản phẩm (phong cách warm minimalism)',
              unit: 'Buổi chụp',
              qty: '4 buổi (2 buổi × 2 tháng)',
              unitPrice: '3.000.000 đ',
              totalPrice: 12000000,
              note: 'Freelance photographer, 1 buổi ra ~20–30 ảnh dùng cả tháng',
            },
            {
              category: 'A. CONTENT PRODUCTION (38.000.000 đ)',
              item: 'Thiết kế poster / graphic (OOH + social)',
              unit: 'Bộ',
              qty: '4 bộ',
              unitPrice: '1.500.000 đ',
              totalPrice: 6000000,
              note: 'Freelance designer hoặc Canva Pro',
            },
            {
              category: 'A. CONTENT PRODUCTION (38.000.000 đ)',
              item: 'In poster đặt quán cà phê (A2)',
              unit: 'Tờ',
              qty: '20 tờ',
              unitPrice: '50.000 đ',
              totalPrice: 1000000,
              note: 'In offset, chất liệu giấy kraft tại các quán mộc',
            },
            {
              category: 'A. CONTENT PRODUCTION (38.000.000 đ)',
              item: 'Rest Ritual Card (in lần 1)',
              unit: 'Thẻ',
              qty: '200 thẻ',
              unitPrice: '5.500 đ',
              totalPrice: 1100000,
              note: 'Giấy kraft, in 1 mặt, tặng kèm tại workshop & đơn hàng',
            },
            {
              category: 'A. CONTENT PRODUCTION (38.000.000 đ)',
              item: 'Copywriting / caption toàn tháng',
              unit: 'Tháng',
              qty: '2 tháng',
              unitPrice: '4.950.000 đ',
              totalPrice: 9900000,
              note: 'Biên tập viên viết kịch bản & caption chân thật tinh gọn',
            },
            // B. Workshop
            {
              category: 'B. WORKSHOP OFFLINE (8.000.000 đ)',
              item: 'Venue quán cà phê đối tác',
              unit: 'Buổi',
              qty: '2 buổi',
              unitPrice: 'Free (barter)',
              totalPrice: 0,
              note: 'Đổi chéo: quán được tag địa chỉ, brand đặt nến trang trí',
            },
            {
              category: 'B. WORKSHOP OFFLINE (8.000.000 đ)',
              item: 'Chi phí tổ chức (nước, setup, in tài liệu)',
              unit: 'Buổi',
              qty: '2 buổi (25 người/buổi)',
              unitPrice: 'Phân bổ ~160.000 đ/người',
              totalPrice: 8000000,
              note: 'Trung bình nước uống, tài liệu sần, tinh gọn',
            },
            {
              category: 'B. WORKSHOP OFFLINE (8.000.000 đ)',
              item: 'Nến tặng người tham gia',
              unit: 'Cây',
              qty: '50 cây',
              unitPrice: '0 (đã trừ giá vốn)',
              totalPrice: 0,
              note: 'Dùng nến thương hiệu trực tiếp từ tồn kho sản xuất',
            },
            // C. KOC
            {
              category: 'C. KOC / INFLUENCER (20.000.000 đ)',
              item: 'Micro KOC (10K–50K followers)',
              unit: 'Người',
              qty: '2 người',
              unitPrice: '5.000.000 đ',
              totalPrice: 10000000,
              note: '1 bài feed + 1 story/người, nội dung thảnh thơi mộc mạc',
            },
            {
              category: 'C. KOC / INFLUENCER (20.000.000 đ)',
              item: 'Nano KOC (3K–10K followers)',
              unit: 'Người',
              qty: '2 người',
              unitPrice: '2.000.000 đ',
              totalPrice: 4000000,
              note: 'Người thật việc thật yêu thích thủ công & viết journaling',
            },
            {
              category: 'C. KOC / INFLUENCER (20.000.000 đ)',
              item: 'Sản phẩm gửi tặng KOC (gift set)',
              unit: 'Set',
              qty: '4 set',
              unitPrice: '1.500.000 đ',
              totalPrice: 6000000,
              note: 'Gói kraft mộc kèm bưu thiếp viết tay tạo unbox tự nhiên',
            },
            // D. Ads
            {
              category: 'D. ADS — PAID MEDIA (29.000.000 đ)',
              item: 'TikTok Ads (boost video teaser)',
              unit: 'Tháng',
              qty: '2 tháng',
              unitPrice: '7.000.000 đ',
              totalPrice: 14000000,
              note: 'Chạy tăng view cho video thắp nến có vibe chữa lành',
            },
            {
              category: 'D. ADS — PAID MEDIA (29.000.000 đ)',
              item: 'Facebook/Instagram Ads (awareness)',
              unit: 'Tháng',
              qty: '2 tháng',
              unitPrice: '5.000.000 đ',
              totalPrice: 10000000,
              note: 'Target nữ văn phòng 22–32 tại khu vực quận lớn HCMC',
            },
            {
              category: 'D. ADS — PAID MEDIA (29.000.000 đ)',
              item: 'Zalo Ads (nhận diện local)',
              unit: 'Tháng',
              qty: '2 tháng',
              unitPrice: '2.500.000 đ',
              totalPrice: 5000000,
              note: 'Định vị khu vực địa lý mỏ neo quanh các quán cà phê đối tác',
            },
          ],
        };

      case 'engage':
        return {
          name: 'Phase 2: ENGAGE (Kết nối)',
          total: '130,000,000 VNĐ',
          items: [
            {
              category: 'A. CONTENT PRODUCTION (20.000.000 đ)',
              item: 'Thiết kế Instagram Carousel bài bản',
              unit: 'Bộ thiết kế',
              qty: '10 bộ',
              unitPrice: '1.000.000 đ',
              totalPrice: 10000000,
              note: 'Graphic kể chuyện chạm cảm xúc, thúc đẩy tỷ lệ SAVE lưu trữ cao',
            },
            {
              category: 'A. CONTENT PRODUCTION (20.000.000 đ)',
              item: 'Copywriting chuyên sâu',
              unit: 'Tháng',
              qty: '2 tháng',
              unitPrice: '5.000.000 đ',
              totalPrice: 10000000,
              note: 'Biên tập nội dung workshop, thư gửi độc giả sống chậm',
            },
            {
              category: 'B. WORKSHOP OFFLINE (16.000.000 đ)',
              item: 'Thuê phòng riêng quán cà phê mộc',
              unit: 'Buổi',
              qty: '2 buổi',
              unitPrice: '3.500.000 đ',
              totalPrice: 7000000,
              note: 'Không gian biệt lập gỗ ấm, yên tĩnh tại trung tâm Quận 1 & Bình Thạnh',
            },
            {
              category: 'B. WORKSHOP OFFLINE (16.000.000 đ)',
              item: 'Nước uống thảo mộc & bánh sấy nhẹ',
              unit: 'Học viên',
              qty: '60 người',
              unitPrice: '150.000 đ',
              totalPrice: 9000000,
              note: 'Chuẩn bị chu đáo nước detox hoa quả khô & cookie mộc mạc',
            },
            {
              category: 'C. KOC SEEDING (30.000.000 đ)',
              item: 'Micro KOC chuyên cảm xúc và chữa lành',
              unit: 'Người',
              qty: '3 người',
              unitPrice: '7.000.000 đ',
              totalPrice: 21000000,
              note: 'Đến tham gia workshop offline tự nhiên và chia sẻ cảm nhận chân thật',
            },
            {
              category: 'C. KOC SEEDING (30.000.000 đ)',
              item: 'Seeding hội nhóm & Nano KOC mộc',
              unit: 'Gói',
              qty: '1 gói',
              unitPrice: '9.000.000 đ',
              totalPrice: 9000000,
              note: 'Lan tỏa thảo luận về văn hóa kiệt sức, chia sẻ góc dừng lại',
            },
            {
              category: 'D. PR & EDITORIAL (20.000.000 đ)',
              item: 'Bài viết mộc trên chuyên san/fanpage',
              unit: 'Bài',
              qty: '2 bài',
              unitPrice: '10.000.000 đ',
              totalPrice: 20000000,
              note: 'Chuyên trang uy tín kể về phong cách trị liệu bằng nến mộc',
            },
            {
              category: 'E. IN ẤN PHỤ KIỆN (5.000.000 đ)',
              item: 'In ấn Rest Ritual Card chất lượng cao',
              unit: 'Thiệp',
              qty: '1000 thẻ',
              unitPrice: '5.000 đ',
              totalPrice: 5000000,
              note: 'Chất liệu giấy kraft Thụy Điển siêu dầy mộc xịn',
            },
            {
              category: 'F. BOOST ADS & INTERACTION (25.000.000 đ)',
              item: 'Quảng cáo tăng tương tác Meta/Google',
              unit: 'Tháng',
              qty: '2 tháng',
              unitPrice: '12.500.000 đ',
              totalPrice: 25000000,
              note: 'Tối ưu click tệp văn phòng HCMC thích tĩnh tâm',
            },
          ],
        };

      case 'amplify':
      default:
        return {
          name: 'Phase 3: AMPLIFY (Lan tỏa)',
          total: '90,000,000 VNĐ',
          items: [
            {
              category: 'A. COMMUNITY UGC (15.000.000 đ)',
              item: 'Quà tặng giải thưởng UGC mộc mạc',
              unit: 'Phần',
              qty: '10 phần quà',
              unitPrice: '1.500.000 đ',
              totalPrice: 15000000,
              note: 'Tặng bundle Rest Kit phiên bản gỗ đặc biệt kèm voucher 6 tháng',
            },
            {
              category: 'B. RETARGETING ADS (20.000.000 đ)',
              item: 'Quảng cáo bám đuổi hành vi mua hàng',
              unit: 'Tháng',
              qty: '2 tháng',
              unitPrice: '10.000.000 đ',
              totalPrice: 20000000,
              note: 'Đeo bám tệp người theo dõi & tương tác kịch trần từ Phase 2',
            },
            {
              category: 'C. REST KIT PACKAGING (15.000.000 đ)',
              item: 'Thiết kế & in ấn hộp thô mộc xách tay',
              unit: 'Set',
              qty: '100 set',
              unitPrice: '150.000 đ',
              totalPrice: 15000000,
              note: 'In offset kraft lụa, bọc dây thừng đính cành quế thật xịn mịn',
            },
            {
              category: 'D. WORKSHOP FINALE (20.000.000 đ)',
              item: 'Setup triển lãm & Workshop pop-up lớn',
              unit: 'Gói',
              qty: '1 gói sự kiện',
              unitPrice: '20.000.000 đ',
              totalPrice: 20000000,
              note: 'Sự kiện quy tụ 50 khách hàng trung thành, đốt nến thắp sáp đêm đông',
            },
            {
              category: 'E. CRM & CHĂM SÓC KHÁCH HÀNG (20.000.000 đ)',
              item: 'Món quà viết tay & thư riêng tri ân',
              unit: 'Giao dịch',
              qty: '100 set',
              unitPrice: '200.000 đ',
              totalPrice: 20000000,
              note: 'Dịch vụ cá nhân hóa tri ân chân chất để khách gắn bó lâu dài',
            },
          ],
        };
    }
  };

  const { name, total, items } = getPhaseData();

  // Highlight categories helper
  let currentCategory = '';

  return (
    <div className="bg-white border border-[#1A1A1A] p-6 rounded-none">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-[#1A1A1A] pb-4 mb-4 gap-2">
        <div>
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A]">
            Bảng dự toán chi tiết: {name}
          </h3>
          <p className="text-[11px] text-[#666] font-sans mt-0.5">
            Bóc tách hạng mục tài chính rõ ràng, tối giản không rườm rà.
          </p>
        </div>
        <div className="bg-[#FAF8F5] border border-[#1A1A1A] px-3.5 py-1.5 font-mono text-xs font-bold text-[#1A1A1A] tracking-wider text-right uppercase">
          Tổng ngân sách: {total}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse font-sans">
          <thead>
            <tr className="bg-[#FAF8F5] border-b border-[#1A1A1A] text-[10px] font-mono text-[#1a1a1a] uppercase tracking-wider">
              <th className="py-2.5 px-3">Hạng mục chi tiết</th>
              <th className="py-2.5 px-3 w-[12%]">Đơn vị</th>
              <th className="py-2.5 px-3 w-[20%]">Số lượng thực tế</th>
              <th className="py-2.5 px-3 text-right w-[15%]">Đơn giá</th>
              <th className="py-2.5 px-3 text-right w-[15%]">Thành tiền</th>
              <th className="py-2.5 px-3 w-[25%] pl-4">Ghi chú vận hành</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1A1A1A]/10">
            {items.map((row, idx) => {
              const showCategoryHeader = row.category !== currentCategory;
              if (showCategoryHeader) {
                currentCategory = row.category;
              }

              return (
                <React.Fragment key={idx}>
                  {showCategoryHeader && (
                    <tr className="bg-[#FAF8F5]/60">
                      <td colSpan={6} className="py-2 px-3 font-mono text-[9px] font-bold text-[#333] uppercase bg-[#FAF8F5] tracking-widest border-y border-[#1A1A1A]/10">
                        {row.category}
                      </td>
                    </tr>
                  )}
                  <tr className="hover:bg-[#FAF8F5]/30 transition-colors">
                    <td className="py-2.5 px-3 font-medium text-[#1A1A1A]">{row.item}</td>
                    <td className="py-2.5 px-3 text-[#555]">{row.unit}</td>
                    <td className="py-2.5 px-3 font-mono text-[11px] text-[#555]">{row.qty}</td>
                    <td className="py-2.5 px-3 text-right font-mono text-[#555]">{row.unitPrice}</td>
                    <td className="py-2.5 px-3 text-right font-mono font-semibold text-[#1A1A1A]">
                      {row.totalPrice === 0 ? 'Free' : `${new Intl.NumberFormat('vi-VN').format(row.totalPrice)} đ`}
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-[#666] leading-relaxed pl-4 font-sans">{row.note}</td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-[10px] text-[#666] font-mono leading-relaxed border-t border-[#1A1A1A]/10 pt-3 border-dashed">
        * Bảng báo giá đã được cân đối sát thực tế với chi phí thuê freelancer &amp; barter mặt bằng cafe TP.HCM năm 2026. Cam kết tối giản hóa chi phí trung gian.
      </div>
    </div>
  );
}
