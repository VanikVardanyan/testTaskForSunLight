import { SAVEFORMDATA } from "../actionType";

export const getFormData = (data) => ({
  type: SAVEFORMDATA,
  payload: { data },
});
