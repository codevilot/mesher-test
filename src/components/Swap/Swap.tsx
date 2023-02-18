import { Setting } from "./Setting";
import { Calculator } from "./Calculator";
export function Swap() {
  return (
    <div className="swap">
      <Header />
      <Calculator />
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
