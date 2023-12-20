import React, { useState, useEffect } from "react";
import FormCliente from "../components/formularios/FormCliente";
import TablaCliente from "../components/tablas/TablaCliente";
import { getData, postData, deleteData, updateData } from "../utils/request";
import { endpoints } from "../utils/enpoints";

const Clientes = () => {
  const [dataClientes, setDataClientes] = useState([]);
  const [mostrarForm, setMostrarForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const recargarComponente = () => {
    fetchData();
  };

  const fetchData = async () => {
    try {
      const data = await getData(endpoints.urlClients);
      setDataClientes([...data].sort((a, b) => a.id - b.id));
    } catch (error) {
      console.error("Error obteniendo los datos de los clientes", error);
    }
  };
  const btnText = mostrarForm ? "Nuevo Cliente" : "Cancelar";
  const toggleForm = () => {
    setMostrarForm(!mostrarForm);
    if (btnText === "Nuevo Cliente") {
      setEditingItem(null);
      setIsEditing(false);
    }
  };

  const addCliente = async (values) => {
    try {
      if (isEditing) {
        await updateData(`${endpoints.urlClients}${editingItem.id}/`, values);
        setEditingItem(null);
        setIsEditing(false);
      } else {
        await postData(endpoints.urlClients, values);
      }
      recargarComponente();
    } catch (error) {
      console.error("Error con la solicitud", error);
    }
  };
  const deleteCliente = async (id) => {
    try {
      await deleteData(endpoints.urlClients, id);
      setDataClientes(dataClientes.filter((item) => item.id !== id));
      recargarComponente();
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container text-center">
      <div>
        <h1 className="mb-5">Clientes</h1>
      </div>
      <TablaCliente
        dataClientes={dataClientes}
        setDataClientes={setDataClientes}
        recargarComponente={recargarComponente}
        deleteCliente={deleteCliente}
        toggleForm={toggleForm}
        setEditingItem={setEditingItem}
        setIsEditing={setIsEditing}
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
