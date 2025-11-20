{/* 라우팅 인덱스 */ }

import { Routes, Route, useLocation } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import { HomePage, LoginPage, WhiskeyDetailPage } from "../pages";

const Router = () => {
  const location = useLocation();    

  return (
      <Routes>

        {/* 공통 레이아웃 사용 */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/whiskey-detail" element={<WhiskeyDetailPage key={location.search} />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        
      </Routes>
  );
};

export default Router;

