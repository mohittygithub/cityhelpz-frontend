import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/common";
import { PATHS } from "./constants/paths";
import { Home, Login, PageNotFound } from "./pages";
import { Provider } from "react-redux";
import store from "./redux/store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path={PATHS.HOME} component={Home} />
          <Route exact path={PATHS.Login} component={Login} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
