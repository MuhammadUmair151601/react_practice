import React from "react";
import Card from "./components/card";
import Navbar from "./components/navbar";
const App = () => {
  const jobs = [
  {
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLbZlt3X2TpFksku9MgE-cs0oxTzqAH36CQ&s",
    jobname: "Apple",
    days: "8 days ago",
    jobTitle: "Senior Graphic Designer",
    location: "NYC, USA"
  },
  {
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZI78WvDPQ241thhVYKtVphlc_J01LbnFVqA&s",
    jobname: "Google",
    days: "2 days ago",
    jobTitle: "UI/UX Designer",
    location: "California, USA"
  },
  {
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zdLpQ1XogOHnpR9MuW1MD9oXYxuPS5FCgQ&s",
    jobname: "Microsoft",
    days: "5 days ago",
    jobTitle: "Frontend Developer",
    location: "Seattle, USA"
  },
  {
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGLk0CbrAGDbYcrxy5g2mDeoc4_FM6tNc5w&s",
    jobname: "Amazon",
    days: "1 day ago",
    jobTitle: "Product Designer",
    location: "Texas, USA"
  },
  {
    image : "https://i.pinimg.com/736x/70/80/b2/7080b24c3980c8f4d29412746b5c7ce9.jpg",
    jobname: "Meta",
    days: "3 days ago",
    jobTitle: "Visual Designer",
    location: "Menlo Park, USA"
  },
  {
    image : "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-history-apple-inc-wikipedia-22.png",
    jobname: "Netflix",
    days: "6 days ago",
    jobTitle: "Creative Designer",
    location: "Los Angeles, USA"
  },
  {
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3AjLz2Ze01BXCesLCvOhwrlz9qHboz6XEwQ&s",
    jobname: "Tesla",
    days: "4 days ago",
    jobTitle: "Brand Designer",
    location: "Austin, USA"
  },
  {
    image : "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-history-apple-inc-wikipedia-22.png",
    jobname: "Adobe",
    days: "7 days ago",
    jobTitle: "Motion Graphic Designer",
    location: "San Jose, USA"
  }
];


  return (
    <div className="flex flex-wrap">
      <Navbar />
       {jobs.map((elem, index)=>{
        return <Card 
        key = {index}
        image = {elem.image}
        jobname = {elem.jobname}
        days = {elem.days}
        jobTitle = {elem.jobTitle}
        location = {elem.location}/>
       })}
    </div>
  );
};

export default App;
