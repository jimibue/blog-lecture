import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Container } from "semantic-ui-react";
import Blog from "./components/Blog";
// import Home from './components/Home';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const NoMatch = () => <h2>Error: 404 - No Page Found</h2>;

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
);

export default App;
