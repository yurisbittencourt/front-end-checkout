import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ViewportProvider } from "./Utils/ViewportContext";
import { Store, Checkout, Receipt } from "./Pages";
import GlobalStyle, { theme } from "./Styles/globalStyles";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ViewportProvider>
        <Router>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/receipt" component={Receipt} />
            <Route path="/" component={Store} />
          </Switch>
        </Router>
      </ViewportProvider>
    </ThemeProvider>
  );
};

export default App;
