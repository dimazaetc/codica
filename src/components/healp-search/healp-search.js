import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions/actions";
import "./healp-search.css";
function HealpSearch({ selectItem, data }) {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => (res.ok ? res : Promise.reject(res)))
      .then((data) => data.json())
      .then((data) => {
        dispatch(getCountries(data.Countries.sort(() => Math.random() - 0.5)));
      })
      .catch(() => false);
  }, [dispatch]);

  const autocomplete = data.map((item) => {
    return (
      <li
        key={item.Country}
        onClick={() => selectItem(item.Country)}
        className="autocomplete_item"
      >
        {item.Country}
      </li>
    );
  });
  return <ul className="autocomplete">{autocomplete} </ul>;
}
export default HealpSearch;
