import Card from "./Card";
import IconButton from "./IconButton";
import PillButton from "./PillButton";
import Stat from "./Stat";
import TrendStat from "./TrendStat";
import ExpandableText from "./ExpandableText";
import { ExternalLinkIcon, ThemeToggleIcon } from "./icons";
import type { PostCardData } from "../types";
import "./PostCard.css";

interface PostCardProps {
  data: PostCardData;
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

const PostCard = ({ data, theme, onToggleTheme }: PostCardProps) => {
  const { profile, media, stats, caption, timestamp, tags } = data;
  const { username, followers, avatar } = profile;
  const { image, alt } = media;
  const { likes, comments, trend } = stats;

  const isLight = theme === "light";

  return (
    <Card variant="post">
      <header className="post-card__header">
        <div className="post-card__author">
          <img
            className="author-avatar"
            src={avatar}
            alt={`Avatar for ${username}`}
          />
          <div>
            <p className="author-name">{username}</p>
            <p className="author-meta">{followers}</p>
          </div>
        </div>
        <div className="post-card__actions">
          <IconButton
          aria-label={
            isLight ? "Switch to dark mode" : "Switch to light mode"
          }
          aria-pressed={isLight}
          onClick={onToggleTheme}
          className={`icon-button--lg ${isLight ? "icon-button--active" : ""}`.trim()}
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
      </header>

      <figure className="post-card__media">
        <img className="post-image" src={image} alt={alt} />
      </figure>

      <div className="post-card__stats">
        <div className="stat-group" aria-label="Engagement metrics">
          <Stat icon="heart" value={likes} />
          <Stat icon="message" value={comments} />
        </div>
        <TrendStat percentage={trend} />
      </div>

      <section className="post-card__body">
        <ExpandableText
          text={caption}
          className="post-caption"
          collapsedLines={2}
          toggleClassName="post-card__toggle"
        />
        <p className="post-timestamp">{timestamp}</p>
      </section>

      <footer className="post-card__footer">
        {tags.map((tag) => (
          <PillButton key={tag.label} tone={tag.color}>
            {tag.label}
          </PillButton>
        ))}
      </footer>
    </Card>
  );
};

export default PostCard;
