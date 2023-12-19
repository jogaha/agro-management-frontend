import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";

const validationSchema = Yup.object({
  description: Yup.string().required("Campo obligatorio"),
  variety: Yup.string().required("Campo obligatorio"),
  presentation: Yup.string().required("Campo obligatorio"),
  weight: Yup.number().required("Campo obligatorio"),
  boxes: Yup.number().required("Campo obligatorio"),
});

const FormProducto = ({ addProducto, isEditing, editingItem, toggleForm }) => {
  const initialValues = isEditing
    ? editingItem
    : {
        description: "",
        variety: "",
        presentation: "",
        weight: 0.0,
        boxes: 0,
      };
  const producto = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
      } catch (error) {}
    },
  });

  return (
    <form onSubmit={producto.handleSubmit}>
      <div>
        <label htmlFor="description">Descripción: </label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={producto.handleChange}
          value={producto.values.description}
        />
      </div>
      <div>
        <label htmlFor="variety">Variedad: </label>
        <input
          id="variety"
          name="variety"
          type="text"
          onChange={producto.handleChange}
          value={producto.values.variety}
        />
      </div>
      <div>
        <label htmlFor="presentation">Presentacion: </label>
        <input
          id="presentation"
          name="presentation"
          type="text"
          onChange={producto.handleChange}
          value={producto.values.presentation}
        />
      </div>
      <div>
        <label htmlFor="weight">Peso: </label>
        <input
          id="weight"
          name="weight"
          type="number"
          onChange={producto.handleChange}
          value={producto.values.weight}
        />
      </div>
      <div>
        <label htmlFor="boxes">Cajas P/P: </label>
        <input
          id="boxes"
          name="boxes"
          type="number"
          onChange={producto.handleChange}
          value={producto.values.boxes}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormProducto;
