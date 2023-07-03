import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import GifExpertApp from "./GifExpertApp.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <GifExpertApp />
    </React.StrictMode>
);
