export const addFeature = (id, price) => {

    return { type: 'ADD_FEATURE', payload: { id, price: price } }
}

export const deleteFeature = (id, price) => {
    return { type: 'DELETE_FEATURE', payload: { id, price: price } }
}