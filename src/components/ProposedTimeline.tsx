import React, { useState } from 'react';
import { List, Table, FileSpreadsheet, ExternalLink, Calendar, CheckCircle2, ChevronRight, Hash } from 'lucide-react';

interface TimelineRow {
  group: string;
  stt: string;
  item: string;
  prep?: string;
  weeks: (string | null)[]; // 24 values for 24 weeks
  highlight?: boolean;
}

export function ProposedTimeline() {
  const [filterPhase, setFilterPhase] = useState<'all' | 'phase1' | 'phase2' | 'phase3'>('all');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  // Hardcode the complete 24 weeks timeline data exactly from the specification
  const timelineRows: TimelineRow[] = [
    // TIKTOK GROUP
    {
      group: 'TikTok',
      stt: '1',
      item: 'Video teaser (10 video/tháng)',
      prep: '',
      weeks: [
        '3 p', '3 p', '2 p', '2 p', '3 p', '3 p', '2 p', '2 p', // M1-2 W1-8
        '3 p', '3 p', '2 p', '2 p', '3 p', '3 p', '2 p', '2 p', // M3-4 W9-16
        '3 p', '3 p', '2 p', '2 p', '3 p', '3 p', '2 p', '2 p'  // M5-6 W17-24
      ]
    },
    {
      group: 'TikTok',
      stt: '2',
      item: 'Hero film (60–90s)',
      prep: '',
      weeks: [
        null, null, null, null, null, null, null, null,
        '1 clip', null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null
      ]
    },
    {
      group: 'TikTok',
      stt: '3',
      item: 'TikTok Ads (boost)',
      prep: '',
      weeks: [
        'Chạy liên tục T1-T2 (14tr)', 'Chạy liên tục T1-T2 (14tr)', 'Chạy liên tục T1-T2 (14tr)', 'Chạy liên tục T1-T2 (14tr)', 'Chạy liên tục T1-T2 (14tr)', 'Chạy liên tục T1-T2 (14tr)', 'Chạy liên tục T1-T2 (14tr)', 'Chạy liên tục T1-T2 (14tr)',
        'Chạy liên tục T3-T4 (16tr)', 'Chạy liên tục T3-T4 (16tr)', 'Chạy liên tục T3-T4 (16tr)', 'Chạy liên tục T3-T4 (16tr)', 'Chạy liên tục T3-T4 (16tr)', 'Chạy liên tục T3-T4 (16tr)', 'Chạy liên tục T3-T4 (16tr)', 'Chạy liên tục T3-T4 (16tr)',
        'Chạy liên tục T5-T6 (10tr)', 'Chạy liên tục T5-T6 (10tr)', 'Chạy liên tục T5-T6 (10tr)', 'Chạy liên tục T5-T6 (10tr)', 'Chạy liên tục T5-T6 (10tr)', 'Chạy liên tục T5-T6 (10tr)', 'Chạy liên tục T5-T6 (10tr)', 'Chạy liên tục T5-T6 (10tr)'
      ],
      highlight: true
    },

    // INSTAGRAM GROUP
    {
      group: 'Instagram',
      stt: '1',
      item: 'Reels (teaser / lifestyle)',
      prep: '',
      weeks: Array(24).fill('2 p')
    },
    {
      group: 'Instagram',
      stt: '2',
      item: 'Carousel giáo dục',
      prep: '',
      weeks: [
        null, null, null, null, '1', null, null, '1',
        null, '1', null, '1', null, null, null, null,
        '1', null, null, null, '1', null, null, null
      ]
    },
    {
      group: 'Instagram',
      stt: '3',
      item: 'Stories (poll / câu hỏi)',
      prep: '',
      weeks: Array(24).fill('3 st')
    },
    {
      group: 'Instagram',
      stt: '4',
      item: 'Instagram Ads',
      prep: '',
      weeks: [
        'Chạy liên tục T1-T2 (10tr)', 'Chạy liên tục T1-T2 (10tr)', 'Chạy liên tục T1-T2 (10tr)', 'Chạy liên tục T1-T2 (10tr)', 'Chạy liên tục T1-T2 (10tr)', 'Chạy liên tục T1-T2 (10tr)', 'Chạy liên tục T1-T2 (10tr)', 'Chạy liên tục T1-T2 (10tr)',
        'Chạy liên tục T3-T4 (12tr)', 'Chạy liên tục T3-T4 (12tr)', 'Chạy liên tục T3-T4 (12tr)', 'Chạy liên tục T3-T4 (12tr)', 'Chạy liên tục T3-T4 (12tr)', 'Chạy liên tục T3-T4 (12tr)', 'Chạy liên tục T3-T4 (12tr)', 'Chạy liên tục T3-T4 (12tr)',
        'Chạy liên tục T5-T6 (12tr)', 'Chạy liên tục T5-T6 (12tr)', 'Chạy liên tục T5-T6 (12tr)', 'Chạy liên tục T5-T6 (12tr)', 'Chạy liên tục T5-T6 (12tr)', 'Chạy liên tục T5-T6 (12tr)', 'Chạy liên tục T5-T6 (12tr)', 'Chạy liên tục T5-T6 (12tr)'
      ],
      highlight: true
    },

    // FACEBOOK GROUP
    {
      group: 'Facebook',
      stt: '1',
      item: 'Bài viết dài (cảm xúc)',
      prep: '',
      weeks: [
        null, '1', null, null, null, '1', null, null,
        null, null, '1', null, '1', null, '1', null,
        null, null, null, '1', null, null, null, '1'
      ]
    },
    {
      group: 'Facebook',
      stt: '2',
      item: 'Content AOV',
      prep: '',
      weeks: [
        '3-4 p', '3-4 p', '3-4 p', '3-4 p', '3-4 p', '3-4 p', '3-4 p', '3-4 p',
        '3-4 p', '3-4 p', '3-4 p', '3-4 p', '3-4 p', '3-4 p', '3-4 p', '3-4 p',
        null, null, null, null, null, null, null, null
      ]
    },
    {
      group: 'Facebook',
      stt: '3',
      item: 'Facebook Ads (retargeting)',
      prep: '',
      weeks: [
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null,
        'Retargeting T5-T6 (Meta Budget)', 'Retargeting T5-T6 (Meta Budget)', 'Retargeting T5-T6 (Meta Budget)', 'Retargeting T5-T6 (Meta Budget)', 'Retargeting T5-T6 (Meta Budget)', 'Retargeting T5-T6 (Meta Budget)', 'Retargeting T5-T6 (Meta Budget)', 'Retargeting T5-T6 (Meta Budget)'
      ],
      highlight: true
    },

    // ZALO GROUP
    {
      group: 'Zalo Ads',
      stt: '1',
      item: 'Zalo Ads (local TP.HCM)',
      prep: '',
      weeks: [
        'Chạy liên tục T1-T2 (5tr)', 'Chạy liên tục T1-T2 (5tr)', 'Chạy liên tục T1-T2 (5tr)', 'Chạy liên tục T1-T2 (5tr)', 'Chạy liên tục T1-T2 (5tr)', 'Chạy liên tục T1-T2 (5tr)', 'Chạy liên tục T1-T2 (5tr)', 'Chạy liên tục T1-T2 (5tr)',
        'Chạy liên tục T3-T4 (6tr)', 'Chạy liên tục T3-T4 (6tr)', 'Chạy liên tục T3-T4 (6tr)', 'Chạy liên tục T3-T4 (6tr)', 'Chạy liên tục T3-T4 (6tr)', 'Chạy liên tục T3-T4 (6tr)', 'Chạy liên tục T3-T4 (6tr)', 'Chạy liên tục T3-T4 (6tr)',
        'Chạy liên tục T5-T6 (3tr)', 'Chạy liên tục T5-T6 (3tr)', 'Chạy liên tục T5-T6 (3tr)', 'Chạy liên tục T5-T6 (3tr)', 'Chạy liên tục T5-T6 (3tr)', 'Chạy liên tục T5-T6 (3tr)', 'Chạy liên tục T5-T6 (3tr)', 'Chạy liên tục T5-T6 (3tr)'
      ],
      highlight: true
    },

    // KOC GROUP
    {
      group: 'KOC / Influencer',
      stt: '1',
      item: 'Nano KOC seeding (2 người)',
      prep: '',
      weeks: [
        null, null, '1', null, null, '1', null, null,
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null
      ]
    },
    {
      group: 'KOC / Influencer',
      stt: '2',
      item: 'Micro KOC (2 người T1–T2)',
      prep: '',
      weeks: [
        null, null, null, null, '1', '1', null, null,
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null
      ]
    },
    {
      group: 'KOC / Influencer',
      stt: '3',
      item: 'Micro KOC (3 người T3–T4)',
      prep: '',
      weeks: [
        null, null, null, null, null, null, null, null,
        null, null, '1', '1', '1', null, null, null,
        null, null, null, null, null, null, null, null
      ]
    },
    {
      group: 'KOC / Influencer',
      stt: '4',
      item: 'Micro KOC (2 người T5–T6)',
      prep: '',
      weeks: [
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null,
        null, null, '1', '1', null, null, null, null
      ]
    },

    // WORKSHOP GROUP
    {
      group: 'Workshop',
      stt: '1',
      item: 'Buổi 1 — "Bạn có đang thực sự nghỉ ngơi không?" (25 người)',
      prep: '',
      weeks: [
        null, null, null, '1 buổi', null, null, null, null,
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null
      ],
      highlight: true
    },
    {
      group: 'Workshop',
      stt: '2',
      item: 'Buổi 2 — Chia sẻ về burnout & ritual (30 người)',
      prep: '',
      weeks: [
        null, null, null, null, null, null, null, '1 buổi',
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null
      ],
      highlight: true
    },
    {
      group: 'Workshop',
      stt: '3',
      item: 'Buổi 3 — Khách mời wellness / psychologist (30 người)',
      prep: '',
      weeks: [
        null, null, null, null, null, null, null, null,
        null, null, null, '1 buổi', null, null, null, null,
        null, null, null, null, null, null, null, null
      ],
      highlight: true
    },
    {
      group: 'Workshop',
      stt: '4',
      item: 'Buổi 4 — Cộng đồng & UGC (35 người)',
      prep: '',
      weeks: [
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, '1 buổi',
        null, null, null, null, null, null, null, null
      ],
      highlight: true
    },
    {
      group: 'Workshop',
      stt: '5',
      item: 'Buổi 5 — Tổng kết chiến dịch, pop-up nhỏ (45 người)',
      prep: '',
      weeks: [
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, '1 buổi'
      ],
      highlight: true
    },

    // PR / EDITORIAL
    {
      group: 'PR / Editorial',
      stt: '1',
      item: 'Pitch bài earned (Vietcetera / Spiderum)',
      prep: '',
      weeks: [
        null, null, null, null, null, null, null, null,
        null, null, '1 bài', null, null, null, null, null,
        null, null, null, null, null, null, null, null
      ]
    },
    {
      group: 'PR / Editorial',
      stt: '2',
      item: 'Bài sponsored (backup)',
      prep: '',
      weeks: [
        null, null, null, null, null, null, null, null,
        null, null, null, null, '1 bài', null, null, null,
        null, null, null, null, null, null, null, null
      ]
    },

    // CONTENT PRODUCTION
    {
      group: 'Content Production',
      stt: '1',
      item: 'Buổi chụp ảnh sản phẩm (2 buổi/tháng)',
      prep: '',
      weeks: [
        '1', null, '1', null, '1', null, '1', null,
        '1', null, '1', null, '1', null, '1', null,
        '1', null, '1', null, '1', null, '1', null
      ]
    },
    {
      group: 'Content Production',
      stt: '2',
      item: 'In poster OOH quán cà phê',
      prep: '20 tờ (1 đợt)',
      weeks: Array(24).fill(null)
    },
    {
      group: 'Content Production',
      stt: '3',
      item: 'Rest Ritual Card (in đợt 1)',
      prep: '200 thẻ (1 đợt)',
      weeks: Array(24).fill(null)
    },
    {
      group: 'Content Production',
      stt: '4',
      item: 'Rest Ritual Card (in đợt 2)',
      prep: '200 thẻ (1 đợt)',
      weeks: [
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null,
        'In đợt 2', null, null, null, null, null, null, null
      ]
    },
    {
      group: 'Content Production',
      stt: '5',
      item: 'Bundle Rest Kit (100 set)',
      prep: '1 đợt (W17)',
      weeks: [
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null,
        'Ra mắt', null, null, null, null, null, null, null
      ]
    },

    // HASHTAG UGC
    {
      group: 'Hashtag UGC',
      stt: '1',
      item: 'Phát động #RestIsNotAReward',
      prep: '',
      weeks: [
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null,
        'Phát động', null, null, null, null, null, null, null
      ]
    },
    {
      group: 'Hashtag UGC',
      stt: '2',
      item: 'Duy trì & repost UGC',
      prep: '',
      weeks: [
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null,
        'Liên tục', 'Liên tục', 'Liên tục', 'Liên tục', 'Liên tục', 'Liên tục', 'Liên tục', 'Liên tục'
      ]
    }
  ];

  const getWeekMonthLabel = (idx: number) => {
    const month = Math.floor(idx / 4) + 1;
    return `T${month}`;
  };

  // Filter weeks depending on selected phase
  const getSelectedWeekIndicesByPhase = (p: 'phase1' | 'phase2' | 'phase3') => {
    if (p === 'phase1') return Array.from({ length: 8 }, (_, i) => i);
    if (p === 'phase2') return Array.from({ length: 8 }, (_, i) => i + 8);
    return Array.from({ length: 8 }, (_, i) => i + 16);
  };

  const getActiveWeekIndices = () => {
    if (filterPhase === 'phase1') return getSelectedWeekIndicesByPhase('phase1');
    if (filterPhase === 'phase2') return getSelectedWeekIndicesByPhase('phase2');
    if (filterPhase === 'phase3') return getSelectedWeekIndicesByPhase('phase3');
    return Array.from({ length: 24 }, (_, i) => i);
  };

  const activeWeekIndices = getActiveWeekIndices();

  // Helper to color code the weeks according to Phase
  const getPhaseCellBgClass = (idx: number, isFilled: boolean) => {
    if (idx < 8) {
      return isFilled ? 'bg-[#FDFBF7] text-[#1A1A1A] font-bold border-[#1A1A1A]' : 'bg-transparent text-[#999]';
    }
    if (idx < 16) {
      return isFilled ? 'bg-[#F2EFE8] text-[#1A1A1A] font-bold border-[#1A1A1A]' : 'bg-transparent text-[#999]';
    }
    return isFilled ? 'bg-[#E5DFD3] text-[#1A1A1A] font-bold border-[#1A1A1A]' : 'bg-transparent text-[#999]';
  };

  // Define phases metadata for rendering
  const phasesMetadata = [
    { id: 'phase1' as const, label: 'Giai Đoạn 1: TRIGGER', subtitle: 'Tháng 1-2 (Tuần 1 - Tuần 8)', color: 'bg-[#FDFBF7]' },
    { id: 'phase2' as const, label: 'Giai Đoạn 2: ENGAGE', subtitle: 'Tháng 3-4 (Tuần 9 - Tuần 16)', color: 'bg-[#F2EFE8]' },
    { id: 'phase3' as const, label: 'Giai Đoạn 3: AMPLIFY', subtitle: 'Tháng 5-6 (Tuần 17 - Tuần 24)', color: 'bg-[#E5DFD3]' },
  ];

  return (
    <div className="bg-white border border-[#1A1A1A] p-4 sm:p-6 rounded-none">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between border-b border-[#1A1A1A] pb-4 mb-6">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#666]">
              Interactive Master Schedule
            </span>
            <span className="bg-emerald-50 text-emerald-800 text-[9px] font-mono px-2 py-0.5 border border-emerald-600 font-bold uppercase">
              Đã đồng bộ Google Sheets ✓
            </span>
          </div>
          <h2 className="text-xl font-bold text-[#1A1A1A] tracking-tight mt-1 font-sans">
            Proposed Timeline (Lịch trình Chiến dịch 24 Tuần)
          </h2>
          <p className="text-xs text-[#666] font-sans mt-1">
            Bản đồ thời vụ chi tiết theo tuần của chiến dịch 6 tháng. Chế độ xem tối ưu hóa hoàn hảo không lo tràn màn hình.
          </p>
        </div>

        {/* Action Controls Side */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 self-stretch xl:self-auto">
          {/* View Switcher: List vs Table */}
          <div className="flex items-center border border-[#1A1A1A] p-0.5 bg-[#FAF8F5]">
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1.5 px-3 py-1 cursor-pointer text-[10px] font-mono font-bold uppercase transition-all ${
                viewMode === 'list' ? 'bg-[#1A1A1A] text-white' : 'text-[#666] hover:text-[#1A1A1A]'
              }`}
              title="Xem danh sách tối giản, không bị cuộn ngang trên điện thoại"
            >
              <List className="h-3 w-3" />
              <span>Danh sách mộc (Dễ đọc)</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1 cursor-pointer text-[10px] font-mono font-bold uppercase transition-all ${
                viewMode === 'grid' ? 'bg-[#1A1A1A] text-white' : 'text-[#666] hover:text-[#1A1A1A]'
              }`}
              title="Xem bảng ngang đầy đủ kiểu Google Sheets"
            >
              <Table className="h-3 w-3" />
              <span>Bảng Spreadsheet</span>
            </button>
          </div>

          {/* Original Google Sheets Link Button - STICKY TOP CORNER */}
          <a
            href="https://docs.google.com/spreadsheets/d/1BJx4onrGBTsfS-07Uo8pKwZRDYg2Pdg3w6w-bTfgdlc/edit?gid=1330286519#gid=1330286519"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 border border-emerald-700 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 rounded-none px-3.5 py-1.5 text-[10px] uppercase font-bold tracking-wider transition-all cursor-pointer shadow-[2px_2px_0px_0px_rgba(4,120,87,1)] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(4,120,87,1)] active:translate-y-[1px]"
            title="Nhấp vào để mở file Google Sheets gốc"
          >
            <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-700" />
            <span>Mở Google Sheets Bản Gốc 🔗</span>
          </a>
        </div>
      </div>

      {/* Filter tabs by Giai Đoạn, fully customized */}
      <div className="flex flex-wrap items-center gap-1.5 mb-5 p-1.5 bg-[#FAF8F5] border border-[#1A1A1A]/30">
        <span className="text-[9px] font-mono uppercase text-[#666] px-2 font-bold select-none">Lọc mốc thời gian:</span>
        <button
          onClick={() => setFilterPhase('all')}
          className={`px-3 py-1 text-[10px] font-mono font-semibold uppercase cursor-pointer rounded-none border border-transparent transition-all ${
            filterPhase === 'all'
              ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
              : 'text-[#555] hover:border-[#1A1A1A]/30 hover:bg-[#FAF8F5]'
          }`}
        >
          Tất cả (W1 - W24)
        </button>
        <button
          onClick={() => setFilterPhase('phase1')}
          className={`px-3 py-1 text-[10px] font-mono font-semibold uppercase cursor-pointer rounded-none border border-transparent transition-all ${
            filterPhase === 'phase1'
              ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
              : 'text-[#555] hover:border-[#1A1A1A]/30 hover:bg-[#FAF8F5]'
          }`}
        >
          Phase 1 (W1 - W8)
        </button>
        <button
          onClick={() => setFilterPhase('phase2')}
          className={`px-3 py-1 text-[10px] font-mono font-semibold uppercase cursor-pointer rounded-none border border-transparent transition-all ${
            filterPhase === 'phase2'
              ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
              : 'text-[#555] hover:border-[#1A1A1A]/30 hover:bg-[#FAF8F5]'
          }`}
        >
          Phase 2 (W9 - W16)
        </button>
        <button
          onClick={() => setFilterPhase('phase3')}
          className={`px-3 py-1 text-[10px] font-mono font-semibold uppercase cursor-pointer rounded-none border border-transparent transition-all ${
            filterPhase === 'phase3'
              ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
              : 'text-[#555] hover:border-[#1A1A1A]/30 hover:bg-[#FAF8F5]'
          }`}
        >
          Phase 3 (W17 - W24)
        </button>
      </div>

      {/* VIEW MODE 1: RESPONSIVE DIARY/LIST (No Horizontal Scrollbar, flows beautifully down) */}
      {viewMode === 'list' && (
        <div className="space-y-6">
          {phasesMetadata
            .filter((p) => filterPhase === 'all' || filterPhase === p.id)
            .map((p) => {
              const weekIndices = getSelectedWeekIndicesByPhase(p.id);
              // Get rows that have actions in this specific phase
              const activeRows = timelineRows.filter((row) =>
                weekIndices.some((idx) => row.weeks[idx] !== null)
              );

              return (
                <div key={p.id} className="border border-[#1A1A1A] bg-white">
                  {/* Phase Title Block */}
                  <div className={`p-4 border-b border-[#1A1A1A] ${p.color} flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2`}>
                    <div>
                      <h3 className="font-mono text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                        {p.label}
                      </h3>
                      <p className="text-[11px] text-[#555] font-sans">{p.subtitle}</p>
                    </div>
                    <span className="text-[9px] font-mono bg-[#1A1A1A] text-white px-2 py-0.5 uppercase tracking-widest self-start sm:self-auto font-bold">
                      {activeRows.length} đầu việc chạy
                    </span>
                  </div>

                  {/* Activity list for this phase */}
                  <div className="divide-y divide-[#1A1A1A]/10">
                    {activeRows.map((row, idx) => {
                      return (
                        <div key={idx} className={`p-4 ${row.highlight ? 'bg-[#FAF8F5]/40' : 'bg-transparent'} hover:bg-[#FAF8F5]/20 transition-all`}>
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5">
                            {/* Group/Channel Tag & Action Name */}
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="bg-[#FAF8F5] border border-[#1A1A1A]/30 text-[#1A1A1A] text-[9px] font-mono uppercase tracking-wider font-extrabold px-1.5 py-0.5">
                                  {row.group}
                                </span>
                                {row.prep && (
                                  <span className="bg-amber-50 border border-amber-600/30 text-amber-900 text-[9px] font-mono px-1.5 py-0.5">
                                    Chuẩn bị: {row.prep}
                                  </span>
                                )}
                              </div>
                              <h4 className="text-xs sm:text-sm font-semibold text-[#1A1A1A] font-sans">
                                {row.item}
                              </h4>
                            </div>
                          </div>

                          {/* 8-Week Micro Visual Strip - Absolutely guaranteed to fit perfectly on any smartphone */}
                          <div className="mt-4">
                            <p className="text-[10px] text-[#666] font-mono uppercase mb-1.5 tracking-wider flex items-center gap-1">
                              <span>Mật độ phân bổ tuần chiến dịch:</span>
                            </p>
                            
                            <div className="grid grid-cols-8 gap-1.5">
                              {weekIndices.map((weekIdx) => {
                                const cellVal = row.weeks[weekIdx];
                                const isFilled = cellVal !== null;

                                return (
                                  <div
                                    key={weekIdx}
                                    className={`flex flex-col items-center justify-between py-1 px-0.5 border text-center transition-colors ${
                                      isFilled
                                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                                        : 'bg-[#FAF8F5] text-[#999] border-[#1A1A1A]/10'
                                    }`}
                                    title={isFilled ? `Tuần ${weekIdx + 1}: ${cellVal}` : `Tuần ${weekIdx + 1}: Trống`}
                                  >
                                    <span className={`text-[8px] font-mono leading-none ${isFilled ? 'text-neutral-300' : 'text-neutral-400'}`}>
                                      W{weekIdx + 1}
                                    </span>
                                    {isFilled ? (
                                      <span className="text-[9px] font-bold tracking-tight uppercase leading-none mt-1 break-all truncate max-w-full px-0.5 inline-block">
                                        {cellVal?.split(' ')[0] || '✓'}
                                      </span>
                                    ) : (
                                      <span className="text-[10px] leading-none mt-1 font-mono select-none">•</span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>

                            {/* Text labels for active weeks to guarantee absolute comprehension */}
                            <div className="mt-2.5 flex flex-wrap gap-2">
                              {weekIndices
                                .filter((wIdx) => row.weeks[wIdx] !== null)
                                .map((wIdx) => (
                                  <div key={wIdx} className="bg-neutral-50 border border-neutral-200 px-2 py-0.5 text-[10px] text-neutral-700 font-mono">
                                    <span className="font-bold text-[#1A1A1A]">Tuần {wIdx + 1}:</span> {row.weeks[wIdx]}
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      )}

      {/* VIEW MODE 2: CLASSIC FULL SPREADSHEET (Wide horizontal grid) */}
      {viewMode === 'grid' && (
        <div className="overflow-x-auto border border-[#1A1A1A]">
          <table className="w-full min-w-[1240px] border-collapse text-left text-xs font-sans">
            <thead>
              {/* Top row indicating Phases */}
              <tr className="bg-[#FAF8F5] border-b border-[#1A1A1A] text-[9px] font-mono font-bold tracking-widest uppercase">
                <th className="py-2 px-3 border-r border-[#1A1A1A] w-[11%] sticky left-0 bg-[#FAF8F5] z-30" colSpan={3}>
                  Thông tin hoạt động
                </th>
                <th className="py-2 px-2 border-r border-[#1A1A1A] text-center w-[9%] bg-[#FAF8F5]">
                  Chuẩn bị
                </th>
                {/* Spanning phase indicators dynamically */}
                {activeWeekIndices.map((idx) => {
                  return (
                    <th 
                      key={idx} 
                      className={`py-2 px-1 text-center font-bold tracking-tighter text-[9px] border-r border-[#1A1A1A]/10 ${
                        idx < 8 ? 'bg-[#FDFBF7]' : idx < 16 ? 'bg-[#F2EFE8]' : 'bg-[#E5DFD3]'
                      }`}
                    >
                      {idx < 8 ? 'P1' : idx < 16 ? 'P2' : 'P3'}
                    </th>
                  );
                })}
              </tr>

              {/* Weeks Numbers heading */}
              <tr className="bg-[#FAF8F5] border-b border-[#1A1A1A] text-[10px] font-mono font-bold text-center">
                <th className="py-3 px-3 text-left border-r border-[#1A1A1A] w-[8%] sticky left-0 bg-[#FAF8F5] z-30">
                  Hạng mục
                </th>
                <th className="py-3 px-1 border-r border-[#1A1A1A]/20 w-[2%] text-center">STT</th>
                <th className="py-3 px-3 text-left border-r border-[#1A1A1A] w-[14%] sticky left-0 bg-[#FAF8F5] z-20">
                  Chi tiết
                </th>
                <th className="py-3 px-2 border-r border-[#1A1A1A] text-center bg-[#FAF8F5]/50 font-normal">
                  Specs / Đợt in
                </th>
                {activeWeekIndices.map((idx) => (
                  <th 
                    key={idx} 
                    className={`py-3 px-1 border-r border-[#1A1A1A]/30 text-[10px] tracking-tight font-black ${
                      idx < 8 ? 'bg-[#FDFBF7]/40' : idx < 16 ? 'bg-[#F2EFE8]/40' : 'bg-[#E5DFD3]/40'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-[8px] text-[#777] font-normal uppercase tracking-tight">{getWeekMonthLabel(idx)}</span>
                      <span className="text-[#1A1A1A] font-bold">W{idx + 1}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1A1A1A]/20">
              {timelineRows.map((row, rIdx) => {
                // Group rowspan logic
                const isFirstInGroup = rIdx === 0 || timelineRows[rIdx - 1].group !== row.group;
                const groupRows = timelineRows.filter(r => r.group === row.group).length;

                return (
                  <tr 
                    key={rIdx} 
                    className={`hover:bg-[#FAF8F5]/80 transition-colors ${
                      row.highlight ? 'bg-[#FAF8F5]/40 font-medium' : ''
                    }`}
                  >
                    {/* Group column */}
                    {isFirstInGroup ? (
                      <td 
                        rowSpan={groupRows} 
                        className="py-3 px-3 font-mono text-[10px] font-black text-[#1A1A1A] uppercase tracking-widest border-r border-[#1A1A1A] bg-white sticky left-0 z-10"
                      >
                        <div className="rotate-270 md:rotate-0 align-middle">
                          {row.group}
                        </div>
                      </td>
                    ) : null}

                    {/* STT */}
                    <td className="py-3 px-1 border-r border-[#1A1A1A]/10 text-center font-mono font-medium text-[#777]">
                      {row.stt}
                    </td>

                    {/* Chi tiết */}
                    <td className="py-3 px-3 border-r border-[#1A1A1A] text-[#1A1A1A] font-semibold tracking-tight text-[11px] max-w-[180px] truncate-none">
                      {row.item}
                    </td>

                    {/* Preparation / Specs column */}
                    <td className="py-2.5 px-2 border-r border-[#1A1A1A] text-center font-mono text-[10px] text-[#666] bg-[#FAF8F5]/10">
                      {row.prep || '—'}
                    </td>

                    {/* Dynamic Week Cells */}
                    {activeWeekIndices.map((idx) => {
                      const cellVal = row.weeks[idx];
                      const hasVal = cellVal !== null;
                      const cellClass = getPhaseCellBgClass(idx, hasVal);

                      return (
                        <td 
                          key={idx} 
                          className={`py-3 px-1 border-r border-[#1A1A1A]/10 text-center text-[10px] select-none ${cellClass}`}
                        >
                          {hasVal ? (
                            <div className={`inline-block py-0.5 px-1 bg-white border border-[#1A1A1A] shadow-[1px_1px_0px_0px_#1A1A1A] text-[9px] font-bold text-[#1A1A1A] truncate max-w-[85px] leading-tight`}>
                              {cellVal}
                            </div>
                          ) : (
                            <span className="text-[#DDD] font-mono">•</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Guide reading and explanation notes */}
      <div className="mt-5 p-4 bg-[#F2EFE8] border border-[#1A1A1A]">
        <h4 className="font-mono text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
          Hướng dẫn đọc bảng &amp; Nguyên lý vận hành
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[11px] text-[#333] font-sans leading-relaxed">
          <div>
            <p><strong>1. Phân kì rõ ràng (T1–T6):</strong></p>
            <p className="mt-1 text-[#555]">T1–T2 biểu đạt Tháng 1–2 (Phase 1, Trigger), T3–T4 biểu đạt Tháng 3–4 (Phase 2, Engage), T5–T6 biểu đạt Tháng 5–6 (Phase 3, Amplify). Tần suất bài viết và buổi chụp luôn đồng nhịp.</p>
          </div>
          <div>
            <p><strong>2. Quảng cáo &amp; Phân vùng Local:</strong></p>
            <p className="mt-1 text-[#555]">Các chiến dịch Ads TikTok, Instagram và Zalo được cài đặt khởi chạy tự động cả phase không tắt/bật đột ngột, tối ưu hóa thuật toán nhận diện đúng tệp nữ văn phòng tại TP.HCM.</p>
          </div>
          <div>
            <p><strong>3. Điểm nhấn Offline:</strong></p>
            <p className="mt-1 text-[#555]">Workshop diễn ra tuần thứ 4 của mỗi tháng. Buổi chụp ảnh sản phẩm gom gọn vào tuần đầu tiên của tháng để tối ưu phí freelancer và có tư liệu dùng cả tháng.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProposedTimeline;
