import React from 'react';
import * as S from "../styles/PolicyStyle"

const Fake = () => {
    return (
        <S.PolicyContainer>
            <S.Update>
                최종 수정일  2021년 1월 29일
            </S.Update>
            <S.Content>
                가품 ・ 손상/오염/사용감 있는 상품 판매를 시도하여 적발된 경우 판매금액의 15.0% 페널티가 부과되며 판매자는 적발 즉시 이용정지 처리됩니다.<br />
                가품 판매의 경우 상표법 108조에 의거 민사상 손해배상 책임 및 형사상 7년 이하의 징역 또는 1억원 이하의 벌금 처벌을 받을 수 있습니다. 또한 이용약관 제 27조(검수 등) 6항에 따라 가품 판매자는 상표법 등 관계 법령 위반 혐의로 수사기관에 신고될 수 있으며, 가품 판정 상품은 수사기관 제출, 압수 등으로 인하여 판매자에게 반환되지 않을 수 있습니다.
            </S.Content>
            <S.Title>
            소명자료 접수
            </S.Title>
            <S.Content>
            KREAM에서는 가품, 손상/오염/사용감 있는 상품으로부터 구매자를 안전하게 보호하고자 해당 제재를 실행하며, 이에 따라 선의의 피해자가 발생하지 않도록 소명서 및 관련 자료를 고객센터로 전달해주시면 내부 검토를 진행하고 있습니다.
            </S.Content>
            <S.Content>
                * 발송 정보 입력 시 지원하지 않는 배송 수단의 경우, 운송장 추적 불가, 도착 상품의 식별 곤란 등의 사유로 인해 입고가 불가하며 이에 해당하는 상품은 반송 처리됩니다.<br />
                * 반송 처리 등 정상적이지 않은 배송 방법을 통해 상품을 검수센터로 전달할 경우 상품 입고가 불가능합니다.
            </S.Content>
        </S.PolicyContainer>
    );
};

export default Fake;