import React, { useState } from 'react';
import { Header } from './components/Header';
import { PhaseTimeline } from './components/PhaseTimeline';
import { PhaseDetails } from './components/PhaseDetails';
import { BudgetSimulator } from './components/BudgetSimulator';
import { KocSelector } from './components/KocSelector';
import { CoffeeShopPlanner } from './components/CoffeeShopPlanner';
import { AIContentStudio } from './components/AIContentStudio';
import { IMCMatrix } from './components/IMCMatrix';
import { DetailedBudgetTable } from './components/DetailedBudgetTable';
import { BudgetSummaryView } from './components/BudgetSummaryView';
import { ProposedTimeline } from './components/ProposedTimeline';
import { ContentPlanDirection } from './components/ContentPlanDirection';
import { campaignPhases, mockKOCs, mockCoffeeShops, coreStakeholders } from './data';
import { CampaignPhaseId, CampaignMetrics, KOCSelection, CoffeeShop } from './types';
import { BookOpen, Users, Compass, BarChart3, HelpCircle, Award, Lightbulb, PenTool, CheckCircle } from 'lucide-react';

export default function App() {
  const [selectedPhaseId, setSelectedPhaseId] = useState<CampaignPhaseId>('trigger');
  
  // Track KOC Selections
  const [kocs, setKocs] = useState<KOCSelection[]>(mockKOCs);
  
  // Track Coffee Shop Selection
  const [shops, setShops] = useState<CoffeeShop[]>(mockCoffeeShops);
  
  // Active Tab navigation
  const [activeTab, setActiveTab] = useState<'matrix' | 'contentPlan' | 'strategy' | 'planning' | 'studio'>('matrix');

  // Overall Live Computed Campaign Metrics
  const [metrics, setMetrics] = useState<CampaignMetrics>({
    totalReach: 320000,
    totalEngagement: 18400,
    totalUgc: 280,
    restKitSales: 85,
    overallBudget: 315000000, 
  });

  // Calculate current active phase
  const activePhase = campaignPhases.find((p) => p.id === selectedPhaseId) || campaignPhases[0];

  // Callback to update KOC selections
  const handleToggleKoc = (id: string) => {
    setKocs(prev => prev.map(k => k.id === id ? { ...k, selected: !k.selected } : k));
  };

  // Callback to update Coffee Shop venue
  const handleToggleShop = (id: string) => {
    setShops(prev => prev.map(s => s.id === id ? { ...s, selected: !s.selected } : s));
  };

  // Handle single phase budget slider simulation changes
  const handlePhaseBudgetChange = (phaseId: CampaignPhaseId, updatedChannels: { name: string; budget: number }[]) => {
    // Locate target phase and update locally
    const targetIdx = campaignPhases.findIndex(p => p.id === phaseId);
    if (targetIdx !== -1) {
      campaignPhases[targetIdx].channels = campaignPhases[targetIdx].channels.map(chan => {
        const matchingUpdated = updatedChannels.find(up => up.name === chan.name);
        if (matchingUpdated) {
          chan.budget = matchingUpdated.budget;
        }
        return chan;
      });
      
      // Recompute entire campaign allocated budget estimate
      const newSum = campaignPhases.reduce((sum, p) => {
        return sum + p.channels.reduce((pSum, c) => pSum + c.budget, 0);
      }, 0);

      setMetrics(prev => ({
        ...prev,
        overallBudget: newSum
      }));
    }
  };

  // Callback from simulated sliders to update global scoreboard
  const handleUpdateSimulatedMetrics = (reach: number, engagement: number, ugc: number, sales: number) => {
    setMetrics(prev => ({
      ...prev,
      totalReach: prev.totalReach + reach,
      totalEngagement: prev.totalEngagement + engagement,
      totalUgc: prev.totalUgc + ugc,
      restKitSales: Math.min(prev.restKitSales + sales, 120) // cap maximum mock sales based on bundle constraints
    }));
  };

  // Revert all customized sliders and selections back to default
  const handleResetMetrics = () => {
    setMetrics({
      totalReach: 320000,
      totalEngagement: 18400,
      totalUgc: 280,
      restKitSales: 85,
      overallBudget: 315000000,
    });
    setKocs(mockKOCs.map(k => ({ ...k })));
    setShops(mockCoffeeShops.map(s => ({ ...s })));
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] flex flex-col antialiased">
      
      {/* Exquisite header displaying live budget & KPIs */}
      <Header metrics={metrics} onResetMetrics={handleResetMetrics} />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
        
        {/* Navigation Tabs Bar */}
        <div className="flex border-b border-[#1A1A1A] bg-white rounded-none p-1 shadow-sm overflow-x-auto shrink-0 scrollbar-none">
          
          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-5 py-3 rounded-none text-[10px] font-mono font-bold tracking-widest uppercase transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'matrix' 
                ? 'bg-[#1A1A1A] text-white' 
                : 'text-[#666] hover:bg-[#FAF8F5] hover:text-[#1A1A1A]'
            }`}
          >
            1. Ma Trận IMC Chi Tiết
          </button>

          <button
            onClick={() => setActiveTab('contentPlan')}
            className={`px-5 py-3 rounded-none text-[10px] font-mono font-bold tracking-widest uppercase transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'contentPlan' 
                ? 'bg-[#1A1A1A] text-white' 
                : 'text-[#666] hover:bg-[#FAF8F5] hover:text-[#1A1A1A]'
            }`}
          >
            2. Kế Hoạch & Định Hướng Nội Dung
          </button>

          <button
            onClick={() => setActiveTab('strategy')}
            className={`px-5 py-3 rounded-none text-[10px] font-mono font-bold tracking-widest uppercase transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'strategy' 
                ? 'bg-[#1A1A1A] text-white' 
                : 'text-[#666] hover:bg-[#FAF8F5] hover:text-[#1A1A1A]'
            }`}
          >
            3. Tiến Độ & Ngân Sách
          </button>

          <button
            onClick={() => setActiveTab('planning')}
            className={`px-5 py-3 rounded-none text-[10px] font-mono font-bold tracking-widest uppercase transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'planning' 
                ? 'bg-[#1A1A1A] text-white' 
                : 'text-[#666] hover:bg-[#FAF8F5] hover:text-[#1A1A1A]'
            }`}
          >
            4. Điểm Diễn & KOC
          </button>

          <button
            onClick={() => setActiveTab('studio')}
            className={`px-5 py-3 rounded-none text-[10px] font-mono font-bold tracking-widest uppercase transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'studio' 
                ? 'bg-[#1A1A1A] text-white' 
                : 'text-[#666] hover:bg-[#FAF8F5] hover:text-[#1A1A1A]'
            }`}
          >
            5. AI Copywriter Studio
          </button>

        </div>

        {/* Tab Contents */}
        <div className="flex-1">
          
          {/* TAB 1.5: Content Plan & Direction */}
          {activeTab === 'contentPlan' && (
            <ContentPlanDirection />
          )}
          
          {/* TAB 1: IMC Phase Strategy & Budget Simulation */}
          {activeTab === 'strategy' && (
            <div className="flex flex-col gap-6">
              
              {/* Strategic timeline selector */}
              <PhaseTimeline 
                phases={campaignPhases} 
                selectedPhaseId={selectedPhaseId} 
                onSelectPhase={setSelectedPhaseId}
                metrics={metrics}
              />

              {/* High-level Side-by-Side Budget summary view */}
              <BudgetSummaryView />

              {/* Interactive Proposed 24-Weeks Timeline Grid */}
              <ProposedTimeline />

              {/* Grid: Details (Left 7 Columns) vs Simulator (Right 5 Columns) */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                
                {/* Strategic Deep-dive details */}
                <div className="lg:col-span-7">
                  <PhaseDetails phase={activePhase} />
                </div>

                {/* Practical Interactive Simulator */}
                <div className="lg:col-span-5">
                  <BudgetSimulator 
                    phase={activePhase} 
                    onBudgetChange={handlePhaseBudgetChange}
                    metrics={metrics}
                    onUpdateMetrics={handleUpdateSimulatedMetrics}
                  />
                </div>

              </div>

              {/* Complete Line-item Budget / Pricing table */}
              <div className="w-full">
                <DetailedBudgetTable phaseId={selectedPhaseId} />
              </div>

            </div>
          )}

          {/* TAB 2: Offline Outlets (Coffee Shops) & Lifestyle KOC Selection */}
          {activeTab === 'planning' && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              
              {/* Lifestyle KOC lists */}
              <KocSelector kocs={kocs} onToggleKoc={handleToggleKoc} />

              {/* Minimalist Coffee Shop partners */}
              <CoffeeShopPlanner shops={shops} onToggleShop={handleToggleShop} />

            </div>
          )}

          {/* TAB 3: Fully Full-stack AI Copywriting Studio with Gemini API */}
          {activeTab === 'studio' && (
            <div className="flex flex-col gap-6">
              
              <div className="bg-white p-6 rounded-none border border-[#1A1A1A]">
                <h2 className="font-mono text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                  Phòng Sáng Tạo Nội Dung Bằng Trí Tuệ Nhân Tạo (Gemini Campaign Writer)
                </h2>
                <p className="text-xs text-[#444] mt-2 leading-relaxed font-sans">
                  Đội ngũ của bạn có thể sử dụng Trí tuệ Nhân tạo để soạn thảo trực tiếp lời chia sẻ, kịch bản video hay poster dựa trên định hướng cốt lõi <strong>"Rest Is Not A Reward"</strong> của chiến dịch Scented Candle.
                </p>
              </div>

              <AIContentStudio currentPhaseId={selectedPhaseId} />

            </div>
          )}

          {/* TAB 4: Stakeholders and Overall Targets Matrix */}
          {activeTab === 'matrix' && (
            <div className="flex flex-col gap-6">
              
              {/* Campaign Highlights Summary */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="bg-[#FAF8F5] border border-[#1A1A1A] p-6 rounded-none">
                  <span className="text-[10px] font-mono font-bold text-[#1A1A1A] uppercase tracking-wider">Insight cốt lõi</span>
                  <h3 className="font-serif text-base font-semibold text-[#1A1A1A] mt-1">Mơ hồ về Nghỉ ngơi</h3>
                  <p className="text-xs text-[#444] leading-relaxed mt-2 font-sans">
                    Người trẻ luôn có rào cản tâm lý vô hình: Nghỉ ngơi là lười biếng. Chiến dịch giải tỏa rào cản này bằng cách khẳng định quyền được lặng lẽ dừng lại mà không cần xin phép bất kì ai.
                  </p>
                </div>

                <div className="bg-white border border-[#1A1A1A] p-6 rounded-none">
                  <span className="text-[10px] font-mono font-bold text-[#1A1A1A] uppercase tracking-wider">Vật hóa thông điệp</span>
                  <h3 className="font-serif text-base font-semibold text-[#1A1A1A] mt-1">Hũ nến sáp & Bấc gỗ</h3>
                  <p className="text-xs text-[#444] leading-relaxed mt-2 font-sans">
                    Ánh nến dịu, sáp đậu nành ấm mát lành và tiếng nổ tí tách của bấc gỗ thông chính là hiện thân sinh động nhất của "khoảnh khắc thong thả có chủ tâm".
                  </p>
                </div>

                <div className="bg-[#FAF8F5] border border-[#1A1A1A] p-6 rounded-none">
                  <span className="text-[10px] font-mono font-bold text-[#1A1A1A] uppercase tracking-wider">Workshop gỗ ấm</span>
                  <h3 className="font-serif text-base font-semibold text-[#1A1A1A] mt-1">Lấy Offline làm mỏ neo</h3>
                  <p className="text-xs text-[#444] leading-relaxed mt-2 font-sans">
                    Nơi người trẻ ngồi cùng nhau trong quán café mộc thô, không bàn về CV, không nói về lương bổng — chỉ có mùi hương nến, viết journal xoa dịu burnout.
                  </p>
                </div>
              </div>

              {/* Majestic Comprehensive IMC Matrix */}
              <IMCMatrix />

            </div>
          )}

        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#1A1A1A] py-6 px-6 mt-12 text-center shrink-0">
        <p className="font-mono text-[10px] text-[#1A1A1A] uppercase tracking-widest font-bold">
          Kế hoạch Truyền thông IMC Scented Candle • "Rest Is Not A Reward" • HCMC 2026
        </p>
        <p className="text-[9px] font-mono text-[#666] tracking-wider uppercase mt-1">
          Thiết kế cấu trúc tối mộc bản in ấn phẩm • Gemini Flask Campaign Builder
        </p>
      </footer>

    </div>
  );
}
