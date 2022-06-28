import axios from 'axios'
import { PushoverBody } from 'app/types/global'

const pushoverCall = async (data: PushoverBody) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `${process.env.BASE_URL}/api/errorCall`,
            headers: {
                'Content-type': 'application/json'
            },
            data: data
        })
    } catch (error) {
        console.dir(error)
    }      
}

export default pushoverCall