import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import UseSelectMonedas from "./UseSelectMonedas";
import { monedas } from "../data/monedas";
import Error from "./Error";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

function Formulario({ setMonedas }) {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);
  const [moneda, setMoneda] = useState("");
  const [cripto, setCripto] = useState("");

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayCriptos = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };

        return objeto;
      });

      setCriptos(arrayCriptos);
    };
    consultarAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([moneda, cripto].includes("")) {
      setError(true);
      return;
    }

    setError(false);
    setMonedas({
      moneda,
      cripto,
    });
  };
  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <UseSelectMonedas
          label="Elige tu moneda"
          opcionesMonedas={monedas}
          opcionesCriptos={criptos}
          moneda={moneda}
          setMoneda={setMoneda}
          cripto={cripto}
          setCripto={setCripto}
        />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
}

export default Formulario;
