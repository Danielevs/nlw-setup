// registro na memoria
const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")
// Registro na memória por meio de click
button.addEventListener("click", add)
form.addEventListener("change", save) //registro na memoria para alteração sempre que o registro for mudado

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert("Dia já incluso")
    return
  }
  nlwSetup.addDay(today)
}
function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}
// const data = {
//   run: ["01-01", "01-02", "01-06"],
//   takePills: ["01-03"],
//   journal: ["01-03"],
// }
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
