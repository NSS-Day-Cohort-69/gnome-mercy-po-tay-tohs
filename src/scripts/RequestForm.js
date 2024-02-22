/*
  Responsibility
    Generate HTML for the request form. When Submit button
    is clicked, POST a new request to the API.
*/

export const RequestForm = () => {
  let html = `
    <div class="field flex column">
     <label class="label" for="name">Name</label>
     <input type="text" id="name" class="input">
     <label class="label" for="purpose">Purpose</label>
     <input type="text" id="purpose" class="input">
     <label class="label" for="type">Type</label>
     <select id="types" name="type">
     <option value="" selected disabled hidden>--Select A Type--</option>
     <option value="potion">Potion</option>
     <option value="elixir">Elixir</option>
     </select> 

     <button class="button" id="submitRequest">Submit Request</button>
    </div>
    `;
  return html;
};
document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "submitRequest") {
    window.alert("Submission Received");
  }
});
