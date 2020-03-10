import { reducerCreator } from '../../store/reducerCreator';
import { TYPES } from './aciton';

const initialState = {
  name: '',
  tel: '',
};

export default reducerCreator(TYPES, initialState);
