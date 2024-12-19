import { useState } from "react"
import {ReactNode} from "react"

const HoverTip = ({children, tip, position, className}) => {
    const [show, setShow] = useState(false)

    const positionClass = {
        "top-middle": `w-max max-w-[200px] bottom-[120%] left-1/2 -translate-x-1/2 `,
        "bottom-middle": `w-max max-w-[200px] top-[120%] left-1/2 -translate-x-1/2 `,
        "right": `w-max max-w-[200px] left-[120%] top-1/2 -translate-y-1/2 `,
        "left": `w-max max-w-[200px] right-[120%] top-1/2 -translate-y-1/2 `,
        "hidden": `hidden`
    }

    return(

        <div className="relative">
                  <p className={`${show ? 'opacity-100 scale-100' : 'opacity-0 scale-50' } ${position ? positionClass[position] : className} bg-slate-800 rounded-xl drop-shadow-lg absolute text-xs text-center px-4 py-2 z-10 duration-300 transition after:absolute after:w-2 after:h-2`}>
                {tip}
            </p>
                  <div className="w-fit h-fit" onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                {children}
            </div>

            </div>
            

    )
}
export default HoverTip