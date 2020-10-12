import React from "react";
import "./App.css";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import Widgets from "./components/widget/Widgets";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
