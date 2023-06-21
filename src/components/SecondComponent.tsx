import React from 'react'

type Props = {
  name: string
}

function SecondComponent(props: Props) {
  return (
    <div>
      <h2>Meu segundo componente</h2>
      <h3>O nome dele é {props.name}</h3>
    </div>
  )
}

export default SecondComponent
