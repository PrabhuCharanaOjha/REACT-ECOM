import { useState } from "react";
import { UserAuthenticationDetails } from "./context/userContext";
import { HomePage } from "./user/pages/home";
import { LoginPage } from "./user/pages/login";
import { SuperAdminPage } from "./superAdmin/pages/superAdmin";
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom'
import { PageNotFound } from "./pageNotFound";

function App() {
    const [user, setUser] = useState(() => {
        const userData = localStorage.getItem('user');
        return userData ? JSON.parse(userData) : null;
    });
    const [token, setToken] = useState(() => {
        const tokenData = localStorage.getItem('token');
        return tokenData ? tokenData : null;
    });
    
    return (
        <UserAuthenticationDetails.Provider value={{ user, setUser, token, setToken}}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/super-admin" component={SuperAdminPage} />
                    <Route component={PageNotFound}/>
                </Switch>
            </BrowserRouter>
        </UserAuthenticationDetails.Provider>
    )
}

export default App;