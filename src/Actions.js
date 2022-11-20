import { CheckOutButton, OnHoldSwitch } from "./SwitchButtons";

export function Actions({switchOn}) {

    var actionsContent =  switchOn?(
        <>
        <OnHoldSwitch on={switchOn}/>
        <CheckOutButton/>
        </>
    ):(
        <OnHoldSwitch on={switchOn}/>
    )
    return <div className="actions">
        {actionsContent}
    </div>
}

