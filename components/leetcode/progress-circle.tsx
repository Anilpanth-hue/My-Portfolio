import React from 'react';

interface ProgressCircleProps {
  solved: number;
  total: number;
  size?: number;
  strokeWidth?: number;
}

export const ProgressCircle = ({
  solved,
  total,
  size = 160,
  strokeWidth = 5,
}: ProgressCircleProps) => {
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (solved / total) * 100;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (  
    <svg width={size} height={size}>
      <defs>
        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#15EDED" />
          <stop offset="50%" stopColor="#9747FF" />
          <stop offset="100%" stopColor="#7427FF" />
        </linearGradient>
      </defs>

      {/* Outer Background Circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(128, 128, 128, 0.3)" /* Light gray background stroke */
        strokeWidth={strokeWidth}
      />

      {/* Progress Circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="url(#progressGradient)"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        style={{
          transition: 'stroke-dashoffset 0.5s ease',
          filter: 'drop-shadow(0 0 6px rgba(151, 71, 255, 0.7))',
        }}
      />

      {/* "Solved" Text */}
      <text
        x={size / 2}
        y={size / 2 - 25} /* Adjusted spacing above the number */
        textAnchor="middle"
        className="text-sm font-medium"
        style={{
          fill: 'url(#progressGradient)',
          fontSize: '14px',
          fontWeight: '500',
          filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.6))',
        }}
      >
        Solved
      </text>

      {/* Solved Number */}
      <text
        x={size / 2}
        y={size / 2}
        textAnchor="middle"
        dominantBaseline="central"
        className="text-4xl font-bold"
        style={{
          fill: 'white',
          fontSize: '36px',
          fontWeight: '700',
          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))',
        }}
      >
        {solved}
      </text>

      {/* Total Number */}
      <text
        x={size / 2}
        y={size / 2 + 30} /* Adjusted spacing below the number */
        textAnchor="middle"
        className="text-sm"
        style={{
          fill: 'rgba(255, 255, 255, 0.8)',
          fontSize: '14px',
          fontWeight: '400',
          filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4))',
        }}
      >
        /{total}
      </text>
    </svg>
  );
};
