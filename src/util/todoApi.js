import axios from "axios";

export const listCreate = async (url, data) => {
  try {
    await axios.post(url, {
      data: JSON.stringify(data),
      done: false,
    });
    window.location.reload();
  } catch (error) {
    console.error("Error", error);
  }
};

// Read는 useFetch로

export const listUpdate = async (url, id, data) => {
  try {
    await axios.patch(`${url}/${id}`, { id: id, text: JSON.stringify(data) });
    window.location.reload();
  } catch (error) {
    console.error("Error", error);
  }
};

export const doneUpdate = async (url, id, done) => {
  try {
    await axios.patch(`${url}/${id}`, { id: id, done: done });
    window.location.reload();
  } catch (error) {
    console.error("Error", error);
  }
};

export const listDelete = async (url, id) => {
  try {
    await axios.delete(`${url}/${id}`);
    window.location.reload();
  } catch (error) {
    console.error("Error", error);
  }
};
