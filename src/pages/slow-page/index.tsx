import { SlowComponent } from "@/components/SlowComponent";
import { useEffect, useState } from "react";

export default function Home() {
  

    return (
      <div
        >
        <h1> Slow page </h1> 
        
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />
        <SlowComponent />

      </div>
    );
  }


