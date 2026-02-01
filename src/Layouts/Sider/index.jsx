
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SidebarItems } from "./SidebarItems";

function Sidebar() {
  const [openId, setOpenId] = useState(null);
  const location = useLocation();

  return (
    <div className="w-[300px] h-full bg-slate-800 rounded-[14px] py-4 px-4 flex flex-col">

      {/* TOP */}
      <div className="py-2 px-2 flex items-center justify-between bg-slate-700 rounded-[12px]">
        <div className="flex items-center gap-2">
          <img src="/Images/Sidebar.icons/Vector.svg" alt="" />
          <p className="text-white font-semibold text-[16px]">Company name</p>
        </div>
        <img src="/Images/Sidebar.icons/Playground Arrow.svg" alt="" />
      </div>

      {/* MIDDLE */}
      <div className="mt-6 flex flex-col">
        <p className="text-white text-[12px] mb-2">Sahifalar</p>

        {SidebarItems.map((item) => {
          const isParentActive =
            location.pathname === item.path ||
            location.pathname.startsWith(item.path + "/");

          return (
            <div key={item.id}>
              {/* MAIN ITEM */}
              <div
                className={`flex items-center justify-between mt-2 py-2 px-2 rounded-lg transition
                  ${
                    isParentActive
                      ? "bg-white text-black"
                      : "hover:bg-slate-700"
                  }
                `}
              >
                <NavLink to={item.path} className="flex items-center gap-2">
                  <img
                    src={item.icon}
                    alt=""
                    className={isParentActive ? "brightness-0" : "invert opacity-50 brightness-0"}
                  />
                  <p
                    className={`text-[14px] ${
                      isParentActive ? "text-black" : "text-white"
                    }`}
                  >
                    {item.label}
                  </p>
                </NavLink>

                {item.children && (
                  <img
                    src="/Images/Sidebar.icons/Playground Arrow.svg"
                    alt=""
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenId(openId === item.id ? null : item.id);
                    }}
                    className={`cursor-pointer transition-transform duration-300
                      ${
                        openId === item.id || isParentActive
                          ? "rotate-90 "
                          : ""
                      }
                    `}
                  />
                )}
              </div>

              {/* CHILDREN */}
              {item.children && (
                <div
                  className={`ml-8 overflow-hidden transition-all duration-300
                    ${
                      openId === item.id || isParentActive
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  {item.children.map((child, index) => (
                    <NavLink
                      key={index}
                      to={`${item.path}/${child.path}`}
                      className={({ isActive }) =>
                        `block py-1 pl-2 rounded text-[13px] transition
                        ${
                          isActive
                            ? "bg-white text-black"
                            : "text-white hover:bg-slate-700"
                        }`
                      }
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* BOTTOM */}
      <div className="py-2 px-2 flex items-center gap-2 bg-slate-700 rounded-[12px] mt-auto">
        <img src="/Images/Sidebar.icons/Vector.svg" alt="" />
        <p className="text-white font-semibold text-[16px]">Managly</p>
      </div>
    </div>
  );
}

export default Sidebar;

