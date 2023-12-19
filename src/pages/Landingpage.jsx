import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <main>
      <section className="flex justify-center items-center py-96">
        <div>
          <h1 className="font-serif text-6xl">DogDate</h1>
          <p>Der Hundekuppler</p>
        </div>
      </section>
      <section>{/* unser neusten freunde komponente */}</section>
      <section className="flex gap-10 justify-around px-8 text-xl">
        <img src="" alt="" />
        <div>
          <p>Bring auch du deinen Hund zu uns</p>
          <Link
            to={"/add"}
            className="my-10 font-serif text-4xl font-light btn btn-primary"
          >
            Let's DogDate
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Landingpage;
