"use client";

import {
  FacebookShareButton,
  XShareButton,
  WhatsappShareButton,
  FacebookIcon,
  XIcon,
  WhatsappIcon,
} from 'react-share';

const ShareButtons = ({ title }:{title:string}) => {
  // Get the current page URL
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div>
      <FacebookShareButton url={shareUrl} title={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <XShareButton url={shareUrl} title={title}>
        <XIcon size={32} round />
      </XShareButton>

      <WhatsappShareButton url={shareUrl} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

export default ShareButtons;