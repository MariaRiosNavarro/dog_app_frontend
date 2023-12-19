import { useEffect, useState } from "react";
import DogItem from "./DogItem";

const DogList = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const getDogs = async () => {
      const response = await fetch(import.meta.env.VITE_BACKEND + "/api/dogs");
    };
  }, []);

  return (
    <div>
      <h3>DogList</h3>
      <main>
        {DogList.map((dog) => (
          <DogItem dog={dog} key={dog._id} />
        ))}
      </main>
    </div>
  );
};

export default DogList;
