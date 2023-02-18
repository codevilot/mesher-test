import { Setting } from "./Setting";
import { Calculator } from "./Calculator";
import { Alert } from "./Alert";
export function Swap() {
  return (
    <div className="swap">
      <Header />
      <Calculator />
      <Alert />
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
