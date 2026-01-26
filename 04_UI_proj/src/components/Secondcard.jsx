import React from "react";
import Poster from "./Poster";

const Secondcard = () => {
 const data = [
  {
    id: 1,
    color: "orange",
    image:
      "https://plus.unsplash.com/premium_photo-1675553742348-dbb89004b2a2?q=80&w=682&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis porro iusto delectus doloremque dolor? Animi blanditiis labore ullam illo minus?",
    button: "hire me",
  },
  {
    id: 2,
    color: "pink",
    image:
      "https://images.unsplash.com/photo-1601845342792-636d6231f8f7?q=80&w=648&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptate. Vel magnam quaerat ex incidunt doloremque possimus dolores enim iste!",
    button: "get details",
  },
  {
    id: 3,
    color: "blue",
    image:
      "https://images.unsplash.com/photo-1624359209425-05eb9b809795?q=80&w=536&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cum, sequi cupiditate quisquam incidunt nesciunt voluptatem magnam quasi ipsum pariatur.",
    button: "Contact us",
  },
  {
    id: 4,
    color: "green",
    image:
      "https://images.unsplash.com/photo-1579547944082-fac44e416258?q=80&w=639&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptates ipsam dolorem blanditiis itaque autem accusamus nisi pariatur officiis ullam?",
    button: "feedback",
  },
  {
    id: 5,
    color: "yellow",
    image:
      "https://images.unsplash.com/photo-1615714464608-334b4805748c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel temporibus id dolor ipsa eum debitis harum itaque molestias excepturi quae.",
    button: "Let us know",
  },
];

  return (
    <div
      id="right"
      className="bg-gray-300 w-2/3 flex overflow-x-auto flex-nowrap rounded-[20px]"
    >
      {data.map((elem, idx) => (
        <Poster
          key={idx}
           image = {elem.image}
          id={elem.id}
          detail={elem.detail}
          button = {elem.button}
          color = {elem.color}
        />
      ))}
    </div>
  );
};

export default Secondcard;
