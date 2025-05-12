import { Flex, FlexItem } from '@midas-ds/components'
import { semantic } from '@midas-ds/components/theme'

export const Example = () => {
  return (
    <div className='card'>
      <Flex fluid>
        <FlexItem
          col={12}
          style={{
            background: semantic.brandPrimary,
            height: '6rem',
            padding: '1rem',
          }}
        >
          <span style={{ fontFamily: 'Fira Code' }}>col=12</span>
        </FlexItem>
        <FlexItem
          style={{
            background: semantic.iconInfo,
            height: '6rem',
            padding: '1rem',
          }}
        >
          <span style={{ fontFamily: 'Fira Code' }}>not set</span>
        </FlexItem>
        <FlexItem
          col='auto'
          style={{
            background: semantic.iconSuccess,
            height: '6rem',
            padding: '1rem',
          }}
        >
          <span style={{ fontFamily: 'Fira Code' }}>col=auto</span>
        </FlexItem>
        <FlexItem
          col={6}
          style={{
            background: semantic.linkVisited,
            height: '6rem',
            padding: '1rem',
          }}
        >
          <span style={{ fontFamily: 'Fira Code' }}>col=6</span>
        </FlexItem>
      </Flex>
    </div>
  )
}
