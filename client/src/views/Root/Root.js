import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from "./Root.module.scss";
import AddArticle from "../AddArticle/AddArticle";
import Articles from "../Articles/Articles";
import MainTemplate from "../../templates/MainTemplate/MainTemplate";

function Root() {
  return (
    <div className={styles.wrapper}>
      <Router>
        <MainTemplate>
          <Switch>
            <Route path="/" component={Articles} exact />
            <Route path="/article/add" component={AddArticle} />
          </Switch>
        </MainTemplate>
      </Router>
    </div>
  );
}

export default Root;
