import React, { useState, useEffect } from "react";
import { getData, postData, deleteData, updateData } from "../utils/request";
import { BASE_URL } from "./enpoints";

const useDatos = (baseUrl, sortField = "id") => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const reloadData = async () => {
    try {
      const fetchData = await getData(baseUrl);
      setData([...fetchData].sort((a, b) => a[sortField] - b[sortField]));
    } catch (error) {
      console.error(`Error fetching data from ${baseUrl}`, error);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const performCrudOperation = async (values, operation, itemId = null) => {

    try {
      switch (operation) {
        case "add":
          await postData(baseUrl, values);
          
          break;
        case "update":
          await updateData(`${baseUrl}${itemId}/`, values);
          setEditingItem(null);
          setIsEditing(false);
          break;
        case "delete":
          await deleteData(baseUrl, itemId);
          break;
        default:
          break;
      }
      reloadData();
    } catch (error) {
      console.error(`Error with ${operation} operation`, error);
    }
  };
  useEffect(() => {
    reloadData();
  }, [baseUrl, sortField]);

  return {
    data,
    showForm,
    editingItem,
    isEditing,
    toggleForm,
    performCrudOperation,
    reloadData,
    setEditingItem,
    setIsEditing
  };
};

export default useDatos;
