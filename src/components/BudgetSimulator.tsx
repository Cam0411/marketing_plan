import React, { useState, useEffect } from 'react';
import { CampaignPhase, CampaignPhaseId, CampaignMetrics } from '../types';
import { Wallet, Sparkles, TrendingUp } from 'lucide-react';

interface BudgetSimulatorProps {
  phase: CampaignPhase;
  onBudgetChange: (phaseId: CampaignPhaseId, updatedChannels: { name: string; budget: number }[]) => void;
  metrics: CampaignMetrics;
  onUpdateMetrics: (reach: number, engagement: number, ugc: number, sales: number) => void;
}

export function BudgetSimulator({ phase, onBudgetChange, metrics, onUpdateMetrics }: BudgetSimulatorProps) {
  // Local state for tracking sliders in real-time
  const [localChannels, setLocalChannels] = useState<{ name: string; budget: number; desc: string; type: string }[]>([]);

  useEffect(() => {
    if (phase) {
      setLocalChannels(phase.channels.map(c => ({ ...c })));
    }
  }, [phase]);

  // Handle slider changes
  const handleSliderChange = (idx: number, newVal: number) => {
    const updated = [...localChannels];
    updated[idx].budget = newVal;
    setLocalChannels(updated);
  };

  // Submit changes to parent after user finishes dragging
  const handleCommitChange = () => {
    onBudgetChange(phase.id, localChannels.map(c => ({ name: c.name, budget: c.budget })));
  };

  const currentSum = localChannels.reduce((sum, c) => sum + c.budget, 0);
  const budgetLimit = phase.budget;
  const isOverBudget = currentSum > budgetLimit;
  const remainingBudget = budgetLimit - currentSum;

  const calculateProjections = () => {
    let reachPrj = 0;
    let engPrj = 0;
    let ugcPrj = 0;
    let salesPrj = 0;

    localChannels.forEach(c => {
      const bM = c.budget / 1000000;
      if (c.name.toLowerCase().includes('koc')) {
        reachPrj += bM * 8500;
        engPrj += bM * 8500 * 0.055;
        ugcPrj += bM * 4;
      } else if (c.name.toLowerCase().includes('tiktok') || c.name.toLowerCase().includes('instagram') || c.name.toLowerCase().includes('boost') || c.name.toLowerCase().includes('ads')) {
        reachPrj += bM * 6200;
        engPrj += bM * 6200 * 0.045;
        ugcPrj += bM * 1.5;
        if (c.name.toLowerCase().includes('retargeting')) {
          salesPrj += bM * 3.5;
        }
      } else if (c.name.toLowerCase().includes('workshop')) {
        reachPrj += bM * 500;
        engPrj += bM * 500 * 0.35;
        ugcPrj += bM * 12;
        salesPrj += bM * 1.8;
      } else if (c.name.toLowerCase().includes('pr') || c.name.toLowerCase().includes('editorial')) {
        reachPrj += bM * 4000;
        engPrj += bM * 4000 * 0.035;
      } else if (c.name.toLowerCase().includes('kit')) {
        salesPrj += bM * 5.0;
        ugcPrj += bM * 3;
      } else {
        reachPrj += bM * 1200;
        engPrj += bM * 1200 * 0.03;
      }
    });

    return {
      reach: Math.round(reachPrj),
      engagement: Math.round(engPrj),
      ugc: Math.round(ugcPrj),
      sales: Math.round(salesPrj)
    };
  };

  const projections = calculateProjections();

  const applyProjections = () => {
    onUpdateMetrics(projections.reach, projections.engagement, projections.ugc, projections.sales);
  };

  return (
    <div className="bg-white p-6 rounded-none border border-[#1A1A1A]">
      
      {/* Title */}
      <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4">
        <div className="flex items-center gap-2">
          <Wallet className="h-4.5 w-4.5 text-[#1A1A1A]" />
          <h3 className="text-[11px] font-mono text-[#1A1A1A] uppercase tracking-widest font-bold">Mô phỏng Phân bổ Ngân sách</h3>
        </div>
        <span className="font-mono text-[9px] text-[#ffffff] bg-[#1A1A1A] px-2 py-0.5 uppercase font-semibold">
          {phase.vnName}
        </span>
      </div>

      <p className="mt-3 text-xs text-[#555] leading-relaxed">
        Kéo thanh trượt để thay đổi mức độ đầu tư vào các kênh truyền thông trong giai đoạn. Hệ thống sẽ tự động tính toán hiệu quả tiếp cận (Reach), tương tác (Engagement) và doanh số ước tính.
      </p>

      {/* Budget Balance Status Bar */}
      <div className="mt-5 p-4 rounded-none bg-[#FDFCF8] border border-[#1A1A1A]">
        <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider text-[#1A1A1A]">
          <span>Tổng hạn mức:</span>
          <span>{new Intl.NumberFormat('vi-VN').format(budgetLimit)} đ</span>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-2.5 h-1.5 w-full bg-[#E5E5E5] relative overflow-hidden">
          <div 
            className={`h-full transition-all duration-300 ${isOverBudget ? 'bg-red-600' : 'bg-[#1A1A1A]'}`} 
            style={{ width: `${Math.min((currentSum / budgetLimit) * 100, 100)}%` }}
          />
        </div>

        <div className="mt-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider font-bold">
          <div className="flex items-center gap-1.5">
            <span className="text-[#666]">Đã phân bổ:</span>
            <span className={isOverBudget ? 'text-red-600' : 'text-[#1A1A1A]'}>
              {new Intl.NumberFormat('vi-VN').format(currentSum)} đ
            </span>
          </div>
          <div>
            {isOverBudget ? (
              <span className="text-red-600">Vượt: +{new Intl.NumberFormat('vi-VN').format(currentSum - budgetLimit)} đ</span>
            ) : (
              <span className="text-emerald-700">Còn lại: {new Intl.NumberFormat('vi-VN').format(remainingBudget)} đ</span>
            )}
          </div>
        </div>
      </div>

      {/* Sliders List */}
      <div className="mt-5 space-y-4">
        {localChannels.map((chan, idx) => {
          const percentOfLimit = ((chan.budget / budgetLimit) * 100).toFixed(0);

          return (
            <div key={chan.name} className="p-4 rounded-none border border-[#1A1A1A]/30 bg-white hover:border-[#1A1A1A] transition-all">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-tight">{chan.name}</h4>
                  <p className="text-[10px] text-[#666] italic mt-0.5">{chan.desc}</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs font-bold text-[#1A1A1A]">
                    {new Intl.NumberFormat('vi-VN').format(chan.budget)} đ
                  </span>
                  <p className="text-[9px] text-[#666] font-mono uppercase mt-0.5">{percentOfLimit}% phase</p>
                </div>
              </div>

              {/* Slider Input */}
              <div className="mt-3 flex items-center gap-3">
                <span className="font-mono text-[9px] text-[#666]">0đ</span>
                <input 
                  type="range"
                  min="0"
                  max={budgetLimit}
                  step="1000000"
                  value={chan.budget}
                  onChange={(e) => handleSliderChange(idx, Number(e.target.value))}
                  onMouseUp={handleCommitChange}
                  onTouchEnd={handleCommitChange}
                  className="w-full h-1 bg-[#E5E5E5] appearance-none cursor-pointer accent-[#1A1A1A]"
                />
                <span className="font-mono text-[9px] text-[#666]">{(budgetLimit / 1000000)}M</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Simulated Outcomes */}
      <div className="mt-8 border-t border-[#1A1A1A] pt-6">
        <div className="flex items-center gap-1.5 text-[#1A1A1A]">
          <TrendingUp className="h-4 w-4" />
          <h4 className="text-[11px] font-mono text-[#1A1A1A] uppercase tracking-widest font-bold">
            Hiệu quả Đóng góp Ước tính
          </h4>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="p-3.5 bg-[#FAF8F5]/55 border border-[#1A1A1A]/40 text-center rounded-none">
            <p className="text-[9px] font-mono text-[#666] uppercase tracking-wider">Tiếp cận ước tính</p>
            <p className="text-base font-bold text-[#1A1A1A] font-serif mt-1">
              ~{projections.reach.toLocaleString('vi-VN')}
            </p>
            <p className="text-[9px] text-[#666] mt-0.5">mở tệp người xem</p>
          </div>
          
          <div className="p-3.5 bg-[#FAF8F5]/55 border border-[#1A1A1A]/40 text-center rounded-none">
            <p className="text-[9px] font-mono text-[#666] uppercase tracking-wider">Tác động tương tác</p>
            <p className="text-base font-bold text-[#1A1A1A] font-serif mt-1">
              ~{projections.engagement.toLocaleString('vi-VN')}
            </p>
            <p className="text-[9px] text-[#666] mt-0.5">comment/chia sẻ sâu</p>
          </div>

          <div className="p-3.5 bg-[#FAF8F5]/55 border border-[#1A1A1A]/40 text-center rounded-none">
            <p className="text-[9px] font-mono text-[#666] uppercase tracking-wider">Lượt UGC lan tỏa</p>
            <p className="text-base font-bold text-[#1A1A1A] font-serif mt-1">
              ~{projections.ugc.toLocaleString('vi-VN')}
            </p>
            <p className="text-[9px] text-[#666] mt-0.5">ảnh khoảng lặng tự nhiên</p>
          </div>

          <div className="p-3.5 bg-[#FAF8F5]/55 border border-[#1A1A1A]/40 text-center rounded-none">
            <p className="text-[9px] font-mono text-[#666] uppercase tracking-wider">Doanh số set giới hạn</p>
            <p className="text-base font-bold text-[#1A1A1A] font-serif mt-1">
              ~{projections.sales.toLocaleString('vi-VN')}
            </p>
            <p className="text-[9px] text-[#666] mt-0.5">Rest Kit limited sets</p>
          </div>
        </div>

        {/* Sync button to push to global metrics */}
        <div className="mt-5">
          <button
            onClick={applyProjections}
            disabled={isOverBudget}
            className={`w-full py-3 font-mono text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer ${
              isOverBudget 
                ? 'bg-[#E5E5E5] text-[#666] cursor-not-allowed border border-[#666]' 
                : 'bg-[#1A1A1A] text-white hover:bg-neutral-800 border border-[#1A1A1A] active:scale-[0.98]'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            Cập Nhật Toàn Chiến Dịch
          </button>
          {isOverBudget && (
            <p className="mt-1.5 text-[9px] text-center text-red-600 font-bold uppercase tracking-wide">
              *Vượt ngân sách tối đa của giai đoạn.
            </p>
          )}
        </div>
      </div>

    </div>
  );
}
export default BudgetSimulator;
