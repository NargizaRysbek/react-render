import React from 'react'
import css from './Card.module.css'

export const Card = (props) => {

    const {full_name, position, id} = props
    
    const avatar_styles = {
        border: '1px solid',
        height: '80px',
        borderRadius: '3px',
        width: '100px',
        backgroundColor: 'green'
    }
    return (
        <div className={css.card}>
            <div style={avatar_styles}></div>

            <div className="description">
                <h2>{full_name}</h2>
                <b>{position}</b>
                <p>{id}</p>
            </div>
        </div >
    )
}