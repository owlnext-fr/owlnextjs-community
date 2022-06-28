import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import LogoutComponent from 'app/components/System/Logout'

type Props = {
    authenticated: boolean
}

const Logout: NextPage<Props> = ({
    authenticated
}) => {
    const router = useRouter()

    return (
        <LogoutComponent 
            authenticated={authenticated}
        />
    )
}

export default Logout
