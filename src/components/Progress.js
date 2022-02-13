import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

/* function valuetext(value) {
  return `${value}`;
} */

function DiscreteSliderSteps(props) {
  return (
    <Box sx={{ width: 500 }}>
      <Slider
        label={props.value}
        aria-label="Small steps"
        defaultValue={1}
        // getAriaValueText={value}
        step={1}
        marks
        min={1}
        max={20}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}

export default DiscreteSliderSteps;