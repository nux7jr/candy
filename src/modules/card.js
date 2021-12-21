import getData from "./getData";

const card = () => {
  const bntCard = document.getElementById("cart");
  const cardModal = document.querySelector(".cart");
  const modalCloseBtn = document.querySelector(".cart-close");

  const OpenCard = () => {
    cardModal.style.display = "flex";
  };
  bntCard.addEventListener("click", OpenCard);
  const CloseCard = () => {
    cardModal.style.display = "";
  };
  modalCloseBtn.addEventListener("click", CloseCard);
};

export default card;
