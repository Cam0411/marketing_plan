import React from 'react';
import { CampaignPhase, CampaignPhaseId } from '../types';
import { Target, MessageSquare, Zap } from 'lucide-react';

interface PhaseTimelineProps {
  phases: CampaignPhase[];
  selectedPhaseId: CampaignPhaseId;
  onSelectPhase: (id: CampaignPhaseId) => void;
  metrics: { overallBudget: number };
}

export function PhaseTimeline({ phases, selectedPhaseId, onSelectPhase, metrics }: PhaseTimelineProps) {
  const getPhaseNumber = (id: CampaignPhaseId) => {
    switch (id) {
      case 'trigger': return '01';
      case 'engage': return '02';
      case 'amplify': return '03';
    }
  };

  const getPhaseIcon = (id: CampaignPhaseId) => {
    switch (id) {
      case 'trigger': return <Zap className="h-3.5 w-3.5" />;
      case 'engage': return <MessageSquare className="h-3.5 w-3.5" />;
      case 'amplify': return <Target className="h-3.5 w-3.5" />;
    }
  };

  return (
    <div className="bg-[#FAF8F5]/30 px-6 py-6 border-b border-[#1A1A1A]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5">
          
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#E5E5E5] pb-3">
            <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A]">
              Sơ đồ Giai đoạn Chiến dịch (IMC Stages & Active Timeline)
            </h2>
            <div className="text-[10px] font-mono font-bold uppercase text-[#fff] bg-[#1A1A1A] px-2.5 py-1">
              Phân bổ chi: {new Intl.NumberFormat('vi-VN').format(metrics.overallBudget)} VNĐ / 315.000.000 VNĐ
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {phases.map((phase) => {
              const isSelected = phase.id === selectedPhaseId;
              const percentOfTotal = ((phase.budget / 315000000) * 100).toFixed(0);
              const phaseNum = getPhaseNumber(phase.id);

              return (
                <button
                  key={phase.id}
                  onClick={() => onSelectPhase(phase.id)}
                  id={`phase-tab-${phase.id}`}
                  className={`relative flex flex-col text-left p-5 transition-all duration-200 cursor-pointer rounded-none border ${
                    isSelected 
                      ? 'border-[#1A1A1A] bg-[#F2EFE8] ring-1 ring-[#1A1A1A] scale-[1.01]' 
                      : 'border-[#1A1A1A]/40 bg-white hover:border-[#1A1A1A] hover:bg-[#FAF8F5]'
                  }`}
                >
                  {/* Top Row with Phase Index Indicator in Serif and Timeframe */}
                  <div className="flex items-baseline justify-between mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-serif italic text-[#1A1A1A] leading-none">
                        {phaseNum}
                      </span>
                      <h3 className="text-lg font-bold uppercase tracking-tight text-[#1A1A1A]">
                        {phase.id.toUpperCase()}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase text-[#666] tracking-wider">
                      {phase.timeframe}
                    </span>
                  </div>

                  {/* High visual accent line */}
                  <div className={`h-1 w-full mb-4 ${isSelected ? 'bg-[#1A1A1A]' : 'bg-[#1A1A1A]/30'}`}></div>

                  <h4 className="font-serif text-sm font-semibold text-[#1A1A1A] italic mb-1.5">
                    "{phase.vnName}"
                  </h4>
                  
                  <p className="text-xs text-[#555] leading-relaxed line-clamp-2 mb-4">
                    {phase.objectiveText}
                  </p>

                  <div className="mt-auto border-t border-[#E5E5E5] pt-3 flex items-center justify-between text-xs">
                    <div>
                      <p className="text-[9px] font-mono text-[#666] uppercase tracking-wider">Ngân Sách</p>
                      <p className="text-xs font-bold text-[#1a1a1a]">
                        {new Intl.NumberFormat('vi-VN').format(phase.budget)} đ
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-mono text-[#666] uppercase tracking-wider">Tỷ Lệ Chi</p>
                      <p className="text-xs font-semibold text-[#1A1A1A]">{percentOfTotal}% toàn IMC</p>
                    </div>
                  </div>

                  {/* Marker symbol for selected stage */}
                  {isSelected && (
                    <div className="absolute top-2 right-2 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PhaseTimeline;
