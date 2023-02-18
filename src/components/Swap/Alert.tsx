import { useRecoilValue } from "recoil";
import { $State } from "../../util/store";
export function Alert() {
  const dollar = useRecoilValue($State);
  console.log(dollar);
  return dollar === 0 ? (
    <div className="swap-alert">금액을 입력하세요</div>
  ) : null;
}
