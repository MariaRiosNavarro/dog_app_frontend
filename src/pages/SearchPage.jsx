import { useEffect, useState } from "react";
import DogItem from "../components/DogItem";

export default function SearchPage() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    const getDogs = async () => {
      const response = await fetch(import.meta.env.VITE_BACKEND + "/api/dogs");
      const data = await response.json();
      setDogs(data);
    };
    getDogs();
  }, []);
  return (
    <main>
      <p>Suche</p>
      {dogs.map((dog) => (
        <DogItem dog={dog} key={dog._id} />
      ))}
    </main>
  );
}
