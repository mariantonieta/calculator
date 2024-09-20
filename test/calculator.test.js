const { appendToDisplay, clearDisplay, calculate } = require("./appCalculator");

describe("Calculator", () => {
  let display;

  beforeEach(() => {
    // Simular el input de la calculadora
    display = document.createElement("input");
    display.setAttribute("type", "text");
    display.setAttribute("id", "display");
    document.body.appendChild(display);
  });

  afterEach(() => {
    // Limpiar el DOM después de cada prueba
    document.body.innerHTML = "";
  });

  test("appendToDisplay debería agregar texto al display", () => {
    appendToDisplay(display, "5");
    appendToDisplay(display, "+");
    appendToDisplay(display, "3");
    expect(display.value).toBe("5+3");
  });

  test("clearDisplay should clear the display", () => {
    appendToDisplay(display, "123");
    clearDisplay(display);
    expect(display.value).toBe("");
  });

  test("calculate, should evaluate the expression corectly", () => {
    appendToDisplay(display, "5+5");
    calculate(display);
    expect(display.value).toBe("10");
  });

  test('calculate should handle eval errors and display "Error"', () => {
    appendToDisplay(display, "5+");
    calculate(display);
    expect(display.value).toBe("Error");
  });
});
