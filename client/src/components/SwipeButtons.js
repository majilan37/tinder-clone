import "../styles/SwipeButtons.css";
import { IconButton } from "@mui/material";
import {
  Close,
  Favorite,
  FlashOn,
  Replay,
  StarRate,
} from "@mui/icons-material";

function SwipeButtons() {
  return (
    <div className='swipe__buttons'>
      <IconButton className='swipe__button_repeat'>
        <Replay fontSize='large' />
      </IconButton>
      <IconButton className='swipe__button_left'>
        <Close fontSize='large' />
      </IconButton>
      <IconButton className='swipe__button_star'>
        <StarRate fontSize='large' />
      </IconButton>
      <IconButton className='swipe__button_right'>
        <Favorite fontSize='large' />
      </IconButton>
      <IconButton className='swipe__button_lightning'>
        <FlashOn fontSize='large' />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
