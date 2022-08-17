import { About } from '../components/About/About'
import Footer from '../components/Footer/Footer'
import { Home } from '../components/Home/Home'
import '../styles/HomePage.css'

export function HomePage() {
  return (
    <div className="HomePage">
      <Home />
      <About />
      <Footer />
    </div>
  )
}
