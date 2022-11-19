function StatusBar(){
  
    if(onHold){
        return <div className="status-bar">
            <BorrowButton></BorrowButton><PutOnHold onHold={onHold}></PutOnHold>
        </div>
    } else {
        return <div>
            <PutOnHold onHold={onHold}></PutOnHold>
        </div>
    }

}

function BorrowButton(){
    return <div id="borrow-btn"></div>
}

function PutOnHold({onHold}){
   return <div id="put-on-hold"> 
   {/* need more design */}
   </div>
}