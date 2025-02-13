import { getdoc } from '@/util/db'
import React from 'react'

const page = () => {
    async function get() {
        const data = await getdoc();
        return data;

    }


    return (
        get() && (<div>
            hihello
            {get()}


        </div>)
    )
}

export default page
