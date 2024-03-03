import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// mantine-ui
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import "./index.css";

// redux
import { store, persistor } from "./store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// routing
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";

// react query
import { QueryClientProvider } from "@tanstack/react-query";
import client from "./utils/queryClient.js";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MantineProvider defaultColorScheme="dark">
            <RouterProvider router={router} />
          </MantineProvider>
        </PersistGate>
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
);
