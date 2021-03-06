import * as React from 'react'
import { LoadMoreProps } from '@utils/types'
import { Env, Tag } from './styles'

const LoadMore: React.FunctionComponent<LoadMoreProps> = ({ onClick, isLoading }) => (
  <Env data-testid="load-more">
    <Tag onClick={onClick} isLoading={isLoading}>
      Load More
    </Tag>
  </Env>
)

export default LoadMore