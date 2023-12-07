import React, { useState } from "react";

export default function Counter() {
   const [count, setCount] = useState(0);

   function increment() {
        setCount(count + 1);
   }

   function decrement() {
        setCount(count - 1);
   }

   return (
        <div>
            <div>{count}</div>
            <button type="button" onClick={increment}>increment</button>
            <button type="button" onClick={decrement}>decrement</button>
        </div>
   )
}