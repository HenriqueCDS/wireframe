
import './App.css';
import './paterns.css';
import './responsive.css';
import Header from './components/Header/index.js';
import SHero from './components/S-hero/index.js';
import CardFeatured from './components/CardFeatured/index.js';
import Newsletter from './components/Newsletter/index.js';
import Footer from './components/Footer/index.js';


function App() {
  return (
    <>
        <Header />
        <SHero />
        <CardFeatured />
        <Newsletter />
        <Footer />
    </>
  );
}

export default App;
