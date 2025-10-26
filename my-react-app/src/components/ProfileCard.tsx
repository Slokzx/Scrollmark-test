import { useRef, type CSSProperties } from "react";
import Card from "./Card";
import IconButton from "./IconButton";
import PillButton from "./PillButton";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  ThemeToggleIcon,
  TrendArrowIcon,
  UsersIcon,
} from "./icons";
import type { ProfileCardData } from "../types";
import "./ProfileCard.css";

interface ProfileCardProps {
  data: ProfileCardData;
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

const ProfileCard = ({ data, theme, onToggleTheme }: ProfileCardProps) => {
  const { profile, tags, metrics, carousel } = data;
  const { username, name, followers, followersChange, avatar } = profile;
  const carouselRef = useRef<HTMLDivElement>(null);

  const isLight = theme === "light";
  const scrollCarousel = (direction: "prev" | "next") => {
    const container = carouselRef.current;
    if (!container) return;

    const firstItem = container.querySelector<HTMLElement>(
      ".profile-card__carousel-item"
    );
    const itemWidth = firstItem?.offsetWidth ?? 110;
    const styles = getComputedStyle(container);
    const gap = parseFloat(styles.columnGap || styles.gap || "0");
    const offset = itemWidth + gap;

    container.scrollBy({
      left: direction === "next" ? offset : -offset,
      behavior: "smooth",
    });
  };

  return (
    <Card variant="profile">
      <header className="profile-card__intro">
        <img
          className="profile-card__avatar profile-card__avatar--featured"
          src={avatar}
          alt={`Avatar for ${username}`}
        />
        <div className="profile-card__intro-body">
          <div className="profile-card__intro-top">
            <div>
              <p className="profile-card__username">{username}</p>
              <p className="profile-card__name">{name}</p>
            </div>
            <div className="profile-card__actions">
              <IconButton
                aria-label={
                  isLight ? "Switch to dark mode" : "Switch to light mode"
                }
                aria-pressed={isLight}
                onClick={onToggleTheme}
                className={`icon-button--lg ${
                  isLight ? "icon-button--active" : ""
                }`.trim()}
              >
                <ThemeToggleIcon />
              </IconButton>

              <IconButton
                aria-label="Open profile in new tab"
                className="icon-button--lg"
              >
                <ExternalLinkIcon />
              </IconButton>
            </div>
          </div>
          <div className="profile-card__tags">
            {tags.map((tag) => (
              <PillButton key={tag.label} tone={tag.color}>
                {tag.label}
              </PillButton>
            ))}
          </div>
        </div>
      </header>

      <div className="profile-card__metrics">
        <div
          className="profile-card__metric-pill"
          style={{ "--metric-color": "#2fefb4" } as CSSProperties}
        >
          <div className="profile-card__metric-icon">
            <UsersIcon />
          </div>
          <div className="profile-card__metric-content">
            <span className="profile-card__metric-label">{followers}</span>
            <span className="profile-card__metric-delta profile-card__metric-delta--accent">
              {followersChange}
            </span>
          </div>
        </div>
        {metrics.map((metric) => {
          const isTrend = metric.icon === "trend";
          const isNegative = isTrend && metric.label.trim().startsWith("-");
          const metricColor =
            metric.accent ??
            (isTrend ? (isNegative ? "#D4191C" : "#09B55B") : "#2fefb4");

          return (
            <div
              key={metric.label}
              className="profile-card__metric-pill profile-card__metric-pill--compact"
              style={{ "--metric-color": metricColor } as CSSProperties}
            >
              <div
                className={[
                  "profile-card__metric-icon",
                  isTrend ? "profile-card__metric-icon--trend" : "",
                  isTrend && isNegative
                    ? "profile-card__metric-icon--down"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {isTrend ? (
                  <TrendArrowIcon
                    color={metricColor}
                    direction={isNegative ? "down" : "up"}
                  />
                ) : (
                  <UsersIcon />
                )}
              </div>
              <div className="profile-card__metric-content">
                <span className="profile-card__metric-label profile-card__metric-label--accent">
                  {metric.label}
                </span>
                <span className="profile-card__metric-delta profile-card__metric-delta--accent">
                  {metric.delta}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="profile-card__carousel-wrapper">
        <div className="profile-card__carousel-controls">
          <button
            className="profile-card__carousel-cta-button"
            type="button"
            aria-label="Previous posts"
            onClick={() => scrollCarousel("prev")}
          >
            <ChevronLeftIcon />
          </button>
          <button
            className="profile-card__carousel-cta-button"
            type="button"
            aria-label="Next posts"
            onClick={() => scrollCarousel("next")}
          >
            <ChevronRightIcon />
          </button>
        </div>
        <div
          className="profile-card__carousel"
          aria-label="Top performing posts"
          ref={carouselRef}
        >
          {carousel.map((item) => (
            <div className="profile-card__carousel-item" key={item.image}>
              <img src={item.image} alt={item.alt} />
              {item.isAction && (
                <button
                  className="profile-card__carousel-action"
                  type="button"
                  aria-label="View more posts"
                >
                  <ArrowRightIcon />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
