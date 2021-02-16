const viewMore = (style, ele1, ele2) => {
  ele2 = 0 || ele2;
  if (style === 1) {
    let container = document.querySelector(ele1);
    let str = container.innerHTML;
    container.insertAdjacentHTML("beforeend", str);
    if (!ele2) return;
    document.querySelector(ele2).style.display = "none";
    return;
  }
};
