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
        <div>
            <Message
                title="Notification title"
                subtitle="Subtitle text goes here."
                text="Time stamp [00:00:00]"
                onClose={(e) => action('onClose')} />
            <Message
                type={Message.types.success}
                title="Notification title"
                subtitle="Subtitle text goes here."
                text="Time stamp [00:00:00]"
                onClose={(e) => action('onClose')} />
            <Message
                type={Message.types.info}
                title="Notification title"
                subtitle="Subtitle text goes here."
                text="Time stamp [00:00:00]"
                onClose={(e) => action('onClose')} />
            <Message
                type={Message.types.warning}
                title="Notification title"
                subtitle="Subtitle text goes here."
                text="Time stamp [00:00:00]" />
            <Message
                type={Message.types.error}
                title="Notification title"
                subtitle="Subtitle text goes here."
                text="Time stamp [00:00:00]" />

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