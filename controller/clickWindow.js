// Click to Close All
const clickWindow = (style) => {
  style = 0 || style;
  const listDropdown = document.querySelectorAll(
    ".booking__container__dropdownList"
  );
  window.onclick = function () {
    listDropdown.forEach((e) => {
      e.classList.remove("block");
    });
    getEleSelector(".header__user__location-dropdown").classList.remove(
      "block"
    );
  };
};

clickWindow();
