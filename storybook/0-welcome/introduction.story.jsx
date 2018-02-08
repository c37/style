import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Flex, Box, P, H3, List, ListItem } from '@ciro-maciel/style-guide';

storiesOf('Welcome', module).add('Introduction',
    withInfo({
        text: `developed and maintained by the @ciro-maciel.`,
        inline: true,
        source: false,
        propTables: null
    })(() => {
        return (
            <Flex id="grid" justify='center' w={1}>
                <Flex wrap w={1024}>
                    <Box width={1} p={[1, 2]}>
                        <P size={P.size.large}>
                            Estruturar o layout ao longo de uma serie de páginas ou superfícies de modo a obter uma flexibilidade máxima sem perder a
                            continuidade, é importante para manter a atenção do leitor.
                        </P>
                        <P size={P.size.large}>
                            As proporções das margens vão variar de acordo com o contexto de design, mas como linha condutora, a margem inferior é normalmente o dobro da margem
                            do topo e a margem inferior duplica a largura da margem exterior.<sub><a href="https://pt.wikipedia.org/wiki/Layout_gr%C3%A1fico" target="_blank">wikipedia</a></sub>
                        </P>
                    </Box>
                    <Box width={[1, 1 / 2]} p={[1, 2]} style={{ textAlign: 'center' }}>
                        <H3>Guides</H3>
                        <List appearance={List.appearance.unstyled}>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://developers.google.com/web/fundamentals/design-and-ux/ux-basics/" target="_blank">Google Design e IU</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://developer.apple.com/design/" target="_blank">Apple Design Guides</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://material.io/" target="_blank">Material Design</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://www.lightningdesignsystem.com/" target="_blank">Sales Force UI</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://www.mozilla.org/en-US/styleguide/" target="_blank">mozilla Style guide</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://www.yelp.com/styleguide/" target="_blank">Yelp Styleguide</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="http://ux.mailchimp.com/patterns" target="_blank">MailChimp Patterns</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://www.mapbox.com/base/" target="_blank">Mapbox styleguide</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://semantic-ui.com/" target="_blank">Semantic UI</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://github.com/carbon-design-system/carbon-components-react" target="_blank">Carbon Components</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://ak-mk-2-prod.netlify.com/packages" target="_blank">Atlaskit</a>
                            </ListItem>
                        </List>
                    </Box>
                    <Box width={[1, 1 / 2]} p={[1, 2]} style={{ textAlign: 'center' }}>
                        <H3>Documentation</H3>
                    </Box>
                </Flex>
            </Flex>
        );
    })
);