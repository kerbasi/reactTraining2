import { useGlobalContext } from "../context";
import { BsHandThumbsUp } from "react-icons/bs";

const Meals = () => {
  const { meals, loading, selectMeal, addToFavorites, favorites } =
    useGlobalContext();
  if (loading) {
    return (
      <section className='section'>
        <h4>Loading...</h4>
      </section>
    );
  }

  if (meals.length === 0) {
    return (
      <section className='section'>
        <h4>No meals matched your search term. Please try again.</h4>
      </section>
    );
  }

  return (
    <section className='section-center'>
      {meals.map((meal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = meal;
        return (
          <article className='single-meal' key={idMeal}>
            <img
              src={image}
              className='img'
              onClick={() => selectMeal(idMeal, false)}
            />
            <footer>
              <h5>{title}</h5>
              <button
                className='like-btn'
                onClick={() => addToFavorites(idMeal)}
              >
                <BsHandThumbsUp />
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default Meals;
