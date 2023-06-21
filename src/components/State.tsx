import { useState } from 'react'


const State = () => {
  const [text, setText] = useState<string | null>('Testando hook')

  /*const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  */

  return (
    <div>
      <p>O texto é: {text}</p>
      <input type="text" onChange={e => setText(e.target.value)} />
    </div>
  )
}

export default State
