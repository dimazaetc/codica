function getFetch(url, localItem, setError, dispatch, getWeatherCity) {
  fetch(url)
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((data) => data.json())
    .then((data) => {
      if (!localItem.find((item) => item === data.name)) {
        localStorage.setItem("fetch", [...localItem, data.name]);
      }
      setError(false);
      dispatch(getWeatherCity(data));
    })
    .catch(() => setError(true));
}
export default getFetch;
