import React from 'react'

export const ChildThree = ({ name, person }: { name: string, person: any }) => {
    console.log('ChildFive Render')
    return (
        <div>
            Hello {name}
        </div>
    )
}

export const MemoizedChildThree = React.memo(ChildThree)