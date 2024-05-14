import "@mantine/carousel/styles.css";
import {
  DEFAULT_THEME,
  MantineProvider,
  Menu,
  createTheme,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const App = lazy(() => import("./App.jsx"));

const theme = createTheme({
  fontFamily: "Poppins, sans-serif",
  headings: {
    fontFamily: `Poppins, ${DEFAULT_THEME.fontFamily}`,
  },
  components: {
    Menu: Menu.extend({
      classNames: {
        item: "item",
        label: "label",
      },
    }),
  },
});

const helmetContext = {};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <HelmetProvider context={helmetContext}>
          <Notifications position="top-center" limit={3} autoClose={3000} />
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
