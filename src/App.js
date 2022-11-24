import { Outlet, ScrollRestoration } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="phoneMarket-app">
      <Header/>
        <Outlet/>
      <Footer/>
      <ScrollRestoration />
      <Toaster/>
    </div>
  );
}

export default App;
