import React from 'react';
import { KOCSelection } from '../types';
import { Users, Check } from 'lucide-react';

interface KocSelectorProps {
  kocs: KOCSelection[];
  onToggleKoc: (id: string) => void;
}

export function KocSelector({ kocs, onToggleKoc }: KocSelectorProps) {
  const selectedKocs = kocs.filter((k) => k.selected);
  const totalFee = selectedKocs.reduce((sum, k) => sum + k.fee, 0);
  const totalFollowers = selectedKocs.reduce((sum, k) => sum + k.followerCount, 0);
  const averageEngagement = selectedKocs.length > 0 
    ? (selectedKocs.reduce((sum, k) => sum + k.engagementRate, 0) / selectedKocs.length).toFixed(1) 
    : '0.0';

  return (
    <div className="bg-white p-6 rounded-none border border-[#1A1A1A]">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4">
        <div className="flex items-center gap-2">
          <Users className="h-4.5 w-4.5 text-[#1A1A1A]" />
          <h3 className="text-[11px] font-mono text-[#1A1A1A] uppercase tracking-widest font-bold">Lựa chọn KOC Đồng Hành (Micro-Creators Selection)</h3>
        </div>
        <span className="bg-[#1A1A1A] text-white px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider">
          {selectedKocs.length} Được Chọn
        </span>
      </div>

      <p className="mt-3 text-xs text-[#555] leading-relaxed">
        Chiến dịch ưu tiên các <strong className="text-[#1A1A1A]">Lifestyle/Wellness Creators (10K - 100K followers)</strong> có tệp người xem là nữ văn phòng TP.HCM, nội dung chân thật mộc mạc, mức giá phù hợp ngân sách (~3-8 triệu).
      </p>

      {/* Summary Box */}
      <div className="mt-4 grid grid-cols-3 gap-3 bg-[#FDFCF8] p-4 rounded-none border border-[#1A1A1A]">
        <div>
          <p className="text-[9px] font-mono text-[#666] uppercase tracking-wider">Tổng Chi Phí KOC</p>
          <p className="text-xs font-bold font-mono text-[#1A1A1A] mt-0.5">
            {new Intl.NumberFormat('vi-VN').format(totalFee)} đ
          </p>
        </div>
        <div>
          <p className="text-[9px] font-mono text-[#666] uppercase tracking-wider">Follower Reach</p>
          <p className="text-xs font-bold font-mono text-[#1A1A1A] mt-0.5">
            {totalFollowers.toLocaleString('vi-VN')}
          </p>
        </div>
        <div>
          <p className="text-[9px] font-mono text-[#666] uppercase tracking-wider">Tương Tác Tb (ER)</p>
          <p className="text-xs font-bold font-mono text-emerald-800 mt-0.5">
            {averageEngagement}%
          </p>
        </div>
      </div>

      {/* List */}
      <div className="mt-5 space-y-3">
        {kocs.map((koc) => {
          return (
            <div 
              key={koc.id}
              onClick={() => onToggleKoc(koc.id)}
              className={`p-3.5 rounded-none border transition-all flex items-center justify-between cursor-pointer ${
                koc.selected 
                  ? 'border-[#1A1A1A] bg-[#F2EFE8] scale-[1.01]' 
                  : 'border-[#1A1A1A]/30 hover:border-[#1A1A1A] bg-white'
              }`}
            >
              
              <div className="flex items-center gap-3">
                <img 
                  src={koc.avatar} 
                  alt={koc.name}
                  referrerPolicy="no-referrer"
                  className="h-11 w-11 rounded-none object-cover border border-[#1A1A1A]" 
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-[#1A1A1A]">{koc.name}</h4>
                    <span className="text-[9px] px-1.5 py-0.5 rounded-none bg-[#1A1A1A]/5 border border-[#1A1A1A]/20 font-mono text-[#1A1A1A] font-bold uppercase">
                      {koc.category}
                    </span>
                  </div>
                  <p className="text-[10px] text-[#666] font-mono mt-0.5">{koc.username}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="font-mono text-xs font-bold text-[#1A1A1A]">
                    {new Intl.NumberFormat('vi-VN').format(koc.fee)} đ
                  </p>
                  <p className="text-[10px] text-[#666] font-mono mt-0.5">{koc.followerCount.toLocaleString('vi-VN')} followers</p>
                </div>

                {/* Selection toggle design - Geometric square checkboxes */}
                <div className={`h-5 w-5 rounded-none flex items-center justify-center border transition-all ${
                  koc.selected 
                    ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white' 
                    : 'border-[#1A1A1A]/45 hover:border-[#1A1A1A]'
                }`}>
                  {koc.selected && <Check className="h-3 w-3 text-white" />}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
export default KocSelector;
