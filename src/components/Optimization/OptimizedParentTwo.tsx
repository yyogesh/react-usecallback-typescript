import React, { useState } from 'react'

export const OptimizedParentTwo = ({ children, newCount }: { children: any, newCount: number }) => {
    const [count, setCount] = useState(newCount)

    console.log('OptimizedParentTwo Render')
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            {children}
        </div>
    )
}