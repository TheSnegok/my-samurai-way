import React from 'react'

export const Textarea = (props) => {
    return (
        <div>
            <textarea name='newPostText' {...props} />
        </div>
    )
}