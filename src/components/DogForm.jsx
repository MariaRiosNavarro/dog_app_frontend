const DogForm = () => {
  return (
    <div>
      <h2>DogForm</h2>
      <form onSubmit={saveDog}>
        <input type="text" />
      </form>
    </div>
  );
};

export default DogForm;
