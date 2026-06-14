export type CampaignPhaseId = 'trigger' | 'engage' | 'amplify';

export interface CampaignPhase {
  id: CampaignPhaseId;
  name: string;
  vnName: string;
  timeframe: string;
  budget: number;
  insight: string;
  contextAndProblem: string;
  objectiveText: string;
  reachTarget: string;
  engagementTarget: string;
  conversionTarget: string;
  keyMessage: string;
  keyHook: string;
  keyHookDetail: string;
  milestones: string[];
  quickWins: string[];
  supportingTactics: string[];
  channels: { name: string; type: string; desc: string; budget: number }[];
  communicationTools: string[];
  kpis: { metric: string; target: string; current: string }[];
}

export interface KOCSelection {
  id: string;
  name: string;
  username: string;
  followerCount: number;
  fee: number;
  engagementRate: number;
  category: 'Wellness' | 'Lifestyle' | 'Freelance' | 'Office' | 'Mindfulness';
  selected: boolean;
  avatar: string;
}

export interface CoffeeShop {
  id: string;
  name: string;
  address: string;
  area: 'Q.1' | 'Q.3' | 'Bình Thạnh' | 'Q.2';
  feePerSession: number;
  capacity: number;
  aesthetic: string;
  selected: boolean;
  image: string;
}

export interface BudgetAlloc {
  category: string;
  phaseId: CampaignPhaseId;
  allocated: number;
  original: number;
  icon: string;
}

export interface CampaignMetrics {
  totalReach: number;
  totalEngagement: number;
  totalUgc: number;
  restKitSales: number;
  overallBudget: number;
}
