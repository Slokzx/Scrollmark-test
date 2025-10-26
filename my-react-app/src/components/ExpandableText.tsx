import {
  type CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";
import "./ExpandableText.css";

interface ExpandableTextProps {
  text: string;
  collapsedLines?: number;
  className?: string;
  toggleClassName?: string;
}

const ExpandableText = ({
  text,
  collapsedLines = 2,
  className,
  toggleClassName,
}: ExpandableTextProps) => {
  const contentRef = useRef<HTMLParagraphElement | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (expanded) {
      setIsOverflowing(true);
      return;
    }

    const overflow = el.scrollHeight - el.clientHeight > 1;
    setIsOverflowing(overflow);
  }, [text, collapsedLines, expanded]);

  const clampStyle: CSSProperties | undefined = expanded
    ? undefined
    : {
        WebkitLineClamp: collapsedLines,
      };

  return (
    <div className={`expandable-text${expanded ? " is-expanded" : ""}`}>
      <p
        ref={contentRef}
        className={`expandable-text__content ${className ?? ""}`.trim()}
        style={clampStyle}
      >
        {text}
      </p>
      {isOverflowing && (
        <button
          type="button"
          className={`expandable-text__toggle ${toggleClassName ?? ""}`.trim()}
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;
