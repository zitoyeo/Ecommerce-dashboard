import React from 'react'
import './box.scss'

const Box = props => {
    const className = {
 
    }

    return (
        <div className={Object.values(className).join(' ')}>
            {props.children}
        </div>
    )
}

export default Box
