const appRoutesRoles = [
    {
        path: '/login',
        roles: ['*']
    },
    {
        path: '/home',
        roles: ['ROLE_TEST']
    }
]

export default appRoutesRoles