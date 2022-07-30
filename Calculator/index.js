Button = document.querySelector("button");
Display = document.querySelector(".display");
const calculate = (props) => {
  Display.textContent += props;
};
const clr = () => {
  Display.textContent = "";
};
const displayanswer = () => {
  try {
    let ans = eval(Display.textContent);
    Display.textContent = ans;
  } catch (error) {
    console.log(error);
    alert("Please enter a valid expression");
    clr();
  }
};
