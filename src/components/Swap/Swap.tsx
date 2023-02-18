import { Setting } from "./Setting";
import { Calculator } from "./Calculator";
import { Action } from "./Action";
export function Swap() {
  return (
    <div className="swap">
      <Header />
      <Calculator />
      <Action />
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
