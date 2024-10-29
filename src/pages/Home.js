import { useId, useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { IoMdRefresh } from "react-icons/io";
// import { MdArrowBackIos } from "react-icons/md";
// import { MdArrowForwardIos } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { BsPlusCircleFill } from "react-icons/bs";
import AddItemModal from "components/AddItemModal";

export default function Home(props) {

    const [showDetail, setShowDetail] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    // const id = useId();

    const handleToggleDetail = () => {
            setShowDetail(true);
    }

    const addNewItem = () => {
        setIsModalVisible(!isModalVisible);
        console.log(isModalVisible)
    }

    return (
        <div className="home" style={{ position: isModalVisible ? 'fixed' : 'static' }}>
            <div className="home__header">

                <div className="home__header-content">
                    <div className="home__logo">야채박스</div>
                    <div className="home__user-info">
                        <div className="message"><FaMessage /></div>
                        <div className="info">땡자님 반갑습니다.</div>
                        <button type="button">로그아웃</button>
                    </div>
                </div>

                <div className="home__toolbar">
                    <div className="home__menu">
                        <a href="/">거래목록</a>
                        <a href="/">메세지함</a>
                    </div>
                    <div className="home__search">
                        <input type="search" placeholder="검색어를 입력해주세요." />
                    </div>
                </div>

            </div>

            <div className="home__main-content">
                <div className="filter">
                    <div className="filter__block flex-row">
                        <div className="title">필터</div>
                        <div className="refresh-btn">
                            <button type="button">
                                <span>초기화</span>
                                <IoMdRefresh className="refresh-icon" />
                            </button>
                        </div>
                    </div>

                    <div className="filter__block flex-column">
                        <div className="title">카테고리</div>
                        <div className="selectbox">
                            <select>
                                <option>전체보기</option>
                                <option>브로콜리</option>
                                <option>고구마</option>
                                <option>당근</option>
                            </select>
                        </div>
                    </div>

                    <div className="filter__block flex-column">
                        <div className="title">나만의 검색</div>
                        <div className="checkbox flex-row">
                            <input type="checkbox" />
                            <label>내 야채</label>
                        </div>
                        <div className="checkbox flex-row">
                            <input type="checkbox" />
                            <label>관심있는 야채</label>
                        </div>
                        <div className="checkbox flex-row">
                            <input type="checkbox" />
                            <label>제안 요청한 야채</label>
                        </div>
                    </div>

                    <div className="filter__block flex-column">
                        <div className="title">상품등급</div>
                        <div className="checkbox flex-row">
                            <input type="checkbox" />
                            <label>😍싱싱이</label>
                        </div>
                        <div className="checkbox flex-row">
                            <input type="checkbox" />
                            <label>😋적당이</label>
                        </div>
                        <div className="checkbox flex-row">
                            <input type="checkbox" />
                            <label>🤢못난이</label>
                        </div>
                    </div>

                    <div className="filter__block flex-column">
                        <div className="title">판매 상태</div>
                        <div className="selectbox">
                            <select>
                                <option>판매중</option>
                                <option>거래완료</option>
                                <option>거래진행중</option>
                                <option>시간만료</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div className="content">
                    <div className="content__top">
                        <div className="content__count">
                            총 0건
                        </div>

                        <div className="content__filter-list">
                            <a href="/">최신순</a>
                            <a href="/">낮은 가격순</a>
                            <a href="/">제안 많은순</a>
                        </div>
                    </div>

                    <div className="content__list-wrap">
                        <div className="item">
                            <div className="item__default">
                                <div className="item__info">
                                    <div className="title">
                                        못났어도 맛은 좋은 도마도입니다
                                    </div>

                                    <div className="test111">
                                        <div className="rating">
                                            🤢못난이 등급
                                        </div>
                                        <div className="type-block">
                                            <div className="type">토마토</div>
                                            <div>x 1박스</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item__image">
                                    <div>🍅</div>
                                </div>
                                <div className="item__details">
                                    <div className="favorite">
                                        <MdFavoriteBorder className="icon" />
                                    </div>
                                    <div className="sales-status">
                                        판매중
                                    </div>
                                    <div className="time">12:03:32</div>
                                    <div className="price">💰 12,000원</div>
                                    <div className="seller">판매자: 땡자언니</div>
                                </div>
                            </div>


                            {!showDetail && <button type="button" className="item__more-btn" onClick={handleToggleDetail} btnNum="1">
                                <MdKeyboardDoubleArrowDown className="icon" />
                            </button>}


                            {showDetail &&
                                <div className="interaction" detailNum="1">
                                    <div className="interaction__btn">
                                        <button type="button">제안하기 (3)</button>
                                    </div>

                                    <div className="interaction__user-list">
                                        <div className="list-item">
                                            <div className="seller-info">
                                                <div className="seller">못난이감자</div>
                                                <div className="message">저한테 팔아주세요</div>
                                            </div>
                                            <div className="offer">
                                                <div className="status">제안요청</div>
                                                <div className="price">13,000원</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>}

                        </div>

                        <div className="item">
                            <div className="item__default">
                                <div className="item__info">
                                    <div className="title">
                                        포슬포슬 수미감자입니다!! 감튀로도 제격
                                    </div>

                                    <div className="test111">
                                        <div className="rating">
                                            🤢못난이 등급
                                        </div>
                                        <div className="type-block">
                                            <div className="type">감자</div>
                                            <div>x 1박스</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item__image">
                                    <div>🥔</div>
                                </div>
                                <div className="item__details">
                                    <div className="favorite">
                                        <MdFavoriteBorder className="icon" />
                                    </div>
                                    <div className="sales-status">
                                        판매중
                                    </div>
                                    <div className="time">12:03:32</div>
                                    <div className="price">💰 12,000원</div>
                                    <div className="seller">판매자: 김아무개</div>
                                </div>
                            </div>


                            {!showDetail && <button type="button" className="item__more-btn" onClick={handleToggleDetail}>
                                <MdKeyboardDoubleArrowDown className="icon" />
                            </button>}


                            {showDetail &&
                                <div className="interaction">
                                    <div className="interaction__btn">
                                        <button type="button">제안하기 (3)</button>
                                    </div>

                                    <div className="interaction__user-list">
                                        <div className="list-item">
                                            <div className="seller-info">
                                                <div className="seller">총각네야채가게</div>
                                                <div className="message">저한테 팔아주세요</div>
                                            </div>
                                            <div className="offer">
                                                <div className="status">제안요청</div>
                                                <div className="price">13,000원</div>
                                            </div>
                                        </div>

                                        <div className="list-item">
                                            <div className="seller-info">
                                                <div className="seller">못난이감자</div>
                                                <div className="message">저한테 팔아주세요ㅎㅎㅎㅎㅎ</div>
                                            </div>
                                            <div className="offer">
                                                <div className="status">제안요청</div>
                                                <div className="price">13,000원</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>}

                        </div>

                        <div className="item">
                            <div className="item__default">
                                <div className="item__info">
                                    <div className="title">
                                        포슬포슬 수미감자입니다!! 감튀로도 제격
                                    </div>

                                    <div className="test111">
                                        <div className="rating">
                                            🤢못난이 등급
                                        </div>
                                        <div className="type-block">
                                            <div className="type">감자</div>
                                            <div>x 1박스</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item__image">
                                    <div>🥔</div>
                                </div>
                                <div className="item__details">
                                    <div className="favorite">
                                        <MdFavoriteBorder className="icon" />
                                    </div>
                                    <div className="sales-status">
                                        판매중
                                    </div>
                                    <div className="time">12:03:32</div>
                                    <div className="price">💰 12,000원</div>
                                    <div className="seller">판매자: 김아무개</div>
                                </div>
                            </div>


                            {!showDetail && <button type="button" className="item__more-btn" onClick={handleToggleDetail}>
                                <MdKeyboardDoubleArrowDown className="icon" />
                            </button>}


                            {showDetail &&
                                <div className="interaction">
                                    <div className="interaction__btn">
                                        <button type="button">제안하기 (3)</button>
                                    </div>

                                    <div className="interaction__user-list">
                                        <div className="list-item">
                                            <div className="seller-info">
                                                <div className="seller">총각네야채가게</div>
                                                <div className="message">저한테 팔아주세요</div>
                                            </div>
                                            <div className="offer">
                                                <div className="status">제안요청</div>
                                                <div className="price">13,000원</div>
                                            </div>
                                        </div>

                                        <div className="list-item">
                                            <div className="seller-info">
                                                <div className="seller">못난이감자</div>
                                                <div className="message">저한테 팔아주세요ㅎㅎㅎㅎㅎ</div>
                                            </div>
                                            <div className="offer">
                                                <div className="status">제안요청</div>
                                                <div className="price">13,000원</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>}

                        </div>

                        <div className="item">
                            <div className="item__default">
                                <div className="item__info">
                                    <div className="title">
                                        포슬포슬 수미감자입니다!! 감튀로도 제격
                                    </div>

                                    <div className="test111">
                                        <div className="rating">
                                            🤢못난이 등급
                                        </div>
                                        <div className="type-block">
                                            <div className="type">감자</div>
                                            <div>x 1박스</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item__image">
                                    <div>🥔</div>
                                </div>
                                <div className="item__details">
                                    <div className="favorite">
                                        <MdFavoriteBorder className="icon" />
                                    </div>
                                    <div className="sales-status">
                                        판매중
                                    </div>
                                    <div className="time">12:03:32</div>
                                    <div className="price">💰 12,000원</div>
                                    <div className="seller">판매자: 김아무개</div>
                                </div>
                            </div>


                            {!showDetail && <button type="button" className="item__more-btn" onClick={handleToggleDetail}>
                                <MdKeyboardDoubleArrowDown className="icon" />
                            </button>}


                            {showDetail &&
                                <div className="interaction">
                                    <div className="interaction__btn">
                                        <button type="button">제안하기 (3)</button>
                                    </div>

                                    <div className="interaction__user-list">
                                        <div className="list-item">
                                            <div className="seller-info">
                                                <div className="seller">총각네야채가게</div>
                                                <div className="message">저한테 팔아주세요</div>
                                            </div>
                                            <div className="offer">
                                                <div className="status">제안요청</div>
                                                <div className="price">13,000원</div>
                                            </div>
                                        </div>

                                        <div className="list-item">
                                            <div className="seller-info">
                                                <div className="seller">못난이감자</div>
                                                <div className="message">저한테 팔아주세요ㅎㅎㅎㅎㅎ</div>
                                            </div>
                                            <div className="offer">
                                                <div className="status">제안요청</div>
                                                <div className="price">13,000원</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>}

                        </div>
                    </div>

                    <div className="content__add-item">
                        <button className="btn" onClick={addNewItem}>

                        </button>
                    </div>

                    {
                        isModalVisible ? <AddItemModal /> : null
                    }



                </div>

                {/* <div className="inbox">
                    <div className="inbox__content">
                        <div className="inbox__header">
                            <div className="inbox__checkbox">
                                <input type="checkbox" className="inbox__checkbox-input" />
                            </div>
                            <div className="inbox__mark-read">
                                <button type="button" className="inbox__mark-read-btn">읽음으로 표시</button>
                            </div>
                        </div>

                        <div className="inbox__list">
                            <div className="inbox__checkbox">
                                <input type="checkbox" className="inbox__checkbox-input" />
                            </div>

                            <div className="inbox__inner">
                                <div className="inbox__item-info">
                                    <div className="">🤢 못난이 등급 | 토마토 x 3박스</div>
                                    <div className="">가격 제안 요청이 도착했습니다.</div>
                                    <div className="">제안 가격 : 12,000원</div>
                                </div>
                                <div className="inbox__sender">판매자명: 오이있어요</div>
                                <div className="inbox__time">24.07.12 21:15</div>
                            </div>
                        </div>

                        <div className="inbox__list">
                            <div className="inbox__checkbox">
                                <input type="checkbox" className="inbox__checkbox-input" />
                            </div>

                            <div className="inbox__inner">
                                <div className="inbox__item-info">
                                    <div className="">🤢 싱싱이 등급 | 감자 x 3박스</div>
                                    <div className="">가격 제안 요청이 도착했습니다.</div>
                                    <div className="">제안 가격 : 1,000원</div>
                                </div>
                                <div className="inbox__sender">판매자명: 농사짓는사람</div>
                                <div className="inbox__time">24.07.12 21:15</div>
                            </div>
                        </div>
                    </div>
                    <div className="inbox__pagination">
                        <div className="inbox__page-num">
                            페이지 1
                        </div>
                        <div className="inbox__controls">
                            <button type="button" className="inbox__btn inbox__btn--prev">
                                <MdArrowBackIos />
                            </button>

                            <button type="button" className="inbox__btn inbox__btn--next">
                                <MdArrowForwardIos />
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>

        </div>
    )
}