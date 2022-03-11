import { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import instance from "../axios";
import "../styles/TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const { data } = await instance.get("/tinder/cards");
      setPeople(data);
    };

    fetchCards();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("remouving", nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name, "Left the screen");
  };
  return (
    <div className='tinder__card'>
      <div className='tinder_card__container'>
        {people.map((person, index) => (
          <TinderCard
            className='swipe'
            key={index}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}>
            <div
              className='card'
              style={{ backgroundImage: `url(${person.imgUrl}) ` }}>
              <h3 className=''>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
