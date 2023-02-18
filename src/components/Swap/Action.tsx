import { useRecoilValue } from "recoil";
import { $State } from "../../util/store";
export function Action() {
  const dollar = useRecoilValue($State);
  return dollar === 0 ? (
    <div className="swap-alert">금액을 입력하세요</div>
  ) : (
    <div className="swap-action" onClick={() => alert("준비 중입니다.")}>
      스왑
    </div>
  );
}
