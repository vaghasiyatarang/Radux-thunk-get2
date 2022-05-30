import React from 'react'

const ListComp = ({ user }) => {
    return (
        <>
            <h2>ListComp</h2>

            {
                user.map((e, i) => {

                    return (
                        <div key={i}>
                            <p>{e.id}</p>
                            <p>{e.name}</p>
                            <p>{e.email}</p>
                            <p>{e.phone}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ListComp