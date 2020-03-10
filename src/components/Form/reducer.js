import { reducerCreator } from '../../utils/reducerCreator';
import { TYPES } from './aciton';

const initialState = {
  name: '',
  tel: '',
};

export default reducerCreator(TYPES, initialState);
