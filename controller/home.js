var getEleSelector = (selector) => {
  return document.querySelector(selector);
};

const arrCinema = [
  "BHD Star Bitexco",
  "BHD Star Vincom 3/2",
  "BHD Star Vincom Lê Văn Việt",
  "BHD Star Vincom Thảo Điền",
  "BHD Star ‎Phạm Hùng",
  "CGV Aeon Bình Tân",
  "CGV Aeon Tân Phú",
  "CGV Crescent Mall",
  "CGV Giga Mall Thủ Đức",
  "CGV Hoàng Văn Thụ",
  "BHD Star Bitexco",
  "BHD Star Vincom 3/2",
  "BHD Star Vincom Lê Văn Việt",
  "BHD Star Vincom Thảo Điền",
  "BHD Star ‎Phạm Hùng",
];

const arrDate = [
  "Thứ Hai",
  "Thứ Ba",
  "Thứ Tư",
  "Thứ Năm",
  "Thứ Sáu",
  "Thứ Bảy",
  "Chủ Nhật",
];

const arrTime = [];

const getTime = () => {
  let d = new Date();
  let hours = d.getHours();
  while (hours < 24 && hours > 7) {
    let string = hours + ":" + "44";
    arrTime.push(string);
    hours++;
  }
  if (arrTime.length === 0) {
    arrTime.push("Không có suất chiếu!");
  }
};

const showDrop = (idDrop) => {
  const listDropdown = document.querySelectorAll(
    ".booking__container__dropdownList"
  );
  const label = document.getElementById(idDrop);
  if (label.classList.contains("block")) {
    label.classList.remove("block");
    return;
  }
  listDropdown.forEach((e) => {
    e.classList.remove("block");
  });
  label.classList.add("block");
};

const changeTextDrop = (idDrop, idText, style = 1) => {
  const stringLink = "#" + idDrop + " .booking__dropdownItem";
  const arrLink = document.querySelectorAll(stringLink);
  arrLink.forEach((e) => {
    e.onclick = () => {
      if (e.hasAttribute("value")) return;
      const stringLabel = document.getElementById(idText);
      if (style !== 1) {
        //Only Date
        let currentTxt = e.children[1].innerHTML;
        stringLabel.innerHTML = currentTxt;
        stringLabel.removeAttribute("value");
      } else {
        //Default
        let currentTxt = e.innerHTML;
        stringLabel.innerHTML = currentTxt;
        stringLabel.removeAttribute("value");
      }
    };
  });
};

const changeContentDrop = (idDrop, idText, arr, width, style = 1) => {
  const txt = document.getElementById(idText);
  if (txt.hasAttribute("value")) return;
  const dropContent = document.querySelector("#" + idDrop + " >ul");
  if (style === 1) {
    //Default
    const arrHtml = arr.map((e) => {
      return `<li class="booking__dropdownItem">${e}</li>`;
    });
    dropContent.innerHTML = arrHtml.join("");
    document.getElementById(idDrop).style.minWidth = width;
  } else {
    //Only Date
    let date = new Date();
    const dropContent = document.querySelector("#" + idDrop + " >ul");
    const arrHtml = arr.map((e, index) => {
      let Y = date.getFullYear();
      let M = date.getMonth() + 1;
      let D = date.getDate() + index;
      return `
      <li class="booking__dropdownItem">
        <span>${e}</span>
        <span id="dropDateTxt">${Y}-${M}-${D}</span>
      </li>
      `;
    });
    dropContent.innerHTML = arrHtml.join("");
    document.getElementById(idDrop).style.minWidth = width;
  }
};

const dropdown = (idDrop, idText, style) => {
  event.stopPropagation();
  showDrop(idDrop);
  changeContentDrop("dropCinema", "txtSelectMovie", arrCinema, "300px");
  changeContentDrop("dropDate", "txtSelectCinema", arrDate, "160px", style);
  changeContentDrop("dropTime", "txtSelectDate", arrTime, "200px");
  changeTextDrop(idDrop, idText, style);
};

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
    changeColorBtnBuy();
  };
};

const changeColorBtnBuy = () => {
  let txtMovie = document.getElementById("txtSelectMovie");
  let txtCinema = document.getElementById("txtSelectCinema");
  let txtDate = document.getElementById("txtSelectDate");
  let txtTime = document.getElementById("txtSelectTime");
  if (
    !txtMovie.hasAttribute("value") &&
    !txtCinema.hasAttribute("value") &&
    !txtDate.hasAttribute("value") &&
    !txtTime.hasAttribute("value")
  ) {
    document.querySelector(".selectButton > a").classList.add("btnCanBuyNow");
    document.querySelector(".selectButton > a").setAttribute("href", "#");
  }
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
clickWindow();
getTime();
