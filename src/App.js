import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Personalform from "./Personalform";
import Shiftplan from "./Shiftplan";
import Reports from "./Reports";
import Einstellungen from "./Einstellungen";
import "bootstrap/dist/css/bootstrap.min.css";
import LocationContextProvider from "./contexts/LocationContext";
import PersonalContextProvider from "./contexts/PersonalContext";
import PersonalDataContextProvider from "./contexts/PersonalDataContext";
function App() {
  return (
    <Router>
      <div className="App">
        <LocationContextProvider>
          <PersonalContextProvider>
            <PersonalDataContextProvider>
            <Navbar />

            <div className="content text-start">
              <p></p>
              <Switch>
                <Route exact path="/Personalform">
                  <Personalform />
                </Route>
                <Route path="/Shiftplan">
                  <Shiftplan />
                </Route>
                <Route path="/Reports">
                  <Reports />
                </Route>

                <Route path="/Einstellungen">
                  <Einstellungen />
                </Route>
              </Switch>
              <p></p>
            </div>
            </PersonalDataContextProvider>
          </PersonalContextProvider>
        </LocationContextProvider>
      </div>
    </Router>
  );
}

export default App;
