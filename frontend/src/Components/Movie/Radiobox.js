import React, { useState } from 'react';
//import { Radio } from 'antd';

function Radiobox({ groups, handleFilters }) {
    
    const [Radio, setRadio] = useState('')

    const [value, setvalue] = useState(0)
    function handlechange(e) {
        handleFilters(e.target.value)
        setvalue(e.target.value)
    }
    return groups.map((p, i) => (
        <div key={i}>
            <label>{p.name}</label>
            <inuput type="radio" className='mr-2 ml-4' value={`${p._id}`} onChange={(e) => { handlechange(e) }} name="rad" />
               
        </div >
    ))
    //
}

export default Radiobox;