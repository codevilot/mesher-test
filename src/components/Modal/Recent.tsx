import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import {
  modalState,
  upperTypeState,
  lowerTypeState,
  recentState,
} from "../../util/store";
import { ids } from "../../util/token";
interface Ilist {
  list: Array<string>;
}
export function Recent({ list }: Ilist) {
  const [modal, setModal] = useRecoilState(modalState);
  const [upperType, setUpperType] = useRecoilState(upperTypeState);
  const [lowerType, setLowerType] = useRecoilState(lowerTypeState);
  const [recent, setRecent] = useRecoilState(recentState);
  const selectToken = ({ target }: MouseEvent) => {
    if (target instanceof HTMLDivElement) {
      const selectedToken = target.closest(".recent-item").innerHTML as ids;
      if (modal === "upper") setUpperType(selectedToken);
      else if (modal === "lower") setLowerType(selectedToken);
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
    <div className="recent-list">
      {list.map((token) => (
        <div
          className={`recent-item ${
            token === lowerType || token === upperType ? "selected" : ""
          }`}
          key={token}
          onClick={selectToken}
        >
          {token}
        </div>
      ))}
    </div>
  );
}
