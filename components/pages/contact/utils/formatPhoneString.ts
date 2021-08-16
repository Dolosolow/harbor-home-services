export const formatPhoneString = (phoneNumber: string, addDivider: boolean) => {
  let formattedPhone = phoneNumber.replace(/[^0-9-]/g, "").replace(/(\..*)\./g, "$1");

  if ((formattedPhone.length === 3 || formattedPhone.length === 7) && addDivider) {
    formattedPhone = formattedPhone.concat("-");
  }

  return formattedPhone.length > 12
    ? formattedPhone.substring(0, formattedPhone.length - 1)
    : formattedPhone;
};
