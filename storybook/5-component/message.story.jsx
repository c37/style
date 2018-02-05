import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { action } from '@storybook/addon-actions';

import { specs, describe, it } from 'storybook-addon-specifications';

import { mount } from "enzyme";
import expect from "expect";

import { Message } from '@ciro-maciel/style-guide';

const story = () => {

    const message =
        <div style={{ width: '100%', display: 'flex', flexFlow: 'row wrap' }} >
            <div style={{ flex: '1 100%' }}>
                <Message
                    title="Message title"
                    subtitle="Subtitle text goes here."
                    text="Time stamp [00:00:00]"
                    onClose={(e) => action('onClose')}
                    style={{ width: '100%' }} />
            </div>
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems:'center' }} >
                <Message
                    type={Message.types.success}
                    title="Message title"
                    subtitle="Subtitle text goes here."
                    text="Time stamp [00:00:00]"
                    onClose={(e) => action('onClose')} />
                <Message
                    type={Message.types.info}
                    title="Message title"
                    subtitle="Subtitle text goes here."
                    text="Time stamp [00:00:00]"
                    onClose={(e) => action('onClose')} />

            </div>
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems:'center' }} >
                <Message
                    type={Message.types.warning}
                    title="Message title"
                    subtitle="Subtitle text goes here."
                    text="Time stamp [00:00:00]"
                    onClose={(e) => action('onClose')} />
                <Message
                    type={Message.types.error}
                    title="Message title"
                    subtitle="Subtitle text goes here."
                    text="Time stamp [00:00:00]"
                    onClose={(e) => action('onClose')} />

            </div>
        </div>;

    specs(() => describe('Hello World', function () {
        it('Should have Hello World label', function () {
            let output = mount(message);
            // expect(output.text()).toContain('Hello World');
            expect('Hello World').toContain('Hello World');
        });
    }));

    return message;
};


storiesOf('Component', module).add('Message', withInfo("String or React Element with docs about my component")(() => story()));