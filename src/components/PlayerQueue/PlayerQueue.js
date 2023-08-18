import { DummyQueue } from "../TestInfo/DummyQueue";

export const PlayerQueue = () => {
  return (
    <div className="pq-container">
      <div className="pq-wrapper">
        {DummyQueue.map((player) => (
          <div className="player-card">
            <div>{player.name}</div>
            <div>{player.position}</div>
            <div>{player.team}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
