import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";


const validationSchema = Yup.object({
  name: Yup.string().required("Campo obligatorio"),
  address: Yup.string().required("Campo obligatorio"),
  city: Yup.string().required("Campo obligatorio"),
  cp: Yup.string().required("Campo obligatorio"),
  nit: Yup.string().required("Campo obligatorio"),
  phone: Yup.string().required("Campo obligatorio"),
  state: Yup.string().required("Campo obligatorio"),
  country: Yup.string().required("Campo obligatorio"),
});

const FormCliente = ({ performCrudOperation,isEditing, editingItem, toggleForm,reloadData }) => {
  const initialValues = isEditing
    ? editingItem
    : {
        name: "",
        address: "",
        city: "",
        cp: "",
        nit: "",
        phone: "",
        state: "",
        country: "",
      };

  const mensajeAlerta = isEditing
    ? "Cambio actualizado!"
    : "Nuevo cliente agregado!";
  const cliente = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        if(isEditing){
          await performCrudOperation(values,"update",editingItem.id)
        } else{
          await performCrudOperation(values,"add");
        }
        resetForm();
        toggleForm();
        reloadData()
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

  const buttonText = isEditing ? "Editar" : "Enviar";
  return (
    <form onSubmit={cliente.handleSubmit}>
      <div className=" mb-2 row g-3 align-items-center">
        <div className="col-2">
          <label className="col-form-label" htmlFor="name">
            Nombre:
          </label>
        </div>
        <div className="col-auto">
          <input
            className="form-control"
            id="name"
            name="name"
            type="text"
            onChange={cliente.handleChange}
            value={cliente.values.name}
          />
        </div>
      </div>
      <div className="mb-2 row g-3 align-items-center">
        <div className="col-2">
          <label className="col-form-label" htmlFor="address">
            Direccion:
          </label>
        </div>
        <div className="col-auto">
          <input
            className="form-control"
            id="address"
            name="address"
            type="text"
            onChange={cliente.handleChange}
            value={cliente.values.address}
          />
        </div>
      </div>
      <div className="mb-2 row g-3 align-items-center">
        <div className="col-2">
          <label className="col-form-label" htmlFor="city">
            Ciudad:
          </label>
        </div>
        <div className="col-auto">
          <input
            className="form-control"
            id="city"
            name="city"
            type="text"
            onChange={cliente.handleChange}
            value={cliente.values.city}
          />
        </div>
      </div>
      <div className="mb-2 row g-3 align-items-center">
        <div className="col-2">
          <label className="col-form-label" htmlFor="cp">
            CP:
          </label>
        </div>
        <div className="col-auto">
          <input
            className="form-control"
            id="cp"
            name="cp"
            type="text"
            onChange={cliente.handleChange}
            value={cliente.values.cp}
          />
        </div>
      </div>
      <div className="mb-2 row g-3 align-items-center">
        <div className="col-2">
          <label className="col-form-label" htmlFor="nit">
            Nit:
          </label>
        </div>
        <div className="col-auto">
          <input
            className="form-control"
            id="nit"
            name="nit"
            type="text"
            onChange={cliente.handleChange}
            value={cliente.values.nit}
          />
        </div>
      </div>
      <div className="mb-2 row g-3 align-items-center">
        <div className="col-2">
          <label className="col-form-label" htmlFor="phone">
            Telefono:
          </label>
        </div>
        <div className="col-auto">
          <input
            className="form-control"
            id="phone"
            name="phone"
            type="text"
            onChange={cliente.handleChange}
            value={cliente.values.phone}
          />
        </div>
      </div>
      <div className="mb-2 row g-3 align-items-center">
        <div className="col-2">
          <label className="col-form-label" htmlFor="state">
            Estado:
          </label>
        </div>
        <div className="col-auto">
          <input
            className="form-control"
            id="state"
            name="state"
            type="text"
            onChange={cliente.handleChange}
            value={cliente.values.state}
          />
        </div>
      </div>
      <div className="mb-2 row g-3 align-items-center">
        <div className="col-2">
          <label className="col-form-label" htmlFor="country">
            Pais:
          </label>
        </div>
        <div className="col-auto">
          <input
            className="form-control"
            id="country"
            name="country"
            type="text"
            onChange={cliente.handleChange}
            value={cliente.values.country}
          />
        </div>
      </div>
      <button className="btn col-3 btn-dark" type="submit">
        {buttonText}
      </button>
    </form>
  );
};

export default FormCliente;
