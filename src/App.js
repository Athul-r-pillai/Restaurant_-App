
import './App.css';
import Button from 'react-bootstrap/Button';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Allrest from './Components/AllRest/Allrest';
import { Route, Routes } from 'react-router-dom';
import View from './ViewRest/View';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
        <Routes>
          {/* localhost://3000 -all restaurants View */}
          <Route path='/' element={ <Allrest/>}/>
          <Route path='/view/:id' element={<View/>}/>
        </Routes>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
