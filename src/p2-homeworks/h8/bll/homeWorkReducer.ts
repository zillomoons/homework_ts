export type PersonType = {
    _id: number,
    name: string,
    age: number
}
type ActionType = {
    type: 'sort' | 'check',
    payload: 'up' | 'down' | number
}

export const homeWorkReducer = (state: PersonType[], action: ActionType): PersonType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            if (action.payload === 'up') {
                return [...state.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                })];
            }
            return [...state.sort(function (a, b) {
                if (a.name < b.name) {
                    return 1;
                }
                if (a.name > b.name) {
                    return -1;
                }
                return 0;
            })];

        }
        case 'check': {
            return state.filter(u => u.age > action.payload)
        }
        default:
            return state
    }
}