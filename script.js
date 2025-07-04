document.getElementById("showToons").onclick = () => {
  document.getElementById("popup").style.display = "flex";
};

document.querySelector(".close").onclick = () => {
  document.getElementById("popup").style.display = "none";
};

window.onclick = (e) => {
  if (e.target.id === "popup") {
    document.getElementById("popup").style.display = "none";
  }
};
