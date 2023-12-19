import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <main>
      <section>
        <div>
          <h1>DogDate</h1>
          <p>Der Hundekuppler</p>
        </div>
      </section>
      <section>{/* componente */}</section>
      <section>
        <img src="" alt="" />
        <div>
          <p>Bring dein Hund</p>
          <Link to="/add">Lets DogDate</Link>
        </div>
      </section>
    </main>
  );
};

export default Landingpage;
