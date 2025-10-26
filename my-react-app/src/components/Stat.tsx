import type { HTMLAttributes, ReactNode } from "react";
import "./Stat.css";
import { HeartIcon, MessageIcon } from "./icons";

type StatIcon = "heart" | "message";

interface StatProps extends HTMLAttributes<HTMLDivElement> {
  icon: StatIcon;
  value: string | number;
  label?: string;
}

const iconMap: Record<StatIcon, ReactNode> = {
  heart: <HeartIcon />,
  message: <MessageIcon />,
};

const defaultLabels: Record<StatIcon, string> = {
  heart: "likes",
  message: "comments",
};

const Stat = ({ icon, value, label, className = "", ...props }: StatProps) => {
  const ariaLabel = label ?? `${value} ${defaultLabels[icon]}`;

  return (
    <div
      className={`stat ${className}`.trim()}
      aria-label={ariaLabel}
      {...props}
    >
      {iconMap[icon]}
      <span className="stat-value">{value}</span>
    </div>
  );
};

export default Stat;
