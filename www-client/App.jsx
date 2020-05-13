import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { Main } from "./pages";

import { GlobalStyle } from "./globalStyles"

const root = document.getElementById("app");
const endpoint = root.getAttribute("data-endpoint");    

render(
    <>
        <GlobalStyle />
        <BrowserRouter>
            <div>
                <Route
                    exact
                    path="/"
                    render={() => <Main endpoint={endpoint} />}
                />
            </div>
        </BrowserRouter>
    </>,
    root
);
