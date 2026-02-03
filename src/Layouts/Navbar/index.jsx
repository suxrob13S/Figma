
function Navbar() {
  return (
    <div className="flex justify-between w-full h-[68px] py-[16px] px-[12px] md:px-[24px] items-center shadow-sm border rounded-2xl border-gray-100 font-sans bg-white">
      
 
      <div className="flex items-center gap-2 md:gap-4 flex-1">
     
        <div className="px-2 md:px-4 border-r-[1px] lg:hidden">
          <img src="/Images/Navbar.icons/NavLogo.svg" alt="logo" className="w-8" />
        </div>

    
        <div className="hidden md:flex items-center gap-2 py-2 px-2 border-[1px] rounded-[8px] max-w-[288px] w-full">
          <img src="/Images/Navbar.icons/Search.svg" alt="search" />
          <input className="outline-none focus:ring-0 bg-white w-full text-sm" type="text" placeholder="Qidirish" />
        </div>
      </div>

   
      <div className="flex items-center gap-2 md:gap-[15px]">
        
    
        <div className="hidden sm:flex items-center w-fit h-[36px] px-[8px] py-[8px] bg-white rounded-[8px] border">
          <img className="w-[18px] h-[18px]" src="/Images/Navbar.icons/global.svg" alt="lang" />
          <select className="outline-none focus:ring-0 px-1 text-sm bg-transparent">
            <option value="uzb">O‘zb</option>
            <option value="rus">Rus</option>
          </select>
        </div>

        <div className="hidden md:flex gap-[10px] px-[15px] items-center border-r-[1px]">
          <img className="w-[18px] h-[18px] cursor-pointer" src="/Images/Navbar.icons/Question.svg" alt="" />
          <img className="w-[18px] h-[18px] cursor-pointer" src="/Images/Navbar.icons/icons8-settings.svg" alt="" />
          <img className="w-[18px] h-[18px] cursor-pointer text-blue-500" src="/Images/Navbar.icons/Qo'ng'iroq.svg" alt="" />
        </div>

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