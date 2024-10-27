// 4. Conversão de temperatura
// Crie uma função chamada converterCelsiusParaFahrenheit que recebe um valor em graus
// Celsius e converte para Fahrenheit. A fórmula é (Celsius * 9/5) + 32.

function converterCelsiusParaFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;

  return fahrenheit;
}

const temperaturaCelsius = 20;
const temperaturaFahrenheit = converterCelsiusParaFahrenheit(temperaturaCelsius);

console.log(`${temperaturaCelsius}°C equivale a ${temperaturaFahrenheit}°F`);