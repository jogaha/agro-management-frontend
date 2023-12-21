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
    setEditingItem,
    setIsEditing,
    reloadData,
  } = useDatos(endpoints.urlClients);

  const btnText = showForm ? "Cancelar" : "Nuevo Cliente";

  const handleNuevoCliente = ()=>{
    setEditingItem(null)
    setIsEditing(false)
    toggleForm()
  }

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
        setEditingItem={setEditingItem}
        setIsEditing={setIsEditing}
      />
      <button className="btn btn-primary my-4" onClick={handleNuevoCliente}>
        {btnText}
      </button>
      {showForm && (
        <FormCliente
          performCrudOperation={performCrudOperation}
          editingItem={editingItem}
          isEditing={isEditing}
          toggleForm={toggleForm}
          reloadData={reloadData}
        />
      )}
    </div>
  );
};

export default Clientes;
