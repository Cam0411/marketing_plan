import React from 'react';
import { CoffeeShop } from '../types';
import { MapPin, Check, Coffee } from 'lucide-react';

interface CoffeeShopPlannerProps {
  shops: CoffeeShop[];
  onToggleShop: (id: string) => void;
}

export function CoffeeShopPlanner({ shops, onToggleShop }: CoffeeShopPlannerProps) {
  const selectedShops = shops.filter((s) => s.selected);
  const totalVenueCost = selectedShops.reduce((sum, s) => sum + s.feePerSession, 0);
  const totalCapacity = selectedShops.reduce((sum, s) => sum + s.capacity, 0);

  return (
    <div className="bg-white p-6 rounded-none border border-[#1A1A1A]">
      
      {/* Title */}
      <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4">
        <div className="flex items-center gap-2">
          <Coffee className="h-4.5 w-4.5 text-[#1A1A1A]" />
          <h3 className="text-[11px] font-mono text-[#1A1A1A] uppercase tracking-widest font-bold">Mạng lưới Quán Cà Phê Đối Tác (Partner Cafés)</h3>
        </div>
        <span className="bg-[#1A1A1A] text-white px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider">
          {selectedShops.length} Quán Chọn
        </span>
      </div>

      <p className="mt-3 text-xs text-[#555] leading-relaxed">
        Chọn các quán cà phê có không gian mộc thô, yên bình phù hợp tôn chỉ <strong className="text-[#1A1A1A]">Warm Minimalism</strong> để đặt poster trưng bày và tổ chức chuỗi workshop định kỳ.
      </p>

      {/* Summary Box */}
      <div className="mt-4 grid grid-cols-2 gap-4 bg-[#FDFCF8] p-4 rounded-none border border-[#1A1A1A]">
        <div>
          <p className="text-[9px] font-mono text-[#666] uppercase tracking-wider">Tổng Chi Phí Venue</p>
          <p className="text-xs font-bold font-mono text-[#1A1A1A] mt-0.5">
            {new Intl.NumberFormat('vi-VN').format(totalVenueCost)} đ
          </p>
        </div>
        <div>
          <p className="text-[9px] font-mono text-[#666] uppercase tracking-wider">Tổng Sức Chứa Đồng Thời</p>
          <p className="text-xs font-bold font-mono text-[#1A1A1A] mt-0.5">
            {totalCapacity} Chỗ
          </p>
        </div>
      </div>

      {/* Grid of Coffee Shops */}
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {shops.map((shop) => {
          return (
            <div 
              key={shop.id}
              onClick={() => onToggleShop(shop.id)}
              className={`rounded-none overflow-hidden border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                shop.selected 
                  ? 'border-[#1A1A1A] bg-[#FDFCF8] scale-[1.01]' 
                  : 'border-[#1A1A1A]/30 hover:border-[#1A1A1A] bg-white'
              }`}
            >
              
              <div>
                <div className="relative h-28 w-full bg-stone-100">
                  <img 
                    src={shop.image} 
                    alt={shop.name}
                    className="h-full w-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-[#1A1A1A] text-white px-2 py-0.5 font-mono text-[9px] uppercase font-bold tracking-wider">
                    {shop.area}
                  </div>
                  
                  {/* Selection Badge - Geometric square checkboxes */}
                  <div className={`absolute top-2 right-2 h-5 w-5 rounded-none flex items-center justify-center border transition-all ${
                    shop.selected 
                      ? 'bg-[#1A1A1A] border-transparent text-white' 
                      : 'bg-white border-[#1A1A1A]/30'
                  }`}>
                    {shop.selected && <Check className="h-3 w-3 text-white" />}
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-tight line-clamp-1">{shop.name}</h4>
                  
                  <div className="mt-1 flex items-start gap-1 font-mono text-[10px] text-[#666]">
                    <MapPin className="h-3 w-3 shrink-0 text-[#1A1A1A] mt-0.5" />
                    <span className="line-clamp-1">{shop.address}</span>
                  </div>

                  <p className="mt-3 text-xs text-[#444] bg-white p-2.5 rounded-none border border-[#1A1A1A]/20 italic">
                    "{shop.aesthetic}"
                  </p>
                </div>
              </div>

              <div className="px-4 pb-4 pt-2.5 flex items-center justify-between border-t border-[#1A1A1A]/20 bg-[#FDFCF8]">
                <div>
                  <p className="text-[9px] font-mono text-[#666] uppercase tracking-wider">SỨC CHỨA</p>
                  <p className="text-xs font-bold text-[#1a1a1a]">{shop.capacity} người</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-mono text-[#666] uppercase tracking-wider">CHI PHÍ / BUỔI</p>
                  <p className="text-xs font-bold font-mono text-[#1a1a1a]">
                     {new Intl.NumberFormat('vi-VN').format(shop.feePerSession)} đ
                  </p>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
export default CoffeeShopPlanner;
