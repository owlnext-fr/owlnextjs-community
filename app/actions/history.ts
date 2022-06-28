export const CHECK_SIDEBLOCK_HISTORY = 'CHECK_SIDEBLOCK_HISTORY'
export const CREATE_SIDEBLOCK_HISTORY = 'CREATE_SIDEBLOCK_HISTORY'
export const EMPTY_SIDEBLOCK_HISTORY = 'EMPTY_SIDEBLOCK_HISTORY'

export const checkSideblockHistory = (object: any) => ({
    type: CHECK_SIDEBLOCK_HISTORY,
    object
})

export const createSideblockHistory = (object: any, isHistory?: boolean) => ({
    type: CREATE_SIDEBLOCK_HISTORY,
    object,
    isHistory
})

export const emptySideblockHistory = () => ({
    type: EMPTY_SIDEBLOCK_HISTORY
})