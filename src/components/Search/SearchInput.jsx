import React, { useRef } from "react";
import "./SearchInput.css";
import { fetchSearchCocktail } from "../../redux/features/cocktailSlice";
import { useDispatch } from "react-redux";

const SearchInput = () => {
  const searchValue = useRef();
  const dispatch = useDispatch();

  const handleChange = () => {
    const searchText = searchValue.current.value;
    dispatch(fetchSearchCocktail({ searchText }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search Cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={handleChange}
            placeholder="Ex: Cuba Libre, Zorro, Smut, GG"
          />
        </div>
      </form>
    </section>
  );
};

export default SearchInput;
