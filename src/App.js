import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Mersch from "./pages/Mersch";
import Shop from "./pages/Shop";
import { appTheme } from "./store";

function App(props) {
  const [theme, setTheme] = useRecoilState(appTheme);

  useEffect(() => {
    setTheme(localStorage.getItem("theme") ?? "light");
  }, []);

  return (
    <div className="antialiased dark:bg-gray-800">
      <Navbar />
      <div className=" container mx-auto pt-16 lg:pt-4 min-h-screen dark:bg-gray-800">
        <Switch>
          <Route path="/merch">
            <Mersch />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
