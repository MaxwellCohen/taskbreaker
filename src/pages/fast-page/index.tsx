
import { Suspense, use, useEffect, useState } from "react";


const TaskBreaker: React.FC<any> = ({ children, P }) => {

  if (typeof window !== 'undefined') {
    const breakTask = use(P)
  }
  return <>{children}</>;
};

function FastWrapper({ children }: { children: React.ReactNode }) {
  // @ts-ignore new feature that is not supported in ts
  const breakTask = globalThis.scheduler?.yield()

  return <Suspense>
    <TaskBreaker P={breakTask} >
      {children}
    </TaskBreaker>
  </Suspense>
}



function SlowComponent({ children }: { children?: React.ReactNode }) {
  const stopTime = Date.now() + 40;
  let i = 0;
  if (typeof window !== 'undefined') {
    while (Date.now() < stopTime) {
      i += Math.random();
    }
  }

  console.log(i)
  return <div>
    Slow component
    {children}
  </div>
}



export default function Home() {


  return (
    <div
    >
      <h1> Fast page </h1>

      <FastWrapper> <SlowComponent >
        <FastWrapper> <SlowComponent >
          <FastWrapper> <SlowComponent >
            <FastWrapper> <SlowComponent ></SlowComponent></FastWrapper>
          </SlowComponent></FastWrapper>
        </SlowComponent></FastWrapper>
      </SlowComponent></FastWrapper>


      <FastWrapper> <SlowComponent ></SlowComponent></FastWrapper>
      <FastWrapper> <SlowComponent ></SlowComponent></FastWrapper>
      <FastWrapper> <SlowComponent ></SlowComponent></FastWrapper>

    </div>
  );
}

