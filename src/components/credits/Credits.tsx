import { contStyles, creditStyles, creditTitleStyles } from "./Credits.css";

const Credits = () => {
  return (
    <div className={creditStyles}>
      <div className={creditTitleStyles}>A little note for you ♥️</div>
      <div className={contStyles}>
        
        I have a little gift for you that's still in the mail. So rather than wait, I thought I'd make us our own special digital version.
        <p> Now we can play virtually anywhere, anytime. 😘</p>
<p style={{ marginBottom: 0 }}>Love you</p>
      </div>
    </div>
  );
};

export default Credits;
