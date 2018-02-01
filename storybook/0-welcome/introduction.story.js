import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';


storiesOf('Welcome', module).add('Introduction',
    withInfo({
        text: `Maintained by the @ciro-maciel.`,
        inline: true,
        source: false
    })(() => {
        return(        
            <div>
                <p>
                    Storybook is a UI development environment for your UI components. With it, you can visualize different states of your UI components and develop them interactively.
                </p>
                <p>
                    Storybook runs outside of your app. So you can develop UI components in isolation without worrying about app specific dependencies and requirements.
                </p>
            </div>
        );
    })
);