import "./Table.css";

const columnas = ["Nombre", "Valor", "Estado"];

const filasMuestra = [
  { nombre: "Gordito", valor: 1500, estado: "Activo" },
  { nombre: "Labastida", valor: 820, estado: "Pendiente" },
  { nombre: "Cruz", valor: 2300, estado: "Activo" },
  { nombre: "Beto", valor: 640, estado: "Inactivo" },
];

export default function Table({ titulo = "Tabla de muestra", filas = filasMuestra }) {
  return (
    <div className="tabla">
      <h3>{titulo}</h3>
      <div className="tabla-scroll">
        <table>
          <thead>
            <tr>
              {columnas.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filas.map((fila) => (
              <tr key={fila.nombre}>
                <td>{fila.nombre}</td>
                <td className="tabla-valor">{fila.valor}</td>
                <td>{fila.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
