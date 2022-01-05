const initState: InitStateType = {
    theme: 'darkTheme'
};

export const themeReducer = (state = initState, action: ChangeThemeActionType): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, ...action.payload};
        }
        default: return state;
    }
};

export const changeThemeC = (theme: ThemesType): ChangeThemeActionType => ({type: "CHANGE-THEME", payload: {theme} } as const); // fix any

type ChangeThemeActionType = {
    type: "CHANGE-THEME",
    payload: {theme: ThemesType}
}

type InitStateType = {
    theme: ThemesType
}
export type ThemesType = 'darkTheme' | 'redTheme' | 'someTheme' | 'bubbleGumTheme' | 'neutralTheme'
