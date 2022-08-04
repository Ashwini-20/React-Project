import React from "react";
import RegistrationForm from "./RegistrationForm";
import SearchOrganization from "./SearchOrganization";
import { BrowserRouter as Router,Route,Routes, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import './Style.css';

export class App extends React.Component{

    render(){
        return(
            <>
            <center>

            <div id="root">
                <Router>
                  <Routes>
                    <Route path="/" element={<RegistrationForm/>}/>
                    <Route path="/login" element={<LoginForm/>}/>
                    <Route path="/homepage" element={<SearchOrganization/>}/>
                  </Routes>
                </Router>
            </div>
            </center>
  
            </>
        )
    }
}

export default App;
