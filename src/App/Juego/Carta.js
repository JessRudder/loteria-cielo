import React from "react";

export const Carta = ({ carta, slot, marcar, marcada }) => (
  <td>
    <button
      className="carta-button"
      disabled={marcada}
      onClick={() => marcar(slot)}
    >
      <img
        className={`carta-imagen ${marcada ? "carta-marcada" : ""}`}
        src={carta.imagen}
        alt={carta.nombre}
      />
    </button>
  </td>
);
