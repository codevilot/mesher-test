import { useRecoilValue } from "recoil";
import {
  $State,
  lowerAmountState,
  lowerTypeState,
  upperAmountState,
  upperTypeState,
} from "../../util/store";
import { toFix } from "../../util/toFix";
export function Action() {
  const dollar = useRecoilValue($State);
  const upperValue = useRecoilValue(upperAmountState);
  const lowerValue = useRecoilValue(lowerAmountState);
  const upperType = useRecoilValue(upperTypeState);
  const lowerType = useRecoilValue(lowerTypeState);

  return dollar === 0 ? (
    <div className="swap-alert">금액을 입력하세요</div>
  ) : (
    <>
      <div className="swap-compare">
        {`1 ${upperType} = ${toFix(upperValue / lowerValue)} ${lowerType} `}
        <span className="swap-compare-dollar">{`($${dollar})`}</span>
      </div>
      <div className="swap-action" onClick={() => alert("준비 중입니다.")}>
        스왑
      </div>
    </>
  );
}
