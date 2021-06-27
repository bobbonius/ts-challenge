import { Text, space } from '@ticketswap/solar'
import { Sad } from '@ticketswap/comets'
import styled from '@emotion/styled'

const ResultsPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${space[16]};
  margin-top: ${space[16]};
`

const StyledText = styled(Text)`
  color: ${props => props.color};
`

export const Placeholder = ({ text, color, size = 32 }) => {
  return (
    <>
      <ResultsPlaceholder>
        <Sad size={size} color={color} />
        <StyledText color={color}>{text}</StyledText>
      </ResultsPlaceholder>
    </>
  )
}
