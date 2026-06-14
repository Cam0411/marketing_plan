import React from 'react';
import { CampaignPhase } from '../types';
import { Target, BookOpen, Quote, Milestone, Award, Compass, Globe } from 'lucide-react';

interface PhaseDetailsProps {
  phase: CampaignPhase;
}

export function PhaseDetails({ phase }: PhaseDetailsProps) {
  return (
    <div className="bg-white p-6 rounded-none border border-[#1A1A1A]">
      <div className="flex flex-col gap-6">
        
        {/* Stage Overview Banner */}
        <div className="rounded-none bg-[#FDFCF8] border border-[#1A1A1A] p-5">
          <div className="flex items-center gap-2 border-b border-[#E5E5E5] pb-2">
            <BookOpen className="h-4.5 w-4.5 text-[#1A1A1A]" />
            <h3 className="text-[11px] font-mono text-[#1A1A1A] uppercase tracking-widest font-bold">Bối Cảnh &amp; Vấn Đề Giai Đoạn</h3>
          </div>
          <p className="mt-3 text-xs md:text-sm leading-relaxed text-[#444] font-sans">
            {phase.contextAndProblem}
          </p>
        </div>

        {/* Big Idea & Insight Statement */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          
          <div className="p-5 rounded-none border border-[#1A1A1A] bg-[#FDFCF8] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 border-b border-[#E5E5E5] pb-2">
                <Compass className="h-4 w-4 text-[#1A1A1A]" />
                <span className="font-mono text-[9px] text-[#666] uppercase tracking-widest font-bold">Insight cốt lõi</span>
              </div>
              <p className="mt-3 font-serif text-sm italic text-[#1A1A1A] leading-relaxed">
                "{phase.insight}"
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-[#E5E5E5] text-[10px] uppercase font-bold tracking-wider text-[#666]">
              → Định vị nến là "vật thể hóa của khoảng lặng"
            </div>
          </div>

          <div className="p-5 rounded-none border border-[#1A1A1A] bg-[#F2EFE8] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 border-b border-[#1A1A1A]/20 pb-2">
                <Quote className="h-4 w-4 text-[#1A1A1A]" />
                <span className="font-mono text-[9px] text-[#1A1A1A] uppercase tracking-widest font-bold">Key Message</span>
              </div>
              <h4 className="mt-3 font-serif text-base font-semibold italic text-[#1A1A1A] leading-snug">
                "{phase.keyMessage}"
              </h4>
            </div>
            <div className="mt-5 pt-3.5 border-t border-[#1A1A1A]/15 text-[10px] uppercase font-semibold text-[#1A1A1A]/70">
              Chân thật • Đánh thức cảm xúc
            </div>
          </div>

        </div>

        {/* Strategy Hooks & Tactics Big Card */}
        <div className="rounded-none border border-[#1A1A1A] p-5 bg-white">
          <div className="flex items-center gap-2 border-b border-[#E5E5E5] pb-2">
            <Target className="h-4.5 w-4.5 text-[#1A1A1A]" />
            <h4 className="text-[11px] font-mono text-[#1A1A1A] uppercase tracking-widest font-bold">Campaign Hook &amp; Ý tưởng hành động chính</h4>
          </div>
          
          <div className="mt-4 bg-[#F2EFE8] p-4 rounded-none border border-[#1A1A1A]">
            <p className="font-mono text-[10px] font-bold text-[#1A1A1A] uppercase">Ý tưởng gạch neo (Hook):</p>
            <p className="mt-1.5 text-base font-serif font-semibold italic text-[#1A1A1A]">{phase.keyHook}</p>
            <p className="mt-2 text-xs text-[#555] leading-relaxed">
              {phase.keyHookDetail}
            </p>
          </div>

          <div className="mt-5">
            <p className="text-[10px] font-mono font-bold text-[#666] uppercase tracking-wide">Hoạt động bổ trợ (Supporting Tactics)</p>
            <ul className="mt-2.5 space-y-2.5">
              {phase.supportingTactics.map((tactic, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#444] leading-relaxed">
                  <span className="text-[#1A1A1A] font-bold shrink-0">■</span>
                  <span>{tactic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Milestones & Quick Wins */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          
          <div className="p-5 rounded-none border border-[#1A1A1A] bg-white">
            <div className="flex items-center gap-2 border-b border-[#E5E5E5] pb-2">
              <Milestone className="h-4 w-4 text-[#1A1A1A]" />
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]">Milestones</span>
            </div>
            <ul className="mt-4 space-y-3">
              {phase.milestones.map((milestone, idx) => (
                <li key={idx} className="bg-[#FAF8F5] p-3 rounded-none border border-[#E5E5E5] text-xs text-[#444] leading-relaxed italic border-l-2 border-l-[#1A1A1A]">
                  {milestone}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-none border border-[#1A1A1A] bg-[#FDFCF8]">
            <div className="flex items-center gap-2 border-b border-[#E5E5E5] pb-2">
              <Award className="h-4 w-4 text-[#1A1A1A]" />
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]">Quick Wins</span>
            </div>
            <ul className="mt-4 space-y-3">
              {phase.quickWins.map((win, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#444] leading-relaxed">
                  <span className="text-[#1a1a1a] shrink-0 font-bold">✓</span>
                  <span>{win}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Phase Communication Tools */}
        <div className="p-5 rounded-none border border-[#1A1A1A] bg-white">
          <div className="flex items-center gap-2 border-b border-[#E5E5E5] pb-2">
            <Globe className="h-4 w-4 text-[#1A1A1A]" />
            <h4 className="text-[11px] font-mono text-[#1A1A1A] uppercase tracking-widest font-bold">Công cụ truyền thông (Communication Tools)</h4>
          </div>
          <div className="mt-3.5 flex flex-wrap gap-2">
            {phase.communicationTools.map((tool, idx) => (
              <span 
                key={idx} 
                className="bg-white border border-[#1A1A1A] text-[#1A1A1A] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
export default PhaseDetails;
