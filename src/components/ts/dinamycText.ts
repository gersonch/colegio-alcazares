const textElement = document.getElementById("text") as HTMLElement | null;
const text: string = "¡Formando Futuras Fortalezas!";
let index: number = 0;
let forward: boolean = true;

function typeWriter(): void {
  if (!textElement) return; // Verifica que textElement no sea nulo

  if (forward) {
    if (index < text.length) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 150); // Ajusta la velocidad cambiando el valor
    } else {
      forward = false;
      setTimeout(typeWriter, 5000); // Espera 5 segundos antes de borrar
    }
  } else {
    if (index > 0) {
      textElement.textContent = text.slice(0, index - 1);
      index--;
      setTimeout(typeWriter, 50);
    } else {
      forward = true;
      setTimeout(typeWriter, 300); // Espera 300 ms antes de reiniciar
    }
  }
}

typeWriter();
