import React from 'react'
import { useLocation, useParams } from 'react-router'

const Rpost = () => {
    const { id } = useParams()
    const query = new URLSearchParams(useLocation().search)
    return (
        <div>
            <h2>id is = {id}</h2>
            <h2>{query.get("first")}</h2>
            <h2>{query.get("last")}</h2>
        </div>
    )
}

export default Rpost
