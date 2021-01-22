import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '../pages/Home';
import RouteDom from './Routes';
import HealthyRecipes from '../pages/HealthyRecipes';
import Info from '../pages/Info';
import Join from '../pages/Join';
import Blog from '../pages/Blog';


const Routes : React.FC = () =>(
    <Switch>
      <RouteDom path = "/" exact component={Home}/>
      <RouteDom path = "/healthy" exact component={HealthyRecipes}/>
      <RouteDom path = "/info" exact component={Info}/>
      <RouteDom path = "/join" exact component={Join}/>
      <RouteDom path = "/blog" exact component={Blog}/>
    </Switch>
);


export default Routes;
