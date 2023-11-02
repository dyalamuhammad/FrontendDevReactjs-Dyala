import './App.css';
import FilterNav from './FilterNav';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import DetailView from './DetailView';
import { useState } from 'react';



function App() {
  const [restaurants, setRestaurants] = useState([])
  
  return (
    <Router>
      <div className="App">
        <FilterNav />
        <Link to='/' className='judul'><h3>All Restaurant</h3></Link>
        {/* <h1 className='judul' onclick="window.location = '/'">Restaurant List</h1> */}
        <Routes>
          <Route path="/detail/:id" element={<DetailView restaurants={restaurants} />}/>
          <Route path="/" element={<RestaurantCard restaurants={restaurants} setRestaurants={setRestaurants} />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
