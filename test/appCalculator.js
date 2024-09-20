function appendToDisplay(display, input) {
  display.value += input;
}

function clearDisplay(display) {
  display.value = "";
}

function calculate(display) {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// Exportar las funciones para que las podamos usar en las pruebas
module.exports = {
  appendToDisplay,
  clearDisplay,
  calculate,
};
