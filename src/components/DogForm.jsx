const DogForm = () => {
  const addDog = async (e) => {
    console.log("hello");
    e.preventDefault();
    const form = new FormData(e.target);
    await fetch(import.meta.env.VITE_BACKEND + "/api/dogs", {
      method: "POST",
      body: form,
    });
  };

  return (
    <div>
      <form onSubmit={addDog}>
        <label className="w-full max-w-xs form-control">
          <div className="label">
            <span className="label-text">Zeig uns deinen Hund</span>
          </div>
          <input
            type="file"
            className="w-full max-w-xs file-input file-input-bordered"
          />
        </label>
        <label className="w-full max-w-xs form-control">
          <div className="label">
            <span className="label-text">Wie heißt dein Hund?</span>
          </div>
          <input
            type="text"
            placeholder="Bello"
            className="w-full max-w-xs input input-bordered"
          />
        </label>
        <label className="w-full max-w-xs form-control">
          <div className="label">
            <span className="label-text">Welche Rasse ist dein Hund</span>
          </div>
          <input
            type="text"
            placeholder="Dackel"
            className="w-full max-w-xs input input-bordered"
          />
        </label>
        <label className="w-full max-w-xs form-control">
          <div className="label">
            <span className="label-text">Wie alt ist dein Hund?</span>
          </div>
          <input
            type="number"
            min={0}
            max={50}
            className="w-full max-w-xs input input-bordered"
          />
        </label>
        <label className="w-full max-w-xs form-control">
          <div className="label">
            <span className="label-text">Welche Hobbies hat dein Hund?</span>
          </div>
          <input
            type="text"
            placeholder="Nase lecken"
            className="w-full max-w-xs input input-bordered"
          />
        </label>
        <label className="w-full max-w-xs form-control">
          <div className="label">
            <span className="label-text">Wo wohnt dein Hund?</span>
          </div>
          <input
            type="text"
            placeholder="Berlin"
            className="w-full max-w-xs input input-bordered"
          />
        </label>
        <label className="w-full max-w-xs form-control">
          <div className="label">
            <span className="label-text">Wähle einen Beziehungsstatus</span>
          </div>
          <select className="select select-bordered">
            <option disabled selected>
              Wähle
            </option>
            <option>single</option>
            <option>verliebt</option>
            <option>vergeben</option>
          </select>
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Was macht deinene Hund besonders</span>
          </div>
          <textarea
            className="h-24 textarea textarea-bordered"
            placeholder="Er bellt alle Weihnachtslieder"
          ></textarea>
        </label>
        <input
          className="my-5 w-full max-w-xs font-serif text-2xl font-light btn btn-secondary"
          type="submit"
          value="Bereit für DogDate"
        />
      </form>
    </div>
  );
};

export default DogForm;
