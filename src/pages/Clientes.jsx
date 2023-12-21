import React from "react";
import FormCliente from "../components/formularios/FormCliente";
import TablaCliente from "../components/tablas/TablaCliente";
import useDatos from "../utils/useDatos";
import { endpoints } from "../utils/enpoints";

const Clientes = () => {
  const {
    data,
    showForm,
    editingItem,
    isEditing,
    toggleForm,
    performCrudOperation,
  } = useDatos(endpoints.urlClients);

  const btnText = showForm ? "Nuevo Cliente" : "Cancelar";

  return (
    <div className="container text-center">
      <div>
        <h1 className="mb-5">Clientes</h1>
      </div>
      <TablaCliente
        data={data}
        reloadData={performCrudOperation}
        deleteItem={performCrudOperation}
        toggleForm={toggleForm}
        setEditingItem={set}
      />
      <button className="btn btn-primary my-4" onClick={toggleForm}>
        {mostrarForm ? "Cancelar" : "Nuevo Cliente"}
      </button>
      {mostrarForm && (
        <FormCliente
          addCliente={addCliente}
          editingItem={editingItem}
          isEditing={isEditing}
          toggleForm={toggleForm}
        />
      )}
    </div>
  );
};

export default Clientes;
