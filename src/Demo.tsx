import React from 'react'
interface Categories{
    items:string[];
    heading:string;
}
export default function Demo(cats:Categories) {

  return (
    <div>
        <p>{cats.heading}</p>

<ul className="list-group">
    {cats.items.map(eachItem=>(
        <li className="list-group-item">{eachItem}</li>
  
    ))}
  
</ul>
    </div>
  )
}
