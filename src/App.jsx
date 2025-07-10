import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './Routes/MainRoutes';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Header */}
        <Header />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main style={{ flexGrow: 1 }}>
          <MainRoutes />
        </main>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
