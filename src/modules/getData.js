const getData = () => {
  return fetch(
    // https://candy-adb06-default-rtdb.firebaseio.com/goods.json
    "../../../../db.json"
  ).then((response) => {
    return response.json();
  });
};
export default getData;
