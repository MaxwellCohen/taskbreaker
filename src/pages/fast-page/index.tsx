
import { Suspense, use, useEffect, useState } from "react";
import { SlowComponent } from "../../components/SlowComponent";


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



export default function Home() {
  return (
    <div
    >
      <h1> Fast page </h1>
      <FastWrapper> <SlowComponent >
        <FastWrapper> <SlowComponent >
          <FastWrapper> <SlowComponent >
            <FastWrapper> <SlowComponent >
              <FastWrapper> <SlowComponent >
                <FastWrapper> <SlowComponent >
                  <FastWrapper> <SlowComponent >
                  </SlowComponent></FastWrapper>
                </SlowComponent></FastWrapper>
              </SlowComponent></FastWrapper>
            </SlowComponent></FastWrapper>
          </SlowComponent></FastWrapper>
        </SlowComponent></FastWrapper>
      </SlowComponent></FastWrapper>
    </div>
  );
}

