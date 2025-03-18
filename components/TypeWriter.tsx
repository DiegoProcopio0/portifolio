'use client'

import { useEffect, useState, useCallback } from 'react'

type TypeWriterProps = {
  text: string
}

interface WriteOnScreen {
  (text: string, i?: number): void
}

export function TypeWriter(props: TypeWriterProps) {
  const [text, setText] = useState('')

  const writeOnScreen: WriteOnScreen = useCallback(
    (text, i = 0) => {
      if (i < text.length) {
        setText(text.slice(0, i + 1))
        setTimeout(() => writeOnScreen(text, i + 1), 100)
      }
    },
    [setText]
  )

  useEffect(() => {
    setTimeout(() => writeOnScreen(props.text))
  }, [props, writeOnScreen])

  return <div>{text}</div>
}
