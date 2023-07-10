import { Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/company" exact component={Company} />
      <Route path="/pagenotfound" exact component={PageNotFound} />
    </Switch>
  );
}
