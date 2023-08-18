import { DummyQueue } from "../TestInfo/DummyQueue";

export const PlayerQueue = () => {
  return (
    <div className="pq-container">
      <h1>TITLE</h1>
      <div className="pq-wrapper">
        <div className="players-holder">
          {DummyQueue.map((player) => (
            <div className="player-card">
              <div>{player.name}</div>
              <div>{player.position}</div>
              <div>{player.team}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
