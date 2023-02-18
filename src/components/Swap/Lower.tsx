import axios from "axios";
import { useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect, useRef } from "react";
import { token } from "../../util/token";
import { $State, lowerTypeState, modalState } from "../../util/store";
import { toFix } from "../../util/toFix";
export function Lower() {
  const [dollar, setDollar] = useRecoilState($State);
  const [_modal, setModal] = useRecoilState(modalState);
  const lowerType = useRecoilValue(lowerTypeState);
  const lowerInput = useRef(null);
  const { data, isLoading } = useQuery({
    queryKey: lowerType,
    queryFn: () =>
      axios.get(
        `https://api.coingecko.com/api/v3/simple/price?vs_currencies=USD&ids=${token[lowerType]}`
      ),
    onSuccess: (data) =>
      setDollar(
        toFix(lowerInput.current.value * data.data[token[lowerType]].usd)
      ),
    staleTime: 5000,
    cacheTime: Infinity,
  });
  const inputEvent = () =>
    setDollar(
      toFix(lowerInput.current.value * data.data[token[lowerType]].usd)
    );

  useEffect(() => {
    if (isLoading) return;
    lowerInput.current.value = toFix(dollar / data.data[token[lowerType]].usd);
  }, [dollar]);
  return (
    <div className="swap-input">
      <div className="swap-number-info">
        <input placeholder="0" onChange={inputEvent} ref={lowerInput} />
        <div className="swap-converted">
          {isLoading || dollar === 0 ? "" : `$${dollar}`}
        </div>
      </div>
      <span className="swap-type" onClick={() => setModal("lower")}>
        {lowerType}
      </span>
    </div>
  );
}
