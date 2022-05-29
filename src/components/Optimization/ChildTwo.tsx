import React from 'react'

export const ChildTwo = ({ name }: { name: string }) => {
    console.log('ChildTwo Render')
    return <div>ChildTwo component - {name}</div>
}

export const MemoizedChildTwo = React.memo(ChildTwo)