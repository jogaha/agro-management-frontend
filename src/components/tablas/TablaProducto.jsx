import React from "react";
import Swal from "sweetalert2";

const TablaProducto = ({
  deleteItem,
  data,
  setEditingItem,
  setIsEditing,
  toggleForm,
}) => {
  const handleEdit = (item) => {
    setEditingItem(item);
    setIsEditing(true);
    toggleForm();
  };

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Seguro que desea Eliminar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar!",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        await deleteItem(null, "delete", id);

        Swal.fire({
          title: "Eliminado!",
          text: "El registro fue eliminado.",
          icon: "success",
        });
        setEditingItem(null);
        setIsEditing(false);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salio mal!",
      });
    }
  };

  return (
    <div>
      <h2>Registros</h2>
      {data.length === 0 ? (
        <h2>No hay datos!</h2>
      ) : (
        <table className="table table-sm table-hover">
          <thead>
            <tr className="table-dark text-center">
              <th>ID</th>
              <th>Descripcion</th>
              <th>Variedad</th>
              <th>Presentacion</th>
              <th>Peso</th>
              <th># Cajas</th>
              <th>Ajustes</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item?.id} className="text-center">
                <td>{item?.id}</td>
                <td>{item?.description}</td>
                <td>{item?.variety}</td>
                <td>{item?.presentation}</td>
                <td>{item?.weight}</td>
                <td>{item?.boxes}</td>

                <td className="d-flex justify-content-evenly">
                  <button className="btn btn-primary" onClick={()=>handleEdit(item)}>Editar</button>
                  <button className="btn btn-danger" onClick={()=>handleDelete(item.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TablaProducto;
