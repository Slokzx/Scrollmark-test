import type { HTMLAttributes } from "react";
import "./Stat.css";
import { TrendArrowIcon } from "./icons";

interface TrendStatProps extends HTMLAttributes<HTMLDivElement> {
  percentage: number;
  label?: string;
}

const TrendStat = ({
  percentage,
  label,
  className = "",
  ...props
}: TrendStatProps) => {
  const direction = percentage >= 0 ? "up" : "down";
  const trendLabel =
    label ?? `Trending ${direction} by ${Math.abs(percentage)} percent`;

  return (
    <div
      className={`stat stat--trend stat--${direction} ${className}`.trim()}
      aria-label={trendLabel}
      {...props}
    >
      <span className={`trend-icon trend-icon--${direction}`}>
        <TrendArrowIcon
          color={direction === "up" ? "#09B55B" : "#D4191C"}
          direction={direction}
        />
      </span>
      <span className="stat-value">{Math.abs(percentage)}%</span>
    </div>
  );
};

export default TrendStat;
