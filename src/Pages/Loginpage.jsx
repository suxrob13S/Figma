

function Login() {
    return (
        <div className="w-full h-full  flex items-center bg-neutral-50">


            <div className="w-[50%] h-full  px-8 py-2">
                <div className="w-full h-full bg-blue-500 rounded-3xl px-8 py-8">
                    <div className="w-full rounded-xl justify-center py-3 bg-blue-100 bg-opacity-15 items-center  flex gap-2 border-blue-300  border-[1px] shadow-inner" >
                        <img src="/Loginpageicons/Frame 2147229037.svg" alt="" />
                        <p className="text-white text-[16px]">Managly</p>
                    </div>

                    <div className="mt-48">
                        <p className="text-white text-[40px] font-semibold w-[600px]">Ijtimoiy tarmoqlar ikki yoqlama qilich kabi u bizni bog‘lash va ajratish qudratiga ega.</p>
                        <p className="text-white text-[20px] font-extralight mt-4">Asoschi</p>
                    </div>


                    <div className="relative   w-full px-10 py-10 pb-16 bg-blue-400 mt-20   rounded-2xl">
                        <div className="absolute w-15 h-15 left-[92%] top-0 bg-white  px-4 py-4 rounded-xl" >
                            <img src="/Loginpageicons/Frame 2147229037.svg" alt="" />
                        </div>
                        <p className="text-white text-[26px] font-semibold">Iltimos, login ma’lumotlaringizni kiriting</p>
                        <p className="text-white text-[22px] font-extralight w-[560px] tracking-wide mt-6">Eng so‘nggi yangiliklar va xabarlardan xabardor bo‘lish uchun bizga ijtimoiy tarmoqlarda obuna bo’ling.</p>
                        <div className="flex mt-4 relative items-center px-4 pt-8  ">
                            <img className="absolute left-0" src="/Loginpageicons/instagram.svg" alt="" />
                            <img className="z-10 absolute left-9" src="/Loginpageicons/TikTok.svg" alt="" />
                            <img className="absolute left-[74px] z-20" src="/Loginpageicons/Facebook.svg" alt="" />
                            <img className="absolute left-28 z-30" src="/Loginpageicons/+36.svg" alt="" />
                        </div>
                    </div>


                </div>

            </div>


            <div className="w-[50%] h-full bg-white px-8 py-2  ">
                <div className="w-full pl-[780px]">
                    <div className="hidden sm:flex items-center justify-around w-[120px] h-[36px] px-[8px] py-[8px] bg-slate-100 border-none rounded-[8px] border">
                        <img className="w-[18px] h-[18px]" src="/Images/Navbar.icons/global.svg" alt="lang" />
                        <select className="outline-none focus:ring-0 px-1 text-sm bg-transparent">
                            <option value="uzb">O‘zb</option>
                            <option value="rus">Rus</option>
                        </select>
                    </div>
                </div>


                <div className="w-[60%] h-[70%]  m-auto mt-44 flex flex-col px-2 py-2">
                    <div className="w-full text-center ">
                        <p className="text-[28px] font-bold">Xush kelibsiz!</p>
                        <p className="text-slate-500 font-normal text-[18px] mt-2">Qaytganingizdan xursandmiz. Kirish usulini tanlang!</p>
                    </div>
                    <form className="w-full flex flex-col pl-[45px] mt-10 gap-4">

                        <label htmlFor="email" className="text-slate-500 -mb-3 ml-1 text-[14px]">Elektron Pochta</label>
                        <div className="flex items-center border-[1px] px-4 py-4 rounded-xl gap-4">
                            <img className="w-5 h-5" id="email" type="email" src="/Loginpageicons/message.svg" alt="" />
                            <input className="focus:outline-none focus:ring-0 focus:border-transparent" type="text" placeholder="Elektron pochtangizni kiriting" />
                        </div>

                        <label htmlFor="password" className="text-slate-500 text-[14px] ml-1 -mb-3 mt-2">Parol*</label>
                        <div className="flex items-center border-[1px] px-4 py-4 rounded-xl gap-4">
                            <img className="w-5 h-5"  id="password " type="password" src="/Loginpageicons/password.svg" alt="" />
                            <input className="focus:outline-none focus:ring-0 focus:border-transparent" type="text" placeholder="" />
                        </div>

                        <p className="text-cyan-500 font-light tracking-wide text-[17px] -mt-2 pl-[292px]">Parolni unutdingizmi?</p>
                    </form>
                    <div className="w-full flex flex-col gap-6 pl-[45px] mt-6">
                        <p className="text-slate-500">Foydalanish <span className="text-cyan-500 border-b-[1px] border-cyan-500 ">shartlariga</span> rozilik berish</p>
                        <button className="w-full px-4 py-4 rounded-xl bg-blue-200 text-white">Tizimga kirish</button>
                        <p className="m-auto">Sizda akkaunt yo’qmi? <span className="text-cyan-500 ">Ro’yhatdan o’tish</span></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
