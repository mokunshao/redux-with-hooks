import { reducerCreator } from "../../store/reducerCreator";
import { TYPES } from "./aciton";

const initialState = {
  tel: "",
  name: "",
};

export default reducerCreator(TYPES, initialState);
