
const Paginacion = ({ paginaActual, totalPaginas, handlePaginaSiguiente, handlePaginaAnterior }) => {
  return (
    <div className="pagination py-2">
      <button className="px-4 py-2 bg-red-400 rounded mx-2 shadow-md disabled:opacity-75 disabled:cursor-not-allowed enabled:hover:bg-red-200" onClick={handlePaginaAnterior} disabled={paginaActual === 1}>Anterior</button>
      <span>{paginaActual} de {totalPaginas}</span>
      <button className="px-4 py-2 bg-red-400 rounded mx-2 shadow-md disabled:opacity-75 disabled:cursor-not-allowed enabled:hover:bg-red-200" onClick={handlePaginaSiguiente} disabled={paginaActual === totalPaginas}>Siguiente</button>
    </div>
  );
};

export default Paginacion;
