import "./dropdown-styles.css";

function createDropdown(data) {
  //data must be structure as :
  //{caption, symbol, options:[{label,url}...]};
  const defaultCaption = "Dropdown"; //When no caption is provided.
  const defaultSymbol = "+";

  const dd = document.createElement("div");
  dd.classList.add("dropdown");
  //dHead is the part that is alway visible:
  const dHead = document.createElement("div");
  dHead.classList.add("dropdown-head");
  const sCaption = document.createElement("span");
  sCaption.classList.add("dropdown-caption");
  sCaption.innerText = data.caption || defaultCaption;
  dHead.appendChild(sCaption);
  const sSymbol = document.createElement("span");
  sSymbol.classList.add("dropdown-symbol");
  sSymbol.innerText = data.symbol || defaultSymbol;
  dHead.appendChild(sSymbol);
  dd.appendChild(dHead);

  //dBody is the part that is hidden or shown:
  const uBody = document.createElement("ul");
  uBody.classList.add("dropdown-body");
  for (const { label, url } of data.options) {
    const li = document.createElement("li");
    li.classList.add("dropdown-option");
    const a = document.createElement("a");
    a.innerText = label;
    a.href = url;
    li.appendChild(a);
    uBody.appendChild(li);
  }
  uBody.hidden = true;
  dd.appendChild(uBody);

  //Events and event handlers:
  function handleHeadClicked(event) {
    uBody.hidden = false;
  }
  dHead.addEventListener("click", handleHeadClicked);
  function handleDropdownExited(event) {
    uBody.hidden = true;
  }
  uBody.addEventListener("mouseleave", handleDropdownExited);

  return dd;
}
export { createDropdown };
