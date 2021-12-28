let funct = [quadratic, Math.sin, parbola];
function printTable(from, to, step, func) {
  if (func === undefined) {
    return;
  }
  from = from;
  to = to;
  step = step || 1;
  document.write("<table border='1' cellspacing='0'>");
  for (var x = from; x <= to; x += step) {
    document.write("<tr>");
    document.write("<td>" + x + "</td>");
    document.write("<td>" + func(x) + "</td>");
    document.write("</tr>");
  }
  document.write("</table>");
}
function quadratic(x) {
  return x * x;
}

function parbola(x) {
  return x / 2;
}

let n = prompt(" 0 - квадратичная, 1 - смнусоида, 2 - парабола");
try {
  if (n < 0 || n > 2 || isNaN(n)) {
    throw new Error("Данные некорректны");
  }
  printTable(-10, 10, 1, funct[n]);
} catch (ex) {
  alert("Извините, возникла ошибка: " + ex.message);
} finally {
  alert("Пока!");
}
