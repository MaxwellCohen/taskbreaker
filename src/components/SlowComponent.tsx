export function SlowComponent({ children }: { children?: React.ReactNode; }) {
  // take 40 ms 
  const stopTime = Date.now() + 40;
  let i = 0;
  if (typeof window !== 'undefined') {
    while (Date.now() < stopTime) {
      i += Math.random();
    }
    console.log('done waiting')
  }
  return <div>
    Slow component
    {children}
  </div>;
}
