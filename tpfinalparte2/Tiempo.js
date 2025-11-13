class Tiempo {
  constructor(duracion) {
    this.duracion = duracion;
    this.inicio = 0;
    this.puntos = 0;
  }

  iniciar() {
    this.inicio = millis();
  }

  mostrar() {
    fill(255);
    textSize(16);
    textAlign(LEFT);
    let tiempoRestante = max(0, this.duracion - (millis() - this.inicio) / 1000);
    text("Tiempo: " + tiempoRestante.toFixed(1), 10, 20);
    text("Hojas: " + this.puntos, 10, 40);
  }

  sumarPunto() {
    this.puntos++;
  }

  gano() {
    return this.puntos >= 10;
  }

  termino() {
    return (millis() - this.inicio) / 1000 > this.duracion;
  }
}
