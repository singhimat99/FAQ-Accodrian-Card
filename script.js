const accordianQuestion = document.querySelectorAll(".accordian_question");
const accordianContent = document.querySelectorAll(".accordian_content");

for (let i = 0; i < accordianQuestion.length; i++) {
  accordianQuestion[i].addEventListener("click", () => {
    if (accordianContent[i].style.display === "flex") {
      accordianContent[i].style.display = "none";
    } else {
      accordianContent[i].style.display = "flex";
    }
  });
}
