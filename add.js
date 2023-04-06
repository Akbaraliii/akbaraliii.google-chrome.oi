// const addLink = document.getElementById("add");

// function addWeb() {
//   const clickedClass2 = "addLink";
//   if (addLink.className === clickedClass2) {
//     addLink.className = "";
//   } else {
//     addLink.className = clickedClass2;
//   }
//   console.log("add link is clicked");
// }

// addLink.addEventListener("click", addWeb);

// const openButton2 = document.getElementById("updateDetail");
// const openAccount = document.getElementById("pesonalAccount");

// function openAvatar(openAccount) {
//   if (openAccount.open) {
//     console.log("Dialog open");
//   } else {
//     console.log("Dialog closed");
//   }
// }

// openButton2.addEventListener("click", () => {
//   openAccount.showModal2();
//   openAvatar(openAccount);
// });

const apps = document.getElementById("appsBar");

const barButton = document.getElementById("barButton");

const span2 = document.getElementById("close1");

barButton.onclick = function () {
  apps.style.display = "block";
};

span2.onclick = function () {
  apps.style.display = "none";
};

window.onclick = function (hello) {
  if (hello.target == apps) {
    apps.style.display = "none";
  }
};
