import axiosWithAuth from "../helpers/axiosWithAuth";

export const fetchColorService = () => {
  return axiosWithAuth()
    .get("/colors")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
