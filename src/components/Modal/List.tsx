import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import {
  modalState,
  upperTypeState,
  lowerTypeState,
  recentState,
} from "../../util/store";
import { ids, token } from "../../util//token";
interface IList {
  keyword: string;
}

export function List({ keyword }: IList) {
  const [modal, setModal] = useRecoilState(modalState);
  const [upperType, setUpperType] = useRecoilState(upperTypeState);
  const [lowerType, setLowerType] = useRecoilState(lowerTypeState);
  const [recent, setRecent] = useRecoilState(recentState);
  const selectToken = ({ target }: MouseEvent) => {
    if (target instanceof HTMLDivElement) {
      const selectedToken = target
        .closest(".token-item")
        .querySelector(".token-title").innerHTML as ids;

      if (modal === "upper") {
        if (selectedToken === lowerType) setLowerType(upperType);
        setUpperType(selectedToken);
      } else if (modal === "lower") {
        if (selectedToken === upperType) setUpperType(lowerType);
        setLowerType(selectedToken);
      }
      const newRecentArr = [
        selectedToken,
        ...recent.filter((item: string) => item !== selectedToken).slice(0, 6),
      ];
      localStorage.setItem("recent", JSON.stringify(newRecentArr));
      setRecent(newRecentArr);
    }
    setModal(null);
  };
  return (
    <div className="token-list select">
      {Object.entries(token)
        .filter(([key, value]) => {
          if (key.includes(keyword) || value.includes(keyword))
            return [key, value];
        })

        .map(([key, value]) => (
          <div
            className={`token-item ${
              key === lowerType || key === upperType ? "selected" : ""
            }`}
            key={key}
            onClick={selectToken}
          >
            <div className="token-title">{key}</div>
            <div className="token-fullname">{value}</div>
          </div>
        ))}
    </div>
  );
}
