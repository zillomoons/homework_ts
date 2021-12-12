const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: SetLoadingType): LoadingState => { // fix any
    switch (action.type) {
        case 'SET-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}


export const loadingAC = (isLoading: boolean): SetLoadingType => ( { type: 'SET-LOADING', isLoading } ) // fix any

type SetLoadingType = {
    type: 'SET-LOADING'
    isLoading: boolean
}
export type LoadingState = typeof initState;