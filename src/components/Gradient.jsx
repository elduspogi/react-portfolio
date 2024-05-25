import React, { useEffect, useRef} from 'react';

const InteractiveBubble = () => {
    const curX = useRef(0);
    const curY = useRef(0);
    const tgX = useRef(0);
    const tgY = useRef(0);
    const interBubbleRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            tgX.current = event.clientX;
            tgY.current = event.clientY;
        };

        const move = () => {
            curX.current += (tgX.current - curX.current) / 20;
            curY.current += (tgY.current - curY.current) / 20;

            if (interBubbleRef.current) {
                interBubbleRef.current.style.transform = `translate(${Math.round(curX.current)}px, ${Math.round(curY.current)}px)`
            }

            requestAnimationFrame(move);
        };

        move();

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div className="interactive" ref={interBubbleRef}></div>
}

const Gradient = () => {
  return (
    <div className="gradient-bg">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <InteractiveBubble />
      </div>
    </div>
  )
}

export default Gradient
