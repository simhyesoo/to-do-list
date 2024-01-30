import React from 'react';

function Item(props) {
    return (
        <div className='item'>
            <button>수정</button>
            <button>삭제</button>
        </div>
    );
}

export default Item;