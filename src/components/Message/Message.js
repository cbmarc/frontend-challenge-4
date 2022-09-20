import React from 'react';
import { concatenateClassNames } from '../../classNameUtils';
import styles from './Message.module.css';

/**
 * Message component used in the chat. This represents each individual chat bubble.
 *
 * @param {Object} props
 * author is the author of the message
 * text is the text of the message
 * @returns a Message component
 */
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
