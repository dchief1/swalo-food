import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';

function App() {
  return (
    
    <div>
      <BrowserRouter>
        <Routes>
           <Route path='/' element= {<Layout/>} />
     
        </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
