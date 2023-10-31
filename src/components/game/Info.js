import "./Info.css";

export default function Info(props) {
  const { playerOne } = props;
  return (
    <div className="info">
      <div
        style={{ backgroundColor: playerOne === 0 && "#13ff00" }}
        className="player playerOne"
      >
        Player 1: X
      </div>
      <div
        style={{ backgroundColor: playerOne === 1 && "#13ff00" }}
        className="player playertwo"
      >
        Player 2: O
      </div>
    </div>
  );
}
