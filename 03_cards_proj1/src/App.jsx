import React from "react";
import Card from "./components/card";
import Navbar from "./components/navbar";
const App = () => {
  return (
    <div className="flex flex-wrap">
      <Navbar />
      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLbZlt3X2TpFksku9MgE-cs0oxTzqAH36CQ&s"
        jobname="Amazon"
        days="5 days ago"
        jobTitle="Senior UI/UX designer"
        location="Texas, USA"
      />
      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZI78WvDPQ241thhVYKtVphlc_J01LbnFVqA&s"
        jobname="Google"
        days="2 days ago"
        jobTitle="Graphic designer"
        location="Florida, USA"
      />
      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zdLpQ1XogOHnpR9MuW1MD9oXYxuPS5FCgQ&s"
        jobname="Dribble"
        days="2 days ago"
        jobTitle="Senior motion designer"
        location="London, UK"
      />
      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGLk0CbrAGDbYcrxy5g2mDeoc4_FM6tNc5w&s"
        jobname="Figma"
        days="5 days ago"
        jobTitle="UX designer"
        location="Pakistan, Karachi"
      />
      <Card
        image="https://i.pinimg.com/736x/70/80/b2/7080b24c3980c8f4d29412746b5c7ce9.jpg"
        jobname="Airbnb"
        days="6 days ago"
        jobTitle="Junior UX designer"
        location="Florida, USA"
      />
      <Card
        image="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-history-apple-inc-wikipedia-22.png"
        jobname="Apple"
        days="8 days ago"
        jobTitle="Senior graphic designer"
        location="Florida, USA"
      />
      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3AjLz2Ze01BXCesLCvOhwrlz9qHboz6XEwQ&s"
        jobname="Microsoft"
        days="9 days ago"
        jobTitle="Data Analyst"
        location="Japan, Tokyo"
      />
      <Card
        image="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-history-apple-inc-wikipedia-22.png"
        jobname="Apple"
        days="8 days ago"
        jobTitle="Senior graphic designer"
        location="NYC, USA"
      />
    </div>
  );
};

export default App;
