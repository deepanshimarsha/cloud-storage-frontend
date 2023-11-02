import CloudStorageInfoBanner from "./CloudStorageInfoBanner/CloudStorageInfoBanner";
import classes from "./CloudStorageInfoBannerList.module.css";
import StorageBannerListScrollArrow from "./StorageBannerListScrollArrow/StorageBannerListScrollArrow";
import driveicon from "../../../../assets/images/driveIcon.png";
import dropboxIcon from "../../../../assets/images/dropboxIcon.png";
import boxIcon from "../../../../assets/images/boxIcon.png";

import { useState } from "react";
export default function CloudStorageInfoBannerList() {
  const [cloudStorages, setCloudStorages] = useState([
    {
      brandName: "Google Drive",
      fileCount: "100",
      branLogo: driveicon,
    },
    {
      brandName: "Drop Box",
      fileCount: "100",
      branLogo: dropboxIcon,
    },
    {
      brandName: "Box",
      fileCount: "100",
      branLogo: boxIcon,
    },
  ]);
  return (
    <div className={classes.storageBannerListPanel}>
      <div className={classes.storageBannerList}>
        {cloudStorages.map((storage) => {
          return (
            <CloudStorageInfoBanner
              key={storage.brandName}
              brandName={storage.brandName}
              brandLogo={storage.branLogo}
              fileCount={storage.fileCount}
            />
          );
        })}
      </div>
      <StorageBannerListScrollArrow />
    </div>
  );
}
