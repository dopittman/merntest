import React from 'react'

const Person = (props) => {

  return <div>
    <ul>
      <li>{props.info.name}</li>
    </ul>
  </div>
}

export default Person