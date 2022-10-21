import './App.css';
import { Route, Routes } from 'react-router-dom';
import Read from './Components/Read/Read';
import Update from './Components/Update/Update';
import Trash from './Components/Trash/Trash';
import Login from './Components/Login/Login';
import SeeMore from './Components/SeeMore/SeeMore';

function App() {
    return (
        <div className='view'>
            <Routes>
                <Route path='/' element={<Login></Login>}></Route>
                <Route path='/read' element={<Read></Read>}></Route>
                <Route path='/more/:id' element={<SeeMore></SeeMore>}></Route>
                <Route path='/trash' element={<Trash></Trash>}></Route>
                <Route path='/update/:id' element={<Update></Update>}></Route>
            </Routes>
        </div>
    );
}

export default App;
