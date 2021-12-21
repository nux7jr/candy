const postData = () => {
  return fetch("http://localhost:3000/goods/24", {
    method: "POST",
    body: JSON.stringify({
      title: "CSGO",
      price: 1099,
      sale: true,
      img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
      category: "Игры и софт",
    }),
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
  }).then((res) => res.json());
};
export default postData;
