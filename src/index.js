import './style.scss';
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';

import { isIos, isInStandaloneMode } from './utils';

const AddToHomescreen = (props) => {
  const [bannerVisible, setBannerVisible] = useState(true);

  const onAddToHomescreenClick = () => {
    props.onAddToHomescreenClick();
  };

  const handleCloseBannerBtnClick = () => setBannerVisible(false);

  const { title, icon } = props;
  const shouldRender = bannerVisible && isIos() && !isInStandaloneMode();

  return (
    <div>
      {shouldRender ? (
        <div className="add-to-home-banner">
          <div className="add-to-home-content">
            {icon ? <img className="add-to-home-icon" src={icon} /> : null}
            <div className="add-to-home-text">
              <a onClick={onAddToHomescreenClick}>
                {title || 'Add to home screen'}
              </a>
            </div>
          </div>
          <MdClose
            className="add-to-home-close-btn"
            onClick={handleCloseBannerBtnClick}
          />
        </div>
      ) : null}
    </div>
  );
}


export default AddToHomescreen;
