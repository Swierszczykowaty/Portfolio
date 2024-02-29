import React, { useRef } from "react";
import { useEffect } from "react";
import { PhotographIcon } from '@heroicons/react/solid';
import './Photography.css';

const Photography = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const handleOnDown = (e) => {
      trackRef.current.dataset.mouseDownAt = e.clientX;
    };

    const handleOnUp = () => {
      trackRef.current.dataset.mouseDownAt = "0";
      trackRef.current.dataset.prevPercentage = trackRef.current.dataset.percentage;
    };

    const handleOnMove = (e) => {
      if (trackRef.current.dataset.mouseDownAt === "0") return;

      const mouseDelta =
        parseFloat(trackRef.current.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained =
          parseFloat(trackRef.current.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(
          Math.min(nextPercentageUnconstrained, 0),
          -100
        );

      trackRef.current.dataset.percentage = nextPercentage;

      trackRef.current.style.transform = `translate(${nextPercentage}%, -50%)`;

      const images = trackRef.current.querySelectorAll(".image");
      images.forEach((image) => {
        image.style.objectPosition = `${100 + nextPercentage}% center`;
      });
    };

    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("touchstart", (e) => handleOnDown(e.touches[0]));
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("touchend", (e) => handleOnUp(e.touches[0]));
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));

    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("touchstart", handleOnDown);
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("touchend", handleOnUp);
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchmove", handleOnMove);
    };
  }, []);

  return (
    <div
      id="image-track"
      data-mouse-down-at="0"
      data-prev-percentage="0"
      ref={trackRef}
      className="flex gap-4vmin absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <img
        className="image w-40vmin h-56vmin object-cover"
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="photograph"
        draggable="false"
      />
      <img
        className="image w-40vmin h-56vmin object-cover"
        src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
        alt="photograph"
        draggable="false"
      />
      <img
        className="image w-40vmin h-56vmin object-cover"
        src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="photograph"
        draggable="false"
      />
      <img
        className="image w-40vmin h-56vmin object-cover"
        src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="photograph"
        draggable="false"
      />
      <img
        className="image w-40vmin h-56vmin object-cover"
        src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="photograph"
        draggable="false"
      />
      <img
        className="image w-40vmin h-56vmin object-cover"
        src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80"
        alt="photograph"
        draggable="false"
      />
      <img
        className="image w-40vmin h-56vmin object-cover"
        src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80"
        alt="photograph"
        draggable="false"
      />
      <img 
        className="image w-40vmin h-56vmin object-cover"
        src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="photograph"
        draggable="false"
      />
    </div>
  );
};

export default Photography;
