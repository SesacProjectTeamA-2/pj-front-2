import React, { useRef, useState } from 'react';

export default function Introduce(): JSX.Element {
    const [introduce, setIntroduce] = useState<string | number>('');
    const [readOnlyVal, setReadOnlyVal] = useState<boolean>(true);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    // edit btn 눌렀을 때 focus + 수정 가능 상태로 바뀜
    const changeReadOnly = (): void => {
        inputRef.current?.focus();
        setReadOnlyVal(!readOnlyVal);
    };

    return (
        <div>
            <textarea
                readOnly={readOnlyVal}
                onChange={(e) => setIntroduce(e.target.value)}
                value={introduce}
                ref={inputRef}
                style={{ width: '300px', height: '100px' }}
            />
            <button onClick={(e) => changeReadOnly()}>
                <img src="/asset/icons/edit.svg" alt="editImg"></img>
            </button>
        </div>
    );
}
