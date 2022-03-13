import { Routes, Route } from "react-router-dom";
// import Home from "./Components/Home/home";
import { sidebar } from "./sidebar_data/sidebar_routes";

const Routers = () => {
  return (
    <Routes>
      {sidebar.map((item, index) => {
        return (
          <Route key={index} path={item.path} element={<item.Component />} />
        );
      })}
    </Routes>
  );
};

export default Routers;
