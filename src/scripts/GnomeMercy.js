/*
  Responsibility
    Generate the entire HTML string template for 
    Gnome Mercy by using all other HTML generation
    components.
*/
import { RequestForm } from "./RequestForm.js";
import { craftRequest } from "./CraftRequests.js";
import { getCrafters } from "./Crafters.js";
import { ingredients } from "./Ingredients.js";

export const GnomeMercy = async () => {
  const requestHTML = RequestForm();
  const requestOptionsHTML = craftRequest();
  const crafterHTML = await getCrafters();
  const ingredientHTML = await ingredients();
  return `
    <h1>Gnome Mercy</h1>
    <article class="choices">
      <section class="form">
      ${requestHTML}
      </section>
    </article>
    <article>
    <div class="request">
    ${requestOptionsHTML}
    </div>
    <div>
    ${crafterHTML}
    </div>
    </article>
    <div>
    ${ingredientHTML}
    </div>
    `;
};
