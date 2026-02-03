
import { Link } from "react-router-dom";
import { RejalashSiderItems } from "./RejalashSiderItems";
import {  MoreHorizontal, Send } from 'lucide-react';

function Reja() {
    const bigCards = [
        { title: 'Foziljon_Design', type: 'Telegram channel', count: '10 218 obunachi' },
        { title: 'Foziljon_Portfolio', type: 'Telegram group', count: '10 218 obunachi' },
        { title: 'Foziljon_Portfolio', type: 'Telegram group', count: '10 218 obunachi' },
        { title: 'Foziljon_Portfolio', type: 'Telegram group', count: '10 218 obunachi' },
    ];

    const smallCards = [
        { title: 'Foziljon_Design', type: 'Telegram channel', count: '10 218 obunachi' },
        { title: 'Foziljon_Design', type: 'Telegram channel', count: '10 218 obunachi' },
        { title: 'Foziljon_Design', type: 'Telegram channel', count: '10 218 obunachi' },
        { title: 'Foziljon_Design', type: 'Telegram channel', count: '10 218 obunachi' },
    ];

    return (
        <div className="w-full min-h-full">
            {/* Header qismi - h-auto qilindi, mobilda matn sig'ishi uchun */}
            <div className="w-full min-h-[72px] bg-white px-[24px] py-[20px] rounded-[16px] shadow-sm border border-gray-100 font-sans" >
                <p className="text-black text-[20px] font-bold">Rejalashtirish</p>
            </div>

            {/* Asosiy kontent - flex-col mobilda, flex-row lg ekranda */}
            <div className="w-full flex flex-col lg:flex-row mt-3 gap-3">
                
                {/* Chap tomondagi Ijtimoiy tarmoqlar sideri */}
                <div className="w-full lg:w-[280px] shrink-0">
                    <div className="flex flex-col w-full h-full shadow-sm border rounded-2xl border-gray-100 font-sans bg-white px-4 py-4">
                        <div className="flex items-center justify-between gap-4 w-full px-[7px] py-[7px]">
                            <p className="font-medium text-gray-700">Ijtimoiy tarmoqlar</p>
                            <img className="cursor-pointer" src="/Images/RajalashImages.jsx/Solid Button.svg" alt="add" />
                        </div>

                        <div className="flex flex-col">
                            {RejalashSiderItems.map((item, index) => (
                                <Link key={index} to={item.path} className="flex items-center cursor-pointer mt-2 gap-4 px-3 py-[9px] hover:bg-gray-50 rounded-lg transition-colors">
                                    <img src={item.icon} alt="" className="w-5 h-5" />
                                    <p className="text-black text-sm">{item.label}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* O'ng tomondagi asosiy karta qismi */}
                <div className="flex-1 bg-white rounded-[16px] shadow-sm border border-gray-100 p-4 md:p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-gray-800">Sizning guruh & kanallaringiz</h2>
                        <button className="flex items-center gap-2 bg-[#0088cc] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors shrink-0">
                            Qo'shish
                        </button>
                    </div>

                    {/* Grid: Mobilda 1 ta, planshetda 2 ta, katta ekranda 4 ta ustun */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
                        {bigCards.map((item, index) => (
                            <div key={index} className="border border-gray-100 rounded-xl p-5 flex flex-col items-center text-center relative hover:shadow-md transition-shadow">
                                <button className="absolute top-2 right-2 text-gray-400">
                                    <MoreHorizontal size={18} />
                                </button>
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 relative">
                                    <div className="bg-blue-500 p-1.5 rounded-full text-white absolute bottom-0 right-0 border-2 border-white">
                                        <Send size={10} fill="currentColor" />
                                    </div>
                                    <span className="text-blue-600 font-bold text-xl">{item.title[0]}</span>
                                </div>
                                <h3 className="font-semibold text-gray-800 text-sm truncate w-full px-2">{item.title}</h3>
                                <p className="text-xs text-gray-400 mt-1">{item.type}</p>
                                <p className="text-xs text-gray-400">{item.count}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mb-4">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">v2</span>
                    </div>

                    {/* Pastki grid ham responsive qilindi */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {smallCards.map((item, index) => (
                            <div key={index} className="border border-gray-100 rounded-xl p-3 flex items-center gap-3 relative hover:shadow-sm overflow-hidden">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                    <span className="text-blue-600 font-bold text-xs">{item.title[0]}</span>
                                </div>
                                <div className="overflow-hidden pr-4">
                                    <h3 className="font-semibold text-gray-800 text-xs truncate">{item.title}</h3>
                                    <p className="text-[10px] text-gray-400 truncate">{item.type}</p>
                                    <p className="text-[10px] text-gray-400">{item.count}</p>
                                </div>
                                <button className="absolute top-2 right-2 text-gray-400">
                                    <MoreHorizontal size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Reja;