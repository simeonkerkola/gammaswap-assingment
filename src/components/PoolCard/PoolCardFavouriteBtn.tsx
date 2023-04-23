import IconStar from '../Icons/IconStar';
import { useFavouritePools } from '../../context/favourite-pools-context';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';

const PoolCardFavouriteBtnStyles = styled.button<{ isFavourite: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;

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
};

export default function PoolCardFavouriteBtn({ poolId }: Props) {
  const { favouritePools, removeFromFavourites, addToFavourites } =
    useFavouritePools();

  const isFavourite = favouritePools.includes(poolId);

  function handleStarClick(): void {
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
    >
      <IconStar width="24" height="24"></IconStar>
    </PoolCardFavouriteBtnStyles>
  );
}
