import Header from "./components/Header";
import FirstContent from "./components/FirstContent";
import Reviews from "./components/Reviews";
import Sort from "./components/Sort";
import Content from "./components/Content";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useRoutes } from "./routes";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/auth.hook";
import { useState } from "react";

const App = () => {
  const { login, logout, token, userId, isReady } = useAuth()
  const isLogin = !!token
  const routes = useRoutes(isLogin)
  const [todos, setTodos] = useState([])
  const [deleteFlag, setDeleteFlag] = useState(false)
  const [editFlag, setEditFlag] = useState(false)
  const [dateFilter, setDateFilter] = useState(false);
  const [contentFilter, setContentFilter] = useState(false);

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
              <Sort
                todos={todos}
                setTodos={setTodos}
                dateFilter={dateFilter}
                setDateFilter={setDateFilter}
                contentFilter={contentFilter}
                setContentFilter={setContentFilter}
              ></Sort>
              <Reviews
                todos={todos}
                setTodos={setTodos}
                deleteFlag={deleteFlag}
                setDeleteFlag={setDeleteFlag}
                editFlag={editFlag}
                setEditFlag={setEditFlag}
              ></Reviews>
              <Content
                todos={todos}
                setTodos={setTodos}
                deleteFlag={deleteFlag}
                setDeleteFlag={setDeleteFlag}
                editFlag={editFlag}
                setEditFlag={setEditFlag}
              ></Content>
            </Route>
            {routes}
            <Redirect to="/login" />
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;