import TogglerLang from './Multilang/component/togglerLang';
import Content from './Multilang/component/Content';
import Context from './Multilang/context/context';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Comp2 from './Tp1_react/Comp2';
import Navbar1 from './navBar/Navbar';
import Compimg from './Tp2_react/Compimg';
import Comp1 from './Tp3_react/Comp1';
import Comp3 from './Tp4_react/Comp3';
import ThemeContextProvider from './context/themeContext';
import BtnToggler from './componet/btnToggler/btnToggler/btnToggler';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  return (
    <div className="App" >

    

      <Navbar1/>
       <Routes>
         <Route path='/' element={<Comp2/>}/>
         <Route path='/slide' element={<Compimg/>}/>
         <Route path='/todolist' element={<Comp1/>}/>
         <Route path='/pagination' element={<Comp3/>}/>
         <Route path='/multilang' element={ <Context><TogglerLang/><Content/></Context>}/>
         <Route path='*' element={<h1>Not Found</h1>}/>
       </Routes>

    
       <ThemeContextProvider>
          <BtnToggler/>
      </ThemeContextProvider> 

    
    
        
    </div>
  );
}

export default App;

