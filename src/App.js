import { Route, Switch } from "react-router";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";

// components
import { Main } from "./components/Main";
import { AboutPage } from "./components/AboutPage";
import { MySkillsPage } from "./components/MySkillsPage";

function App() {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={lightTheme}>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/skills" component={MySkillsPage} />
                </Switch>
            </ThemeProvider>
        </>
    );
}

export default App;
