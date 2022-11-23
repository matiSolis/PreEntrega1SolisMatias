import React from 'react'

const Cards = ({item}) => {
  return (
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item}</h2>
    <p>BLA BLA BLA BLA BLA BLA BLA</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Comprar</button>
    </div>
  </div>
</div>
  )
}

export default Cards