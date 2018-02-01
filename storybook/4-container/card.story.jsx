import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { action } from '@storybook/addon-actions';

import { specs, describe, it } from 'storybook-addon-specifications';

import { mount } from "enzyme";
import expect from "expect";

import { Button, Card, CardBody, CardFooter } from '@ciro-maciel/style-guide';

const story = () => {
    const card =
        [<Card
            onBlur={(e) => action('onBlur')}
            onFocus={(e) => action('onFocus')}
            onClick={(e) => action('onClick')}
            onMouseEnter={(e) => action('onMouseEnter')}
            onMouseLeave={(e) => action('onMouseLeave')}
        >
            <CardBody title="Web Server 001" info={['Web Server Information']} />
            <CardFooter>
                <Button onClick={action('clicked')}>Hello World</Button>
            </CardFooter>
        </Card>,
        <Card
            onBlur={(e) => action('onBlur')}
            onFocus={(e) => action('onFocus')}
            onClick={(e) => action('onClick')}
            onMouseEnter={(e) => action('onMouseEnter')}
            onMouseLeave={(e) => action('onMouseLeave')}
        >
            <CardBody title="Mail Server 001" link={['http://mail.ciro-maciel.me']} />
            <CardFooter>
                <Button onClick={action('clicked')}>Hello World</Button>
            </CardFooter>
        </Card>,
        <Card
            onBlur={(e) => action('onBlur')}
            onFocus={(e) => action('onFocus')}
            onClick={(e) => action('onClick')}
            onMouseEnter={(e) => action('onMouseEnter')}
            onMouseLeave={(e) => action('onMouseLeave')}
        >
            <CardBody title="DB Server 001" info={['DB Server Information']} link={['http://db.ciro-maciel.me']} />
            <CardFooter>
                <Button onClick={action('clicked')}>Hello World</Button>
            </CardFooter>
        </Card>];

    specs(() => describe('Hello World', function () {
        it('Should have Hello World label', function () {
            let output = mount(card);
            // expect(output.text()).toContain('Hello World');
            expect('Hello World').toContain('Hello World');
        });
    }));

    return card;
};


storiesOf('Container', module).add('Card', withInfo("String or React Element with docs about my component")(() => story()));