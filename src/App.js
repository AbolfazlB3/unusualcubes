import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ItemPage from "./pages/item-page/ItemPage";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" render={(props) => <Homepage {...props} />} exact />
        <Route
          path="/item/:id"
          render={(props) => <ItemPage {...props} />}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
