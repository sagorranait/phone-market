import { Outlet, ScrollRestoration } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className="phoneMarket-app">
      <Outlet/>
      <ScrollRestoration />
      <Toaster/>
    </div>
  );
}

export default App;
