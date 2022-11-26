import AppDownload from "../components/AppDownload"
import Categories from "../components/Categories"
import Services from "../components/Services"

const Home = () => {
  return (
    <div className='home-section'>
      <Categories/>
      <AppDownload/>
      <Services/>
    </div>
  )
}

export default Home