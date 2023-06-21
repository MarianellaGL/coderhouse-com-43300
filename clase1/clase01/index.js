document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("button");
  const div = document.querySelector("div");
  button.addEventListener("click", function () {
    alert("Esto es un componente");

    if (div.style.backgroundColor === "blue") {
      div.style.backgroundColor = "red";
    } else {
      div.style.backgroundColor = "blue";
    }
  });
});
