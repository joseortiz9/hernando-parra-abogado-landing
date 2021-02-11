import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyles";
import routes from "./routes";
import {Header, Footer} from "../components";
import SpinLoader from "../common/spinner";
import ScrollToTop from "../common/scroll-to-top";

const Router = () => {
    return (
        <Suspense fallback={<SpinLoader />}>
            <ScrollToTop />
            <GlobalStyle />
            <Header />
            <Switch>
                {routes.map((routeItem) => {
                    return (
                        <Route
                            key={routeItem.component}
                            path={routeItem.path}
                            exact={routeItem.exact}
                            component={lazy(() => import(`../pages/${routeItem.component}`))}
                        />
                    );
                })}
            </Switch>
            <Footer />
        </Suspense>
    );
};

export default Router;