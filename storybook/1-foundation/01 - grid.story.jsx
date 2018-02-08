import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { action } from '@storybook/addon-actions';

import { specs, describe, it } from 'storybook-addon-specifications';

import { mount } from "enzyme";
import expect from "expect";

import { Flex, Box } from '@ciro-maciel/style-guide';

const story = () => {
    const grid =
        <Flex id="grid" justify='center' w={1}>
            <Flex wrap w={1024}>
                <Box width={[1, 3 / 12]} p={[1, 2]}>
                    menu
                </Box>
                <Box width={[1, 9 / 12]} p={[1, 2]}>
                    content
                </Box>
            </Flex>
        </Flex>

    specs(() => describe('Hello World', function () {
        it('Should have Hello World label', function () {
            let output = mount(card);
            // expect(output.text()).toContain('Hello World');
            expect('Hello World').toContain('Hello World');
        });
    }));

    setTimeout(() => {
        // https://gist.github.com/lilo003/206a255c83cede34169c
        [].forEach.call(document.getElementById('grid').querySelectorAll("*"), function (a) {
            a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16)
        });
    });

    return grid;
}


storiesOf('Foundation', module).add("Grid", withInfo(`
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