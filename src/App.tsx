import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import Programs from './sections/Programs/Programs';
import TrainingZones from './sections/TrainingZones/TrainingZones';
import Coaches from './sections/Coaches/Coaches';
import Membership from './sections/Membership/Membership';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="apex-app">

      <Navbar />

      <main>
        <Hero />
        <Programs />
        <TrainingZones />
        <Coaches />
        <Membership />
        <Footer />
      </main>

    </div>
  );
}

export default App;