{/* 라우팅 인덱스 */ }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import { HomePage, LoginPage, WhiskeyDetailPage } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* 공통 레이아웃 사용 */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/whiskey-detail" element={<WhiskeyDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* 공통레이아웃 안 쓰는 페이지 */}
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

