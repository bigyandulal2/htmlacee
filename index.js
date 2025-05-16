function handleSubmit(e) {
  e.preventDefault();
  alert("i have been submitted");
}
const container = document.getElementById("container");
const shadow = container.attachShadow({ mode: "open" });
shadow.innerHTML = `
  <style>
    p { color: blue; }
  </style>
  <p>Inside Shadow DOM</p>
`;
class MyBox extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
        <style>
          div {
            border: 2px solid blue;
            padding: 10px;
            font-family: sans-serif;
          }
        </style>
        <div>
          <slot name="title"></slot> <!-- This is where light DOM content goes -->
          <slot name="body"> </slot>
        </div>
      `;
  }
}

customElements.define("my-box", MyBox);
