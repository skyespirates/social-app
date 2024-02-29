import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// routing
import { RouterProvider } from "react-router-dom";
import { router } from "./utils/routes.jsx";

// mantine-ui
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

import "./index.css";

// redux
import store from "./store.js";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider defaultColorScheme="dark">
        <RouterProvider router={router} />
      </MantineProvider>
    </Provider>
  </StrictMode>
);
