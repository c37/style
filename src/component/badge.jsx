import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { font } from '../variables';

// import { backgroundColor, textColor } from '../theme';



// https://bitbucket.org/atlassian/atlaskit-mk-2/src/6c3678a6750e743c481ea8601c53daf5037cc124/packages/elements/theme/src/types.js?at=master&fileviewer=file-view-default
export type ThemeModes = 'light' | 'dark';
export type Theme = { mode: ThemeModes };
export type ThemeProps = {
    theme: { __ATLASKIT_THEME__: Theme },
};
export type ThemedValue = (props: ?ThemeProps) => string | number;
// https://bitbucket.org/atlassian/atlaskit-mk-2/src/6c3678a6750e743c481ea8601c53daf5037cc124/packages/elements/theme/src/types.js?at=master&fileviewer=file-view-default


// https://bitbucket.org/atlassian/atlaskit-mk-2/src/6c3678a6750e743c481ea8601c53daf5037cc124/packages/elements/theme/src/constants.js?at=master&fileviewer=file-view-default
export const FLATTENED = '__FLATTENED__';
export const CHANNEL = '__ATLASKIT_THEME__';
export const DEFAULT_THEME_MODE = 'light';
export const THEME_MODES = ['light', 'dark'];
// https://bitbucket.org/atlassian/atlaskit-mk-2/src/6c3678a6750e743c481ea8601c53daf5037cc124/packages/elements/theme/src/constants.js?at=master&fileviewer=file-view-default


// https://bitbucket.org/atlassian/atlaskit-mk-2/src/6c3678a6750e743c481ea8601c53daf5037cc124/packages/elements/theme/src/utils/getTheme.js?at=master&fileviewer=file-view-default
// import { CHANNEL, DEFAULT_THEME_MODE } from '../constants';
// import { type Theme, type ThemeProps } from '../types';
const defaultTheme = { mode: DEFAULT_THEME_MODE };

export function getTheme(props: ?ThemeProps): Theme {
    return props && props.theme && props.theme[CHANNEL]
        ? props.theme[CHANNEL]
        : defaultTheme;
}
// https://bitbucket.org/atlassian/atlaskit-mk-2/src/6c3678a6750e743c481ea8601c53daf5037cc124/packages/elements/theme/src/utils/getTheme.js?at=master&fileviewer=file-view-default


// https://bitbucket.org/atlassian/atlaskit-mk-2/src/6c3678a6750e743c481ea8601c53daf5037cc124/packages/elements/theme/src/utils/themed.js?at=master&fileviewer=file-view-default
// import getTheme from './getTheme';
// import { type ThemedValue, type ThemeProps } from '../types';

type Value = string | number;
type Modes = { light: Value, dark: Value };
type VariantModes = { [string]: Modes };

function themedVariants(variantProp, variants) {
    return (props: ?ThemeProps) => {
        const theme = getTheme(props);
        if (props && props[variantProp] && variants) {
            const modes = variants[props[variantProp]];
            if (modes) {
                return modes[theme.mode];
            }
        }
        return '';
    };
}

export function themed(
    modesOrVariant: Modes | string,
    variantModes: ?VariantModes,
): ThemedValue {
    if (typeof modesOrVariant === 'string') {
        return themedVariants(modesOrVariant, variantModes);
    }
    const modes = modesOrVariant;
    return (props: ?ThemeProps) => {
        const theme = getTheme(props);
        return modes[theme.mode];
    };
}
// https://bitbucket.org/atlassian/atlaskit-mk-2/src/6c3678a6750e743c481ea8601c53daf5037cc124/packages/elements/theme/src/utils/themed.js?at=master&fileviewer=file-view-default




// https://bitbucket.org/atlassian/atlaskit-mk-2/src/6c3678a6750e743c481ea8601c53daf5037cc124/packages/elements/badge/src/theme.js?at=master&fileviewer=file-view-default
// https://ak-mk-2-prod.netlify.com/mk-2/packages/elements/theme
// https://bitbucket.org/atlassian/atlaskit-mk-2/src/6c3678a6750e743c481ea8601c53daf5037cc124/packages/elements/theme/src/colors.js?at=master&fileviewer=file-view-default
const backgroundColor = themed('appearance', {
    added: { light: '#E3FCEF', dark: '#E3FCEF' },
    default: { light: '#EBECF0', dark: '#3B475C' },
    important: { light: '#FF5630', dark: '#FF5630' },
    primary: { light: '#0052CC', dark: '#4C9AFF' },
    /* Note that primary inverted is a temporary implementation. Once navigation has
    context of the nav location to pass down, this will be moved to the primary when
    viewed in a global context. */
    primaryInverted: { light: '#FFFFFF', dark: '#9FB0CC' },
    removed: { light: '#FFEBE6', dark: '#FFEBE6' },
});

const textColor = themed('appearance', {
    added: { light: '#006644', dark: '#006644' },
    default: { light: '#172B4D', dark: '#E6EDFA' },
    important: { light: '#FFFFFF', dark: '#FFFFFF' },
    primary: { light: '#FFFFFF', dark: '#0D1424' },
    primaryInverted: { light: '#0747A6', dark: '#0D1424' },
    removed: { light: '#BF2600', dark: '#BF2600' },
});


export const APPEARANCE_ENUM = {
    values: [
        'default',
        'primary',
        'primaryInverted',
        'important',
        'added',
        'removed',
    ],
    defaultValue: 'default',
};


function validAppearance(value) {
    return value && APPEARANCE_ENUM.values.includes(value)
        ? value
        : APPEARANCE_ENUM.defaultValue;
}

function getValue(value, max) {
    if (value < 0) {
        return '0';
    }
    if (max > 0 && value > max) {
        return `${max}+`;
    }
    if (value === Infinity) {
        return '\u221E'; // ∞ inifinity character
    }
    return String(value);
}

const Container = styled.div`
    font-family: ${font.family};
    font-size:${font.size.normal};
    background-color: ${backgroundColor};
    border-radius: 2px;
    color: ${textColor};
    display: inline-block;
    font-weight: normal;
    line-height: 1;
    min-width: 1px;
    padding: 0.3em 0.5em 0.362em;
    text-align: center;
`;


type Props = {
    /** Affects the visual style of the badge */
    appearance:
    | 'default'
    | 'primary'
    | 'primaryInverted'
    | 'important'
    | 'added'
    | 'removed',
    /** The maximum value to display. If value is 100, and max is 50,
     "50+" will be displayed */
    max: number,
    /** Handler function to be called when the value prop is changed.
     Called with fn({ oldValue, newValue }) */
    onValueUpdated?: ({ oldValue: number, newValue: number }) => any,
    /** The value displayed within the badge. */
    value: number,
};

export default class Badge extends PureComponent<Props> {
    static defaultProps = {
        appearance: 'default',
        max: 99,
        value: 0,
    };

    componentWillUpdate(nextProps: Props) {
        const { onValueUpdated, value: oldValue } = this.props;
        const { value: newValue } = nextProps;

        if (onValueUpdated && newValue !== oldValue) {
            onValueUpdated({ oldValue, newValue });
        }
    }

    render() {
        const { appearance, max, value } = this.props;

        return (
            <Container appearance={validAppearance(appearance)}>
                {getValue(value, max)}
            </Container>
        );
    }
}