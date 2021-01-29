import { variable } from "@lume/element";
import { html } from "@lume/element/dist/html.js";

// Make a reactive variable with an initial value of 0.
const count = variable(0);

// Increment the value of the variable every second.
setInterval(() => count(count() + 1), 1000);

// Create a <div> element with a child <h1> element. The data-count attribute
// and the text content of the <h1> element will automatically update whenever
// the count variable changes. You will see the text content update live in your
// browser.
const el = html`
  <div>
    <h1 data-count="${count()}">The count is: ${count()}</h1>
  </div>
`;

// The result stored in the `el` variable is a regular DOM element! For example,
// you can call regular DOM APIs like setAttribute on it.
el.setAttribute("foo", "bar");

// Append the element to the body of the page, and now you'll see a
// continually-updating message on your screen.
document.body.appendChild(el);
