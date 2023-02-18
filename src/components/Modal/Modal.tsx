import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState, recentState } from "../../util/store";
import { List } from "./List";
import { Recent } from "./Recent";
import { CloseButton } from "./CloseButton";
export function Modal() {
  const [modal, setModal] = useRecoilState(modalState);
  const [keyword, setKeyword] = useState("");
  const recentToken = useRecoilValue(recentState);
  return modal !== null ? (
    <div className="modal-background">
      <div className="modal">
        <div className="modal-header">
          <div>토큰 선택</div>
          <CloseButton clickEvent={() => setModal(null)} />
        </div>
        <div className="modal-body">
          <input
            className="search-token"
            onChange={({ target }) => setKeyword(target.value)}
          />
          <Recent list={recentToken} />
          <List keyword={keyword} />
        </div>
        <div className="modal-footer" onClick={() => alert("준비 중입니다.")}>
          토큰 목록 관리
        </div>
      </div>
    </div>
  ) : null;
}
