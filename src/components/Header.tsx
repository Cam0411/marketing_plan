import React from 'react';
import { Flame, RefreshCw, Calendar, HeartHandshake, FileSpreadsheet } from 'lucide-react';
import { CampaignMetrics } from '../types';

interface HeaderProps {
  metrics: CampaignMetrics;
  onResetMetrics: () => void;
}

export function Header({ metrics, onResetMetrics }: HeaderProps) {
  const formattedBudget = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(metrics.overallBudget);

  return (
    <header className="border-b border-[#1A1A1A] bg-[#FDFCF8] py-8 px-6 md:px-10 @container">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between pb-6">
          
          {/* Logo & Headline */}
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#666] mb-2 block">
              Integrated Marketing Campaign Plan • SAIGON
            </span>
            <div className="flex items-center gap-3">
              <h1 className="font-serif text-5xl md:text-7xl italic leading-none tracking-tight text-[#1A1A1A]">
                Rest Is Not A Reward
              </h1>
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-600 animate-pulse shrink-0" title="Campaign Active" />
            </div>
            <p className="mt-2 text-xs md:text-sm text-[#444] italic max-w-xl">
              Chiến dịch định nghĩa lại văn hóa nghỉ ngơi &amp; Tạo ra khoảng lặng có chủ đích cho người trẻ thành thị.
            </p>
          </div>

          {/* Practical Info Tracker */}
          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="https://docs.google.com/spreadsheets/d/1BJx4onrGBTsfS-07Uo8pKwZRDYg2Pdg3w6w-bTfgdlc/edit?gid=1330286519#gid=1330286519" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-emerald-700 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 rounded-none px-3.5 py-1.5 text-[10px] uppercase font-bold tracking-wider transition-all active:scale-95 cursor-pointer decoration-none"
              title="Mở bảng tính gốc Google Sheets"
            >
              <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-700" />
              <span>Gốc Google Sheets 🔗</span>
            </a>

            <div className="flex items-center gap-2 border border-[#1A1A1A] bg-white rounded-none px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider">
              <Calendar className="h-3.5 w-3.5 text-[#1A1A1A]" />
              <span>Timeline: 6 Months</span>
            </div>
            
            <button 
              onClick={onResetMetrics}
              className="flex items-center gap-1.5 border border-[#1A1A1A] bg-[#1A1A1A] text-white hover:bg-neutral-800 rounded-none px-3  py-1.5 text-[10px] uppercase font-bold tracking-wider transition-all active:scale-95 cursor-pointer"
              id="btn-reset-data"
            >
              <RefreshCw className="h-3 w-3" />
              Reset Kế hoạch
            </button>
          </div>

        </div>

        {/* Dynamic Campaign Scoreboard / Live Dashboard State (Editorial cards: border-[#1A1A1A], bg-white/F2EFE8, no large shadows) */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          
          <div className="rounded-none border border-[#1A1A1A] bg-white p-5 transition-shadow">
            <p className="font-mono text-[10px] text-[#666] uppercase tracking-widest">Tổng Ngân Sách</p>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-xl md:text-2xl font-serif text-[#1A1A1A] font-semibold">{formattedBudget}</span>
            </div>
            <p className="mt-1.5 text-[10px] text-[#666] italic">Hạn mức chiến dịch: 300M</p>
          </div>

          <div className="rounded-none border border-[#1A1A1A] bg-white p-5 transition-shadow">
            <p className="font-mono text-[10px] text-[#666] uppercase tracking-widest">Lượt Tiếp Cận (Reach)</p>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-xl md:text-2xl font-serif text-[#1A1A1A] font-semibold">
                {metrics.totalReach >= 1000000 
                  ? `${(metrics.totalReach / 1000000).toFixed(2)}M` 
                  : metrics.totalReach.toLocaleString('vi-VN')}
              </span>
              <span className="text-[10px] uppercase font-semibold text-[#666] font-mono ml-1">reach</span>
            </div>
            <p className="mt-1.5 text-[10px] text-[#666] italic">Target: 200,000 - 300,000+</p>
          </div>

          <div className="rounded-none border border-[#1A1A1A] bg-white p-5 transition-shadow">
            <p className="font-mono text-[10px] text-[#666] uppercase tracking-widest">Tác động UGC</p>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-xl md:text-2xl font-serif text-[#1A1A1A] font-semibold">{metrics.totalUgc.toLocaleString('vi-VN')}</span>
              <span className="text-[10px] uppercase font-semibold text-[#666] font-mono ml-1">posts</span>
            </div>
            <p className="mt-1.5 text-[10px] text-[#666] italic">Lượt chia sẻ mộc tự nhiên</p>
          </div>

          <div className="rounded-none border border-[#1A1A1A] bg-[#F2EFE8] p-5 relative overflow-hidden">
            <div className="absolute right-1 bottom-1 h-12 w-12 opacity-10 text-[#1A1A1A]">
              <HeartHandshake className="h-full w-full" />
            </div>
            <p className="font-mono text-[10px] text-[#1A1A1A] uppercase tracking-widest font-semibold">Bán lẻ set "Rest Kit"</p>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-xl md:text-2xl font-serif font-bold text-[#1A1A1A]">{metrics.restKitSales}</span>
              <span className="text-[10px] uppercase font-semibold text-[#1A1A1A] font-mono ml-1">đã bán</span>
            </div>
            <p className="mt-1.5 text-[10px] text-[#666] italic">Phát hành đợt giới hạn</p>
          </div>

        </div>

      </div>
    </header>
  );
}
export default Header;
