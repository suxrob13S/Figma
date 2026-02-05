
import { Route, Routes } from "react-router-dom";
import Navbar from "../Layouts/Navbar";
import Sidebar from "../Layouts/Sider";
import { SidebarItems } from "../Layouts/Sider/SidebarItems";
import Login from "../Pages/Loginpage";

function MainRoute() {
  return (
  
    <div className="w-full h-screen flex p-4  gap-4 bg-neutral-50 overflow-hidden">
      
      <Login></Login>
      {/* <Sidebar />

      <div className="flex-1 flex flex-col gap-4 min-w-0">
        <Navbar />
        <div className="flex-1 z rounded-2xl">
          <Routes>
            {SidebarItems.map((item) => (
              <Route key={item.id} path={item.path} element={item.element}>
                {item.children &&
                  item.children.map((child, index) => (
                    <Route
                      key={index}
                      path={child.path.replace(`${item.path}/`, "")}
                      element={child.element ? child.element : <div>{child.label}</div>}
                    />
                  ))}
              </Route>
            ))}
          </Routes>
        </div>
        
      </div> */}
    </div>
  );
}

export default MainRoute;
