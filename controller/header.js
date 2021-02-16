const arrEleMenu = [
  ".header__content__mobile-logo",
  ".header__content__mobile-contain-overplay",
  ".header__mobile__contain-header > p",
];

function getEleSelector(selector) {
  return document.querySelector(selector);
}

function onClickEle(ele1, ele2, selector) {
  getEleSelector(ele1).onclick = (e) => {
    e.stopPropagation();
    getEleSelector(ele2).classList.toggle(selector);
  };
}

function navMenuMobile(arr) {
  arr.forEach((ele) => {
    getEleSelector(ele).onclick = (e) => {
      getEleSelector(".header__content__mobile-contain").classList.toggle(
        "PEActive"
      );
      getEleSelector(
        ".header__content__mobile-contain-overplay"
      ).classList.toggle("opacityShow");
      getEleSelector(".header__content__mobile-contain-body").classList.toggle(
        "menuShow"
      );
    };
  });
}

function changeLocation() {
  let headerLocationList = document.querySelectorAll(
    ".header__user__location-dropdown > ul li a"
  );

  headerLocationList.forEach((e) => {
    e.onclick = () => {
      getEleSelector("#txt_location").innerHTML = e.innerHTML;
    };
  });
}

onClickEle(
  ".header__content__user-location > a",
  ".header__user__location-dropdown",
  "block"
);
changeLocation();
navMenuMobile(arrEleMenu);
