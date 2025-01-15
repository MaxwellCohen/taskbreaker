
import { memo, Suspense, use, useEffect, useState } from "react";
import { SlowComponent } from "../../components/SlowComponent";


const TaskBreaker: React.FC<any> = ({ children, P }) => {

  return <>{children}</>;
};

const FastWrapper = memo(function FastWrapper({ children }: { children: React.ReactNode }) {
  // @ts-ignore new feature that is not supported in ts
  // const breakTask = globalThis.scheduler?.yield()

  return <Suspense>
      {children}
  </Suspense>
})

export default function Home() {
  console.log(Suspense)
  return (
    <div>
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

