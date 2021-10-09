
import './App.css';
import { createBrowserHistory } from 'history'
import { Router, Switch } from 'react-router-dom';
import { HomeTemplate } from './Templates/HomeTemplate/HomeTemplate';
import Home from './Pages/Home/Home';
import News from './Pages/News/News';
import Contact from './Pages/Contact/Contact'
import Register from './Pages/Register/Register'
import Detail from './Pages/Detail/Detail';
import Checkout from './Pages/Checkout/Checkout';
import CheckoutMobile from './Pages/Checkout/CheckoutMobile';
import { Suspense, lazy } from 'react';
import Login from './Pages/Login/Login';
import { UserTemplate } from './Templates/UserTemplate/UserTemplate';
import Loading from './Components/Loading/Loading';
import AdminTemplate from './Templates/AdminTemplate/AdminTemplate';
import Users from './Pages/Admin/Users/Users';
import Movie from './Pages/Admin/Movie/Movie';
import ShowTime from './Pages/Admin/ShowTime/ShowTime';
import AddMovie from './Pages/Admin/Movie/AddMovie/AddMovie';
import Edit from './Pages/Admin/Edit/Edit';
import AddUser from './Pages/Admin/Users/AddUser/AddUser';

import HomeMobile from './Pages/Home/HomeMobile';
import Profile from './Pages/Profile/Profile';
import EditProfile from './Pages/Profile/EditProfile';

const CheckoutTemplateLazy = lazy(() => import('./Templates/CheckoutTemplate/CheckoutTemplate'))




export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      <Loading />
      <Switch>

        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <UserTemplate path="/register" exact Component={Register} />
        <UserTemplate path="/login" exact Component={Login} />
        <HomeTemplate path="/profile" exact Component={Profile} />
        <HomeTemplate path="/profile/edit" exact Component={EditProfile}/>
        <HomeTemplate path="/detail/:id" Component={Detail} />
        <HomeTemplate path="/home" exact Component={Home} ComponentMobile={HomeMobile} />
        <HomeTemplate path="/" exact Component={Home} ComponentMobile={HomeMobile} />



        <AdminTemplate path="/admin" exact Component={Users} />
        <AdminTemplate path="/admin/movie" exact Component={Movie} />
        <AdminTemplate path="/admin/movie/addmovie" exact Component={AddMovie} />
        <AdminTemplate path="/admin/movie/edit/:id" exact Component={Edit} />
        <AdminTemplate path="/admin/movie/showtimes/:id/:tenPhim" exact Component={ShowTime} />
        <AdminTemplate path="/admin/users" exact Component={Users} />
        <AdminTemplate path="/admin/users/adduser" exact Component={AddUser} />
        



        <Suspense fallback={<h1>LOADING....</h1>}>

          <CheckoutTemplateLazy path="/checkout/:id" Component={Checkout} ComponentMobile={CheckoutMobile} />
        </Suspense>


      </Switch>
    </Router>
  );
}

export default App;
