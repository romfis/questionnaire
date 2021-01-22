# questionnaire

> List of questionnaire components

[![NPM](https://img.shields.io/npm/v/questionnaire.svg)](https://www.npmjs.com/package/@romfis-dev/react-questionnaire-helper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @romfis-dev/react-questionnaire-helper
```

## Usage

```jsx
import React, { Component } from 'react'

import { ComparisonQuestion } from '@romfis-dev/react-questionnaire-helper'
import '@romfis-dev/react-questionnaire-helper/dist/index.css'

class Example extends Component {
  render() {
    return <>
      <ComparisonQuestion
        question={'https://my-domain/path-to-my-image/image.jpg'}
        options={['one', 'two', 'three']}
        onChange={(value) => conspole.log(value)}
      />
      <GapsQuestion
        question={'PCs are what most of us use on a daily basis for work or personal use'}
        exclude={['work']}
        onChange={(value) => console.log(value)}
      />
    <>
  }
}
```

## License

MIT © [Romfis](https://github.com/romfis)
