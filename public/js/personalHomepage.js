const addBtn = document.querySelector(".addBtn");
const delBtn = document.querySelector(".delBtn");
const searched = document.getElementById("ingredientsSearched");
const input = document.querySelector("input");
input.addEventListener("change", updateValue);
let searchIngredients = [];
let ingredient = "";
function updateValue(e) {
  ingredient = e.target.value.toLowerCase();
}

function addIngredients(ingredient) {
  // console.log(ingredient);
  searchIngredients.push(ingredient);
  // console.log(searchIngredients);
}

// const myArray = ["kale", "cheese", "onions"];
function embedElements() {
  searched.innerHTML = "";
  let submitBtn = document.createElement("button");
  submitBtn.classList.add("btn", "btn-info", "submitBtn");
  submitBtn.innerText = "Search by ingredients";
  submitBtn.addEventListener("click", searcByIngredientsHandler);

  searchIngredients.forEach((item) => {
    let li = document.createElement("li");
    li.setAttribute("class", "listItem");
    let delSym = document.createElement("i");
    delSym.classList.add(
      "fas",
      "fa-trash-alt",
      "float-right",
      "text-danger",
      "delete-note",
      "ml-4"
    );
    delSym.addEventListener("click", handleIngredientDelete);

    li.innerText = item;
    li.append(delSym);
    searched.appendChild(li);
    searched.appendChild(submitBtn);
  });
}

// Delete the clicked note
const handleIngredientDelete = (e) => {
  // Prevents the click listener for the list from being called when the button inside of it is clicked
  e.stopPropagation();

  const ingredientDel = e.target;
  const ingredientName = ingredientDel.parentElement.innerText;
  console.log(ingredientName);
  for (let i = 0; i < searchIngredients.length; i++) {
    if (searchIngredients[i] === ingredientName) {
      searchIngredients.splice(i, 1);
      console.log(searchIngredients);
    }
  }
  embedElements();
};

addBtn.addEventListener("click", async function (event) {
  event.preventDefault();
  $(input).val("");
  await addIngredients(ingredient);
  embedElements();
});
// embedElements();

const searcByIngredientsHandler = async (e) => {
  e.stopPropagation();
  console.log("hello");

  const searchStr = searchIngredients.join();
  console.log(searchStr);

  if (searchStr) {
    const response = await fetch("/api/userFavoriteRoutes/personalHomepage", {
      method: "POST",
      body: JSON.stringify({ searchStr }),
      headers: { "Content-Type": "application/json" },
    });

    const recipeData = await response.json();

    // console.log(recipeData);
    document.querySelector(".card-title").innerHTML = recipeData.title;
    document.querySelector(".figure-img").src = `${recipeData.image}`;
    document.querySelector(".recipeLink").href = `${recipeData.sourceUrl}`;
  }
  searched.innerHTML = "";
  searchIngredients = [];
};
