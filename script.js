document.getElementById("calculateButton").addEventListener("click", () => {
  const billAmount = parseFloat(document.getElementById("billAmount").value);
  const customTip = parseFloat(document.getElementById("customTip").value);

  if (isNaN(billAmount) || billAmount <= 0) {
    alert("Please enter a valid bill amount.");
    return;
  }

  if (isNaN(customTip) || customTip <= 0) {
    alert("Please enter a valid tip percentage.");
    return;
  }

  const tipRate = customTip / 100;
  const tipAmount = billAmount * tipRate;
  const totalAmount = billAmount + tipAmount;

  document.getElementById("tipAmount").textContent = `$${tipAmount.toFixed(2)}`;
  document.getElementById("totalAmount").textContent = `$${totalAmount.toFixed(
    2
  )}`;
});
