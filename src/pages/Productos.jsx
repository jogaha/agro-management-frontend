import React, { useState, useEffect } from "react";
import FormProducto from "../components/formularios/FormProducto";
import TablaProducto from "../components/tablas/TablaProducto";
import useDatos from "../utils/useDatos";
import { endpoints } from "../utils/enpoints";

const Productos = () => {
  const {
    data,
    showForm,
    editingItem,
    isEditing,
    toggleForm,
    performCrudOperation,
    setEditingItem,
    setIsEditing,
    reloadData
  } = useDatos(endpoints.urlProducts)

  const btnText = showForm ? "Cancelar" : "Nuevo Producto"

  const handleNuevoProducto = ()=>{
    setEditingItem(null)
    setIsEditing(false)
    toggleForm()
  }
  

  return (
    <div className="container text-center">
      <div>
        <h1>Productos</h1>
      </div>
      <TablaProducto 
        data={data}
        reloadData={performCrudOperation}
        deleteItem={performCrudOperation}
        toggleForm={toggleForm}
        setEditingItem={setEditingItem}
        setIsEditing={setIsEditing}
      />
      <button className="btn btn-primary my-4" onClick={handleNuevoProducto}>{btnText}</button>
      {showForm && (
        <FormProducto
          performCrudOperation={performCrudOperation}
          editingItem={editingItem}
          isEditing={isEditing}
          toggleForm={toggleForm}
          reloadData={reloadData}
        />
      )}
    </div>
  )
};

export default Productos;
