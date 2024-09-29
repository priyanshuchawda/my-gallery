
   import React from 'react';
   import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
   import Gallery from './components/Gallery';

   function App() {
       return (
           <Router>
               <Routes>
                   <Route path="/" element={<Gallery />} />
               </Routes>
           </Router>
       );
   }

   export default App;