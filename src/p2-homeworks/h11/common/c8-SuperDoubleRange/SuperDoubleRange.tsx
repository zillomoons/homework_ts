import React from 'react';
import Slider from '@mui/material/Slider';
import Box from "@mui/material/Box";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const minDistance = 10;
    const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        if (onChangeRange) {
            if (!Array.isArray(newValue)) {
                return;
            }

            if(newValue[1] - newValue[0] < minDistance){
                if (activeThumb === 0) {
                    const clamped = Math.min(newValue[0], 100 - minDistance);
                    onChangeRange([clamped, clamped + minDistance]);
                } else {
                    const clamped = Math.max(newValue[1], minDistance);
                    onChangeRange([clamped - minDistance, clamped]);
                }
            } else{
                onChangeRange(newValue as [number, number])

            }
        }
    }
    return (
        <Box sx={{width: 300}}>
            {/*DoubleRange*/}
            <Slider
                getAriaLabel={() => 'Double range slider'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                disableSwap
            />

        </Box>
    )
}

export default SuperDoubleRange
