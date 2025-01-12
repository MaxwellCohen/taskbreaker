import { useEffect, useState } from "react";

export default function Home() {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        if (!isClient) {
            setIsClient(true)
        }
    }, [])

    if (!isClient) {
        return 
    }

    return (
      <div
        >
        <h1> Slow page </h1> 
        {isClient ? <>
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        </> : null}
      </div>
    );
  }


  function SlowComponent() {
    const stopTime = Date.now() + 40;
    let i = 0;
    while(Date.now() < stopTime) {
        i += Math.random(); 
    }
    console.log(i)
    return <div>
        Slow component
    </div>
  }
  