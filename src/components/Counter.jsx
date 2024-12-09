import React, { useEffect, useState } from "react";

const easeOutQuad = (t) => t * (2 - t); // Easing function for smoother transition

const Counter = ({ end, duration = 4000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Clamp progress between 0 and 1
      const easedProgress = easeOutQuad(progress); // Apply easing for smoother motion
      const currentValue = Math.floor(easedProgress * end); // Calculate eased value
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate); // Continue animation
      }
    };

    requestAnimationFrame(animate); // Start animation
  }, [end, duration]);

  return <span>{count}</span>;
};

export default Counter;
