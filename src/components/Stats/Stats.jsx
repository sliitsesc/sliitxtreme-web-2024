import React from "react";

function Stats() {
  return (
    <div className="flex items-center justify-center px-8 py-12 gap-y-10 md:gap-x-10">
      <div className="flex-col w-full max-w-4xl shadow stats stats-vertical lg:stats-horizontal lg:flex-row lg:w-3/4">
        <div className="flex flex-col items-center stat">
          <div className="stat-title">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="flex flex-col items-center stat">
          <div className="stat-title">New Users</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="flex flex-col items-center stat">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
