/*
  Responsibility
    Generate the HTML for all completed potions and elixirs
*/
const completeOrders = async () => {
  const response = await fetch("");
  const completions = await response.json();
  let html = `<ul><h2>Completed Potions and Elixers</h2></ul>`;
  for (const complete of completions) {
    html += `<li>${complete.craftRequestId}</li>`;
  }
};
