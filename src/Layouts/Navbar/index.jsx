


function Navbar() {
    return (
        <div className="flex justify-between  w-full h-[68px]  py-[16px] px-[24px]   items-center shadow-sm border rounded-2xl border-gray-100 font-sans"  >

            <div className="flex items-center  gap-4 bg-white ">
                {/* logo */}
                <div className="px-4 border-r-[1px]">
                    <img src="/Images/Navbar.icons/NavLogo.svg" alt="" />
                </div>
                {/* Search */}
                <div className="w-[288px] flex items-center gap-2 py-2 px-2 border-[1px] rounded-[8px]">
                    <img src="/Images/Navbar.icons/Search.svg" alt="" />
                    <input className="outline-none focus:ring-0 bg-white" type="text" placeholder="Qidirish" />
                </div>
            </div>


            <div className="flex justify-between gap-[15px] items-center">

                {/* Language     */}
                <div className="flex w-[111px] h-[36px] px-[10px] py-[8px]   bg-slate-50 rounded-[8px]">
                    <img className="w-[18px] h-[18px]" src="/Images/Navbar.icons/global.svg" alt="" />
                    <select className=" outline-none focus:ring-0 focus:border-gray-300 px-[10px]">
                        <option value="uzb">O‘zb</option>
                        <option value="rus">Rus</option>
                        <option value="eng">Eng</option>
                    </select>
                </div>



                {/* Settings */}
                <div className="flex  gap-[10px] px-[15px] items-center border-r-[1px] ">
                    <img className="w-[18px]  h-[18px]  bg-slate-50 rounded-[6px]" src="/Images/Navbar.icons/Question.svg" alt="" />
                    <img className="w-[18px]  h-[18px]  bg-slate-50 rounded-[6px]" src="/Images/Navbar.icons/icons8-settings.svg" alt="" />
                    <img className="w-[18px]  h-[18px]  bg-slate-50 rounded-[6px] " src="/Images/Navbar.icons/Qo'ng'iroq.svg" alt="" />
                </div>



                {/* Profile */}
                <div className="flex items-center gap-[8px] justify-between">
                    <img src="/Images/Navbar.icons/Avatar.svg" alt="" />
                    <div className="">
                        <p className="text-14px -mb-[4px]" >Foziljon Solijonov</p>  
                        <p className="text-12px tracking-wider font-thin">Super Admin</p>  
                    </div>
                    <img className="ml-[10px]" src="/Images/Navbar.icons/downArrow.svg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Navbar;