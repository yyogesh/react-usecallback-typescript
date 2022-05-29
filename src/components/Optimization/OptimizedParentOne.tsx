import React, { useState } from 'react'

export const OptimizedParentOne = ({ children }: { children: any }) => {
    const [count, setCount] = useState(0)

    console.log('OptimizedParentOne Render')
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            {children}
        </div>
    )
}