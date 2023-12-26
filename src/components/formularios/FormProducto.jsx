import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const validationSchema = Yup.object({
  description: Yup.string().required("Campo obligatorio"),
  variety: Yup.string().required("Campo obligatorio"),
  presentation: Yup.string().required("Campo obligatorio"),
  weight: Yup.number().required("Campo obligatorio"),
  boxes: Yup.number().required("Campo obligatorio"),
});

const FormProducto = ({
  performCrudOperation,
  isEditing,
  editingItem,
  toggleForm,
  reloadData,
}) => {
  const initialValues = isEditing
    ? editingItem
    : {
        description: "",
        variety: "",
        presentation: "",
        weight: 0.0,
        boxes: 0,
      };

  const mensajeAlerta = isEditing
    ? "Cambio actualizado!"
    : "Nuevo producto agregado!";
  const producto = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        if (isEditing) {
          await performCrudOperation(values, "update", editingItem.id);
        } else {
          await performCrudOperation(values, "add");
        }
        resetForm();
        toggleForm();
        reloadData();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: mensajeAlerta,
          showConfirmButton: false,
          timer: 1000,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo salio mal!",
        });
      }
    },
  });

  const buttonText = isEditing ? "Editar" : "Eviar";
  return (
    <form onSubmit={producto.handleSubmit}>
      <div className="mb-2 row g-3 align-items-center">
        <div className="col-2">
          <label className="col-form-label" htmlFor="description">
            Descripción:
          </label>
        </div>
        <div className="col-auto">
          <input
            className="form-control"
            id="description"
            name="description"
            type="text"
            onChange={producto.handleChange}
            value={producto.values.description}
          />
        </div>
      </div>
      <div className="mb-2 row g-3 align-items-center">
        <div className="col-2">
          <label className="col-form-label" htmlFor="variety">
            Variedad:
          </label>
        </div>
        <div className="col-auto">
          <input
            className="form-control"
            id="variety"
            name="variety"
            type="text"
            onChange={producto.handleChange}
            value={producto.values.variety}
          />
        </div>
      </div>
      <div className="mb-2 row g-3 align-items-center">
        <div className="col-2">
          <label className="col-form-label" htmlFor="presentation">
            Presentacion:
          </label>
        </div>
        <div className="col-auto">
          <input
            className="form-control"
            id="presentation"
            name="presentation"
            type="text"
            onChange={producto.handleChange}
            value={producto.values.presentation}
          />
        </div>
      </div>
      <div className="mb-2 row g-3 align-items-center">
        <div className="col-2">
          <label className="col-form-label" htmlFor="weight">
            Peso:
          </label>
        </div>
        <div className="col-auto">
          <input
            className="form-control"
            id="weight"
            name="weight"
            type="number"
            onChange={producto.handleChange}
            value={producto.values.weight}
          />
        </div>
      </div>
      <div className="mb-2 row g-3 align-items-center">
        <div className="col-2">
          <label className="col-form-label" htmlFor="boxes">
            Cajas P/P:
          </label>
        </div>
        <div className="col-auto">
          <input
            className="form-control"
            id="boxes"
            name="boxes"
            type="number"
            onChange={producto.handleChange}
            value={producto.values.boxes}
          />
        </div>
      </div>
      <button className="btn col-3 btn-dark" type="submit">
        {buttonText}
      </button>
    </form>
  );
};

export default FormProducto;
