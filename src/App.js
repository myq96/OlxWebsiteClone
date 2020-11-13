import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Home from './componant/Home'
import Header from './componant/Header'
import Post from './componant/Post'
import Main from './componant/Main'
import CurrUser from './componant/CurrUser'
import Oops from './componant/Notfound'
import FooterBanner from './componant/FooterBanner'
import Footer from './componant/Footer'
import ComCat from './componant/ComCat'
import PostAds from './componant/PostAds';
import AdsPage from './componant/AdsPage';
const App = () => {
  return <>
    <Header/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/cat' component={ComCat}/>
      <Route exact path='/post' component={Post}/>
      <Route exact path="/main" component={Main}/>
      <Route exact path="/logout" component={CurrUser}/>
      <Route exact path="/post/attributes" component={PostAds}/>
      <Route path="/:adId" component={AdsPage} />
      <Route component={Oops}/>
      
    </Switch>

  </>;
};

export default App;
