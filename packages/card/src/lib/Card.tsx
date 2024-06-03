import { styled } from '@mvds/theme';
import { ArrowRight } from 'lucide-react';

export type CardProps = {
  /** Optional image displayed at the top of card */
  image?: { source: string; description: string };
  /** Sets background to predetermined color
   *  @default false
   * */
  background?: boolean;

  /**  Header as h1 for the component @default false rendered at top or below image is there is one */
  title: string;
  /** Content as p element for the component rendered at the bottom */
  content: string;
  /** Handler for when card element is clicked */
  onPress?: () => void;
};

const StyledCard = styled('div', {
  '& button': {
    all: 'unset',
    cursor: 'pointer',
    height: '100%',
    width: '100%',
    padding: '1.5rem',
    boxSizing: 'border-box',
    transition:
      'transform $fast ease-in-out, background-color $fast ease-in-out',
    backgroundColor: '$white',
    '&:focus-visible': {
      outline: '2px solid black',
      outlineOffset: '-2px',
    },
    '&:hover': {
      backgroundColor: '$gray20',
      '& h1': {
        '& svg': {
          transform: 'translateX(6px)',
        },
      },
    },
    '&:active': {
      backgroundColor: '$gray10',
    },
    borderBottom: '1px solid $gray150',
  },
  '& img.image': {
    height: 'auto',
    width: '100%',
    objectFit: 'cover',
    maxWidth: '100%',
    verticalAlign: 'middle',
    marginBottom: '1rem',
  },
  '& h1': {
    fontSize: '1.5rem',
    fontWeight: '$medium',
    color: '$gray150',
    display: 'flex',
    justifyContent: 'space-between',
    '& svg': {
      transform: 'translateX(0)',
      transition: 'transform $fast ease-in-out',
      minWidth: 20,
      minHeight: 20,
      width: 20,
      height: 20,
    },
  },
  '& p': {
    marginBlockStart: 0,
    color: '$black',
  },
  variants: {
    /** Sets background
     * @default false
     * */
    background: {
      true: {
        '& button': {
          backgroundColor: '$blue20',
        },
      },
    },
  },
});

/**
 * This component renders a card with optional image, title, content.
 *
 */
export function Card({
  image,
  background,
  title,
  content,
  onPress,
  ...rest
}: CardProps) {
  return (
    <StyledCard background={background} {...rest}>
      <button onClick={onPress} role={'link'} aria-label={title}>
        {image?.source ? (
          <img
            src={image?.source}
            alt={image?.description}
            className={'image'}
          />
        ) : (
          <></>
        )}
        <h1>
          {title}
          <ArrowRight />
        </h1>
        <p>{content}</p>
      </button>
    </StyledCard>
  );
}

export default Card;
