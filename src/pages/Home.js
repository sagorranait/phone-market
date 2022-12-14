import axios from "axios"
import { useEffect, useState } from "react"
import Advertised from "../components/Advertised"
import AppDownload from "../components/AppDownload"
import Banner from "../components/Banner"
import Categories from "../components/Categories"
import Services from "../components/Services"
import usePageTitle from "../hooks/usePageTitle"

const Home = () => {
  usePageTitle('');
  const [loading, setLoading] = useState(false);
  const [advertiseProduct, setAdvertiseProduct] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get('https://phonemarket-server-app.vercel.app/product/advertised')
    .then(res =>{ 
      setAdvertiseProduct(res.data);
      setLoading(false);
    })
    .catch(error => console.log(error));
  }, []) ;

  return (
    <div className='home-section'>
      <Banner/>
      {advertiseProduct.length !== 0 ? <Advertised loading={loading} products={advertiseProduct}/> : null}
      <Categories/>
      <AppDownload/>
      <Services/>
    </div>
  )
}

export default Home