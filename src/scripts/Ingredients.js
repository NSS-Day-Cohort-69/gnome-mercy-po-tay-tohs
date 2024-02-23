/*
  Responsibility
    Generate HTML for checkboxes for each ingredient and
    store each choice in transient state.
*/
export const ingredients = async () => {
  const response = await fetch("http://localhost:9001/ingredients");
  const ingredients = await response.json();

  let ingredientHTML = `<h2>Ingredients</h2>`;
  const ingredientArray = ingredients.map((ingredient) => {
    return `
  <input type="checkbox" name="ingredient"/>${ingredient.name}
  `;
  });
  ingredientHTML += ingredientArray.join(" ");
  return ingredientHTML;
};
