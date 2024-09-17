export function bidInputListener() {
  const bidInput = document.getElementById("bid-input");

  bidInput.addEventListener("input", function (event) {
    const value = event.target.value;

    event.target.value = value.replace(/[^0-9]/g, "");
  });
}
