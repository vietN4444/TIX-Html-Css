const linkVideo = [
  "https://www.youtube.com/embed/f-xgoLkpCcg",
  "https://www.youtube.com/embed/YlB1fwSjoLg",
  "https://www.youtube.com/embed/8G-oAn6NaRs",
  "https://www.youtube.com/embed/cp314fRuR6g",
];

const listMovie = [];

function Movie(id, eleClass, linkShow) {
  this.id = id;
  this.eleClass = eleClass;
  this.linkShow = linkShow + "?autoplay=1";
  this.linkHide = linkShow + "?autoplay=0";
}

const createMovie = (arr) => {
  arr.forEach((ele, i) => {
    let movie = new Movie(
      i + 1,
      ".movie__item" + (i + 1) + " .buttonVideo",
      ele
    );
    listMovie.push(movie);
  });
};

var getEleSelector = (selector) => {
  return document.querySelector(selector);
};

const showModal = (id, cls) => {
  getEleSelector(id).classList.toggle(cls);
};

const showVideo = (arr) => {
  arr.forEach((ele) => {
    let buttonShow = document.querySelectorAll(ele.eleClass);
    let modal = document.querySelector(".modal__movieVideo__overplay");
    let buttonClose = getEleSelector(
      ".modal__movieVideo__container-videoWrapper button"
    );
    let modalVideoIframe = getEleSelector(
      ".modal__movieVideo__container-videoWrapper .iframe__container iframe"
    );
    buttonShow.forEach((e) => {
      e.onclick = () => {
        modalVideoIframe.src = ele.linkShow;
        getEleSelector(".modal__movieVideo").classList.toggle("block");
        setTimeout(
          () => showModal(".modal__movieVideo__overplay", "opacityShow"),
          100
        );
        setTimeout(
          () => showModal(".modal__movieVideo__container", "opacityShow"),
          300
        );
      };
      buttonClose.onclick = () => {
        modalVideoIframe.src = ele.linkHide;
        setTimeout(
          () => showModal(".modal__movieVideo__container", "opacityShow"),
          200
        );
        setTimeout(
          () => showModal(".modal__movieVideo__overplay", "opacityShow"),
          300
        );
        setTimeout(() => showModal(".modal__movieVideo", "block"), 400);
      };
    });
    modal.onclick = () => {
      modalVideoIframe.src = ele.linkHide;
      setTimeout(
        () => showModal(".modal__movieVideo__container", "opacityShow"),
        200
      );
      setTimeout(
        () => showModal(".modal__movieVideo__overplay", "opacityShow"),
        300
      );
      setTimeout(() => showModal(".modal__movieVideo", "block"), 400);
    };
  });
};

createMovie(linkVideo);
showVideo(listMovie);
