export const FormsErrors = (values,  error, inputName, maxLength) => {
    if (!values[inputName]) {
        error[inputName] = 'Values is null';
    }
    if (values[inputName].length > maxLength) {
        error[inputName] = `Max length is ${maxLength}`;
    }
    return error.fullname;
}