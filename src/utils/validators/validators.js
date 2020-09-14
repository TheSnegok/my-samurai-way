export const required = (value) => {
    if(value.newPostText) return undefined;
    return 'Values is null';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.newPostText.length > maxLength)  return `Max length is 5`;
    return undefined;
}