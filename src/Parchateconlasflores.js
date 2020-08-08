import React from "react";
import "./styles.css";

export default function Parchateconlasflores() {
  return (
    <div className="Parchateconlasflores">
      <h1>Proyecto PPI Parchate con las flores </h1>
      <h2>Datos de los integrantes </h2>
      <table border="1" className="tabla">
        <tr className="fila-1">
          <td className="columna">Nombres</td>

          <td className="columna">Apellidos</td>

          <td className="columna">Correo electronico</td>

          <td className="columna">Celular</td>
        </tr>

        <tr>
          <td className="Columna1">Camila</td>

          <td className="Columna1">Atehortua Sanchez</td>

          <td className="Columna1">camiath0713@gmail.com</td>

          <td className="Columna1">3016951608</td>
        </tr>

        <tr>
          <td className="Columna2">Kevin David</td>

          <td className="Columna2">Monsalve Jaramillo</td>

          <td className="Columna2">kevcejas05@gmail.com</td>

          <td className="Columna2">3045441638</td>
        </tr>
      </table>
    </div>
  );
}
