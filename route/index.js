import { Route, Switch } from 'react-router-dom';


<Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/roster' component={Roster}/>
    <Route path='/schedule' component={Schedule}/>
</Switch>