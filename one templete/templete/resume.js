const btnskill = document.querySelector(".btnskill");
const btndiv = document.querySelector(".btndiv");
const btnli = document.querySelector(".btnli");
const skilli = document.querySelector(".skillli");
const exprincediv = document.querySelector(".experince");
const ulc = document.querySelector(".ulc");
console.log("hi");
//add skill list
btnskill.addEventListener("click", function (e) {
  e.preventDefault();
  let newskill = `<li class=''><input type="text" name="" id="" placeholder="skill"></li>`;
  skilli.insertAdjacentHTML("beforeend", newskill);
  console.log("btnskill");
});

//add expdiv
btndiv.addEventListener("click", function (e) {
  e.preventDefault();
  const divhtml = `<div class="expconatiner">
  <h2 class=''><input type="text" placeholder="Company" class="h2"><span class="post "><input type="text" name="" class="post" id="" placeholder="your post"></span></h2>
  <p class="date "><input type="text" placeholder="duration"></p>
  <ul>
  <li class=''><input type="text" name="" id="" placeholder="work expeince"></li>

  </ul>
  </div>`;
  exprincediv.insertAdjacentHTML("beforeend", divhtml);

  console.log("btndiv");
});
//add btnli
btnli.addEventListener("click", function (e) {
  e.preventDefault();
  ulc.insertAdjacentHTML(
    "beforeend",
    ` <li class=''><input type="text" name="" id="" placeholder="work expeince"></li>`
  );
  console.log("btnli");
});
console.log("hi");
//<a href="#" class="btnli">+</a>

//////////////////////////////////////////////
//////////////////////////////////////////////
////get value from and put it on templete
////////////////////////////////////////
const preview = document.querySelector(".privew");

//making function for all in one
const inputfun = function () {
  let bigname = document.querySelector("#bigname").innerHTML;
  let namefeild = document.querySelector("#himanshu").value;
  console.log(bigname, namefeild);
};

preview.addEventListener("click", function (e) {
  // e.preventDefault();
  inputfun();
  console.log("btn");
});
