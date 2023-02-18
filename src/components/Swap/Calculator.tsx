import { Lower } from "./Lower";
import { Upper } from "./Upper";
import { Switch } from "./Switch";
export function Calculator() {
  return (
    <div className="swap-body">
      <Upper />
      <Lower />
      <Switch />
    </div>
  );
}
