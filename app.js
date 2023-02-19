const billValue = document.querySelector(".input-value");
const submitInput = document.querySelector(".submit-input");
const buttons = document.querySelectorAll(".button");
const customtipValue = document.querySelector(".custom-value");
const noofGuest = document.querySelector(".total-Guest");

const customSubmitInput = document.querySelector(".submit-input1");
const totalGuest = document.querySelector(".submit-input2");

const tpop = document.querySelector(".changingValue");
const tpap = document.querySelector(".changingValue1");

const reset = document.querySelector(".reset");

const tipcalcFunc = function () {
  submitInput.addEventListener("click", function () {
    const submittedinputValue = +billValue.value;
    console.log(submittedinputValue);
    let v = (tpop.textContent = submittedinputValue);
    console.log(v);

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const submittedbtnValue = button.value;
        const totalAfter = submittedinputValue * submittedbtnValue;
        console.log(totalAfter);
        let v = (tpop.textContent = totalAfter);
        console.log(v);

        totalGuest.addEventListener("click", function () {
          console.log("clicked");
          let guest = +noofGuest.value;
          let finalis = totalAfter / guest;
          console.log(finalis);
          let p = (tpap.textContent = finalis);
          console.log(Math.trunc(p));
        });
      });
    });
  });
  // billValue.addEventListener("click", function () {
  //   // console.log(Number(billValue.textContent));
  //   const billval = billValue.textContent;
  //   console.log(Number(billval));
  // });
  // customSubmitInput.addEventListener("click", function () {
  //   // +customtipValue;
  //   let submittedinputValue = +submitInput.value;
  //   // let constomTip = Number(submittedinputValue + customtipValue);
  //   console.log(submittedinputValue);
  //   // console.log(customtipValue.value + submitInput.value);
  // });
  reset.addEventListener("click", function () {
    window.location.reload();
  });
};

tipcalcFunc();

// submitInput.addEventListener("click", function () {
//   const submittedinputValue = +billValue.value;
//   console.log(submittedinputValue);
// });
