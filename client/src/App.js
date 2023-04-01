
import './App.css';
// import { SignUp } from './Pages/SignUp';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
