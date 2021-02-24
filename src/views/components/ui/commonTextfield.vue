<template>
    <div class="common_area">

        <div class="container">
            <div class="ph-4p">
                <p class="fs-25 bold">Single Lined</p>
                <div class="container pv-20">
                    <p class="pb-10 fw-400">기본</p>

                    <div class="form-field-line">
                        <input type="text" class="field-text" required id="field-text1"/>
                        <label class="field-label" for="field-text1">Label</label>
                        <span class="field-line"></span>
                        <div class="field-button-box">
                            <button class="button-round">Button</button>
                        </div>
                    </div>
                </div>
                <div class="container pv-20">
                    <p class="pb-10 fw-400">기본 - value값 있을경우</p>

                    <div class="form-field-line">
                        <input type="text" class="field-text" id="field-text" value="Input text"/>
                        <label class="field-label" for="field-text">Label</label>
                        <span class="field-line"></span>
                        <div class="field-button-box">
                            <button class="button-round">Button</button>
                        </div>
                    </div>
                </div>
                <div class="container pv-20">
                    <p class="pb-10 fw-400">비활성화 - 클래스 form-disabled 추가</p>

                    <div class="form-field-line form-disabled">
                        <input type="text" class="field-text" id="field-text" disabled />
                        <label class="field-label" for="field-text">Label</label>
                        <span class="field-line"></span>
                        <div class="field-button-box">
                            <button class="button-round" disabled>Button</button>
                        </div>
                    </div>
                </div>
                <div class="container pv-20">
                    <p class="pb-10 fw-400">오류 - 클래스 form-error 추가</p>

                    <div class="form-field-line form-error">
                        <input type="text" class="field-text" id="field-text" value="Input text"/>
                        <label class="field-label" for="field-text">Error Message</label>
                        <span class="field-line"></span>
                        <div class="input-button-box">
                            <button class="button-round">Button</button>
                        </div>
                    </div>
                </div>
                <div class="container pv-20">
                    <p class="pb-10 fw-400">확인 - 클래스 form-comfirm 추가</p>

                    <div class="form-field-line form-comfirm">
                        <input type="text" class="field-text" id="field-text" value="Input text"/>
                        <label class="field-label" for="field-text">Confirm Message</label>
                        <span class="field-line"></span>
                        <div class="input-button-box">
                            <button class="button-round">Button</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ph-4p">
                <p class="fs-25 bold">Elements</p>
                <div class="container pv-20">
                    <p class="pb-10 fw-400">input - value값이 확실 할 경우</p>

                    <div class="form-field-line">
                        <input type="text" class="field-text" id="field-text" value="Input text"/>
                        <label class="field-label" for="field-text">Label</label>
                        <span class="field-line"></span>
                        <div class="field-button-box">
                            <i class="field-icon ic_check_bold aqua"></i>
                        </div>
                    </div>
                </div>
                <div class="container pv-20">
                    <p class="pb-10 fw-400">input - value값을 취소 할 경우</p>

                    <div class="form-field-line">
                        <input type="text" class="field-text" id="field-text" value="Input text"/>
                        <label class="field-label" for="field-text">Label</label>
                        <span class="field-line"></span>
                        <div class="input-button-box">
                            <button class="field-icon ic_close_filled grey-2"></button>
                        </div>
                    </div>
                </div>
                <div class="container pv-20">
                    <p class="pb-10 fw-400">input - Search</p>

                    <div class="form-field-line">
                        <input type="text" class="field-text" id="field-text" value="Input text"/>
                        <label class="field-label" for="field-text">Label</label>
                        <span class="field-line"></span>
                        <div class="field-button-box">
                            <button class="field-icon  ic_close_filled grey-2"></button>
                            <button class="field-icon ic_search black"></button>
                        </div>
                    </div>
                </div>
                <div class="container pv-20">
                    <p class="pb-10 fw-400">input - 인증번호 전송</p>

                    <div class="form-field-line">
                        <input type="text" class="field-text" id="field-text" value="Input text"/>
                        <label class="field-label" for="field-text">Label</label>
                        <span class="field-line"></span>
                        <div class="field-button-box">
                            <span class="mr-20 fs-15 fc-red fw-400">03:26</span>
                            <button class="button-round">인증번호 전송</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="">
                <div class="flex-grow ph-4p">
                    <p class="fs-25 bold">Select</p>
                    <div class="container pv-20">
                        <p class="pb-10 fw-400">input - drop menu 선택 전</p>

                        <div class="form-field-line">
                            <div class="field-title" for="field-text">생년 <span class="fc-red">*</span></div>
                            <!-- 가로 사이즈 추가 가능 예 ) select-box wd-150 -->
                            <div class="select-box">
                                <input type="text" class="field-text" readonly placeholder="선택"/>
                                <div class="field-button-box">
                                    <i class="field-icon ic_score_down_filled wh-20 black"></i>
                                </div>
                            </div>
                            <span class="field-line"></span>
                        </div>
                    </div>
                    <div class="container pv-20">
                        <p class="pb-10 fw-400">input - drop menu 선택 후</p>

                        <div class="form-field-line form-active">
                            <div class="field-title" for="field-text">생년 <span class="fc-red">*</span></div>
                            <!-- 가로 사이즈 추가 가능 예 ) select-box wd-150 -->
                            <div class="select-box">
                                <input type="text" class="field-text" readonly placeholder="선택" value="1998"/>
                                <div class="field-button-box">
                                    <i class="ic_arrow_down_filled wh-20 black"></i>
                                </div>
                                <perfect-scrollbar></perfect-scrollbar>
                                <ul class="field-select-cont">
                                    <li class="cont-item">1999</li>
                                    <li class="cont-item active">1998</li>
                                    <li class="cont-item">1997</li>
                                    <li class="cont-item">1996</li>
                                    <li class="cont-item">1995</li>
                                    <li class="cont-item">1994</li>
                                    <li class="cont-item">1993</li>
                                    <li class="cont-item">1991</li>
                                    <li class="cont-item">1990</li>
                                </ul>
                            </div>
                            <span class="field-line"></span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="container pt-100">
            <div class="">
                <div class="ph-4p">
                    <p class="fs-25 bold">Single Lined</p>
                    <div class="container pv-20">
                        <p class="pb-10 fw-400">기본</p>

                        <div class="form-field-line">
                            <input type="text" class="field-text" required id="field-text1"/>
                            <label class="field-label" for="field-text1">Label</label>
                            <span class="field-line"></span>
                            <div class="field-button-box">
                                <button class="button-round">Button</button>
                            </div>
                        </div>
                    </div>
                    <div class="container pv-20">
                        <p class="pb-10 fw-400">기본 - value값 있을경우</p>

                        <div class="form-field-line">
                            <input type="text" class="field-text" id="field-text" value="Input text"/>
                            <label class="field-label" for="field-text">Label</label>
                            <span class="field-line"></span>
                            <div class="field-button-box">
                                <button class="button-round">Button</button>
                            </div>
                        </div>
                    </div>
                    <div class="container pv-20">
                        <p class="pb-10 fw-400">비활성화 - 클래스 form-disabled 추가</p>

                        <div class="form-field-line form-disabled">
                            <input type="text" class="field-text" id="field-text" disabled />
                            <label class="field-label" for="field-text">Label</label>
                            <span class="field-line"></span>
                            <div class="field-button-box">
                                <button class="button-round" disabled>Button</button>
                            </div>
                        </div>
                    </div>
                    <div class="container pv-20">
                        <p class="pb-10 fw-400">오류 - 클래스 form-error 추가</p>

                        <div class="form-field-line form-error">
                            <input type="text" class="field-text" id="field-text" value="Input text"/>
                            <label class="field-label" for="field-text">Error Message</label>
                            <span class="field-line"></span>
                            <div class="input-button-box">
                                <button class="button-round">Button</button>
                            </div>
                        </div>
                    </div>
                    <div class="container pv-20">
                        <p class="pb-10 fw-400">확인 - 클래스 form-comfirm 추가</p>

                        <div class="form-field-line form-comfirm">
                            <input type="text" class="field-text" id="field-text" value="Input text"/>
                            <label class="field-label" for="field-text">Confirm Message</label>
                            <span class="field-line"></span>
                            <div class="input-button-box">
                                <button class="button-round">Button</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ph-4p">
                    <p class="fs-25 bold">Elements</p>
                    <div class="container pv-20">
                        <p class="pb-10 fw-400">input - value값이 확실 할 경우</p>

                        <div class="form-field-line">
                            <input type="text" class="field-text" id="field-text" value="Input text"/>
                            <label class="field-label" for="field-text">Label</label>
                            <span class="field-line"></span>
                            <div class="field-button-box">
                                <i class="field-icon ic_check_bold aqua"></i>
                            </div>
                        </div>
                    </div>
                    <div class="container pv-20">
                        <p class="pb-10 fw-400">input - value값을 취소 할 경우</p>

                        <div class="form-field-line">
                            <input type="text" class="field-text" id="field-text" value="Input text"/>
                            <label class="field-label" for="field-text">Label</label>
                            <span class="field-line"></span>
                            <div class="input-button-box">
                                <button class="field-icon ic_close_filled grey-2"></button>
                            </div>
                        </div>
                    </div>
                    <div class="container pv-20">
                        <p class="pb-10 fw-400">input - Search</p>

                        <div class="form-field-line">
                            <input type="text" class="field-text" id="field-text" value="Input text"/>
                            <label class="field-label" for="field-text">Label</label>
                            <span class="field-line"></span>
                            <div class="field-button-box">
                                <button class="field-icon  ic_close_filled grey-2"></button>
                                <button class="field-icon ic_search black"></button>
                            </div>
                        </div>
                    </div>
                    <div class="container pv-20">
                        <p class="pb-10 fw-400">input - 인증번호 전송</p>

                        <div class="form-field-line">
                            <input type="text" class="field-text" id="field-text" value="Input text"/>
                            <label class="field-label" for="field-text">Label</label>
                            <span class="field-line"></span>
                            <div class="field-button-box">
                                <span class="mr-20 fs-15 fc-red fw-400">03:26</span>
                                <button class="button-round">인증번호 전송</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ph-4p">
                    <p class="fs-25 bold">Select</p>
                    <div class="container pv-20">
                        <p class="pb-10 fw-400">input - drop menu 선택 전</p>

                        <div class="form-field-line">
                            <div class="field-title" for="field-text">생년 <span class="fc-red">*</span></div>
                            <!-- 가로 사이즈 추가 가능 예 ) select-box wd-150 -->
                            <div class="select-box">
                                <input type="text" class="field-text" readonly placeholder="선택"/>
                                <div class="field-button-box">
                                    <i class="field-icon ic_arrow_down_filled black"></i>
                                </div>
                            </div>
                            <span class="field-line"></span>
                        </div>
                    </div>
                    <div class="container pv-20">
                        <p class="pb-10 fw-400">input - drop menu 선택 후</p>

                        <div class="form-field-line form-active">
                            <div class="field-title" for="field-text">생년 <span class="fc-red">*</span></div>
                            <!-- 가로 사이즈 추가 가능 예 ) select-box wd-150 -->
                            <div class="select-box">
                                <input type="text" class="field-text" readonly placeholder="선택" value="1998"/>
                                <div class="field-button-box">
                                    <i class="field-icon ic_arrow_down_filled black"></i>
                                </div>
                                <ul class="field-select-cont v-custom-scrollbar-y">
                                    <li class="cont-item">1999</li>
                                    <li class="cont-item active">1998</li>
                                    <li class="cont-item">1997</li>
                                    <li class="cont-item">1996</li>
                                    <li class="cont-item">1995</li>
                                    <li class="cont-item">1994</li>
                                    <li class="cont-item">1993</li>
                                    <li class="cont-item">1991</li>
                                    <li class="cont-item">1990</li>
                                </ul>
                            </div>
                            <span class="field-line"></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="container pt-100 bg-very-light-grey">

            <div class="">
                <div class="ph-4p">
                    <p class="fs-25 bold">Raised</p>

                    <div class="container pv-20">
                        <p class="pb-10 fw-400">기본</p>

                        <div class="form-field-raise">
                            <input type="text" class="field-text" placeholder="input text"/>
                            <div class="field-button-box">
                                <button class="button-round">Button</button>
                            </div>
                            <span class="field-raise"></span>
                        </div>
                    </div>
                    <div class="container pv-20">
                        <p class="pb-10 fw-400">비활성화 - 클래스 disabled 추가</p>

                        <div class="form-field-raise disabled">
                            <input type="text" class="field-text" disabled placeholder="input text"/>
                        </div>
                    </div>
                    <div class="container pv-20">
                        <p class="pb-10 fw-400">input - value값이 확실 할 경우</p>

                        <div class="form-field-raise">
                            <input type="text" class="field-text" value="input text"/>
                            <div class="field-button-box">
                                <i class="field-icon ic_check_bold black"></i>
                            </div>
                            <span class="field-raise"></span>
                        </div>
                    </div>
                    <div class="container pv-20">
                        <p class="pb-10 fw-400">input - value값을 취소 할 경우</p>

                        <div class="form-field-raise">
                            <input type="text" class="field-text"  value="input text"/>
                            <div class="field-button-box">
                                <button class="field-icon ic_close_filled grey-2"></button>
                            </div>
                            <span class="field-raise"></span>
                        </div>
                    </div>

                </div>
                <div class="ph-4p">
                    <p class="fs-25 bold">Search</p>

                    <div class="container pv-20">
                        <p class="pb-10 fw-400">검색 전</p>

                        <div class="form-field-raise select-box">
                            <input type="text" class="field-text"  placeholder="검색어"/>
                            <div class="field-button-box">
                                <!--<button class="field-icon ic_close_filled grey-2"></button>-->
                                <button class="field-icon ic_search black"></button>
                            </div>
                            <span class="field-raise"></span>
                        </div>
                    </div>
                    <div class="container pv-20">
                        <p class="pb-10 fw-400">검색 후</p>

                        <div class="form-field-raise select-box">
                            <input type="text" class="field-text"  placeholder="검색어" value="비"/>
                            <div class="field-button-box">
                                <button class="field-icon ic_close_filled grey-2"></button>
                                <button class="field-icon ic_search black"></button>
                            </div>
                            <ul class="field-select-cont v-custom-scrollbar-y">
                                <li class="cont-item"><span class="fw-400">비</span>에이비스타</li>
                                <li class="cont-item active">라<span class="fw-400">비</span>에벨 듄스</li>
                                <li class="cont-item"><span class="fw-400">비</span>콘힐스</li>
                                <li class="cont-item"><span class="fw-400">비</span>전힐스</li>
                            </ul>
                            <span class="field-raise"></span>
                        </div>
                    </div>
                </div>
                <div class="ph-4p">
                    <p class="fs-25 bold">Drop menu</p>

                    <div class="container pv-20">
                        <p class="pb-10 fw-400">선택 전</p>

                        <div class="form-field-raise select-box wd-200">
                            <input type="text" class="field-text" readonly placeholder="선택"/>
                            <div class="field-button-box">
                                <i class="field-icon ic_arrow_down_filled black"></i>
                            </div>
                        </div>
                    </div>
                    <div class="container pv-20">
                        <p class="pb-10 fw-400">선택 후 - 클래스 active 추가</p>

                        <div class="form-field-raise select-box wd-200 active">
                            <input type="text" class="field-text" readonly placeholder="선택" value="1998"/>
                            <div class="field-button-box">
                                <i class="field-icon ic_arrow_down_filled black"></i>
                            </div>
                            <ul class="field-select-cont v-custom-scrollbar-y">
                                <li class="cont-item">1999</li>
                                <li class="cont-item active">1998</li>
                                <li class="cont-item">1997</li>
                                <li class="cont-item">1996</li>
                                <li class="cont-item">1995</li>
                                <li class="cont-item">1994</li>
                                <li class="cont-item">1993</li>
                                <li class="cont-item">1991</li>
                                <li class="cont-item">1990</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="container pt-100">

            <div class="">
                <div class="ph-4p">
                    <p class="fs-25 bold">Border</p>

                    <div class="container pv-20">
                        <p class="pb-10 fw-400">기본</p>

                        <div class="form-field-border">
                            <input type="text" class="field-text" placeholder="input text"/>
                            <div class="field-button-box">
                                <button class="button-round">Button</button>
                            </div>
                            <span class="field-raise"></span>
                        </div>
                    </div>
                    <div class="container pv-20">
                        <p class="pb-10 fw-400">비활성화 - 클래스 disabled 추가</p>

                        <div class="form-field-border disabled">
                            <input type="text" class="field-text" disabled placeholder="input text"/>
                        </div>
                    </div>
                    <div class="container pv-20">
                        <p class="pb-10 fw-400">input - value값이 확실 할 경우</p>

                        <div class="form-field-border">
                            <input type="text" class="field-text" value="input text"/>
                            <div class="field-button-box">
                                <i class="field-icon ic_check_bold black"></i>
                            </div>
                            <span class="field-raise"></span>
                        </div>
                    </div>
                    <div class="container pv-20">
                        <p class="pb-10 fw-400">input - value값을 취소 할 경우</p>

                        <div class="form-field-border">
                            <input type="text" class="field-text"  value="input text"/>
                            <div class="field-button-box">
                                <button class="field-icon ic_close_filled grey-2"></button>
                            </div>
                            <span class="field-raise"></span>
                        </div>
                    </div>

                </div>
                <div class="ph-4p">
                    <p class="fs-25 bold">Search</p>

                    <div class="container pv-20">
                        <p class="pb-10 fw-400">검색 전</p>

                        <div class="form-field-border select-box">
                            <input type="text" class="field-text"  placeholder="검색어"/>
                            <div class="field-button-box">
                                <!--<button class="field-icon ic_close_filled grey-2"></button>-->
                                <button class="field-icon ic_search black"></button>
                            </div>
                            <span class="field-raise"></span>
                        </div>
                    </div>
                    <div class="container pv-20">
                        <p class="pb-10 fw-400">검색 후</p>

                        <div class="form-field-border select-box">
                            <input type="text" class="field-text"  placeholder="검색어" value="비"/>
                            <div class="field-button-box">
                                <button class="field-icon ic_close_filled grey-2"></button>
                                <button class="field-icon ic_search black"></button>
                            </div>
                            <ul class="field-select-cont v-custom-scrollbar-y">
                                <li class="cont-item"><span class="fw-400">비</span>에이비스타</li>
                                <li class="cont-item active">라<span class="fw-400">비</span>에벨 듄스</li>
                                <li class="cont-item"><span class="fw-400">비</span>콘힐스</li>
                                <li class="cont-item"><span class="fw-400">비</span>전힐스</li>
                            </ul>
                            <span class="field-raise"></span>
                        </div>
                    </div>
                </div>
                <div class="ph-4p">
                    <p class="fs-25 bold">Drop menu</p>

                    <div class="container pv-20">
                        <p class="pb-10 fw-400">선택 전</p>

                        <div class="form-field-border select-box wd-200">
                            <input type="text" class="field-text" readonly placeholder="선택"/>
                            <div class="field-button-box">
                                <i class="field-icon ic_arrow_down_filled black"></i>
                            </div>
                        </div>
                    </div>
                    <div class="container pv-20">
                        <p class="pb-10 fw-400">선택 후 - 클래스 active 추가</p>

                        <div class="form-field-border select-box wd-200 active">
                            <input type="text" class="field-text" readonly placeholder="선택" value="1998"/>
                            <div class="field-button-box">
                                <i class="field-icon ic_arrow_down_filled black"></i>
                            </div>
                            <ul class="field-select-cont v-custom-scrollbar-y">
                                <li class="cont-item">1999</li>
                                <li class="cont-item active">1998</li>
                                <li class="cont-item">1997</li>
                                <li class="cont-item">1996</li>
                                <li class="cont-item">1995</li>
                                <li class="cont-item">1994</li>
                                <li class="cont-item">1993</li>
                                <li class="cont-item">1991</li>
                                <li class="cont-item">1990</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="container pt-100 bg-very-light-grey">
            <p class="fs-25 bold">File</p>

            <div class="container pa-20">
                <p class="pb-10 fw-400">기본</p>

                <div class="file-upload">
                    <div class="form-field-raise wd-500">
                        <input type="text" class="field-text" readonly placeholder="선택된 파일이 없습니다."/>
                        <div class="field-button-box">
                            <span class="button-round"><input type="file" class="field-file"/>파일찾기</span>
                            <button class="button-round" disabled>저장하기</button>
                        </div>
                    </div>
                    <div class="list-scroll">
                        <div class="file-list v-custom-scrollbar-x">
                            <div class="file-list-cont"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container pa-20">
                <p class="pb-10 fw-400">기본</p>

                <div class="file-upload">
                    <div class="form-field-raise wd-500">
                        <input type="text" class="field-text" readonly placeholder="선택된 파일이 없습니다."/>
                        <div class="field-button-box">
                            <span class="button-round"><input type="file" class="field-file"/>파일찾기</span>
                        </div>
                    </div>
                    <div class="list-scroll">
                        <div class="file-list v-custom-scrollbar-x">
                            <div class="file-list-cont"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container pa-20">
                <p class="pb-10 fw-400">기본</p>

                <div class="file-upload">
                    <div class="form-field-raise wd-500">
                        <input type="text" class="field-text" readonly placeholder="선택된 파일이 없습니다." value="12345.jpg"/>
                        <div class="field-button-box">
                            <span class="button-round"><input type="file" class="field-file"/>파일찾기</span>
                        </div>
                    </div>
                    <div class="list-scroll">
                        <div class="file-list v-custom-scrollbar-x">
                            <div class="file-list-cont">
                                <div class="file-item" >
                                    <button class="button-close"></button>
                                    <img src="//image.smartscore.kr/psn3/3.5/banner_340x340.png" class="file-img">
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container pt-100 bg-very-light-grey">
            <p class="fs-25 bold">File2</p>
            <div class="container pa-20">
                <p class="pb-10 fw-400">기본</p>

                <div class="file-upload v2">
                    <button class="file-icon-box">
                        <input type="file" class="field-file"/>
                    </button>
                    <div class="list-scroll">
                        <div class="file-list v-custom-scrollbar-x">
                            <div class="file-list-cont">
                                <div class="file-item" >
                                    <button class="button-close"></button>
                                    <img src="//image.smartscore.kr/psn3/3.5/banner_340x340.png" class="file-img">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container pt-100 bg-very-light-grey">
            <p class="fs-25 bold">TextArea</p>

            <div class="container pa-20">
                <p class="pb-10 fw-400">기본</p>

                <div class="form-field-raise textarea-box hp-120">
                    <textarea class="field-text"></textarea>
                    <span class="field-raise"></span>
                    <span class="text-count">0/300</span>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: 'CommonTextfield',
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
