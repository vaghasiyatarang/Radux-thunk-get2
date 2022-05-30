import React from 'react'

const AlbumsListcomp = ({albums}) => {
    // console.log({albums});
  return (
    <>
        <h1>AlbumsListcomp</h1>

        {
            albums.map((e)=>{
                return(
                    <div key={e.id}>
                        <h1>{e.title}</h1>
                    </div>
                )
            })
        }
    </>
  )
}

export default AlbumsListcomp