import React from 'react'

const Record = ({item, field, label}) => {
    console.log(item)
    return(
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{ item[field] }</span>
        </li>
    )
}

export default Record