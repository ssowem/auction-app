export default function AddItemModal() {
    return (
        <div className='modal'>
            <div className="modal__title">
                경매 상품 등록하기
            </div>

            <div className="modal__content">
                <div className="modal__content__left">
                    <div className="cell">
                        <div className="cell__title">
                            상품등급
                        </div>

                        <div className="cell__radio">
                            <div className="inner">
                                <input type="radio" name="d" />
                                <label>싱싱한</label>
                            </div>
                            <div className="inner">
                                <input type="radio" name="d" />
                                <label>적당한</label>
                            </div>
                            <div className="inner">
                                <input type="radio" name="d" />
                                <label>못난이</label>
                            </div>
                        </div>
                    </div>

                    <div className="cell">
                        <div className="cell__title">
                            상품 분류
                        </div>

                        <div className="cell">
                            <select className="cell__select">
                                <option>채소</option>
                                <option>야채</option>
                                <option>과일</option>
                            </select>
                        </div>
                    </div>

                    <div className="cell">
                        <div className="cell__title">
                            제품 선택
                        </div>

                        <div className="cell">
                            <select className="cell__select">
                                <option>오이</option>
                                <option>토마토</option>
                            </select>
                        </div>
                    </div>

                    <div className="cell box">
                        <div className="cell__title">
                            수량
                        </div>

                        <div className="cell__box">
                            1박스
                        </div>

                        <div className="cell__text">
                            * 최소 1박스 ~ 최대 99박스
                        </div>
                    </div>

                    <div className="cell box">
                        <div className="cell__title">
                            개당가격
                        </div>

                        <div className="cell__box">
                            0 원
                        </div>
                        <div className="cell__text">
                            * 입력된 금액부터 제안이 시작됩니다.
                        </div>
                    </div>
                </div>
                <div className="modal__content__right">
                    <div className="cell">
                        <div className="cell__title">
                            상품 이미지
                        </div>
                        <div className="cell__thumbnail">
                            이미지
                        </div>
                        <button className="cell__button img">직접 업로드</button>
                    </div>

                    <div className="cell">
                        <div className="cell__title">
                            최종 금액
                        </div>
                        <div className="cell__price">
                            0 원
                        </div>
                    </div>

                    <div className="cell">
                        <button className="cell__button add">
                            확인
                        </button>
                    </div>

                </div>


            </div>
        </div>
    )
}