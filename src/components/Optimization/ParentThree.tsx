import React, { useState, useMemo, useCallback } from 'react'
import { MemoizedChildThree } from './ChildThree'

export const ParentThree = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Vishwas')

    const person = {
        fname: 'Bruce',
        lname: 'Wayne',
    }

    const memoizedPerson = useMemo(() => person, [])

    const handleClick = () => { }

    const memoizedHandleClick = useCallback(handleClick, [])

    console.log('ParentFour Render')
    return (
        <div>
            <button onClick={() => setName('Codevolution')}>Change name</button>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            {/* <MemoizedChildFive name={name} person={memoizedPerson} /> */}
            {/* <MemoizedChildThree name={name} handleClick={memoizedHandleClick} /> */}
        </div>
    )
}