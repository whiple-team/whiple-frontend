import {Footer, Header} from '../components';
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header isLoggedIn={false} />

      <main className="flex-1">
        <Outlet />  
      </main>

      <Footer />
    </div>
  );
};

export default DefaultLayout;