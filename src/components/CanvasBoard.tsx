import { useEffect, useRef } from 'react';

interface ICanvasBoard {
  height: string;
  width: string;
}

const CanvasBoard: React.FC<ICanvasBoard> = ({ height, width }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    // Initialize
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      let ctx = canvasCtxRef.current; // Assigning to a temp variable
      ctx!.beginPath(); // Note the Non Null Assertion
      ctx!.arc(95, 50, 40, 0, 2 * Math.PI);
      ctx!.stroke();
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        border: '3px solid black',
      }}
      height={height}
      width={width}
    />
  );
};

export default CanvasBoard;
