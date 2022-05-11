import React from 'react'



const PaperBodyContent = ({ fields }) => {
  return (
    <>
      {fields.map((field ,index) => (
        <div key={index}>
          <article>{field.content()}</article>
        </div>
      ))}
    </>
  )
}

export default PaperBodyContent
