import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

// My components
import TopNavbar from "./components/topNavbar/topNavbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import NotFound from "./pages/notFound/notFound";

function App() {
  return (
    <Router>
      <TopNavbar />
      <Container fluid>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <NotFound />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
