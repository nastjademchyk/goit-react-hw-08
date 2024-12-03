import s from "./SearchBox.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleFilter = (event) => dispatch(changeFilter(event.target.value));
  return (
    <div className={s.search}>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="search"
        className={s.input}
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
};

export default SearchBox;
