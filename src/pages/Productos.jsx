import React, { useState, useEffect } from "react";
import FormProducto from "../components/formularios/FormProducto";
import TablaProducto from "../components/tablas/TablaProducto";
import { getData, postData, deleteData, updateData } from "../utils/request";
import { endpoints } from "../utils/enpoints";

const Productos = () => {
  const [dataProductos, setDataProductos] = useState([]);
  const [mostrarForm, setMostrarForm] = useState([false]);
  const [editingItem, setEditingItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const recargarComponente = () => {};

  return <div></div>;
};

export default Productos;
