import axiosWithAuth from "../helpers/axiosWithAuth";

const fetchColorService = () => {
  return axiosWithAuth().get("/colors");

  // .catch((err) => {
  //   return err.message;
  // });
};

export default fetchColorService;
