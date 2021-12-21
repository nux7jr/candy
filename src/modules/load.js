import getData from "./getData";
import postData from "./postData";
import render from "./render";

const load = () => {
  const bntCard = document.getElementById("cart");

  getData().then((data) => {
    render(data);
  });

  bntCard.addEventListener("click", () => {
    console.log("none");
  });
};
export default load;
