import React from 'react'

function Count({ text, count }: { text: any, count: any }) {
    console.log(`Rendering ${text}`)
    return <div>{text} - {count}</div>
}

export default React.memo(Count)