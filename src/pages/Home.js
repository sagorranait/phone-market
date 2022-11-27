import Advertised from "../components/Advertised"
import AppDownload from "../components/AppDownload"
import Banner from "../components/Banner"
import Categories from "../components/Categories"
import Services from "../components/Services"

const Home = () => {
  return (
    <div className='home-section'>
      <Banner/>
      <Advertised/>
      <Categories/>
      <AppDownload/>
      <Services/>
    </div>
  )
}

export default Home