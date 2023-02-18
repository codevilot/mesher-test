import { Setting } from "./Setting";

export function Swap() {
  return (
    <div className="swap">
      <Header />
    </div>
  );
}
function Header() {
  return (
    <div className="swap-title">
      <h1>스왑</h1>
      <Setting />
    </div>
  );
}
