---
path: '/unreleased'
title: 'Unreleased changes'
---

## Unreleased Changes

#### Breaking changes

- Update dependency on emotion from v9 to v10. This is a significant breaking change and will almost certainly require significant changes to downstream applications as part of the Emotion upgrade. See the [emotion docs](https://emotion.sh/docs/migrating-to-emotion-10) and our [github issue](https://github.com/ezcater/recipe/issues/218) for more information on breaking changes.
- Update analytics tool to work with emotion 10 (instead of emotion 9).

#### New components

- Internally use emotion 10's `Global` Component for global styles

#### Enhancements

- Remove usage of enzyme's shallow/mount methods in tests. This avoids us needing to know the internals of how ThemeProvider manages context (which has changed from emotion 9 to 10).

#### Design updates

#### Bug fixes

- Fix max-height and max-width of EzSuperRadioButton images in IE11, as the constraints of 60px\*60px provided by the image wrapper were not being followed. This fixes [#256](https://github.com/ezcater/recipe/issues/256).

#### Documentation

- Update documentation about peerDepdendencies
- Remove usage of `javascript:urls` from component examples ([deprecated in React 16.9](https://reactjs.org/blog/2019/08/08/react-v16.9.0.html#deprecating-javascript-urls))

#### Dependency upgrades

- Remove devDependency on enzyme (for testing)
- Update devDependency babel-preset-env (fixes: Browserslist outdated mesage)
- Update devDependency sosia (fixes unused lifecycle messages)
- Update devDependency Jest (fixes async act() warning messages)
- Update devDependency type definitions for Jest-axe
- Update devDependency @testing-library/jest-dom

#### Development workflow

- Update default testing template for components to no longer generate enzyme tests
