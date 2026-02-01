
import { Link } from "react-router-dom";
import { RejalashSiderItems } from "./RejalashSiderItems";
import { Plus, MoreHorizontal, Send } from 'lucide-react';


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
        <div className="w-full h-full ">
            <div className=" w-full h-[72px] bg-white px-[24px] py-[24px] rounded-[16px] shadow-sm border-gray-100 font-sans    " >
                <p className="text-black text-[20px] font-bold">Rejalashtirish</p>
            </div>
            <div className="w-full h-[calc(100%-72px)] flex mt-3 gap-3  ">
                <div className="w-[280px] h-full ">
                    <div className=" flex items-center w-full h-full shadow-sm border rounded-2xl border-gray-100 font-sans  gap-3">
                        <div className="w-full h-full  felx-col bg-white rounded-[16px] px-4 py-4">

                            <div className="flex items-center justify-between  gap-4 w-full px-[7px] py-[7px]">
                                <p>Ijtimoiy tarmoqlar</p>
                                <img className="cursor-pointer" src="/Images/RajalashImages.jsx/Solid Button.svg" alt="" />
                            </div>

                            <div className="flex flex-col">
                                {
                                    RejalashSiderItems.map((item, index) => {
                                        return (
                                            <Link key={index} to={item.path} className="flex items-center cursor-pointer mt-4 gap-4 px-3 py-[9px]">
                                                <img src={item.icon} alt="" />
                                                <p className="text-black">{item.label}</p>
                                            </Link>

                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-[calc(100%-280px)] bg-gray-100  rounded-[16px] ">
                    <div className="bg-white h-full p-6 rounded-2xl shadow-sm border border-gray-100 font-sans">
                        {/* Sarlavha qismi */}
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-gray-800">Sizning guruh & kanallaringiz</h2>
                            <button className="flex items-center gap-2 bg-[#0088cc] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                                Qo'shish
                            </button>
                        </div>

                        {/* Yuqori qatordagi katta kartalar */}
                        <div className="grid grid-cols-4 gap-4 mb-8">
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
                                    <h3 className="font-semibold text-gray-800 text-sm">{item.title}</h3>
                                    <p className="text-xs text-gray-400 mt-1">{item.type}</p>
                                    <p className="text-xs text-gray-400">{item.count}</p>
                                </div>
                            ))}
                        </div>

                        {/* V2 sarlavhasi */}
                        <div className="mb-4">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">v2</span>
                        </div>

                        {/* Pastki qatordagi kichik kartalar */}
                        <div className="grid grid-cols-4 gap-4">
                            {smallCards.map((item, index) => (
                                <div key={index} className="border border-gray-100 rounded-xl p-3 flex items-center gap-3 relative hover:shadow-sm">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                        <span className="text-blue-600 font-bold text-xs">{item.title[0]}</span>
                                    </div>
                                    <div className="overflow-hidden">
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
        </div>
    )
}

export default Reja;