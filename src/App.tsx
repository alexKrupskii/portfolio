import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";

function App() {
  return (
      <div className="app">

              <Navbar />
              <Content />

      </div>
  );
}

export default App;
