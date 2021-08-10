// const ingredients_text = document.querySelector('textarea[name="user_text"]').value;
console.log("I can actually work");

// Old fetch code
// fetch(`/api/userFavoriteRoutes/ingredient`, {
//   method: 'GET',
//   body: JSON.stringify({
//     ingredients_text,
//   }),
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// if the dish is added, the 'all' template will be rerendered

document
  .querySelector("#button-addon1")
  .addEventListener("click", newFormHandler);
