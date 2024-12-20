import s from "./SearchBox.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/filtersSlice";
import { useSelector } from "react-redux";
import { selectSearchFilter } from "../../redux/filters/filtersSelectors";

const SearchBox = () => {
  const searchFilter = useSelector(selectSearchFilter);
  const dispatch = useDispatch();

  const handleFilter = (event) => dispatch(changeFilter(event.target.value));
  return (
    <div className={s.search}>
      <p>Find contacts by name or phone number</p>
      <input
        type="text"
        name="search"
        className={s.input}
        value={searchFilter}
        onChange={handleFilter}
      />
    </div>
  );
};

export default SearchBox;
