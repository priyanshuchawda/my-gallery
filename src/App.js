   // src/App.js
   import React from 'react';
   import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
   import Gallery from './components/Gallery';

   function App() {
       return (
           <Router>
               <Switch>
                   <Route path="/" component={Gallery} />
               </Switch>
           </Router>
       );
   }

   export default App;