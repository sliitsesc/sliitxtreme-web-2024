import { useEffect } from "react";

export default function HeaderAnimation() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/finisher-header.es5.min.js";
    script.async = true;
    script.onload = () => {
      if (window.FinisherHeader) {
        new window.FinisherHeader({
          count: 12,
          size: {
            min: 1300,
            max: 1500,
            pulse: 0,
          },
          speed: {
            x: {
              min: 0.6,
              max: 3,
            },
            y: {
              min: 0.6,
              max: 3,
            },
          },
          colors: {
            background: "#2e2e75",
            particles: ["#2e2e75", "#ea7a26"],
          },
          blending: "lighten",
          opacity: {
            center: 0.6,
            edge: 0,
          },
          skew: 0,
          shapes: ["c"],
        });
      }
    };
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="finisher-header absolute w-full h-full overflow-hidden"></div>
  );
}
