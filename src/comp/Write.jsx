import React, { useState } from 'react';


function Write(props) {

    let [txt, setTxt] = useState('');

    return (
        <div className='write'>
            <form>
                <input type="text" name="text" placeholder="할 일을 입력해주세요."></input>
                <input type="submit" value="Enter"></input>
            </form>
        </div>
    );
}

export default Write;