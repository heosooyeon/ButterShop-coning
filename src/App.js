import './App.css';
import './style.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Main from './component/Main.js';
import All from './component/All.js';

 function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <Link to="/"><img class="logo" src={"https://namuontr6068.cdn-nhncommerce.com/data/skin/front/modz_p/img/banner/d5a55bba629a35858b8f3103623e7e26_95694.jpg"} alt="logo"/></Link>
        <Link to="All">All</Link>
      </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="All" element={<All />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
