import Header from "./components/Header";
import FirstContent from "./components/FirstContent";
import Reviews from "./components/Reviews";
import Sort from "./components/Sort";
import Content from "./components/Content";
import Edit from "./components/Modal/Edit";
import Delete from "./components/Modal/Delete";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useRoutes } from "./routes";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/auth.hook";

const App = () => {
  const { login, logout, token, userId, isReady } = useAuth()
  const isLogin = !!token
  const routes = useRoutes(isLogin)

  return (
    <AuthContext.Provider value={{ login, logout, token, userId, isReady, isLogin }}>
      <div className="App">
        <Router>
          <Switch>
            <Route path={["/login", "/registration"]}>
              <Header></Header>
              <FirstContent></FirstContent>
            </Route>
            <Route path="/techniques">
              <Header></Header>
              <Reviews></Reviews>
              <Sort></Sort>
              <Content></Content>
              <Route path="/techniques/edit">
                <Edit></Edit>
              </Route>
              <Route path="/techniques/delete">
                <Delete></Delete>
              </Route>
            </Route>
            { routes }
            <Redirect to="/login" />
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;