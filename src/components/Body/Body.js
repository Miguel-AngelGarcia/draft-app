import { PlayerQueue } from "../PlayerQueue/PlayerQueue";
import { DraftTrack } from "../DraftTrack/DraftTrack";

export const Body = () => {
  return (
    <div className="body-container">
      <div className="grid-container-test">
        <div className="grid-top">
          <div className="test"></div>
        </div>
        <div className="grid-1">
          <PlayerQueue />
        </div>

        <div className="grid-2">2</div>
        <div className="grid-3">
          <div className="test">
            <div className="test-1"></div>
          </div>
          <PlayerQueue />
        </div>
        <div className="grid-bottom">
          <DraftTrack />
        </div>
      </div>
    </div>
  );
};
