import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';

export function OnHoldSwitch({on}) {
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="onHold"
          control={<Switch color="primary" defaultChecked={on}/>}
          label="預約"
          labelPlacement="top"
        />
      </FormGroup>
    </FormControl>
  );
}


export function CheckOutButton(){
    return <Button variant="contained">借出</Button>
}