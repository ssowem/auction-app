/* eslint-disable jsx-a11y/anchor-has-content */
import { FaMessage } from "react-icons/fa6";
import { IoMdRefresh } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";

export default function HomePage() {
    return (
        <div className="home">
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
                    <div className="home__title">
                        거래목록
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
                                <div className="item__icon">
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

                            <div className="item__expanded">
                                <div className="item__expanded-btn">
                                    <button type="button">제안하기 (3)</button>
                                </div>

                                <div className="item__expanded-details">
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
                        </div>





                    </div>
                </div>
            </div>

        </div>
    )
}