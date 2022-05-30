import React from 'react'

const PostListComp = ({ post }) => {
    // console.log(post);
    return (
        <>
            <h3>PostListComp</h3>

            {
                post.map((e, i) => {
                    return (
                        <div key={i} style={{ width: "18rem" , borderRadius:"5px" , boxShadow:"1px 1px 20px ghostwhite"}}>
                            <div>
                                <h5>{e.title}</h5>
                                <p>{e.body}</p>
                                <a>Go somewhere</a>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}
export default PostListComp