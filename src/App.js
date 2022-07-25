import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
// import Bookings from './Components/Bookings/Bookings';
// import Movie from './Components/Movie/Movie';
import NotFound from './Components/NotFound';
import Blogs from './Components/Blogs';
import BlogsCreate from './Components/Create';
import View from './Components/View';
import Edit from './Components/Edit';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/blogs/create' element={<BlogsCreate/>} />

        <Route path='/blogs/:id/view' element={<View/>} />
        <Route path='/blogs/:id/edit' element={<Edit/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;