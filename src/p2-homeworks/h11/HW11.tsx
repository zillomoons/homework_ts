import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const onChangeRange = (array: number[]) => {
        setValue1(array[0]);
        setValue2(array[1]);
    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div style={{display: 'flex', alignItems: 'center'}}>
                <span>{value1}</span>
                <SuperRange onChangeRange={setValue1} value={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div style={{display: 'flex', marginTop: '25px'}}>
                <span style={{marginRight: '8px'}}>{value1}</span>
                <SuperDoubleRange onChangeRange={onChangeRange}
                                  value={[value1, value2]}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span style={{marginLeft: '8px'}}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
