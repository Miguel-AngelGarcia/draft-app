import { PlayerQueue } from "../PlayerQueue/PlayerQueue";

export const Body = () => {
  return (
    <div className="body-container">
      <div className="grid-container">
        <PlayerQueue />
        <div className="grid-2">2</div>
        <div className="grid-3">test3</div>
      </div>
    </div>
  );
};
