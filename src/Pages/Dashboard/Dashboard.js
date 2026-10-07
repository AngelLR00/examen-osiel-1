import Card from "../../Componets/Card/Card";
import "./Dashboard.css";
function Dashboard() {
  return (
    <div className="Contenedor-tarjetas">
      <Card titulo="Gordito" valor="1500" descripcion="Es gei " />
      <Card titulo="Labastida" valor="no tiene" descripcion="Pendejo mayor" />
      <Card titulo="Cruz" valor="pana" descripcion="pana alcolico" />
      <Card titulo="Beto" valor="cacacacarnal" descripcion="Drogadicto bellako" />
    </div>
  );
}   

export default Dashboard;
