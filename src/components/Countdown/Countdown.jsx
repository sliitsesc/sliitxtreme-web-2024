import { timeline } from "../../lib/data/timeline";
import { useCountdown } from "../../lib/hooks/useCountdown";

export default function Countdown() {
  const timeLeft = useCountdown(timeline.regStartingDate);

  return (
    <div className="flex justify-center dm-sans-400">
      <div className="grid grid-flow-col space-x-2 sm:space-x-2 text-center auto-cols-max">
        <div className="flex flex-col py-4 px-2 text-[14px] sm:text-[18px] bg-[#0000002d] backdrop-blur-sm rounded-3xl text-white drop-shadow-white-glow">
          <span className="countdown dm-sans-800 text-[46px] sm:text-[64px] md:text-[80px] text-white">
            <span
              className="drop-shadow-white-glow"
              style={{ "--value": timeLeft.days }}
            ></span>
          </span>
          DAYS
        </div>
        <div className="flex flex-col py-4 px-2 text-[14px] sm:text-[18px] bg-[#0000002d] backdrop-blur-sm rounded-3xl text-white drop-shadow-white-glow">
          <span className="countdown dm-sans-800 text-[46px] sm:text-[64px] md:text-[80px] text-white">
            <span
              className="drop-shadow-white-glow"
              style={{ "--value": timeLeft.hours }}
            ></span>
          </span>
          HOURS
        </div>
        <div className="flex flex-col py-4 px-2 text-[14px] sm:text-[18px] bg-[#0000002d] backdrop-blur-sm rounded-3xl text-white drop-shadow-white-glow">
          <span className="countdown dm-sans-800 text-[46px] sm:text-[64px] md:text-[80px] text-white">
            <span
              className="drop-shadow-white-glow"
              style={{ "--value": timeLeft.minutes }}
            ></span>
          </span>
          MINUTES
        </div>
        <div className="flex flex-col py-4 px-2 text-[14px] sm:text-[18px] bg-[#0000002d] backdrop-blur-sm rounded-3xl text-white drop-shadow-white-glow">
          <span className="countdown dm-sans-800 text-[46px] sm:text-[64px] md:text-[80px] text-white">
            <span
              className="drop-shadow-white-glow"
              style={{ "--value": timeLeft.seconds }}
            ></span>
          </span>
          SECONDS
        </div>
      </div>
    </div>
  );
}
