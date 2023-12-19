import { FaHeart, FaRegHeart } from "react-icons/fa6";

const DogItem = (props) => {
  return (
    <article>
      <figure>
        <img src={props.img} alt={props.name} />
        <FaRegHeart />
      </figure>
      <div>
        <p>{props.name}</p>
        <p>{props.place}</p>
      </div>
    </article>
  );
};

export default DogItem;
