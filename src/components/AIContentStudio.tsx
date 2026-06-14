import React, { useState } from 'react';
import { Sparkles, Check, Copy, PenTool, Heart } from 'lucide-react';
import { CampaignPhaseId } from '../types';

interface AIContentStudioProps {
  currentPhaseId: CampaignPhaseId;
}

const formatTemplates = [
  { id: 'tiktok', name: 'Kịch bản TikTok/Reels', desc: 'Sắp xếp phân cảnh chậm 15-20s nói câu hỏi gieo sầu, xoa dịu bằng nến.', icon: '🎬' },
  { id: 'poster', name: 'Poster Typography treo quán', desc: 'Thiết kế cụm chữ tối giản nền kem thu hút giới trẻ Sài Gòn tự ngẫm.', icon: '🖼️' },
  { id: 'pr', name: 'Editorial Pitch (Page cộng đồng)', desc: 'Thư ngỏ / bài viết sâu gửi fanpage về trăn trở của năng suất độc hại.', icon: '✍️' },
  { id: 'ritual', name: 'Rest Ritual Card (Kraft-gift)', desc: 'Bộ thẻ in nhỏ nhắn chỉ dẫn 5 nghi thức nghỉ ngơi thong thả bên nến.', icon: '🏷️' },
  { id: 'thankyou', name: 'Lời tự sự thắt dây (Rest Kit)', desc: 'Lời cảm ơn mộc mạc đặt trong hộp quà chốt sale cuối chiến dịch.', icon: '💝' },
];

