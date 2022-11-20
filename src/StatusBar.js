import { Button, FormGroup, Switch, FormControlLabel } from "@mui/material"
import { useState } from "react"

export default function StatusBar({ initialOnHold }) {
    var [onHold, setOnHold] = useState(initialOnHold)

    //call back that uses setState function has to have the right scope (視野) to know the existence
    // of setState.
    function changeOnHoldState() {
        setOnHold(!onHold)
    }

    return <StatusBarContent onHold={onHold} onChange={changeOnHoldState}></StatusBarContent>
}

function StatusBarContent({ onHold, onChange }) {

    return <div className="status-bar">
        <PutOnHold onHold={onHold} onChange={onChange}></PutOnHold>

        {onHold ? <BorrowButton></BorrowButton> : <></>}
    </div>


}

function BorrowButton() {
    return <Button variant="contained" id="borrow-btn">領取</Button>
}

function PutOnHold({ onHold, onChange }) {

    return <FormGroup>
        <FormControlLabel
            labelPlacement="top"
            control={<Switch defaultChecked={onHold} onChange={onChange} />} label="預約" />
    </FormGroup>
}