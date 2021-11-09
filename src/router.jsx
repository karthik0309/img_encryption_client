import { Suspense,lazy } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

const Home = lazy(()=>import('./pages/home'))
const Signup = lazy(()=>import('./pages/signup'))
const Login = lazy(()=>import('./pages/login'))
const UploadImg = lazy(()=>import('./pages/uploadImg'))

const AppRouter=()=>{
    return(
        <Suspense fallback={<h1>Loading...</h1>}>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route element={<Home/>} path="/"/>
                <Route element={<Signup/>} path="/signup"/>
                <Route element={<Login/>} path="/login"/>
                <Route element={<UploadImg/>} path="/upload"/>
            </Routes>
        </BrowserRouter>
        </Suspense>
    )
}

export default AppRouter


