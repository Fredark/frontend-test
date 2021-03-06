import * as React from 'react'
import { Tag, Env, Title, Description } from './styles'

const Header: React.FunctionComponent = () => (
  <Tag data-testid="header">
    <Env>
      <Title>
        Restaurants
      </Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Description>
    </Env>
  </Tag>
)

export default Header