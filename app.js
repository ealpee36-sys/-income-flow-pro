function saveData() {
  let salary = parseInt(document.getElementById("salary").value) || 0;
  let allowance = parseInt(document.getElementById("allowance").value) || 0;

  let worked = salary - allowance;

  document.getElementById("result").innerText =
    new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(worked);

  localStorage.setItem("salary", salary);
  localStorage.setItem("allowance", allowance);
}

window.onload = () => {
  let salary = localStorage.getItem("salary") || 0;
  let allowance = localStorage.getItem("allowance") || 0;

  document.getElementById("salary").value = salary;
  document.getElementById("allowance").value = allowance;
};
