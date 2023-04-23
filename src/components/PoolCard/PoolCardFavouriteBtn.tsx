import IconStar from '../Icons/IconStar';
import { useFavouritePools } from '../../context/favourite-pools-context';

export default function PoolCardFavouriteBtn() {
  const { addFavouritePool } = useFavouritePools();
  function handleStarClick(): React.MouseEventHandler<HTMLButtonElement> {
    console.log('click');
    addFavouritePool('0xasdfasdfasdf');
  }

  return (
    <button onClick={handleStarClick}>
      <IconStar width="20" height="20"></IconStar>
    </button>
  );
}
