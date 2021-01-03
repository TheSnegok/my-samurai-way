export const updateObjectInArray = (items, itemId, objPropName, newObjProps = null) => {
    return items.map(u => {
        if(u[objPropName] === itemId) {
            return {...u, ...newObjProps};
        } 
        return u;
    })
}