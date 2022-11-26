import Advertised from "../components/Advertised"
import AppDownload from "../components/AppDownload"
import Categories from "../components/Categories"
import Services from "../components/Services"

const Home = () => {
  return (
    <div className='home-section'>
      <Advertised/>
      <Categories/>
      <AppDownload/>
      <Services/>
    </div>
  )
}

export default Home