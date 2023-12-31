import React from 'react'

type Props = {
  title: string
  content: string
  commentsQty: number
  tags: string[]
  category: Category
}

export enum Category {
  JS = 'javascript',
  TS = 'typescript',
  REACT = 'react',
}

function Destructuring({ title, content, commentsQty, tags, category }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentsQty}</p>
      <div>
        {tags.map((tag) => (
          <span>#{tag}</span>
        ))}
      </div>
      <h4>Categoria: {category}</h4>
    </div>
  )
}

export default Destructuring
