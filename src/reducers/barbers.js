import { GET_BARBERS } from '../actions/types';

const barbersReducer = (state = [], { type, barbers }) => (type === GET_BARBERS ? barbers : state);

export default barbersReducer;
