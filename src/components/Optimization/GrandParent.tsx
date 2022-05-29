import React, { useState } from 'react'
import { ChildOne } from './ChildOne'
import { OptimizedParentTwo } from './OptimizedParentTwo'

export const GrandParent = () => {
    const [newCount, setNewCount] = useState(0)
    return (
        <div>
            <button onClick={() => setNewCount(nc => nc + 1)}>GrandParent Count - {newCount}</button>
            <OptimizedParentTwo newCount={newCount}>
                <ChildOne />
            </OptimizedParentTwo>
        </div>
    )
}