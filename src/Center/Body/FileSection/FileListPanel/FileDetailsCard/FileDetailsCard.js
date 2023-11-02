import classes from "./FileDetailsCard.module.css";
import pdfFileIcon from "../../../../../assets/images/pdfFileIcon.png";
import ownerImg from "../../../../../assets/images/ownerImg.jpg";

export default function FileDetailsCard({ file }) {
  const { name, owner, last_opened } = file;
  const last_opened_date = new Date(last_opened);
  const last_opened_date_str = last_opened_date.toDateString();
  return (
    <div className={classes.fileDetailsCard}>
      <div className={classes.fileCardLeft}>
        <img
          src={pdfFileIcon}
          alt="file-format-icon"
          className={classes.fileFormatIcon}
        />
        <div className={classes.textValue}>{name}</div>
      </div>
      <div className={classes.fileCardCenter}>
        <img src={ownerImg} alt="owner-img" className={classes.fileOwnerImg} />
        <div className={classes.textValue}>{owner}</div>
      </div>
      <div className={classes.fileDate}>{last_opened_date_str}</div>
      <div className={classes.fileThreeDotDropDown}></div>
    </div>
  );
}
