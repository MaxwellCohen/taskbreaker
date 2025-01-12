export function SlowComponent({ children }: { children?: React.ReactNode; }) {
  const stopTime = Date.now() + 40;
  let i = 0;
  if (typeof window !== 'undefined') {
    while (Date.now() < stopTime) {
      i += Math.random();
    }
  }

  console.log(i);
  return <div>
    Slow component
    {children}
  </div>;
}
