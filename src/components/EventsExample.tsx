import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }
    const dragHandler = (event: React.DragEvent<HTMLDivElement>) => {
        console.log("drag")
    }
    const dragWithPreventHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDrag(true)
    }
    const leaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDrag(false)
    }
    const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDrag(false)
        console.log('drop')
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder="controlled"/>
            <input ref={inputRef} type="text" placeholder="uncontrolled"/>
            <button onClick={clickHandler}>click</button>
            <div onDrag={dragHandler} draggable
                 style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red'}}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: 200, height: 200, background: 'red', marginTop: 15}}>
            </div>
        </div>
    );
};

export default EventsExample;