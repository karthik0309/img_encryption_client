import { Suspense,lazy,useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import { isAutheticated } from './helper';
import PrivateRoute from './helper/PrivateRoute';

const Home = lazy(()=>import('./pages/home'))
const Signup = lazy(()=>import('./pages/signup'))
const Login = lazy(()=>import('./pages/login'))
const UploadImg = lazy(()=>import('./pages/uploadImg'))

const AppRouter=()=>{

    const [loggedIn,setLoggedIn]=useState(isAutheticated())
    return(
        <Suspense fallback={<Loader/>}>
        <Navbar log={loggedIn} setLog={setLoggedIn}/>
            <Routes>
                <Route element={
                <PrivateRoute loggedIn={loggedIn}>
                    <Home/>
                </PrivateRoute>} path="/"/>
                <Route element={<Signup setLog={setLoggedIn}/>} path="/signup"/>
                <Route element={<Login setLog={setLoggedIn}/>} path="/login"/>
                <Route element=
                {<PrivateRoute loggedIn={loggedIn}>
                    <UploadImg/>
                </PrivateRoute>} path="/upload"/>
            </Routes>
        </Suspense>
    )
}

export default AppRouter


