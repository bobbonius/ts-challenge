import {
  space,
  color,
  H1,
  H4,
  Image,
  Text,
  device,
  radius,
  sizes,
} from '@ticketswap/solar'
import styled from '@emotion/styled'

const BackgroundImage = styled.div`
  @media ${device.tablet} {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(${props => props.imageUrl}) no-repeat center center;
    background-size: cover;
    box-shadow: inset 0 -10rem 10rem -10rem ${color.spaceMediumAlpha};
  }
`

const Blur = styled.div`
  backdrop-filter: blur(15px);
  @media ${device.tablet} {
    padding: ${space[16]};
  }
`

const Title = styled(H1)`
  margin-bottom: ${space[16]};
  @media ${device.tablet} {
    color: ${color.nova};
  }
`

const Subtitle = styled(H4)`
  @media ${device.tablet} {
    color: ${color.nova};
  }
`

const EventContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 2rem;
  margin: 0 auto;
  @media ${device.tablet} {
    margin: ${space[64]} auto;
  }
  max-width: ${sizes.tablet}px;
`

const InformationContainer = styled.div`
  margin-top: ${space[16]};
  padding-left: 2rem;
  padding-right: 2rem;
  @media ${device.tablet} {
    padding-left: 0;
    padding-right: 0;
  }
`

const StyledDescription = styled.p`
  margin-top: ${space[16]};
  @media ${device.tablet} {
    color: ${color.nova};
  }
`

const ImageContainer = styled.div`
  @media ${device.tablet} {
    width: 250px;
    height: inherit;
  }
`

const StyledImage = styled(Image)`
  @media ${device.tablet} {
    border-radius: ${radius.lg}};
  }
`

const StyledText = styled(Text)`
  @media ${device.tablet} {
    color: ${color.nova};
  }
  color: ${color.spaceMediumAlpha};
`

function formatDate(date) {
  return new Intl.DateTimeFormat('nl-NL', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(new Date(date))
}

export const EventCover = ({
  imageUrl,
  name,
  date,
  location,
  description,
  ...props
}) => {
  return (
    <>
      <BackgroundImage imageUrl={imageUrl}>
        <Blur>
          <EventContainer>
            <ImageContainer>
              <StyledImage src={imageUrl} />
            </ImageContainer>
            <InformationContainer>
              <Title>{name}</Title>
              <Subtitle>{formatDate(date)}</Subtitle>
              <StyledText>{location}</StyledText>
              <StyledDescription>
                {description ? description : 'No description'}
              </StyledDescription>
            </InformationContainer>
          </EventContainer>
        </Blur>
      </BackgroundImage>
    </>
  )
}