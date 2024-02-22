/*
  Responsibility
    Generate HTML for the dropdown of craftRequests.

    Criteria:
      * Only incomplete requests should be converted to options
*/

export const craftRequest = () => {
  return `<h2>Craft Requests</h2>
  <select id="requests" name="requests">
  <option value="" selected disabled hidden>--Choose A Request--</option>
  <option value="beauty">Beautification Potion</option>
  <option value="ugly">Ugly Potion</option>
  </select>
  `;
};
