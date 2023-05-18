// Gọi hàm
// truncateCardtitle(); ready
// onload :khi thư viện khác đã load xong thì funtion mới chạy
window.addEventListener("load", function () {
  truncateCardtitle();
});

// Thay đổi tên cardtitle
function truncateCardtitle() {
  var cardList = document.getElementsByClassName("card-title");
  console.log(cardList);
  for (var i = 0; i < cardList.length; i++) {
    var text = cardList[i].innerHTML;
    truncateString(text, 30);
    var newText = truncateString(text, 35);
    cardList[i].innerHTML = newText;
  }
}

function truncateString(str, num) {
  if (str.length > num) {
    return str.substring(0, num) + "...";
  } else {
    return str;
  }
}

// Dark sidebarmini
var toggleBtn = document.querySelector('.sidebarMini__button');
var sidebarMini = document.querySelector('.sidebarMini');
var switchBtn = document.querySelector('#checkbox');

toggleBtn.addEventListener('click',function(){
    sidebarMini.classList.toggle('is-opened');
});

switchBtn.addEventListener('click',function(){
    document.querySelector('body').classList.toggle('darkMode');
});
