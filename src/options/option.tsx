import React from "react";
import ReactDOM from "react-dom/client";
import App from "./OpApp.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Toaster position="top-center" />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
