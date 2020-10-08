export const getUserData = (state) => state.user;

export const getShortName = (state) => {
  const { fullName } = state.user;
  const [firstName] = fullName.split(' ');
  return `${fullName.slice(0, firstName.length + 2)}.`
};
  