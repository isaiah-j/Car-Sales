const INITIAL_STATE = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const carReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_FEATURE':
            // map over additionalFeatures and return the correct feature based off the ID
            // Add this object into features

            // Check if feature already exists
            let featureAlreadyExists = false
            state.car.features.forEach((el) => {
                if (el.id == action.payload.id) {
                    featureAlreadyExists = true
                }

            })

            // break case and return state if true
            if (featureAlreadyExists) return state

            const { id } = action.payload
            let addFeature = state.additionalFeatures.find((feature) => {
                return id == feature.id
            })
            const newState = { ...state }

            newState.car.features.push(addFeature)

            newState.car.price += action.payload.price

            return newState

        case 'DELETE_FEATURE':
            // use the id inside of actions to delete the feature
            let nonDeletedFeatures = state.car.features.filter((feature) => {
                return !(feature.id == action.payload.id)
            })

            let newState2 = { ...state }

            newState2.car.features = nonDeletedFeatures

            newState2.car.price -= action.payload.price


            return newState2
        default:
            return { ...state }
    }
}

