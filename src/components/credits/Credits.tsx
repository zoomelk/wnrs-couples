
import {
  contStyles,
  creditStyles,
  creditTitleStyles,
  replayStyles,
} from "./Credits.css";

const Credits = () => {
  return (
    <>
      <div className={creditStyles}>
        <div className={creditTitleStyles}>
          A little note for you ♥️
        </div>
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
