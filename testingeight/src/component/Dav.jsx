import React from 'react'

const Dav = () => {
    const Artist = ['Wiskid','BB', 'Rema', 'Joeboy', 'Fireboy']
  return (
    <div>
        {
            Artist.map((Music) => (
                <h3>
                    {Music}
                </h3>
            ))
        }
    </div>
  )
}

export default Dav