export function AIContentStudio({ currentPhaseId }: AIContentStudioProps) {
  const [phaseId, setPhaseId] = useState<CampaignPhaseId>(currentPhaseId);
  const [formatType, setFormatType] = useState('tiktok');
  const [concept, setConcept] = useState('Nỗi buồn lỡ làng chiều mưa Sài Gòn, deadline dồn dập và vệt khói nến ấm');
  const [customNote, setCustomNote] = useState('Giọng điệu ấm, mộc mạc, gần gũi như một người bạn tri kỷ.');
  const [loading, setLoading] = useState(false);
  const [generatedText, setGeneratedText] = useState('');
  const [copied, setCopied] = useState(false);

  const getPresetContent = (format: string, phase: CampaignPhaseId) => {
    if (phase === 'trigger') {
      if (format === 'tiktok') {
        return `### 🎬 KỊCH BẢN TIKTOK TEASER (Phase 1: Trigger)\n**Visual:** Cảnh cận cận một ngọn nến đậu nành không dán tem thương hiệu. Sáp nến chảy chậm loang ra khay gỗ mộc. Ngoài ô cửa kính, mặt trời lặn chậm dần rồi nhường lối cho ánh hoàng hôn vàng vọt TP.HCM.\n\n**Voiceover (Trầm lắng, ấm rộng):**\n"Ở Sài Gòn, người ta dạy nhau cách bước nhanh, cách làm việc hơn 12 tiếng một ngày để nhận lấy sự công nhận... Nhưng có ai hỏi chúng ta: Lần cuối bạn thực sự ngồi im, nhìn vệt sáp tan chảy dở dang mà không cảm thấy sốt ruột và có tội... là khi nào?"\n\n**Hành động:** Tay thắp khẽ đầu nến đung đưa. Caption mờ hiện chầm chậm: \n*Lần cuối bạn thực sự nghỉ ngơi là khi nào?*\nKhông logo thương hiệu. Không lời giới thiệu. Khoảng lặng đầy tâm ý.\n\n--- \n*Được thiết kế mộc mạc, không thương mại.*`;
      }
      return `### 🖼️ THIẾT KẾ POSTER TYPOGRAPHY (Phase 1: Trigger)\n**Chất liệu:** Giấy mộc dày màu kem mù tạt nhạt, thô ráp sờ có vân.\n**Sắp đặt chữ:** Chữ Serif sang trọng, giãn dòng khoáng đạt ở giữa trung tâm tờ bìa.\n\n**Tiêu đề lớn (Typography đặt chính giữa):**\n> "Lần cuối bạn thực sự nghỉ ngơi mà không cảm thấy tội lỗi... là khi nào?"\n\n**Cỡ chữ phụ góc dưới:**\n*Chỉ là một câu hỏi gửi người bận rộn giữa Sài Gòn. Bạn đứng đây lặng yên ngắm nhìn là bạn đang cho phép mình dừng 10 giây rồi đấy.*\n\n**Địa điểm đặt:** Treo mộc trên khung gỗ thông cũ tại các lối đi yên tĩnh của Ollin Café & Nấp Sài Gòn.`;
    } else if (phase === 'engage') {
      if (format === 'tiktok') {
        return `### 🎬 KỊCH BẢN TIKTOK ESSAY (Phase 2: Engage)\n**Visual:** KOC ngồi xếp bằng trên chiếc thảm cói thô, gió chiều lay nhẹ tấm rèm lụa trắng. Tiếng lách tách đun sáp nến dịu nhẹ. Ánh nắng mềm hắt qua bậu cửa phòng sồi mộc mạc.\n\n**Nội dung lời thoại:**\n"Hồi mới ra trường, mình nghĩ nghỉ ngơi là phần thưởng sau một tuần cày cuốc đến xỉu lên xỉu xuống. Nhưng rồi mình nhận ra, không một cỗ máy nào chạy ngon nếu chỉ đổ dầu lúc nó đã bốc khói. Nghỉ ngơi là quyền lợi cơ bản của sự tồn tại, là gốc rễ nâng đỡ mỗi ngày thức dậy. Chúng mình ở đây, thắp một ngọn nến mộc, không vì hôm nay làm giỏi, mà vì chúng mình xứng đáng chạm vào bình yên..."\n\n**Tagline: Rest Is Not A Reward • Nghỉ ngơi không phải phần thưởng.**`;
      }
      return `### 🏷️ REST RITUAL CARD - 5 BƯỚC THIẾT LẬP KHOẢNG LẶNG\n*Thẻ Kraft nhỏ kẹp cùng mỗi hũ nến lụa nhạt.*\n\n1. **Bước 1: Tắt kết nối** — Đặt điện thoại ở chế độ máy bay trong 20 phút ngắn ngủi.\n2. **Bước 2: Chuẩn bị điểm tựa** — Chọn một góc phòng có gió mát rượi, đặt khay gỗ thông phẳng phiêu.\n3. **Bước 3: Nhóm lửa** — Thắp nến gỗ bấc lách tách và lắng tai nghe âm thanh đậu nành tan chảy.\n4. **Bước 4: Nhắm mắt** — Hít nhẹ hương gỗ thông dịu ấm quyện rêu mộc ẩm ướt Saigon.\n5. **Bước 5: Thong thả trở lại** — Bạn không cần phải vội vã kiếm lấy quyền được bình an.`;
    } else {
      return `### 💝 LỜI TỰ SỰ TRONG HỘP QUÀ REST KIT (Phase 3: Amplify)\n*Thư cảm ơn in mộc trên giấy giang Tây Bắc thắt dây đay nâu mộc mạc.*\n\n"Chào bạn thân mến,\n\nHộp quà Rest Kit này được xếp bằng tay với niềm mong mỏi giản đơn nhất: gửi đến bạn sự cho phép thong dong nghỉ ngơi.\n\nBên trong hộp có một ngọn nến gỗ bấc lách tách, một tập thiệp hướng dẫn nhỏ tự sự. Khi bạn thắt nút dây thừng mộc mạc mở hộp nến ra, mong bạn hãy chính thức buông bỏ mọi chiếc deadline ngoài kia. Vì nghỉ ngơi không bao giờ là phần thưởng gượng ép của sự lao dịch — nó là nền móng để ngọn nến tâm hồn bạn chiếu sáng an lành.\n\nTự thương bản thân một chút,\n**The Rest Studio**"`;
    }
  };

  const handleGenerate = async () => {
    setLoading(true);
    setGeneratedText('');
    try {
      const response = await fetch('/api/gemini/generate-marketing-copy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phaseId,
          concept,
          formatType: formatTemplates.find(f => f.id === formatType)?.name || formatType,
          customNote,
        }),
      });
      
      const data = await response.json();
      if (data.success && data.text) {
        setGeneratedText(data.text);
      } else {
        setGeneratedText(getPresetContent(formatType, phaseId));
      }
    } catch (err) {
      console.error(err);
      setGeneratedText(getPresetContent(formatType, phaseId));
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderFormattedText = (raw: string) => {
    if (!raw) return null;
    const lines = raw.split('\n');
    return lines.map((line, idx) => {
      if (line.startsWith('### ')) {
        return <h4 key={idx} className="font-mono text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mt-4 mb-2 border-b border-[#1A1A1A]/30 pb-1">{line.replace('### ', '')}</h4>;
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={idx} className="font-mono text-[10px] font-bold text-[#1A1A1A] tracking-tight uppercase mt-2">{line.replace(/\*\*/g, '')}</p>;
      }
      if (line.startsWith('>') || line.startsWith(' >')) {
        return (
          <blockquote key={idx} className="border-l-4 border-[#1A1A1A] pl-4 italic text-sm text-[#1A1A1A]/90 my-3 bg-[#FAF8F5] p-3 rounded-none">
            {line.replace(/(^>\s*|^\s*>\s*)/, '')}
          </blockquote>
        );
      }
      if (line.startsWith('- ') || line.startsWith('* ')) {
        return (
          <li key={idx} className="ml-4 list-disc text-xs text-[#444] leading-relaxed my-1">
            {line.replace(/^[-*]\s+/, '')}
          </li>
        );
      }
      if (line.trim() === '---') {
        return <hr key={idx} className="border-t border-[#1A1A1A]/30 my-4" />;
      }
      return <p key={idx} className="text-xs text-[#444] leading-relaxed my-1 font-sans">{line}</p>;
    });
  };

  return (
    <div className="bg-white border border-[#1A1A1A] rounded-none p-6">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        
        {/* Left Side: Parameters Form */}
        <div>
          <div className="flex items-center gap-2 pb-3 border-b border-[#1A1A1A]">
            <div className="h-8 w-8 rounded-none bg-[#1A1A1A] flex items-center justify-center text-white">
              <PenTool className="h-4.5 w-4.5" />
            </div>
            <div>
              <h3 className="text-[11px] font-mono text-[#1A1A1A] uppercase tracking-widest font-bold">Content AI Studio</h3>
              <p className="text-[9px] text-[#666] font-mono uppercase tracking-wider">Campaign Scented Candle • Gemini Flash</p>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            
            {/* Phase Selector */}
            <div>
              <label className="block text-[10px] font-mono text-[#1A1A1A] font-bold uppercase tracking-wider">Chọn Giai Đoạn</label>
              <div className="mt-1.5 grid grid-cols-3 gap-2">
                {(['trigger', 'engage', 'amplify'] as CampaignPhaseId[]).map((pSub) => (
                  <button
                    key={pSub}
                    type="button"
                    onClick={() => setPhaseId(pSub)}
                    className={`py-2 rounded-none font-mono text-[10px] uppercase tracking-widest border text-center transition-all cursor-pointer ${
                      phaseId === pSub 
                        ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white font-bold' 
                        : 'border-[#1A1A1A]/20 bg-white text-[#666]'
                    }`}
                  >
                    {pSub.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Template Selector */}
            <div>
              <label className="block text-[10px] font-mono text-[#1A1A1A] font-bold uppercase tracking-wider mb-1.5">Chọn Định Dạng Ấn Phẩm</label>
              <div className="grid grid-cols-1 gap-2 max-h-[180px] overflow-y-auto pr-1">
                {formatTemplates.map((tpl) => (
                  <button
                    key={tpl.id}
                    type="button"
                    onClick={() => setFormatType(tpl.id)}
                    className={`flex items-start gap-2.5 p-2.5 rounded-none border text-left transition-all cursor-pointer ${
                      formatType === tpl.id 
                        ? 'border-[#1A1A1A] bg-[#F2EFE8] ring-1 ring-neutral-900/10' 
                        : 'border-[#1A1A1A]/20 bg-white hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <span className="text-base mt-0.5">{tpl.icon}</span>
                    <div>
                      <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-tight">{tpl.name}</h4>
                      <p className="text-[10px] text-[#666] mt-0.5 line-clamp-1">{tpl.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Creative Concept Words */}
            <div>
              <label className="block text-[10px] font-mono text-[#1A1A1A] font-bold uppercase tracking-wider">Bối Cảnh / Từ Khóa Đặc Trưng (Concept Keywords)</label>
              <textarea
                value={concept}
                onChange={(e) => setConcept(e.target.value)}
                rows={2}
                className="mt-1.5 w-full rounded-none border border-[#1A1A1A]/40 bg-white p-3 text-xs text-[#2E2B2A] placeholder-stone-300 focus:border-[#1A1A1A] focus:outline-none"
                placeholder="Ví dụ: Giọt sáp đậu nành tan chảy, chiều muộn Quận 1..."
              />
            </div>

            {/* Tone setting */}
            <div>
              <label className="block text-[10px] font-mono text-[#1A1A1A] font-bold uppercase tracking-wider">Giọng Thơ Tự Sự (Tone & Mood)</label>
              <input
                type="text"
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                className="mt-1.5 w-full rounded-none border border-[#1A1A1A]/40 bg-white px-3 py-2 text-xs text-[#2E2B2A] focus:border-[#1A1A1A] focus:outline-none"
                placeholder="Ấm, mộc mạc, tĩnh tại, thong dong..."
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="mt-2 w-full py-3.5 bg-[#1A1A1A] text-white rounded-none border border-[#1A1A1A] font-mono text-[10px] tracking-widest font-bold uppercase transition-all flex items-center justify-center gap-2 hover:bg-neutral-800 disabled:opacity-50 cursor-pointer"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              {loading ? 'Đang soạn thảo qua Gemini...' : 'Tạo Bản Thảo Sáng Tạo Ngay'}
            </button>

          </div>
        </div>

        {/* Right Side: Render Live Generated Output & Mockup */}
        <div className="flex flex-col h-full justify-between">
          
          <div className="flex-1 flex flex-col min-h-[380px] bg-white border border-[#1A1A1A] rounded-none overflow-hidden relative">
            
            {/* Window header */}
            <div className="bg-[#FAF8F5]/50 border-b border-[#1A1A1A]/30 py-3 px-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-[#1A1A1A]" />
                <span className="font-mono text-[10px] text-[#1A1A1A] font-bold tracking-wider uppercase">Preview_draft_HCMC.md</span>
              </div>

              {generatedText && (
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-[9px] font-mono text-[#1a1a1a] uppercase font-bold tracking-wider hover:underline"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? 'Đã sao chép' : 'Sao chép'}
                </button>
              )}
            </div>

            {/* Text Output or Empty State */}
            <div className="flex-1 p-5 overflow-y-auto max-h-[350px]">
              {generatedText ? (
                <div className="space-y-3 text-left">
                  {renderFormattedText(generatedText)}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-4">
                  
                  {/* Geometric stylized loader */}
                  <div className="relative flex items-center justify-center h-20 w-20 border border-[#1A1A1A] bg-[#FAF8F5] mb-4">
                    <div className="h-4 w-4 bg-[#1A1A1A] animate-pulse" />
                  </div>

                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">Sẵn sàng tiếp nhận cảm hứng</h4>
                  <p className="text-xs text-[#666] max-w-[280px] mt-2 leading-relaxed">
                    Chọn một định dạng ấn phẩm truyền thông bên trái và kích hoạt tư duy AI. Bản thảo đầy chất thơ sẽ lập tức ra lò tại đây.
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* Scented candle product design tip badge */}
          <div className="mt-4 p-4 rounded-none bg-[#F2EFE8] border border-[#1A1A1A] flex items-start gap-2.5">
            <Heart className="h-4 w-4 text-[#1a1a1a] shrink-0 mt-0.5" />
            <p className="text-[11px] text-[#444] leading-relaxed font-sans">
              <strong>Gợi ý:</strong> Sau khi tạo bản thảo, bạn có thể copy nội dung trực tiếp để in ấn lên <strong>Rest Ritual Card</strong> làm quà tặng độc quyền của chiến dịch tại chuỗi Workshop cafe gỗ.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
export default AIContentStudio;
