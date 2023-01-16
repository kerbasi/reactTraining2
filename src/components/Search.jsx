import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // if (text) {
    setSearchTerm(text);
    // setText("");
    // }
  }

  const handleRandomMeal = () => {
    setSearchTerm("");
    fetchRandomMeal();
  };

  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

  return (
    <header className='search-container'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input'
          placeholder='type favorite meal'
          onChange={handleChange}
          value={text}
        />
        <button className='btn' type='submit'>
          search
        </button>
        <button
          className='btn btn-hipster'
          type='button'
          onClick={handleRandomMeal}
        >
          surprise me !
        </button>
      </form>
    </header>
  );
};

export default Search;
