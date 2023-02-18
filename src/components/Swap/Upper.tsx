import axios from "axios";
import { useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect, useRef } from "react";
import { token } from "../../util/token";
import { $State, upperTypeState, modalState } from "../../util/store";
import { toFix } from "../../util/toFix";
export function Upper() {
  const [dollar, setDollar] = useRecoilState($State);
  const [_modal, setModal] = useRecoilState(modalState);
  const upperType = useRecoilValue(upperTypeState);
  const upperInput = useRef(null);
  const { data, isLoading } = useQuery({
    queryKey: upperType,
    queryFn: () =>
      axios.get(
        `https://api.coingecko.com/api/v3/simple/price?vs_currencies=USD&ids=${token[upperType]}`
      ),
    onSuccess: (data) =>
      setDollar(
        toFix(upperInput.current.value * data.data[token[upperType]].usd)
      ),
    staleTime: 5000,
    cacheTime: Infinity,
  });
  const inputEvent = () =>
    setDollar(
      toFix(upperInput.current.value * data.data[token[upperType]].usd)
    );

  useEffect(() => {
    if (isLoading) return;
    upperInput.current.value = toFix(
      dollar / data.data[token[upperType]].usd
    ).toFixed(10);
  }, [dollar]);
  return (
    <div className="swap-input">
      <div className="swap-number-info">
        <input placeholder="0" onChange={inputEvent} ref={upperInput} />
        <div className="swap-converted">
          {isLoading || dollar === 0 ? "" : `$${dollar.toFixed(10)}`}
        </div>
      </div>
      <span className="swap-type" onClick={() => setModal("upper")}>
        {upperType}
      </span>
    </div>
  );
}
