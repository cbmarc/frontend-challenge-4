import React from 'react';
import { concatenateClassNames } from '../../classNameUtils';
import styles from './Message.module.css';

export const Message = ({ author, text }) => {
  return (
    <article
      data-testid="message-root"
      data-author={author}
      className={concatenateClassNames('media', styles.LandbotMessage)}
    >
      <figure
        className={concatenateClassNames(
          'media-left',
          styles.LandbotMessageAvatar
        )}
      >
        <p className="image is-64x64">
          <img className="is-rounded" src="http://i.pravatar.cc/100" alt="" />
        </p>
      </figure>
      <div
        className={concatenateClassNames(
          'media-content',
          styles.LandbotMessageContent
        )}
      >
        <div className="content">
          <p>{text}</p>
        </div>
      </div>
    </article>
  );
};
