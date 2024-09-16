import { timeline } from "../../lib/data/timeline";
import { useCountdown } from "../../hooks";

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown({ targetDate: timeline.regClosingDate });
  
  return (
    <div className="flex justify-center mb-8">
      <div className="grid grid-flow-col space-x-2 sm:space-x-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-white rounded-box text-gray-800">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": days }}></span>
          </span>
          DD
        </div>
        <div className="flex flex-col p-2 bg-white rounded-box text-gray-800">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": hours }}></span>
          </span>
          HH
        </div>
        <div className="flex flex-col p-2 bg-white rounded-box text-gray-800">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": minutes }}></span>
          </span>
          MM
        </div>
        <div className="flex flex-col p-2 bg-white rounded-box text-gray-800">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": seconds }}></span>
          </span>
          SS
        </div>
      </div>
    </div>
  );
}
