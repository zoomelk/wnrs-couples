
import { useState } from "react";

import {
  contStyles,
  creditStyles,
  creditTitleStyles,
  replayStyles,
  noteButtonStyles,
} from "./Credits.css";

const Credits = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [keepHeadingRed, setKeepHeadingRed] = useState(false);
  const isOpen = isHovered || isPinned;

  return (
    <>
      <div
  className={creditStyles}
  style={{ maxHeight: isOpen ? 1000 : undefined }}
  onPointerEnter={(e) => {
    if (e.pointerType === "mouse") {
      setIsHovered(true);
      setKeepHeadingRed(true);
    }
  }}
  onPointerLeave={() => setIsHovered(false)}
  onTransitionEnd={(e) => {
    if (
      e.target === e.currentTarget &&
      e.propertyName === "max-height" &&
      !isOpen
    ) {
      setKeepHeadingRed(false);
    }
  }}
>
  <button
    type="button"
    className={`${creditTitleStyles} ${noteButtonStyles}`}
    aria-expanded={isOpen}
    data-highlighted={isOpen || keepHeadingRed}
    onClick={() => {
      if (isPinned) setIsHovered(false);
      else setKeepHeadingRed(true);
      setIsPinned(!isPinned);
    }}
  >
    A little note for you ♥️
  </button>

        <div className={contStyles}>
          I have a little gift for you that's still in the mail. <br />
          So rather than wait, I thought I'd make us our own special digital version.
          <p>Now we can play <b>virtually</b> anywhere, anytime. 😘</p>
          <p style={{ marginBottom: 0 }}>Love you xx</p>
        </div>
      </div>

      <a
        className={`${creditTitleStyles} ${replayStyles}`}
        href={`${import.meta.env.BASE_URL}gift/index.html`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
          style={{
            width: "1.1em",
            height: "1.1em",
            flexShrink: 0,
            color: "#c10016",
            transform: "translateY(-1px)",
          }}
        >
          <path d="M6.2 19 A8.5 8.5 0 1 0 6.2 6 L3.5 9.5" />
          <path d="M3.5 3 V9.5 H10" />
        </svg>
        Replay your gift
      </a>
    </>
  );
};

export default Credits;
