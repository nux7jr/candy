const search = () => {
  const searchBar = document.querySelector(".search-wrapper_input");

  searchBar.addEventListener("input", (event) => {
    const value = event.target.value
    console.log(value);
    })

} 
export default search