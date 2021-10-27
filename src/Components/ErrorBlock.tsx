import React from 'react'

type Props = {
  errorInfo: string
}

function ErrorBlock({ errorInfo }: Props) {
  return (
    <div>
      <p>{errorInfo}</p>
    </div>
  )
}

export default ErrorBlock;
