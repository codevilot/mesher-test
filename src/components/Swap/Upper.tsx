import axios from "axios";
import { useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { token } from "../../util/token";
import { $State, upperTypeState, modalState } from "../../util/store";
import { useState } from "react";
export function Upper() {
  const [upperAmount, setUpperAmount] = useState(0);
  const [dollar, setDollar] = useRecoilState($State);
  const [_modal, setModal] = useRecoilState(modalState);
  const upperType = useRecoilValue(upperTypeState);
  const { data, isLoading } = useQuery({
    queryKey: upperType,
    queryFn: () =>
      axios.get(
        `https://api.coingecko.com/api/v3/simple/price?vs_currencies=USD&ids=${token[upperType]}`
      ),
    staleTime: 5000,
    cacheTime: Infinity,
  });
  const inputEvent = ({ target: { value } }: { target: { value: string } }) => {
    setUpperAmount(Number(value));
    if (!isLoading) setDollar(upperAmount * data?.data[token[upperType]].usd);
  };

  return (
    <div className="swap-input">
      <div className="swap-number-info">
        <input type="text" placeholder="0" onChange={inputEvent} />
        <div className="swap-converted">
          {isLoading || Number(upperAmount) === 0
            ? ""
            : `$${Number(upperAmount) * data?.data[token[upperType]].usd}`}
        </div>
      </div>
      <span className="swap-type" onClick={() => setModal("upper")}>
        {upperType}
      </span>
    </div>
  );
}
