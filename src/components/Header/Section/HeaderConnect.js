import Image from 'next/image';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import appStorePng from '@public/assets/images/app-store.png';
import googlePlayPng from '@public/assets/images/google-play.png';
import appGalleryPng from '@public/assets/images/app-gallery.png';
import style from './HeaderConnect.module.scss';

const HeaderConnect = () => {
  const [isDownloadPopup, setIsDownloadPopup] = useState(false);

  return (
    <div className={style.header_navbar_connects}>
      <div>
        <a className='hover_eff--blur' href='/system'>
          <FormattedMessage id='header.system' />
        </a>
      </div>

      <div
        className={style.navbar_connects_download}
        onMouseOver={() => setIsDownloadPopup(true)}
        onMouseLeave={() => setIsDownloadPopup(false)}
      >
        <a className='hover_eff--blur' href='#'>
          <FormattedMessage id='header.download' />
        </a>

        {isDownloadPopup && <DownloadPopup />}
      </div>

      <div className='flex items-center'>
        <FormattedMessage id='header.connect' />

        <acronym title='Upwork'>
          <a
            className='block hover_eff--blur ml-1'
            href='https://www.upwork.com/freelancers/~01d1468ac8390a376e'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/assets/images/upwork.ico'
              alt='Upwork'
              width={16}
              height={16}
            />
          </a>
        </acronym>

        <acronym title='LinkedIn'>
          <a
            className='block hover_eff--blur'
            href='https://www.linkedin.com/in/phan-nguyen-sn353'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
        </acronym>

        <acronym title='Github'>
          <a
            className='block hover_eff--blur'
            href='https://github.com/PhanhotboY'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
        </acronym>
      </div>
    </div>
  );
};

const DownloadPopup = () => {
  return (
    <div className={style.connects_download_wrapper}>
      <div className={style.connects_download_popover}>
        <Image
          src='/assets/images/appQRCode.png'
          alt='qr_thank_you'
          width={162}
          height={162}
        />

        <div className={style.connects_download_apps}>
          <Image src={appStorePng} />
          <Image src={googlePlayPng} />
          <Image src={appGalleryPng} />
        </div>
      </div>
    </div>
  );
};

export default HeaderConnect;
