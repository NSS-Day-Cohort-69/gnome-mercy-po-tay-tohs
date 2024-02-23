/*
  Responsibility
    Generate HTML for the dropdown of crafters. When one is
    selected, update transient state.
*/

export const getCrafters = async () => {
  const response = await fetch("http://localhost:9001/crafters");
  const crafters = await response.json();

  let craftHTML = `<h3>Crafters</h3>`;
  craftHTML += `<select id="crafter">
  <option value="" selected disabled hidden>--Select A Type--</option>`;
  const craftStringArray = crafters.map((crafter) => {
    return ` 
    <option value="${crafter.id}">${crafter.name}</option>
    `;
  });

  craftHTML += craftStringArray.join(" ");
  craftHTML += `</select>`;
  return craftHTML;
};
