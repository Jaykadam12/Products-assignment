
import AddItems from '../pages/addItems';
import ItemDetails from '../pages/itemDetails';
import ViewItems from '../pages/ViewItems';
import './App.css'
import NavBar from './components/navBar'
import { Routes, Route } from "react-router-dom";


function App() {
 return (
   <>
     <NavBar />
     <Routes>
       <Route path="/" element={<ViewItems />} />
       <Route path="/addItems" element={<AddItems />} />
       <Route path='/item/:id' element={<ItemDetails />} />
     </Routes>
   </>
 );

}

export default App
