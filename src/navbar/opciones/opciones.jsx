import Opcion from "./opcion";

function Opciones() {
  return (
    <div className="md:flex  items-center space-x-1">
      <Opcion texto="Inicio" url="/"></Opcion>
      <Opcion texto="Pokemon aleatorio" url="/random"></Opcion>
      <Opcion texto="Ver todos" url="/todos"></Opcion>
    </div>
  );
}

export default Opciones;
