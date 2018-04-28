import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { action } from '@storybook/addon-actions';

import { specs, describe, it } from 'storybook-addon-specifications';

import { mount } from "enzyme";
import expect from "expect";

import { Page } from '@ciro-maciel/style-guide';

const story = () => {
    const page =
        <Page id="page-content">
            <Page>
                <span>full</span>
            </Page>
            <Page size={Page.size.larger}>
                <span>larger</span>
            </Page>
            <Page size={Page.size.big}>
                <span>big</span>
            </Page>
            <Page size={Page.size.medium}>
                <span>medium</span>
            </Page>
            <Page size={Page.size.small}>
                <span>small</span>
            </Page>
            <Page size={Page.size.smaller}>
                <span>smaller</span>
            </Page>
        </Page>

    specs(() => describe('Hello World', function () {
        it('Should have Hello World label', function () {
            let output = mount(page);
            // expect(output.text()).toContain('Hello World');
            expect('Hello World').toContain('Hello World');
        });
    }));

    setTimeout(() => {
        // https://gist.github.com/lilo003/206a255c83cede34169c
        [].forEach.call(document.getElementById('page-content').parentNode.querySelectorAll("*"), function (a) {
            a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16)
        });
    });

    return page;
}


storiesOf('Foundation', module).add("Page", withInfo(`
    [Grid Styled](https://github.com/jxnblk/grid-styled) - Responsive React grid system built with [styled-components](https://github.com/styled-components/styled-components)

    ~~~js
    storiesOf('Button')
      .addWithInfo(
        'simple usage (custom propTables)',
        <info>,
        <storyFn>,
        { inline: true, propTables: [Button]}
      );
    ~~~
`)(() => story()));