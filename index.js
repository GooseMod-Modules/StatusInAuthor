import { username } from '@goosemod/patcher';
import { findByProps } from '@goosemod/webpack';
import { React } from '@goosemod/webpack/common';

const { AnimatedStatus } = findByProps('Status', 'AnimatedStatus');
const { getStatus } = findByProps('getStatus', 'getState')

let unpatch;

export default {
  goosemodHandlers: {
    onImport: () => {
      unpatch = username.patch(({ message }) =>
        React.createElement(AnimatedStatus, {
          style: {
            display: 'inline',

            marginLeft: '4px',
            marginRight: '2px'
          },

          status: getStatus(message.author.id)
        })
      );
    },

    onRemove: () => {
      unpatch();
    }
  }
};
