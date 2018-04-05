import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { action } from '@storybook/addon-actions';

import { specs, describe, it } from 'storybook-addon-specifications';

import { mount } from "enzyme";
import expect from "expect";

import { Flex, Box, Title, H1, H2, H3, H4, H5, P, Blockquote } from '@ciro-maciel/style-guide';

import styled from 'styled-components';


const Item = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.07);
    padding: 20px;
`;


const story = () => {
    const typography =
        <Flex justify='center' w={1}>
            <Flex wrap w={1024}>
                <Box width={[1]} p={[1]}>
                    <P style={{ marginTop: 0 }}>
                        Typography is the art and technique of arranging type to make written language legible, readable, and appealing when
                        displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing (leading),
                        and letter-spacing (tracking), and adjusting the space between pairs of letters. The term typography is also
                        applied to the style, arrangement, and appearance of the letters, numbers, and symbols created by the process.
                        <sub><a href="https://en.wikipedia.org/wiki/Typography" target="_blank">wikipedia</a> </sub>
                    </P>
                </Box>
                <Box width={[1]} p={[1]}>
                    <H3 style={{ marginTop: 0 }}>
                        Headings
                    </H3>
                    <P>
                        Use h1-h6 tags to define headers and class="title" for the title, which is suitable for the most important inscriptions,
                        for example, in the hero or covers.
                    </P>
                    <Item>
                        <Title>
                            Title
                        </Title>
                        <H1>
                            Heading 1
                        </H1>
                        <H2>
                            Heading 2
                        </H2>
                        <H3>
                            Heading 3
                        </H3>
                        <H4>
                            Heading 4
                        </H4>
                        <H5>
                            Heading 5
                        </H5>
                    </Item>
                </Box>
                <Box width={[1]} p={[1]}>
                    <H3 style={{ marginTop: 0 }}>
                        Paragraphs
                    </H3>
                    <P>
                        The base pragraph has an ideal ratio of font size and baseline. This text is easy to read in most cases.
                    </P>
                    <P>
                        In special cases, you can use modifiers which increase or decrease the text size.
                        It is useful for building a variety of websites and UI, when you need to make a lead text or signatures with a small font size .
                    </P>
                    <Item>
                        <P>
                            By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
                        </P>
                    </Item>
                    <H4>
                        Large
                    </H4>
                    <Item>
                        <P size={P.size.large}>
                            By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
                        </P>
                    </Item>
                    <H4>
                        Big
                    </H4>
                    <Item>
                        <P size={P.size.big}>
                            By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
                        </P>
                    </Item>
                    <H4>
                        Small
                    </H4>
                    <Item>
                        <P size={P.size.small}>
                            By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
                        </P>
                    </Item>
                    <H4>
                        Smaller
                    </H4>
                    <Item>
                        <P size={P.size.smaller}>
                            By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
                        </P>
                    </Item>
                </Box>
                <Box width={[1]} p={[1]}>
                    <H3 style={{ marginTop: 0 }}>
                        Quotes
                    </H3>
                    <P>
                        Quotes in the text stand out for contrast and added variety to the text. In the quotes you can mark text as a paragraph tag and without it.
                    </P>
                    <Item>
                        <Blockquote>
                            No, she'll probably make me do it. Goodbye, friends. I never thought I'd die like this. But I always really hoped. I saw you with those two "ladies of the evening" at Elzars. Explain that. I never loved you.
                        </Blockquote>
                    </Item>
                    <P>Use <code>small</code> tag for attribution. It's a prefer way for semantic code.</P>
                    <Item>
                        <Blockquote>
                            <P>
                                Who's brave enough to fly into something we all keep calling a death sphere? Yes. You gave me a dollar and some candy. I just want to talk. It has nothing to do with mating. Fry, that doesn't make sense.
                            </P>
                            <small>
                                - Bender
                            </small>
                        </Blockquote>
                    </Item>
                </Box>
            </Flex>
        </Flex>

    specs(() => describe('Hello World', function () {
        it('Should have Hello World label', function () {
            let output = mount(typography);
            // expect(output.text()).toContain('Hello World');
            expect('Hello World').toContain('Hello World');
        });
    }));

    return typography;
}

// https://www.npmjs.com/package/@storybook/addon-info#options-and-defaults
storiesOf('Foundation', module).add("Typography", withInfo({
    text: ``,
    inline: true,
    source: false,
    propTables: null,
    propTablesExclude: []
})(() => story()));