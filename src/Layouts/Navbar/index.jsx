


// function Navbar() {
//     return (
//         <div className="flex justify-between  w-full h-[68px]  py-[16px] px-[24px]   items-center shadow-sm border rounded-2xl border-gray-100 font-sans"  >

//             <div className="flex items-center  gap-4 bg-white ">
//                 {/* logo */}
//                 <div className="px-4 border-r-[1px]">
//                     <img src="/Images/Navbar.icons/NavLogo.svg" alt="" />
//                 </div>
//                 {/* Search */}
//                 <div className="w-[288px] flex items-center gap-2 py-2 px-2 border-[1px] rounded-[8px]">
//                     <img src="/Images/Navbar.icons/Search.svg" alt="" />
//                     <input className="outline-none focus:ring-0 bg-white" type="text" placeholder="Qidirish" />
//                 </div>
//             </div>


//             <div className="flex justify-between gap-[15px] items-center">

//                 {/* Language     */}
//                 <div className="flex w-[111px] h-[36px] px-[10px] py-[8px]   bg-white rounded-[8px]">
//                     <img className="w-[18px] h-[18px]" src="/Images/Navbar.icons/global.svg" alt="" />
//                     <select className=" outline-none focus:ring-0 focus:border-gray-300 px-[10px]">
//                         <option value="uzb">O‘zb</option>
//                         <option value="rus">Rus</option>
//                         <option value="eng">Eng</option>
//                     </select>
//                 </div>



//                 {/* Settings */}
//                 <div className="flex  gap-[10px] px-[15px] items-center border-r-[1px] ">
//                     <img className="w-[18px]  h-[18px]  bg-slate-50 rounded-[6px]" src="/Images/Navbar.icons/Question.svg" alt="" />
//                     <img className="w-[18px]  h-[18px]  bg-slate-50 rounded-[6px]" src="/Images/Navbar.icons/icons8-settings.svg" alt="" />
//                     <img className="w-[18px]  h-[18px]  bg-slate-50 rounded-[6px] " src="/Images/Navbar.icons/Qo'ng'iroq.svg" alt="" />
//                 </div>



//                 {/* Profile */}
//                 <div className="flex items-center gap-[8px] justify-between">
//                     <img src="/Images/Navbar.icons/Avatar.svg" alt="" />
//                     <div className="">
//                         <p className="text-14px -mb-[4px]" >Foziljon Solijonov</p>  
//                         <p className="text-12px tracking-wider font-thin">Super Admin</p>  
//                     </div>
//                     <img className="ml-[10px]" src="/Images/Navbar.icons/downArrow.svg" alt="" />
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Navbar;
function Navbar() {
  return (
    <div className="flex justify-between w-full h-[68px] py-[16px] px-[12px] md:px-[24px] items-center shadow-sm border rounded-2xl border-gray-100 font-sans bg-white">
      
      {/* Chap tomon: Logo va Qidiruv */}
      <div className="flex items-center gap-2 md:gap-4 flex-1">
        {/* Mobilda sidebar yo'qligi uchun logo yoki menu tugmasi */}
        <div className="px-2 md:px-4 border-r-[1px] lg:hidden">
          <img src="/Images/Navbar.icons/NavLogo.svg" alt="logo" className="w-8" />
        </div>

        {/* Search: Faqat xl (1280px) va lg (1024px) da to'liq chiqadi */}
        <div className="hidden md:flex items-center gap-2 py-2 px-2 border-[1px] rounded-[8px] max-w-[288px] w-full">
          <img src="/Images/Navbar.icons/Search.svg" alt="search" />
          <input className="outline-none focus:ring-0 bg-white w-full text-sm" type="text" placeholder="Qidirish" />
        </div>
      </div>

      {/* O'ng tomon: Til, Settings, Profil */}
      <div className="flex items-center gap-2 md:gap-[15px]">
        
        {/* Language: Mobilda yashiriladi (sm:hidden) */}
        <div className="hidden sm:flex items-center w-fit h-[36px] px-[8px] py-[8px] bg-white rounded-[8px] border">
          <img className="w-[18px] h-[18px]" src="/Images/Navbar.icons/global.svg" alt="lang" />
          <select className="outline-none focus:ring-0 px-1 text-sm bg-transparent">
            <option value="uzb">O‘zb</option>
            <option value="rus">Rus</option>
          </select>
        </div>

        {/* Settings icons: md ekrandan kichikda yashiriladi */}
        <div className="hidden md:flex gap-[10px] px-[15px] items-center border-r-[1px]">
          <img className="w-[18px] h-[18px] cursor-pointer" src="/Images/Navbar.icons/Question.svg" alt="" />
          <img className="w-[18px] h-[18px] cursor-pointer" src="/Images/Navbar.icons/icons8-settings.svg" alt="" />
          <img className="w-[18px] h-[18px] cursor-pointer text-blue-500" src="/Images/Navbar.icons/Qo'ng'iroq.svg" alt="" />
        </div>

        {/* Profile: Ism-sharifni mobilda yashiramiz */}
        <div className="flex items-center gap-[8px]">
          <img src="/Images/Navbar.icons/Avatar.svg" alt="avatar" className="w-8 h-8 md:w-10 md:h-10 rounded-full" />
          <div className="hidden lg:block min-w-fit">
            <p className="text-[13px] md:text-[14px] font-semibold leading-tight">Foziljon Solijonov</p>  
            <p className="text-[11px] md:text-[12px] text-gray-500">Super Admin</p>  
          </div>
          <img className="ml-1 w-3" src="/Images/Navbar.icons/downArrow.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar