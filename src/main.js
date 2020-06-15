import { addButton, listDiv, inputText } from "./elements.js";

addButton.addEventListener("click", () => {
  if (!inputText.value) {
    throw new Error();
    return;
  } else {
    let listItem = `
        <div class="list-item"> 
            <span>${inputText.value}</span>
            <button>edit</button>
            <button id = "del-item">delete</button>
        </div>
    `;
    listDiv.innerHTML = listDiv.innerHTML + listItem;
    return;
  }
});

listDiv.addEventListener("click", (event) => {
  console.log(event);
  if (event.target.id === "del-item") {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  }
});

let x;
