import IconStar from '../Icons/IconStar';
import { useFavouritePools } from '../../context/favourite-pools-context';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';

const PoolCardFavouriteBtnStyles = styled.button<{ isFavourite: boolean }>`
  background: none;
  border: none;
  cursor: pointer;

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

 .icon-star-background {
   transition: all .2s ease-in-out;
   fill:${(props) => (props.isFavourite ? 'var(--yellow)' : 'transparent')}
 }
  
.icon-star-outline{
  transition: all .2s ease-in-out;
  fill:${(props) => (props.isFavourite ? 'var(--yellow)' : 'var(--grey-3)')}
}
  .
`;

type Props = {
  poolId: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function PoolCardFavouriteBtn({ poolId, ...props }: Props) {
  const { favouritePools, removeFromFavourites, addToFavourites } =
    useFavouritePools();

  const isFavourite = favouritePools.includes(poolId);

  function handleStarClick() {
    if (isFavourite) {
      removeFromFavourites(poolId);
    } else {
      addToFavourites(poolId);
    }
  }

  return (
    <PoolCardFavouriteBtnStyles
      isFavourite={isFavourite}
      onClick={handleStarClick}
      {...props}
    >
      <IconStar className="icon"></IconStar>
    </PoolCardFavouriteBtnStyles>
  );
}
