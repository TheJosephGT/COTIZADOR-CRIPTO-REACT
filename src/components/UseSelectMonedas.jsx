import { useState, useEffect } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;
const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
`;

function UseSelectMonedas({
  opcionesMonedas,
  opcionesCriptos,
  moneda,
  setMoneda,
  cripto,
  setCripto,
}) {
  return (
    <>
      <div>
        <Label>Elige tu moneda</Label>
        <Select value={moneda} onChange={(e) => setMoneda(e.target.value)}>
          <option value="">Seleccione</option>
          {opcionesMonedas.map((opcion) => (
            <option key={opcion.id} value={opcion.id}>
              {opcion.nombre}
            </option>
          ))}
        </Select>
      </div>

      <div>
        <Label>Elige tu criptomoneda</Label>
        <Select value={cripto} onChange={(e) => setCripto(e.target.value)}>
          <option value="">Seleccione</option>
          {opcionesCriptos.map((opcion) => (
            <option key={opcion.id} value={opcion.id}>
              {opcion.nombre}
            </option>
          ))}
        </Select>
      </div>
    </>
  );
}

export default UseSelectMonedas;
