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
                        <P size={P.size.big}>
                            Estruturar o layout ao longo de uma serie de páginas ou superfícies de modo a obter uma flexibilidade máxima sem perder a
                            continuidade, é importante para manter a atenção do leitor.
                        </P>
                        <P size={P.size.big}>
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
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://github.com/trendmicro-frontend" target="_blank">Trend Micro Frontend</a>
                            </ListItem>
                        </List>
                    </Box>
                    <Box width={[1, 1 / 2]} p={[1, 2]} style={{ textAlign: 'center' }}>
                        <H3>Documentation</H3>
                        <List appearance={List.appearance.unstyled}>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://www.chromestatus.com/features" target="_blank">Chrome Platform Status</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://developer.microsoft.com/en-us/microsoft-edge/platform/status/" target="_blank">Edge Platform Status</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://developer.mozilla.org/en-US/Firefox/Releases" target="_blank">Firefox developer release notes</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://developers.google.com/web/tools/chrome-devtools/" target="_blank">Chrome DevTools</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS" target="_blank">HTTP access control (CORS)</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://developers.google.com/web/fundamentals/engage-and-retain/app-install-banners/" target="_blank">Banners de instalação de aplicativo web</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://reactjs.org/docs/react-api.html" target="_blank">React Top-Level API</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://reactjs.org/docs/composition-vs-inheritance.html" target="_blank">Composition vs Inheritance</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://reactjs.org/docs/typechecking-with-proptypes.html" target="_blank">Typechecking With PropTypes</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://reactjs.org/docs/conditional-rendering.html" target="_blank">Conditional Rendering</a>
                            </ListItem>
                        </List>
                    </Box>
                    <Box width={[1, 1 / 2]} p={[1, 2]} style={{ textAlign: 'center' }}>
                        <H3>Articles</H3>
                        <List appearance={List.appearance.unstyled}>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="http://blog.trello.com/refining-the-way-we-structure-our-css-at-trello" target="_blank">Refining The Way We Structure Our CSS</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="http://dev.mobify.com/blog/css-sprites-vs-data-uris-which-is-faster-on-mobile/" target="_blank">CSS Sprites vs. Data URIs</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://css-tricks.com/icon-fonts-vs-svg/" target="_blank">Inline SVG vs Icon Fonts</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://www.sitepoint.com/icon-fonts-vs-svg-debate/" target="_blank">The Great Icon Debate: Fonts Vs SVG</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="http://maddesigns.de/svg-sprites-icon-fonts-2309.html" target="_blank">SVG Sprites vs. Icon-Fonts</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://medium.com/@andrew.burton/form-validation-best-practices-8e3bec7d0549" target="_blank">Form validation best practices</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://designmodo.com/ux-form-validation/" target="_blank">The Ultimate UX Design of Form Validation</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://medium.com/elegant-tools/designing-a-visual-system-at-scale-d275259e17d" target="_blank">Designing a Visual System at Scale</a>
                            </ListItem>
                        </List>
                    </Box>
                    <Box width={[1, 1 / 2]} p={[1, 2]} style={{ textAlign: 'center' }}>
                        <H3>Developer</H3>
                        <List appearance={List.appearance.unstyled}>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://github.com/ben-eb/gulp-svgmin" target="_blank">Minify SVG</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://github.com/jkphl/gulp-svg-sprite" target="_blank">SVG sprites &amp; stacks galore</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="http://sass-lang.com/" target="_blank">Sass</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://mozilla.github.io/nunjucks/" target="_blank">Nunjucks</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://www.browsersync.io/" target="_blank">Synchronised browser testing</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://github.com/babel/gulp-babel" target="_blank">Gulp plugin for Babel</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://github.com/CompuIves/codesandbox-client" target="_blank">An pproach to Components</a>
                            </ListItem>
                        </List>
                    </Box>
                    <Box width={[1, 1 / 2]} p={[1, 2]} style={{ textAlign: 'center' }}>
                        <H3>Tools</H3>
                        <List appearance={List.appearance.unstyled}>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://color.adobe.com/pt/explore" target="_blank">Adobe - Color CC</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="http://placehold.it/" target="_blank">Placehold</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://unsplash.it/" target="_blank">Unsplash It</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="http://sizzy.co/" target="_blank">Tool for developing responsive websites</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://thenounproject.com/" target="_blank">Noun Project</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://web-capture.net/" target="_blank">Web Capture</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://clipboardjs.com/" target="_blank">Clipboard.js</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://loading.io/" target="_blank">loading.io</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="http://numeraljs.com/" target="_blank">Numeral.js</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://material.io/icons/" target="_blank">Material Icon</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="http://sizzy.co/" target="_blank">Sizzy - Responsive</a>
                            </ListItem>
                        </List>
                    </Box>
                    <Box width={[1, 1 / 2]} p={[1, 2]} style={{ textAlign: 'center' }}>
                        <H3>Responsive</H3>
                        <List appearance={List.appearance.unstyled}>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes" target="_blank">Using CSS Flexible Boxes</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">A Complete Guide to Flexbox</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://css-tricks.com/between-the-lines/" target="_blank">Between the Lines</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://css-tricks.com/rems-ems/" target="_blank">Font Size Idea</a>
                            </ListItem>
                            <ListItem textAlign={ListItem.textAlign.center}>
                                <a href="https://css-tricks.com/rem-global-em-local/" target="_blank">Use `rem` for Global Sizing</a>
                            </ListItem>
                        </List>
                    </Box>
                </Flex>
            </Flex>
        );
    })
);