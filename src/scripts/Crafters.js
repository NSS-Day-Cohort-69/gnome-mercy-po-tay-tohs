/*
  Responsibility
    Generate HTML for the dropdown of crafters. When one is
    selected, update transient state.
*/

export const getCrafters = () => {
  return `
    <h3>Crafters</h3>
    <select id="crafter">
    <option value="" selected disabled hidden>--Select A Type--</option>
    <option value="0">Whisemaral</option>
    <option value="1">Flammedra</option>
    <option value="2">Mireille</option>
    </select>
  `;
};
