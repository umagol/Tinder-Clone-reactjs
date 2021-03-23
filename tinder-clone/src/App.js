import React from "react";
import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="App">
      {/* { Heder Code } */}
      <Header />
      {/* { Tinder Code } */}
      <TinderCards />
      {/* { Swipe Button } */}
      <SwipeButtons />
    </div>
  );
}

export default App;
