import { styled, Icon } from '@mvds/theme';

export type InfoBannerProps = {
  title: string;
  message: string;
  type: 'success' | 'info' | 'important' | 'warning';
};

const StyledInfoBanner = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  paddingRight: 16,
  variants: {
    type: {
      success: {
        background: '$signalGreen10',
        borderLeft: '3px solid $signalGreen100',
      },
      info: {
        background: '$signalBlue10',
        borderLeft: '3px solid $signalBlue100',
      },
      important: {
        background: '$signalYellow10',
        borderLeft: '3px solid $signalYellow100',
      },
      warning: {
        background: '$signalRed10',
        borderLeft: '3px solid $signalRed100',
      },
    },
  },
  defaultVariants: {
    type: 'success',
  },
  '& h1, & p': {
    marginLeft: 16,
    color: 'black',
  },
  '& h1': {
    marginTop: 16,
    marginBottom: '4px !important',
    fontWeight: '$semiBold',
    fontSize: 16,
    lineHeight: '1rem',
  },
  '& p': {
    color: '$black',
    marginTop: 0,
    marginBottom: 16,
    whiteSpace: 'pre-line',
  },
  '& svg': {
    marginTop: 16,
    marginLeft: 19,
    padding: 0,
  },
});

export function InfoBanner(props: InfoBannerProps) {
  return (
    <StyledInfoBanner {...props}>
      <span>
        <Icon type={props.type}></Icon>
      </span>
      <span>
        <h1>{props.title}</h1>
        <p>{props.message}</p>
      </span>
    </StyledInfoBanner>
  );
}

export default InfoBanner;
