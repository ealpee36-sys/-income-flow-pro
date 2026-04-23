let incomes = JSON.parse(localStorage.getItem("incomes")) || [];

function render() {
  const list = document.getElementById("list");
  const totalEl = document.getElementById("total");

  list.innerHTML = "";
  let total = 0;

  incomes.forEach((amount, index) => {
    total += amount;

    const li = document.createElement("li");
    li.textContent = "¥" + amount;

    li.onclick = () => {
      incomes.splice(index, 1);
      save();
    };

    list.appendChild(li);
  });

  totalEl.textContent = total;
}

function addIncome() {
  const input = document.getElementById("amount");
  const value = Number(input.value);

  if (!value) return;

  incomes.push(value);
  input.value = "";

  save();
}

function save() {
  localStorage.setItem("incomes", JSON.stringify(incomes));
  render();
}

render();
