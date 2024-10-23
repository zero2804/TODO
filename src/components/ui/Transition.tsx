import React, { FC, ReactNode, useEffect, useRef } from 'react'
interface ITransitionProps {
    children: ReactNode, 
    className: string, 
    show: boolean, 
    onClick?: ()=>void
}

const Transition: FC<ITransitionProps> = (props) => {
    const {children, className, show, onClick} = props;
    const elem = useRef<HTMLDivElement | null>(null)
    useEffect(()=>{
        if (elem.current && show) {
            elem.current.style.display = 'none';
        }
    }, [])

    useEffect(()=>{
        if (elem.current && show) {
            elem.current.classList.add(`${className}_hide`)
            setTimeout(() => {
                if(elem.current)
                elem.current.style.display = 'none';
            }, 500);
        } else if(elem.current && !show) {
            setTimeout(() => {
                if(elem.current)
                elem.current.classList.remove(`${className}_hide`) 
            }, 50);
            elem.current.removeAttribute('style');
        }
    })
    // console.log(elem);

  return (
    <div ref={elem} className={className} onMouseDown={onClick} >
        {children}
    </div>
  )
}

export default Transition