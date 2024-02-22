/*
  Responsibility
    Generate HTML for checkboxes for each ingredient and
    store each choice in transient state.
*/
export const ingredients = () => {
  return `<h2>Ingredients</h2>
  <input type="checkbox" name="ingredient"/>Hippocamp's Innards;
  <input type="checkbox" name="ingredient"/>Reaper Fat
  <input type="checkbox" name="ingredient"/>Bugbear Stand
  <input type="checkbox" name="ingredient"/>Qilin Bone
  <input type="checkbox" name="ingredient"/>Angel Husk
  `;
};
