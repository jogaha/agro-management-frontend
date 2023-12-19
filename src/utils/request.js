import axios from "axios";

export const getData = async (url) => {
  try {
    const fetchData = await axios.get(url, {
      params: {
        active: true,
      },
    });

    return fetchData.data;
  } catch (error) {
    console.error("Error consiguiendo datos: ", error);
    throw error;
  }
};

export const postData = async (url, values) => {
  try {
    await axios.post(url, values);
  } catch (error) {
    console.error("Error en la operacion post: ", error);
  }
};

export const updateData = async (url, values) => {
  try {
    await axios.put(url, values);
  } catch (error) {
    console.error("Error en la operacion post: ", error);
  }
};

export const deleteData = async (url, id) => {
  try {
    await axios.patch(`${url}${id}/`, {
      active: false,
    });
  } catch (error) {
    console.error("Error al eliminar el registro", error);
    throw error;
  }
};
