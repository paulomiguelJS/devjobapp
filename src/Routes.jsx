import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Company from "./pages/Company";
import NotFound from "./pages/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/company" component={Company} />
      <Route path="/notfound" component={NotFound} />
    </Switch>
  );
}
