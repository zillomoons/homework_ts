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

    const handleChange = (event: Event, newValue: number | number[]) => {
        if (onChangeRange) {
            onChangeRange(newValue as [number, number])

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
