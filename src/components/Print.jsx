import React, {useRef} from 'react'
import {useReactToPrint} from 'react-to-print';

const ref = React.createRef();

const Print = (props) =>{
    return(
        <div className="Print" ref={ref}>

        </div>
        
    )
}

  export default Print