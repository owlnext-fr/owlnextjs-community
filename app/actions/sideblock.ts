export const SET_SIDEBLOCK_FIELDS = 'SET_SIDEBLOCK_FIELDS'

export const setSideblockFields = (field: string, value: any) => ({
    type: SET_SIDEBLOCK_FIELDS,
    field,
    value
})