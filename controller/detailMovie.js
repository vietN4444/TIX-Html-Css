const changeArrow = function () {
  let listLabel = document.querySelectorAll(".bookingSm__cinema__label");
  let listImg = document.querySelectorAll(".bookingSm__arrow img");
  listLabel.forEach(function (e, index) {
    e.onclick = () => {
      if (e.attributes[3].value === "false") {
        listImg[index].style.transform = "rotate(90deg)";
      } else {
        console.log("1");
        listImg[index].style.transform = "rotate(0)";
      }
    };
  });
};

const changeIframe = function () {
  let strHTML = `
    <iframe
      src="https://www.youtube.com/embed/f-xgoLkpCcg"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  `;
  document
    .querySelector(".sliderSm__slider__background")
    .insertAdjacentHTML("beforeend", strHTML);
};

const viewMoreAll = () => {
  let arrBtn = document.querySelectorAll(".news__viewMore__btn");
  let arrContainer = document.querySelectorAll(".news__container");
  arrBtn.forEach((ele, index) => {
    ele.onclick = () => {
      let str = arrContainer[index].innerHTML;
      arrContainer[index].insertAdjacentHTML("beforeend", str);
    };
  });
};

viewMoreAll();

changeArrow();
