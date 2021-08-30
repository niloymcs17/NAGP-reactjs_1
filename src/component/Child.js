import React from 'react'

function Child(props) {
    const id = props.ids
    
    const comments = props.comments;
    return (
        <div>
            { comments.map((cmt) => {
                if (cmt.isActive && cmt.blogId === id ) {
                    return ( <p key={cmt.id}> {cmt.comment} - ID={cmt.id} </p>)
                } else {
                    return ''
                }
            })}
        </div>
    )
}

export default Child
