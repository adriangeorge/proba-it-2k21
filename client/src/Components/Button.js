import React from "react"

const Button = ({ text, btn_type, text_style, func }) => {

    let classNameString = `btn ${btn_type} items-center border rounded-full`;
    return (
        <button className={classNameString} onClick={func}>
            <p className={text_style}>
                {text}
            </p>
        </button >
    )
}

export default Button;