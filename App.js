

import { Route, Routes } from 'react-router-dom';
import Home from './Fragments/home_component/Home';
import '../src/Fragments/home_component/homestyle.css'
import Logo from './Assets/slgtc_logo_cb.png'

function App() {
  return (
    <div className="App">
      <header className="header_style">
        <img  src={Logo} className="logo-img" alt="Need to add the logo " />        
      </header>
    
      <Routes>
        
        <Route path="/" element={<Home />}> </Route>

      </Routes>
    </div>
    
  );
}

export default App;
