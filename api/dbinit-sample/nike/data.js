import moment from 'moment';

function getTime(day = 0, second = 0) {
  return moment().add(day, 'days').add(second, 'seconds').format('YYYY.MM.DD HH:mm:ss');
}

export const initData = async (clientId, nextSeq) => {
  return {
    // 회원
    user: [
      {
        _id: await nextSeq('user'),
        email: 'admin@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '무지',
        type: 'admin',
        loginType: 'email',
        createdAt: getTime(-100, -60 * 60 * 3),
        updatedAt: getTime(-100, -60 * 60 * 3),
        extra: {
          birthday: '2000.01.31',
        },
      },
      {
        _id: await nextSeq('user'),
        email: 's1@gmail.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '나이키',
        type: 'seller',
        loginType: 'email',
        createdAt: getTime(-50),
        updatedAt: getTime(-30, -60 * 60 * 3),
      },
      {
        _id: await nextSeq('user'),
        email: 'u2@gmail.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '어피치',
        type: 'user',
        loginType: 'email',
        image: `/files/${clientId}/user-apeach.webp`,
        createdAt: getTime(-40, -60 * 30),
        updatedAt: getTime(-30, -60 * 20),
        extra: {
          birthday: '2001.10.13',
        },
      },
      {
        _id: await nextSeq('user'),
        email: 'u1@gmail.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '제이지',
        type: 'user',
        loginType: 'email',
        image: `/files/${clientId}/user-jayg.webp`,
        createdAt: getTime(-20, -60 * 30),
        updatedAt: getTime(-10, -60 * 60 * 12),
        extra: {
          birthday: '1988.05.13',
        },
      },
    ],
    // 상품
    product: [
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 125100,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 잼',
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_JAM_01.jpg`,
            name: 'NIKE_JAM_01.jpg',
            originalname: 'NIKE_JAM_01.jpg',
          }
        ],
        content: `나이키가 세계적인 무대에 오르는 브레이크 댄서를 위해 제작한 첫 신발인 잼과 함께 몸과 마음, 정신을 하나로 만들어 보세요. 신발의 모든 디테일을 꼼꼼히 제작했기 때문에 자신 있게 사이퍼에 도전할 수 있습니다. 유연하고 내구성이 뛰어난 갑피가 몸을 따라 움직이며, 중창의 텍스처 처리된 핸드 그립 덕분에 공중에서 신발을 쉽게 잡을 수 있습니다. 그리고 위아래가 뒤집힌 로고를 배치해 프리즈 동작을 할 때 로고가 똑바로 보이는 재미를 더했죠.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 1,
          isNew: true,
          isBest: false,
          category: ['PC02', 'PC0201'], // Women > 신발
          primeCost: 139000,
          gender: 'women',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 125100,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 잼',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_JAM_01.jpg`,
            name: 'NIKE_JAM_01.jpg',
            originalname: 'NIKE_JAM_01.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_JAM_02.png`,
            name: 'NIKE_JAM_02.png',
            originalname: 'NIKE_JAM_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_JAM_03.jpg`,
            name: 'NIKE_JAM_03.jpg',
            originalname: 'NIKE_JAM_03.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_JAM_04.png`,
            name: 'NIKE_JAM_04.png',
            originalname: 'NIKE_JAM_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_JAM_05.png`,
            name: 'NIKE_JAM_05.png',
            originalname: 'NIKE_JAM_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_JAM_06.png`,
            name: 'NIKE_JAM_06.png',
            originalname: 'NIKE_JAM_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_JAM_07.jpg`,
            name: 'NIKE_JAM_07.jpg',
            originalname: 'NIKE_JAM_07.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_JAM_08.jpg`,
            name: 'NIKE_JAM_08.jpg',
            originalname: 'NIKE_JAM_08.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_JAM_09.png`,
            name: 'NIKE_JAM_09.png',
            originalname: 'NIKE_JAM_09.png',
          },
          {
            path: `/files/${clientId}/NIKE_JAM_10.png`,
            name: 'NIKE_JAM_10.png',
            originalname: 'NIKE_JAM_10.png',
          },
          {
            path: `/files/${clientId}/NIKE_JAM_11.png`,
            name: 'NIKE_JAM_11.png',
            originalname: 'NIKE_JAM_11.png',
          },

        ],
        content: `나이키 잼 갈색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 1,
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260],
          color: '다크 드리프트우드/헴프/세일/블랙',
          styleNo: 'FN0314-200',
          primeCost: 139000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 125100,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 잼',
        quantity: 30,
        buyQuantity: 15,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_JAM_b_01.png`,
            name: 'NIKE_JAM_b_01.png',
            originalname: 'NIKE_JAM_b_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_JAM_b_02.png`,
            name: 'NIKE_JAM_b_02.png',
            originalname: 'NIKE_JAM_b_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_JAM_b_03.png`,
            name: 'NIKE_JAM_b_03.png',
            originalname: 'NIKE_JAM_b_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_JAM_b_04.png`,
            name: 'NIKE_JAM_b_04.png',
            originalname: 'NIKE_JAM_b_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_JAM_b_05.png`,
            name: 'NIKE_JAM_b_05.png',
            originalname: 'NIKE_JAM_b_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_JAM_b_06.png`,
            name: 'NIKE_JAM_b_06.png',
            originalname: 'NIKE_JAM_b_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_JAM_b_07.jpg`,
            name: 'NIKE_JAM_b_07.jpg',
            originalname: 'NIKE_JAM_b_07.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_JAM_b_08.jpg`,
            name: 'NIKE_JAM_b_08.jpg',
            originalname: 'NIKE_JAM_b_08.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_JAM_b_09.png`,
            name: 'NIKE_JAM_b_09.png',
            originalname: 'NIKE_JAM_b_09.png',
          },
          {
            path: `/files/${clientId}/NIKE_JAM_b_10.png`,
            name: 'NIKE_JAM_b_10.png',
            originalname: 'NIKE_JAM_b_10.png',
          },

        ],
        content: `나이키 잼 검은색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 1,
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270],
          color: '블랙/검 라이트 브라운/검 미디엄 브라운',
          styleNo: 'FN0314-002',
          primeCost: 139000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 109000,
        show: true,
        active: true,
        name: '나이키 투어 리펠',
        quantity: 30,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_TOUR_REPEL_01.png`,
            name: 'NIKE_TOUR_REPEL_01.png',
            originalname: 'NIKE_TOUR_REPEL_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_TOUR_REPEL_02.png`,
            name: 'NIKE_TOUR_REPEL_02.png',
            originalname: 'NIKE_TOUR_REPEL_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_TOUR_REPEL_03.jpg`,
            name: 'NIKE_TOUR_REPEL_03.jpg',
            originalname: 'NIKE_TOUR_REPEL_03.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_TOUR_REPEL_04.jpg`,
            name: 'NIKE_TOUR_REPEL_04.jpg',
            originalname: 'NIKE_TOUR_REPEL_04.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_TOUR_REPEL_05.png`,
            name: 'NIKE_TOUR_REPEL_05.png',
            originalname: 'NIKE_TOUR_REPEL_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_TOUR_REPEL_06.jpg`,
            name: 'NIKE_TOUR_REPEL_06.jpg',
            originalname: 'NIKE_TOUR_REPEL_06.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_TOUR_REPEL_07.png`,
            name: 'NIKE_TOUR_REPEL_07.png',
            originalname: 'NIKE_TOUR_REPEL_07.png',
          }
        ],
        content: `약한 비가 내리는 날씨라고 골프를 포기하지는 마세요. 이 편안한 핏의 발수 베스트가 곁에 있을 거예요. 밑단에 조절 가능한 번지 코드가 있어 핏과 보호력을 조절할 수 있으며, 날씨 때문에 경기가 방해받지 않도록 도와줍니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['PC02', 'PC0203'], // Women > 용품
          size: ['XS', 'S', 'M', 'L', 'XL'],
          color: '블랙/화이트',
          styleNo: 'DZ6021-010',
          primeCost: 109000,
          gender: 'women',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 179000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 테크 윈드러너',
        quantity: 40,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_JAM_01.jpg`,
            name: 'NIKE_JAM_01.jpg',
            originalname: 'NIKE_JAM_01.jpg',
          }
        ],
        content: `시그니처 윈드러너 재킷을 산뜻하게 재해석한 이 버전은 매끄럽고 약간의 신축성이 있는 우븐 소재로 제작되었습니다. 가슴과 팔, 몸체가 넉넉한 디자인으로 완성되어 편안하게 레이어링하고 움직일 수 있습니다. 후드와 밑단에 신축성 있는 조임 끈을 적용해 원하는 핏을 연출할 수 있습니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 1,
          isNew: false,
          isBest: false,
          category: ['PC01', 'PC0103', 'PC010305'], // Men > 의류 > 트랙수트
          primeCost: 179000,
          gender: 'men',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 179000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 테크 윈드러너',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_TECH_WIND_01.png`,
            name: 'NIKE_TECH_WIND_01.png',
            originalname: 'NIKE_TECH_WIND_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_TECH_WIND_02.png`,
            name: 'NIKE_TECH_WIND_02.png',
            originalname: 'NIKE_TECH_WIND_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_TECH_WIND_03.jpg`,
            name: 'NIKE_TECH_WIND_03.jpg',
            originalname: 'NIKE_TECH_WIND_03.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_TECH_WIND_04.jpg`,
            name: 'NIKE_TECH_WIND_04.jpg',
            originalname: 'NIKE_TECH_WIND_04.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_TECH_WIND_05.png`,
            name: 'NIKE_TECH_WIND_05.png',
            originalname: 'NIKE_TECH_WIND_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_TECH_WIND_06.jpg`,
            name: 'NIKE_TECH_WIND_06.jpg',
            originalname: 'NIKE_TECH_WIND_06.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_TECH_WIND_07.png`,
            name: 'NIKE_TECH_WIND_07.png',
            originalname: 'NIKE_TECH_WIND_07.png',
          },
          {
            path: `/files/${clientId}/NIKE_TECH_WIND_08.png`,
            name: 'NIKE_TECH_WIND_08.png',
            originalname: 'NIKE_TECH_WIND_08.png',
          },
          {
            path: `/files/${clientId}/NIKE_TECH_WIND_09.jpg`,
            name: 'NIKE_TECH_WIND_09.jpg',
            originalname: 'NIKE_TECH_WIND_09.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_TECH_WIND_10.jpg`,
            name: 'NIKE_TECH_WIND_10.jpg',
            originalname: 'NIKE_TECH_WIND_10.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_TECH_WIND_11.png`,
            name: 'NIKE_TECH_WIND_11.png',
            originalname: 'NIKE_TECH_WIND_11.png',
          },
          {
            path: `/files/${clientId}/NIKE_TECH_WIND_12.png`,
            name: 'NIKE_TECH_WIND_12.png',
            originalname: 'NIKE_TECH_WIND_12.png',
          },

        ],
        content: `나이키 테크 윈드러너 블랙`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 5,
          size: ['S', 'M', 'L', 'XL', 'XXL'],
          color: '블랙/블랙/블랙',
          styleNo: 'HM7152-010',
          primeCost: 179000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 179000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 테크 윈드러너',
        quantity: 30,
        buyQuantity: 15,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_TECH_WIND_o_01.png`,
            name: 'NIKE_TECH_WIND_o_01.png',
            originalname: 'NIKE_TECH_WIND_o_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_TECH_WIND_o_02.png`,
            name: 'NIKE_TECH_WIND_o_02.png',
            originalname: 'NIKE_TECH_WIND_o_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_TECH_WIND_o_03.jpg`,
            name: 'NIKE_TECH_WIND_o_03.jpg',
            originalname: 'NIKE_TECH_WIND_o_03.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_TECH_WIND_o_04.jpg`,
            name: 'NIKE_TECH_WIND_o_04.jpg',
            originalname: 'NIKE_TECH_WIND_o_04.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_TECH_WIND_o_05.jpg`,
            name: 'NIKE_TECH_WIND_o_05.jpg',
            originalname: 'NIKE_TECH_WIND_o_05.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_TECH_WIND_o_06.jpg`,
            name: 'NIKE_TECH_WIND_o_06.jpg',
            originalname: 'NIKE_TECH_WIND_o_06.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_TECH_WIND_o_07.png`,
            name: 'NIKE_TECH_WIND_o_07.png',
            originalname: 'NIKE_TECH_WIND_o_07.png',
          },
          {
            path: `/files/${clientId}/NIKE_TECH_WIND_o_08.jpg`,
            name: 'NIKE_TECH_WIND_o_08.jpg',
            originalname: 'NIKE_TECH_WIND_o_08.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_TECH_WIND_o_09.jpg`,
            name: 'NIKE_TECH_WIND_o_09.jpg',
            originalname: 'NIKE_TECH_WIND_o_09.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_TECH_WIND_o_10.jpg`,
            name: 'NIKE_TECH_WIND_o_10.jpg',
            originalname: 'NIKE_TECH_WIND_o_10.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_TECH_WIND_o_11.png`,
            name: 'NIKE_TECH_WIND_o_11.png',
            originalname: 'NIKE_TECH_WIND_o_11.png',
          },

        ],
        content: `나이키 테크 윈드러너 올리브`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 5,
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270],
          color: '미디엄 올리브/미디엄 올리브/블랙',
          styleNo: 'HM7152-223',
          primeCost: 179000,
        },
      },
      {
        //////////////////////////////// ✨JY
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 119000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 코르테즈 레더',
        quantity: 200,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_CORTEZ_01.png`,
            name: 'NIKE_CORTEZ_01.png',
            originalname: 'NIKE_CORTEZ_01.png',
          },
        ],
        content: `한 마디로 표현하자면 전통 그 자체입니다. 헤리티지 러닝에서 경이적인 패션 아이템으로 거듭난 이 아이템은 수십 년을 이어온 레트로한 매력과 스펀지처럼 부드러운 중창, 시소 디테일이 돋보입니다. 이번 에디션은 매끄러운 가죽 소재와 스타일링이 쉬운 컬러가 조합되어 빈티지한 감성을 선사합니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 1,
          isNew: true,
          isBest: false,
          category: ['PC02', 'PC0201'], // Women > 신발
          primeCost: 139000,
          gender: 'women',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 119000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 코르테즈 레더',
        quantity: 50,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_CORTEZ_01.png`,
            name: 'NIKE_CORTEZ_01.png',
            originalname: 'NIKE_CORTEZ_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_02.png`,
            name: 'NIKE_CORTEZ_02.png',
            originalname: 'NIKE_CORTEZ_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_03.png`,
            name: 'NIKE_CORTEZ_03.png',
            originalname: 'NIKE_CORTEZ_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_04.png`,
            name: 'NIKE_CORTEZ_04.png',
            originalname: 'NIKE_CORTEZ_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_05.png`,
            name: 'NIKE_CORTEZ_05.png',
            originalname: 'NIKE_CORTEZ_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_06.png`,
            name: 'NIKE_CORTEZ_06.png',
            originalname: 'NIKE_CORTEZ_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_07.png`,
            name: 'NIKE_CORTEZ_07.png',
            originalname: 'NIKE_CORTEZ_07.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_08.png`,
            name: 'NIKE_CORTEZ_08.png',
            originalname: 'NIKE_CORTEZ_08.png',
          },
        ],
        content: `나이키 코르테즈 레더 빨간색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 8,
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260],
          color: '화이트/바시티 블루/바시티 레드',
          styleNo: 'DN1791-108',
          primeCost: 119000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 119000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 코르테즈 레더',
        quantity: 50,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_CORTEZ_b_01.png`,
            name: 'NIKE_CORTEZ_b_01.png',
            originalname: 'NIKE_CORTEZ_b_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_b_02.png`,
            name: 'NIKE_CORTEZ_b_02.png',
            originalname: 'NIKE_CORTEZ_b_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_b_03.png`,
            name: 'NIKE_CORTEZ_b_03.png',
            originalname: 'NIKE_CORTEZ_b_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_b_04.png`,
            name: 'NIKE_CORTEZ_b_04.png',
            originalname: 'NIKE_CORTEZ_b_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_b_05.png`,
            name: 'NIKE_CORTEZ_b_05.png',
            originalname: 'NIKE_CORTEZ_b_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_b_06.png`,
            name: 'NIKE_CORTEZ_b_06.png',
            originalname: 'NIKE_CORTEZ_b_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_b_07.png`,
            name: 'NIKE_CORTEZ_b_07.png',
            originalname: 'NIKE_CORTEZ_b_07.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_b_08.png`,
            name: 'NIKE_CORTEZ_b_08.png',
            originalname: 'NIKE_CORTEZ_b_08.png',
          },
        ],
        content: `나이키 코르테즈 레더 검은색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 8,
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260],
          color: '화이트/블랙',
          styleNo: 'DN1791-107',
          primeCost: 119000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 119000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 코르테즈 레더',
        quantity: 50,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_CORTEZ_c_01.png`,
            name: 'NIKE_CORTEZ_c_01.png',
            originalname: 'NIKE_CORTEZ_c_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_c_02.png`,
            name: 'NIKE_CORTEZ_c_02.png',
            originalname: 'NIKE_CORTEZ_c_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_c_03.png`,
            name: 'NIKE_CORTEZ_c_03.png',
            originalname: 'NIKE_CORTEZ_c_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_c_04.png`,
            name: 'NIKE_CORTEZ_c_04.png',
            originalname: 'NIKE_CORTEZ_c_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_c_05.png`,
            name: 'NIKE_CORTEZ_c_05.png',
            originalname: 'NIKE_CORTEZ_c_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_c_06.png`,
            name: 'NIKE_CORTEZ_c_06.png',
            originalname: 'NIKE_CORTEZ_c_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_c_07.png`,
            name: 'NIKE_CORTEZ_c_07.png',
            originalname: 'NIKE_CORTEZ_c_07.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_c_08.png`,
            name: 'NIKE_CORTEZ_c_08.png',
            originalname: 'NIKE_CORTEZ_c_08.png',
          },
        ],
        content: `나이키 코르테즈 레더 갈색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 8,
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260],
          color: '세일/카키/화이트/코카오 와우',
          styleNo: 'DN1791-104',
          primeCost: 119000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 119000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 코르테즈 레더',
        quantity: 50,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_CORTEZ_d_01.png`,
            name: 'NIKE_CORTEZ_d_01.png',
            originalname: 'NIKE_CORTEZ_d_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_d_02.png`,
            name: 'NIKE_CORTEZ_d_02.png',
            originalname: 'NIKE_CORTEZ_d_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_d_03.png`,
            name: 'NIKE_CORTEZ_d_03.png',
            originalname: 'NIKE_CORTEZ_d_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_d_04.png`,
            name: 'NIKE_CORTEZ_d_04.png',
            originalname: 'NIKE_CORTEZ_d_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_d_05.png`,
            name: 'NIKE_CORTEZ_d_05.png',
            originalname: 'NIKE_CORTEZ_d_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_d_06.png`,
            name: 'NIKE_CORTEZ_d_06.png',
            originalname: 'NIKE_CORTEZ_d_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_d_07.png`,
            name: 'NIKE_CORTEZ_d_07.png',
            originalname: 'NIKE_CORTEZ_d_07.png',
          },
          {
            path: `/files/${clientId}/NIKE_CORTEZ_d_08.jpeg`,
            name: 'NIKE_CORTEZ_d_08.jpeg',
            originalname: 'NIKE_CORTEZ_d_08.jpeg',
          },
        ],
        content: `나이키 코르테즈 레더 하얀색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 8,
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260],
          color: '블랙/화이트',
          styleNo: 'DN1791-001',
          primeCost: 119000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 119000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 코트 레거시 리프트',
        quantity: 200,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_COAT_LEGACY_01.png`,
            name: 'NIKE_COAT_LEGACY_01.png',
            originalname: 'NIKE_COAT_LEGACY_01.png',
          },
        ],
        content: `코트 레거시 리프트 신발로 룩을 업그레이드하세요. 쉽게 스타일링할 수 있는 컬러에 플랫폼 중창을 더해 과감한 스타일을 연출합니다. 걱정하지 마세요. 여러분이 사랑하는 클래식한 핏은 그대로입니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 1,
          isNew: true,
          isBest: false,
          category: ['PC02', 'PC0201'], // Women > 신발
          primeCost: 119000,
          gender: 'women',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 119000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 코트 레거시 리프트',
        quantity: 100,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_COAT_LEGACY_01.png`,
            name: 'NIKE_COAT_LEGACY_01.png',
            originalname: 'NIKE_COAT_LEGACY_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_COAT_LEGACY_02.png`,
            name: 'NIKE_COAT_LEGACY_02.png',
            originalname: 'NIKE_COAT_LEGACY_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_COAT_LEGACY_03.png`,
            name: 'NIKE_COAT_LEGACY_03.png',
            originalname: 'NIKE_COAT_LEGACY_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_COAT_LEGACY_05.png`,
            name: 'NIKE_COAT_LEGACY_05.png',
            originalname: 'NIKE_COAT_LEGACY_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_COAT_LEGACY_06.png`,
            name: 'NIKE_COAT_LEGACY_06.png',
            originalname: 'NIKE_COAT_LEGACY_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_COAT_LEGACY_07.png`,
            name: 'NIKE_COAT_LEGACY_07.png',
            originalname: 'NIKE_COAT_LEGACY_07.png',
          },
          {
            path: `/files/${clientId}/NIKE_COAT_LEGACY_08.png`,
            name: 'NIKE_COAT_LEGACY_08.png',
            originalname: 'NIKE_COAT_LEGACY_08.png',
          },
        ],
        content: `나이키 코트 레거시 리프트 하얀색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 13,
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260],
          color: '서밋 화이트/화이트/팬텀/라이트 스모크 그레이',
          styleNo: 'FZ2606-100',
          primeCost: 119000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 119000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 코트 레거시 리프트',
        quantity: 100,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_COAT_LEGACY_b_01.png`,
            name: 'NIKE_COAT_LEGACY_b_01.png',
            originalname: 'NIKE_COAT_LEGACY_b_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_COAT_LEGACY_b_02.png`,
            name: 'NIKE_COAT_LEGACY_b_02.png',
            originalname: 'NIKE_COAT_LEGACY_b_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_COAT_LEGACY_b_03.png`,
            name: 'NIKE_COAT_LEGACY_b_03.png',
            originalname: 'NIKE_COAT_LEGACY_b_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_COAT_LEGACY_b_04.jpeg`,
            name: 'NIKE_COAT_LEGACY_b_04.jpeg',
            originalname: 'NIKE_COAT_LEGACY_b_04.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_COAT_LEGACY_b_05.png`,
            name: 'NIKE_COAT_LEGACY_b_05.png',
            originalname: 'NIKE_COAT_LEGACY_b_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_COAT_LEGACY_b_07.jpeg`,
            name: 'NIKE_COAT_LEGACY_b_07.jpeg',
            originalname: 'NIKE_COAT_LEGACY_b_07.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_COAT_LEGACY_b_08.png`,
            name: 'NIKE_COAT_LEGACY_b_08.png',
            originalname: 'NIKE_COAT_LEGACY_b_08.png',
          },
        ],
        content: `나이키 코트 레거시 리프트 샌드색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 13,
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260],
          color: '헴프/세일/샌드드리프트/블랙',
          styleNo: 'FZ2606-200',
          primeCost: 119000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 139000,
        show: true,
        active: true,
        name: '나이키 에어 리프트 SE',
        quantity: 990,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_AIR_LIFT_SE_01.png`,
            name: 'NIKE_AIR_LIFT_SE_01.png',
            originalname: 'NIKE_AIR_LIFT_SE_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_LIFT_SE_02.png`,
            name: 'NIKE_AIR_LIFT_SE_02.png',
            originalname: 'NIKE_AIR_LIFT_SE_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_LIFT_SE_03.jpg`,
            name: 'NIKE_AIR_LIFT_SE_03.jpg',
            originalname: 'NIKE_AIR_LIFT_SE_03.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_LIFT_SE_04.jpg`,
            name: 'NIKE_AIR_LIFT_SE_04.jpg',
            originalname: 'NIKE_AIR_LIFT_SE_04.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_LIFT_SE_05.png`,
            name: 'NIKE_AIR_LIFT_SE_05.png',
            originalname: 'NIKE_AIR_LIFT_SE_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_LIFT_SE_06.jpg`,
            name: 'NIKE_AIR_LIFT_SE_06.jpg',
            originalname: 'NIKE_AIR_LIFT_SE_06.jpg',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_LIFT_SE_07.png`,
            name: 'NIKE_AIR_LIFT_SE_07.png',
            originalname: 'NIKE_AIR_LIFT_SE_07.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_LIFT_SE_08.png`,
            name: 'NIKE_AIR_LIFT_SE_08.png',
            originalname: 'NIKE_AIR_LIFT_SE_08.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_LIFT_SE_09.png`,
            name: 'NIKE_AIR_LIFT_SE_09.png',
            originalname: 'NIKE_AIR_LIFT_SE_09.png',
          },
        ],
        content: `1996년에 출시된 오리지널 에어 리프트를 한층 업그레이드한 이 스페셜 에디션은 내구성을 유지하면서도 섬세한 디자인을 구현한 아이템입니다. 토 부분이 트인 디자인이 균형감을 유지해 주며, 리본과 스트랩을 조절해 개성 있는 핏과 스타일을 연출할 수 있습니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['PC02', 'PC0201'], // Women > 용품
          size: [220, 230, 240, 250, 260, 270, 280, 290],
          color: '라이트 소프트 핑크/페일 아이보리/라이트 소프트 핑크',
          styleNo: 'HQ3761-640',
          primeCost: 139000,
          gender: 'women',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 159000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 에어 포스 1 댄스',
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_01.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_01.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_01.png',
          },
        ],
        content: `원활한 동작 수행을 위해 탄생한 에어 포스 1입니다. 댄서의 니즈에 맞게 디자인된 이번 버전은 발 앞부분에 에어 쿠셔닝을 적용해 지지력을 조절할 수 있습니다. 윤곽을 살린 갑피와 두꺼워진 카라가 중족부와 뒤꿈치를 고정해 주며, 더욱 유연한 밑창 덕분에 풋워크를 쉽게 뽐낼 수 있습니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 1,
          isNew: true,
          isBest: false,
          category: ['PC02', 'PC0201'], // Women > 신발
          primeCost: 159000,
          gender: 'women',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 159000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 에어 포스 1 댄스',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_01.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_01.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_02.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_02.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_03.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_03.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_04.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_04.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_05.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_05.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_06.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_06.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_07.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_07.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_07.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_08.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_08.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_08.png',
          },
        ],
        content: `나이키 에어 포스 1 댄스 형광색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 17,
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260],
          color: '볼트/건메탈/블랙',
          styleNo: 'FJ7409-700',
          primeCost: 159000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 159000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 에어 포스 1 댄스',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_b_01.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_b_01.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_b_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_b_02.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_b_02.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_b_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_b_03.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_b_03.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_b_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_b_04.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_b_04.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_b_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_b_05.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_b_05.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_b_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_b_06.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_b_06.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_b_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_b_07.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_b_07.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_b_07.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_08.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_08.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_08.png',
          },
        ],
        content: `나이키 에어 포스 1 댄스 하얀색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 17,
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260],
          color: '화이트/화이트/메탈릭 실버/화이트',
          styleNo: 'FJ7409-100',
          primeCost: 159000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 159000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 에어 포스 1 댄스',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_c_01.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_c_01.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_c_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_c_02.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_c_02.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_c_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_c_03.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_c_03.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_c_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_c_04.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_c_04.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_c_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_c_05.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_c_05.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_c_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_c_06.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_c_06.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_c_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_c_07.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_c_07.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_c_07.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_1_DANCE_c_08.png`,
            name: 'NIKE_AIR_FORCE_1_DANCE_c_08.png',
            originalname: 'NIKE_AIR_FORCE_1_DANCE_c_08.png',
          },
        ],
        content: `나이키 에어 포스 1 댄스 실버색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 17,
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260],
          color: '서밋 화이트/포톤 더스트/메탈릭 실버',
          styleNo: 'FJ7409-101',
          primeCost: 159000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 179000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 메트콘 9 AMP',
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_METCON_01.png`,
            name: 'NIKE_METCON_01.png',
            originalname: 'NIKE_METCON_01.png',
          },
        ],
        content: `운동을 하는 '이유'가 무엇이든, 메트콘 9는 그럴 만한 가치가 있게 만들어 줍니다. 더욱 커진 하이퍼리프트 플레이트와 추가된 고무 로프 랩으로 메트콘 8을 개선했습니다. 리프터와 크로스 트레이너 및 투지가 강한 이들을 위해 제작되었으며 세계 최고의 운동선수들의 신뢰를 받고 있는 이 신발은 여전히 매일같이 기대에 부응하는, 모범과도 같은 제품입니다. 비타민에서 영감을 받은 이 밸런스 좋은 디자인으로 운동을 할 때도, 사람들을 만날 때도 활기찬 에너지를 발산해 보세요.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 1,
          isNew: true,
          isBest: false,
          category: ['PC02', 'PC0201'], // Women > 신발
          primeCost: 179000,
          gender: 'women',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 179000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 메트콘 9 AMP',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_METCON_01.png`,
            name: 'NIKE_METCON_01.png',
            originalname: 'NIKE_METCON_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_METCON_02.png`,
            name: 'NIKE_METCON_02.png',
            originalname: 'NIKE_METCON_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_METCON_03.png`,
            name: 'NIKE_METCON_03.png',
            originalname: 'NIKE_METCON_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_METCON_04.png`,
            name: 'NIKE_METCON_04.png',
            originalname: 'NIKE_METCON_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_METCON_05.png`,
            name: 'NIKE_METCON_05.png',
            originalname: 'NIKE_METCON_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_METCON_06.png`,
            name: 'NIKE_METCON_06.png',
            originalname: 'NIKE_METCON_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_METCON_07.png`,
            name: 'NIKE_METCON_07.png',
            originalname: 'NIKE_METCON_07.png',
          },
          {
            path: `/files/${clientId}/NIKE_METCON_08.png`,
            name: 'NIKE_METCON_08.png',
            originalname: 'NIKE_METCON_08.png',
          },
        ],
        content: `나이키 메트콘 9 AMP 오렌지색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 21,
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260],
          color: '화이트/라이트 본/라임스톤/미드나이트 네이비',
          styleNo: 'DZ2539-100',
          primeCost: 179000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 179000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 메트콘 9 AMP',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_METCON_b_01.jpeg`,
            name: 'NIKE_METCON_b_01.jpeg',
            originalname: 'NIKE_METCON_b_01.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_METCON_b_02.png`,
            name: 'NIKE_METCON_b_02.png',
            originalname: 'NIKE_METCON_b_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_METCON_b_03.jpeg`,
            name: 'NIKE_METCON_b_03.jpeg',
            originalname: 'NIKE_METCON_b_03.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_METCON_b_04.jpeg`,
            name: 'NIKE_METCON_b_04.jpeg',
            originalname: 'NIKE_METCON_b_04.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_METCON_b_05.jpeg`,
            name: 'NIKE_METCON_b_05.jpeg',
            originalname: 'NIKE_METCON_b_05.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_METCON_b_06.png`,
            name: 'NIKE_METCON_b_06.png',
            originalname: 'NIKE_METCON_b_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_METCON_b_07.jpeg`,
            name: 'NIKE_METCON_b_07.jpeg',
            originalname: 'NIKE_METCON_b_07.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_METCON_b_08.jpeg`,
            name: 'NIKE_METCON_b_08.jpeg',
            originalname: 'NIKE_METCON_b_08.jpeg',
          },
        ],
        content: `나이키 메트콘 9 AMP 버건디색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 21,
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260],
          color: '버건디 크러시/다크 비트루트/러시 핑크/블랙',
          styleNo: 'DZ2539-600',
          primeCost: 179000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 219000,
        show: true,
        active: true,
        name: '나이키 에어맥스 플라이니트 벤처',
        quantity: 990,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_AIRMAX_FLYKNIT_VENTURE_01.png`,
            name: 'NIKE_AIRMAX_FLYKNIT_VENTURE_01.png',
            originalname: 'NIKE_AIRMAX_FLYKNIT_VENTURE_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIRMAX_FLYKNIT_VENTURE_02.png`,
            name: 'NIKE_AIRMAX_FLYKNIT_VENTURE_02.png',
            originalname: 'NIKE_AIRMAX_FLYKNIT_VENTURE_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIRMAX_FLYKNIT_VENTURE_03.png`,
            name: 'NIKE_AIRMAX_FLYKNIT_VENTURE_03.png',
            originalname: 'NIKE_AIRMAX_FLYKNIT_VENTURE_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIRMAX_FLYKNIT_VENTURE_04.png`,
            name: 'NIKE_AIRMAX_FLYKNIT_VENTURE_04.png',
            originalname: 'NIKE_AIRMAX_FLYKNIT_VENTURE_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIRMAX_FLYKNIT_VENTURE_05.png`,
            name: 'NIKE_AIRMAX_FLYKNIT_VENTURE_05.png',
            originalname: 'NIKE_AIRMAX_FLYKNIT_VENTURE_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIRMAX_FLYKNIT_VENTURE_06.png`,
            name: 'NIKE_AIRMAX_FLYKNIT_VENTURE_06.png',
            originalname: 'NIKE_AIRMAX_FLYKNIT_VENTURE_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIRMAX_FLYKNIT_VENTURE_07.jpeg`,
            name: 'NIKE_AIRMAX_FLYKNIT_VENTURE_07.jpeg',
            originalname: 'NIKE_AIRMAX_FLYKNIT_VENTURE_07.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_AIRMAX_FLYKNIT_VENTURE_08.png`,
            name: 'NIKE_AIRMAX_FLYKNIT_VENTURE_08.png',
            originalname: 'NIKE_AIRMAX_FLYKNIT_VENTURE_08.png',
          },
        ],
        content: `아웃도어에서 영감을 받아 유틸리티 스타일로 완성된 벤처를 만나보세요. 기능적 디테일과 청키한 룩이 거친 감성을 선사하며, 커스텀이 가능한 끈 조임 시스템은 착화감을 개선하여 도시의 보도와 트레일을 편안하게 달릴 수 있습니다. 무한한 가능성을 누려보세요.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['PC02', 'PC0201'], // Women > 용품
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260],
          color: '씨 글래스/파슬/플래티넘 바이올렛/문 파슬',
          styleNo: 'FD2110-003',
          primeCost: 219000,
          gender: 'women',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 79000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 버로우 SE',
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_BOROUGH_01.png`,
            name: 'NIKE_BOROUGH_01.png',
            originalname: 'NIKE_BOROUGH_01.png',
          },
        ],
        content: `어디를 가든 포근함을 느껴보세요. 플리스 느낌의 안감이따뜻함을 유지해 주고, 마시멜로처럼 부드러운 폼 중창과 밑창, 그립감 있는 접지 패턴이 걸을 때마다 탄성감을 선사합니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 1,
          isNew: true,
          isBest: false,
          category: ['PC02', 'PC0201'], // Women > 신발
          primeCost: 79000,
          gender: 'women',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 79000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 버로우 SE',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_BOROUGH_01.png`,
            name: 'NIKE_BOROUGH_01.png',
            originalname: 'NIKE_BOROUGH_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_BOROUGH_02.png`,
            name: 'NIKE_BOROUGH_02.png',
            originalname: 'NIKE_BOROUGH_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_BOROUGH_03.png`,
            name: 'NIKE_BOROUGH_03.png',
            originalname: 'NIKE_BOROUGH_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_BOROUGH_04.png`,
            name: 'NIKE_BOROUGH_04.png',
            originalname: 'NIKE_BOROUGH_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_BOROUGH_05.png`,
            name: 'NIKE_BOROUGH_05.png',
            originalname: 'NIKE_BOROUGH_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_BOROUGH_06.png`,
            name: 'NIKE_BOROUGH_06.png',
            originalname: 'NIKE_BOROUGH_06.png',
          },
        ],
        content: `나이키 버로우 SE 검은색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 25,
          size: [220, 230, 240, 250, 260],
          color: '블랙/블랙',
          styleNo: 'FZ7939-001',
          primeCost: 79000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 79000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 버로우 SE',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_BOROUGH_b_01.png`,
            name: 'NIKE_BOROUGH_b_01.png',
            originalname: 'NIKE_BOROUGH_b_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_BOROUGH_b_02.png`,
            name: 'NIKE_BOROUGH_b_02.png',
            originalname: 'NIKE_BOROUGH_b_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_BOROUGH_b_03.png`,
            name: 'NIKE_BOROUGH_b_03.png',
            originalname: 'NIKE_BOROUGH_b_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_BOROUGH_b_04.png`,
            name: 'NIKE_BOROUGH_b_04.png',
            originalname: 'NIKE_BOROUGH_b_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_BOROUGH_b_05.png`,
            name: 'NIKE_BOROUGH_b_05.png',
            originalname: 'NIKE_BOROUGH_b_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_BOROUGH_b_06.png`,
            name: 'NIKE_BOROUGH_b_06.png',
            originalname: 'NIKE_BOROUGH_b_06.png',
          },
        ],
        content: `나이키 버로우 SE 실버색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 25,
          size: [220, 230, 240, 250, 260],
          color: '메탈릭 실버/라이트 오어우드 브라운',
          styleNo: 'FZ7939-002',
          primeCost: 79000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 79000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 버로우 SE',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_BOROUGH__c01.png`,
            name: 'NIKE_BOROUGH_c_01.png',
            originalname: 'NIKE_BOROUGH_c_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_BOROUGH_c_02.png`,
            name: 'NIKE_BOROUGH_c_02.png',
            originalname: 'NIKE_BOROUGH_c_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_BOROUGH_c_03.png`,
            name: 'NIKE_BOROUGH_c_03.png',
            originalname: 'NIKE_BOROUGH_c_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_BOROUGH_c_04.png`,
            name: 'NIKE_BOROUGH_c_04.png',
            originalname: 'NIKE_BOROUGH_c_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_BOROUGH_c_05.png`,
            name: 'NIKE_BOROUGH_c_05.png',
            originalname: 'NIKE_BOROUGH_c_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_BOROUGH_c_06.png`,
            name: 'NIKE_BOROUGH_c_06.png',
            originalname: 'NIKE_BOROUGH_c_06.png',
          },
        ],
        content: `나이키 버로우 SE 바이올렛색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 25,
          size: [220, 230, 240, 250, 260],
          color: '라이트 바이올렛 오어/라이트 바이올렛 오어',
          styleNo: 'FZ7939-200',
          primeCost: 79000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 219000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 제가마 2',
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_01.png`,
            name: 'NIKE_ZEGAMA_01.png',
            originalname: 'NIKE_ZEGAMA_01.png',
          },
        ],
        content: `산에 오르고 숲을 지나 트레일 끝까지 갈 수 있습니다. 반응성이 매우 뛰어난 줌X 폼 중창이 장착된 제가마 2는 가파른 능선, 들쭉날쭉한 바위를 넘고 트레일의 시작부터 끝까지 나아갈 수 있도록 설계되었습니다. 최적의 쿠셔닝이 트레일 러닝용으로 제작된 울퉁불퉁한 밑창을 보완해 줍니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 1,
          isNew: true,
          isBest: false,
          category: ['PC02', 'PC0201'], // Women > 신발
          primeCost: 219000,
          gender: 'women',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 219000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 제가마 2',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_01.png`,
            name: 'NIKE_ZEGAMA_01.png',
            originalname: 'NIKE_ZEGAMA_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_02.png`,
            name: 'NIKE_ZEGAMA_02.png',
            originalname: 'NIKE_ZEGAMA_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_03.png`,
            name: 'NIKE_ZEGAMA_03.png',
            originalname: 'NIKE_ZEGAMA_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_04.png`,
            name: 'NIKE_ZEGAMA_04.png',
            originalname: 'NIKE_ZEGAMA_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_05.png`,
            name: 'NIKE_ZEGAMA_05.png',
            originalname: 'NIKE_ZEGAMA_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_06.png`,
            name: 'NIKE_ZEGAMA_06.png',
            originalname: 'NIKE_ZEGAMA_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_07.jpeg`,
            name: 'NIKE_ZEGAMA_07.jpeg',
            originalname: 'NIKE_ZEGAMA_07.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_08.jpeg`,
            name: 'NIKE_ZEGAMA_08.jpeg',
            originalname: 'NIKE_ZEGAMA_08.jpeg',
          },
        ],
        content: `나이키 제가마 2 검은색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 29,
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260],
          color: '블랙/메탈릭 플래티넘/앤트러사이트',
          styleNo: 'FD5191-003',
          primeCost: 219000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 219000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 제가마 2',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_b_01.png`,
            name: 'NIKE_ZEGAMA_b_01.png',
            originalname: 'NIKE_ZEGAMA_b_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_b_02.png`,
            name: 'NIKE_ZEGAMA_b_02.png',
            originalname: 'NIKE_ZEGAMA_b_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_b_03.png`,
            name: 'NIKE_ZEGAMA_b_03.png',
            originalname: 'NIKE_ZEGAMA_b_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_b_04.jpeg`,
            name: 'NIKE_ZEGAMA_b_04.jpeg',
            originalname: 'NIKE_ZEGAMA_b_04.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_b_05.png`,
            name: 'NIKE_ZEGAMA_b_05.png',
            originalname: 'NIKE_ZEGAMA_b_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_b_06.png`,
            name: 'NIKE_ZEGAMA_b_06.png',
            originalname: 'NIKE_ZEGAMA_b_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_b_07.jpeg`,
            name: 'NIKE_ZEGAMA_b_07.jpeg',
            originalname: 'NIKE_ZEGAMA_b_07.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_b_08.jpeg`,
            name: 'NIKE_ZEGAMA_b_08.jpeg',
            originalname: 'NIKE_ZEGAMA_b_08.jpeg',
          },
        ],
        content: `나이키 제가마 2 초록색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 29,
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260],
          color: '제이드 호라이즌/사이버/크림슨 틴트/세일',
          styleNo: 'FD5191-300',
          primeCost: 219000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 219000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 제가마 2',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_c_01.png`,
            name: 'NIKE_ZEGAMA_c_01.png',
            originalname: 'NIKE_ZEGAMA_c_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_c_02.png`,
            name: 'NIKE_ZEGAMA_c_02.png',
            originalname: 'NIKE_ZEGAMA_c_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_c_03.png`,
            name: 'NIKE_ZEGAMA_c_03.png',
            originalname: 'NIKE_ZEGAMA_c_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_c_04.png`,
            name: 'NIKE_ZEGAMA_c_04.png',
            originalname: 'NIKE_ZEGAMA_c_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_c_05.png`,
            name: 'NIKE_ZEGAMA_c_05.png',
            originalname: 'NIKE_ZEGAMA_c_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_c_06.png`,
            name: 'NIKE_ZEGAMA_c_06.png',
            originalname: 'NIKE_ZEGAMA_c_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_c_07.jpeg`,
            name: 'NIKE_ZEGAMA_c_07.jpeg',
            originalname: 'NIKE_ZEGAMA_c_07.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_c_08.jpeg`,
            name: 'NIKE_ZEGAMA_c_08.jpeg',
            originalname: 'NIKE_ZEGAMA_c_08.jpeg',
          },
        ],
        content: `나이키 제가마 2 남색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 29,
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260],
          color: '아머리 네이비/셀레스티얼 골드/빈티지 그린/메탈릭 실버',
          styleNo: 'FD5191-401',
          primeCost: 219000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 197000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 제가마 2',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_d_01.png`,
            name: 'NIKE_ZEGAMA_d_01.png',
            originalname: 'NIKE_ZEGAMA_d_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_d_02.png`,
            name: 'NIKE_ZEGAMA_d_02.png',
            originalname: 'NIKE_ZEGAMA_d_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_d_03.png`,
            name: 'NIKE_ZEGAMA_d_03.png',
            originalname: 'NIKE_ZEGAMA_d_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_d_04.png`,
            name: 'NIKE_ZEGAMA_d_04.png',
            originalname: 'NIKE_ZEGAMA_d_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_d_05.png`,
            name: 'NIKE_ZEGAMA_d_05.png',
            originalname: 'NIKE_ZEGAMA_d_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_d_06.png`,
            name: 'NIKE_ZEGAMA_d_06.png',
            originalname: 'NIKE_ZEGAMA_d_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_d_07.jpeg`,
            name: 'NIKE_ZEGAMA_d_07.jpeg',
            originalname: 'NIKE_ZEGAMA_d_07.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_ZEGAMA_d_08.jpeg`,
            name: 'NIKE_ZEGAMA_d_08.jpeg',
            originalname: 'NIKE_ZEGAMA_d_08.jpeg',
          },
        ],
        content: `나이키 제가마 2 회색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 29,
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260],
          color: '블랙/울프 그레이/앤트러사이트/화이트',
          styleNo: 'FD5191-001',
          primeCost: 219000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 209000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이이키 페가수스 트레일 5 GORE-TEX',
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_PEGASUS_01.png`,
            name: 'NIKE_PEGASUS_01.png',
            originalname: 'NIKE_PEGASUS_01.png',
          },
        ],
        content: `겨울용 디자인의 페가수스 트레일 5와 함께라면 비 오는 날의 트레일 러닝도 걱정 없습니다. 생활 방수 GORE-TEX 갑피, 전지형 밑창, 반사 디테일이 악천후에도 편안한 착화감을 선사합니다. 리액트X 폼 중창이 반응성이 뛰어난 쿠셔닝을 제공하기 때문에 활력 있게 달릴 수 있습니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 1,
          isNew: true,
          isBest: false,
          category: ['PC02', 'PC0201'], // Women > 신발
          primeCost: 209000,
          gender: 'women',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 209000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 페가수스 트레일 5 GORE-TEX',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_PEGASUS_01.png`,
            name: 'NIKE_PEGASUS_01.png',
            originalname: 'NIKE_PEGASUS_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_02.png`,
            name: 'NIKE_PEGASUS_02.png',
            originalname: 'NIKE_PEGASUS_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_03.png`,
            name: 'NIKE_PEGASUS_03.png',
            originalname: 'NIKE_PEGASUS_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_04.png`,
            name: 'NIKE_PEGASUS_04.png',
            originalname: 'NIKE_PEGASUS_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_05.png`,
            name: 'NIKE_PEGASUS_05.png',
            originalname: 'NIKE_PEGASUS_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_06.png`,
            name: 'NIKE_PEGASUS_06.png',
            originalname: 'NIKE_PEGASUS_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_07.jpeg`,
            name: 'NIKE_PEGASUS_07.jpeg',
            originalname: 'NIKE_PEGASUS_07.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_08.jpeg`,
            name: 'NIKE_PEGASUS_08.jpeg',
            originalname: 'NIKE_PEGASUS_08.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_09.png`,
            name: 'NIKE_PEGASUS_09.png',
            originalname: 'NIKE_PEGASUS_09.png',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_10.jpeg`,
            name: 'NIKE_PEGASUS_10.jpeg',
            originalname: 'NIKE_PEGASUS_10.jpeg',
          },
        ],
        content: `나이키 페가수스 트레일 5 GORE-TEX 검은색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 34,
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260],
          color: '블랙/앤트러사이트/블랙',
          styleNo: 'FQ0912-002',
          primeCost: 209000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 209000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 페가수스 트레일 5 GORE-TEX',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_PEGASUS_b_01.png`,
            name: 'NIKE_PEGASUS_b_01.png',
            originalname: 'NIKE_PEGASUS_b_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_b_02.png`,
            name: 'NIKE_PEGASUS_b_02.png',
            originalname: 'NIKE_PEGASUS_b_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_b_03.png`,
            name: 'NIKE_PEGASUS_b_03.png',
            originalname: 'NIKE_PEGASUS_b_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_b_04.png`,
            name: 'NIKE_PEGASUS_b_04.png',
            originalname: 'NIKE_PEGASUS_b_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_b_05.png`,
            name: 'NIKE_PEGASUS_b_05.png',
            originalname: 'NIKE_PEGASUS_b_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_b_06.png`,
            name: 'NIKE_PEGASUS_b_06.png',
            originalname: 'NIKE_PEGASUS_b_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_b_07.png`,
            name: 'NIKE_PEGASUS_b_07.png',
            originalname: 'NIKE_PEGASUS_b_07.png',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_b_08.png`,
            name: 'NIKE_PEGASUS_b_08.png',
            originalname: 'NIKE_PEGASUS_b_08.png',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_b_09.png`,
            name: 'NIKE_PEGASUS_b_09.png',
            originalname: 'NIKE_PEGASUS_b_09.png',
          },
        ],
        content: `나이키 페가수스 트레일 5 GORE-TEX 라임색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 34,
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260],
          color: '샌드드리프트/사이버/라이프 라임/다크 포니',
          styleNo: 'FQ0912-101',
          primeCost: 209000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 209000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 페가수스 트레일 5 GORE-TEX',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_PEGASUS_c_01.jpeg`,
            name: 'NIKE_PEGASUS_c_01.jpeg',
            originalname: 'NIKE_PEGASUS_c_01.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_c_02.png`,
            name: 'NIKE_PEGASUS_c_02.png',
            originalname: 'NIKE_PEGASUS_c_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_c_03.png`,
            name: 'NIKE_PEGASUS_c_03.png',
            originalname: 'NIKE_PEGASUS_c_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_c_04.jpeg`,
            name: 'NIKE_PEGASUS_c_04.jpeg',
            originalname: 'NIKE_PEGASUS_c_04.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_c_05.png`,
            name: 'NIKE_PEGASUS_c_05.png',
            originalname: 'NIKE_PEGASUS_c_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_c_06.png`,
            name: 'NIKE_PEGASUS_c_06.png',
            originalname: 'NIKE_PEGASUS_c_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_c_07.jpeg`,
            name: 'NIKE_PEGASUS_c_07.jpeg',
            originalname: 'NIKE_PEGASUS_c_07.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_PEGASUS_c_08.png`,
            name: 'NIKE_PEGASUS_c_08.png',
            originalname: 'NIKE_PEGASUS_c_08.png',
          },
        ],
        content: `나이키 페가수스 트레일 5 GORE-TEX 남색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 34,
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260],
          color: '아머리 네이비/빈티지 그린/플래티넘 바이올렛/아머리 네이비',
          styleNo: 'FQ0912-400',
          primeCost: 209000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 119000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 필드 제너럴',
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_FIELD_GENERAL_01.png`,
            name: 'NIKE_FIELD_GENERAL_01.png',
            originalname: 'NIKE_FIELD_GENERAL_01.png',
          },
        ],
        content: `투지 넘치는 미식축구 문화에 뿌리를 둔 필드 제너럴이 돌아와 스니커즈계를 뒤흔듭니다. 인조 가죽과 튼튼한 직물 소재에 돌기 형태의 와플 밑창이 어우러져 빈티지한 그리드아이언 룩을 연출합니다. 스니커즈의 역사와 함께하며 미래로 나아가는 나만의 길을 개척해 보세요.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 1,
          isNew: true,
          isBest: false,
          category: ['PC02', 'PC0201'], // Women > 신발
          primeCost: 119000,
          gender: 'women',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 119000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 필드 제너럴',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_FIELD_GENERAL_01.png`,
            name: 'NIKE_FIELD_GENERAL_01.png',
            originalname: 'NIKE_FIELD_GENERAL_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_FIELD_GENERAL_02.png`,
            name: 'NIKE_FIELD_GENERAL_02.png',
            originalname: 'NIKE_FIELD_GENERAL_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_FIELD_GENERAL_03.png`,
            name: 'NIKE_FIELD_GENERAL_03.png',
            originalname: 'NIKE_FIELD_GENERAL_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_FIELD_GENERAL_04.png`,
            name: 'NIKE_FIELD_GENERAL_04.png',
            originalname: 'NIKE_FIELD_GENERAL_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_FIELD_GENERAL_05.png`,
            name: 'NIKE_FIELD_GENERAL_05.png',
            originalname: 'NIKE_FIELD_GENERAL_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_FIELD_GENERAL_06.png`,
            name: 'NIKE_FIELD_GENERAL_06.png',
            originalname: 'NIKE_FIELD_GENERAL_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_FIELD_GENERAL_07.png`,
            name: 'NIKE_FIELD_GENERAL_07.png',
            originalname: 'NIKE_FIELD_GENERAL_07.png',
          },
          {
            path: `/files/${clientId}/NIKE_FIELD_GENERAL_08.png`,
            name: 'NIKE_FIELD_GENERAL_08.png',
            originalname: 'NIKE_FIELD_GENERAL_08.png',
          },
        ],
        content: `나이키 필드 제너럴 검은색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 38,
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260],
          color: '블랙/블랙/메탈릭 실버',
          styleNo: 'FZ5593-001',
          primeCost: 119000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 119000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 필드 제너럴',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_FIELD_GENERAL_b_01.png`,
            name: 'NIKE_FIELD_GENERAL_b_01.png',
            originalname: 'NIKE_FIELD_GENERAL_b_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_FIELD_GENERAL_b_02.png`,
            name: 'NIKE_FIELD_GENERAL_b_02.png',
            originalname: 'NIKE_FIELD_GENERAL_b_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_FIELD_GENERAL_b_03.png`,
            name: 'NIKE_FIELD_GENERAL_b_03.png',
            originalname: 'NIKE_FIELD_GENERAL_b_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_FIELD_GENERAL_b_04.png`,
            name: 'NIKE_FIELD_GENERAL_b_04.png',
            originalname: 'NIKE_FIELD_GENERAL_b_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_FIELD_GENERAL_b_05.png`,
            name: 'NIKE_FIELD_GENERAL_b_05.png',
            originalname: 'NIKE_FIELD_GENERAL_b_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_FIELD_GENERAL_b_06.png`,
            name: 'NIKE_FIELD_GENERAL_b_06.png',
            originalname: 'NIKE_FIELD_GENERAL_b_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_FIELD_GENERAL_b_07.png`,
            name: 'NIKE_FIELD_GENERAL_b_07.png',
            originalname: 'NIKE_FIELD_GENERAL_b_07.png',
          },
          {
            path: `/files/${clientId}/NIKE_FIELD_GENERAL_b_08.png`,
            name: 'NIKE_FIELD_GENERAL_b_08.png',
            originalname: 'NIKE_FIELD_GENERAL_b_08.png',
          },
        ],
        content: `나이키 필드 제너럴 핑크색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 38,
          size: [220, 225, 230, 235, 240, 245, 250, 255, 260],
          color: '엘리멘탈 핑크/검 미디엄 브라운/옵시디언',
          styleNo: ' FZ5593-600',
          primeCost: 119000,
        },
      },
      //////////////////////////////// ✨DH
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 169000,
        show: true,
        active: true,
        name: "나이키 에어 포스 1 '07 WB",
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_wb_01.png`,
            name: 'NIKE_AIR_FORCE_wb_01.png',
            originalname: 'NIKE_AIR_FORCE_wb_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_wb_02.png`,
            name: 'NIKE_AIR_FORCE_wb_02.png',
            originalname: 'NIKE_AIR_FORCE_wb_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_wb_03.png`,
            name: 'NIKE_AIR_FORCE_wb_03.png',
            originalname: 'NIKE_AIR_FORCE_wb_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_wb_04.png`,
            name: 'NIKE_AIR_FORCE_wb_04.png',
            originalname: 'NIKE_AIR_FORCE_wb_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_wb_05.png`,
            name: 'NIKE_AIR_FORCE_wb_05.png',
            originalname: 'NIKE_AIR_FORCE_wb_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_wb_06.png`,
            name: 'NIKE_AIR_FORCE_wb_06.png',
            originalname: 'NIKE_AIR_FORCE_wb_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_wb_07.jpeg`,
            name: 'NIKE_AIR_FORCE_wb_07.jpeg',
            originalname: 'NIKE_AIR_FORCE_wb_07.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_wb_08.jpeg`,
            name: 'NIKE_AIR_FORCE_wb_08.jpeg',
            originalname: 'NIKE_AIR_FORCE_wb_08.jpeg',
          },
        ],
        content: `나이키 에어 포스 1 '07 WB로 전설을 이어갑니다. 로우컷으로 재탄생한 아이콘 AF1이 클래식한 코트 스타일과 프리미엄 쿠셔닝을 선사합니다..`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['PC01', 'PC0102'], // Men > 신발
          size: [
            230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290,
            295, 300, 305, 310,
          ],
          color: '플랙스/검 라이트 브라운/블랙/휘트',
          styleNo: 'CJ9179-200',
          primeCost: 169000,
          gender: 'men',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 209000,
        show: true,
        active: true,
        name: '나이키 줌 보메로 롬',
        quantity: 9999,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_ZOOM_VOMERO_ROAM_01.png`,
            name: 'NIKE_ZOOM_VOMERO_ROAM_01.png',
            originalname: 'NIKE_ZOOM_VOMERO_ROAM_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZOOM_VOMERO_ROAM_02.png`,
            name: 'NIKE_ZOOM_VOMERO_ROAM_02.png',
            originalname: 'NIKE_ZOOM_VOMERO_ROAM_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZOOM_VOMERO_ROAM_03.png`,
            name: 'NIKE_ZOOM_VOMERO_ROAM_03.png',
            originalname: 'NIKE_ZOOM_VOMERO_ROAM_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZOOM_VOMERO_ROAM_04.jpeg`,
            name: 'NIKE_ZOOM_VOMERO_ROAM_04.jpeg',
            originalname: 'NIKE_ZOOM_VOMERO_ROAM_04.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_ZOOM_VOMERO_ROAM_05.png`,
            name: 'NIKE_ZOOM_VOMERO_ROAM_05.png',
            originalname: 'NIKE_ZOOM_VOMERO_ROAM_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZOOM_VOMERO_ROAM_06.png`,
            name: 'NIKE_ZOOM_VOMERO_ROAM_06.png',
            originalname: 'NIKE_ZOOM_VOMERO_ROAM_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZOOM_VOMERO_ROAM_07.jpeg`,
            name: 'NIKE_ZOOM_VOMERO_ROAM_07.jpeg',
            originalname: 'NIKE_ZOOM_VOMERO_ROAM_07.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_ZOOM_VOMERO_ROAM_08.png`,
            name: 'NIKE_ZOOM_VOMERO_ROAM_08.png',
            originalname: 'NIKE_ZOOM_VOMERO_ROAM_08.png',
          },
        ],
        content: `도시 환경에 적합하도록 디자인된 이 겨울용 버전 보메로는 비 오는 날씨에 신기 좋습니다. 내구성 좋은 소재에 고무 머드가드가 결합되어 흙이나 물웅덩이로부터 신발을 보호해 줍니다. 또한 두툼한 중창이 어디를 걷더라도 눈에 띄는 편안함과 스타일을 선사합니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['PC01', 'PC0102'], // Men > 용품
          size: [
            240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300,
            305, 310,
          ],
          color: '레이서 블루/서밋 화이트/블랙/레이서 블루',
          styleNo: 'FV2295-400',
          primeCost: 209000,
          gender: 'men',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 111200,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 덩크 로우 레트로',
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_RETRO_01.png`,
            name: 'NIKE_DUNK_LOW_RETRO_01.png',
            originalname: 'NIKE_DUNK_LOW_RETRO_01.png',
          },
        ],
        content: `하드우드를 위해 태어나 스트리트로 무대를 옮겨온 나이키 덩크 로우 레트로가 산뜻한 오버레이와 오리지널 팀 컬러로 돌아왔습니다. 신을수록 부드러워지는 멋진 룩의 프리미엄 가죽 갑피가 특징인 이 농구 아이콘은 80년대 분위기를 한껏 발산합니다. 여기에 현대의 풋웨어 기술로 21세기의 편안함을 구현했습니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 1,
          isNew: false,
          isBest: false,
          category: ['PC01', 'PC0102'], // Women > 신발
          primeCost: 139000,
          gender: 'men',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 111200,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 덩크 로우 레트로',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_RETRO_01.png`,
            name: 'NIKE_DUNK_LOW_RETRO_01.png',
            originalname: 'NIKE_DUNK_LOW_RETRO_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_RETRO_02.png`,
            name: 'NIKE_DUNK_LOW_RETRO_02.png',
            originalname: 'NIKE_DUNK_LOW_RETRO_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_RETRO_03.png`,
            name: 'NIKE_DUNK_LOW_RETRO_03.png',
            originalname: 'NIKE_DUNK_LOW_RETRO_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_RETRO_04.png`,
            name: 'NIKE_DUNK_LOW_RETRO_04.png',
            originalname: 'NIKE_DUNK_LOW_RETRO_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_RETRO_05.png`,
            name: 'NIKE_DUNK_LOW_RETRO_05.png',
            originalname: 'NIKE_DUNK_LOW_RETRO_05.png',
          },
        ],
        content: `나이키 덩크 로우 레트로 검은색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 43,
          size: [
            240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300,
            305, 310,
          ],
          color: '화이트/화이트/블랙',
          styleNo: 'DD1391-100',
          primeCost: 139000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 139000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 덩크 로우 레트로',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_RETRO_g_01.jpeg`,
            name: 'NIKE_DUNK_LOW_RETRO_g_01.jpeg',
            originalname: 'NIKE_DUNK_LOW_RETRO_g_01.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_RETRO_g_02.png`,
            name: 'NIKE_DUNK_LOW_RETRO_g_02.png',
            originalname: 'NIKE_DUNK_LOW_RETRO_g_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_RETRO_g_03.jpeg`,
            name: 'NIKE_DUNK_LOW_RETRO_g_03.jpeg',
            originalname: 'NIKE_DUNK_LOW_RETRO_g_03.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_RETRO_g_04.png`,
            name: 'NIKE_DUNK_LOW_RETRO_g_04.png',
            originalname: 'NIKE_DUNK_LOW_RETRO_g_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_RETRO_g_05.png`,
            name: 'NIKE_DUNK_LOW_RETRO_g_05.png',
            originalname: 'NIKE_DUNK_LOW_RETRO_g_05.png',
          },
        ],
        content: `나이키 덩크 로우 레트로 녹색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 43,
          size: [
            230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290,
            295, 300, 305, 310,
          ],
          color: '화이트/화이트/토탈 오렌지/팀 그린',
          styleNo: 'DD1391-101',
          primeCost: 139000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 111200,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 덩크 로우 레트로',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_RETRO_w_01.png`,
            name: 'NIKE_DUNK_LOW_RETRO_w_01.png',
            originalname: 'NIKE_DUNK_LOW_RETRO_w_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_RETRO_w_02.png`,
            name: 'NIKE_DUNK_LOW_RETRO_w_02.png',
            originalname: 'NIKE_DUNK_LOW_RETRO_w_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_RETRO_w_03.png`,
            name: 'NIKE_DUNK_LOW_RETRO_w_03.png',
            originalname: 'NIKE_DUNK_LOW_RETRO_w_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_RETRO_w_04.png`,
            name: 'NIKE_DUNK_LOW_RETRO_w_04.png',
            originalname: 'NIKE_DUNK_LOW_RETRO_w_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_RETRO_w_05.png`,
            name: 'NIKE_DUNK_LOW_RETRO_w_05.png',
            originalname: 'NIKE_DUNK_LOW_RETRO_w_05.png',
          },
        ],
        content: `나이키 덩크 로우 레트로 흰색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 43,
          size: [
            240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300,
            305, 310,
          ],
          color: '화이트/그레이 포그',
          styleNo: 'DD1391-103',
          primeCost: 139000,
        },
      },

      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 129000,
        show: true,
        active: true,
        name: '나이키 P-6000',
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_P_6000_01.jpeg`,
            name: 'NIKE_P_6000_01.jpeg',
            originalname: 'NIKE_P_6000_01.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_P-6000_02.png`,
            name: 'NIKE_P-6000_02.png',
            originalname: 'NIKE_P-6000_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_P-6000_03.jpeg`,
            name: 'NIKE_P-6000_03.jpeg',
            originalname: 'NIKE_P-6000_03.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_P-6000_04.jpeg`,
            name: 'NIKE_P-6000_04.jpeg',
            originalname: 'NIKE_P-6000_04.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_P-6000_05.png`,
            name: 'NIKE_P-6000_05.png',
            originalname: 'NIKE_P-6000_05.png',
          },
        ],
        content: `P-6000은 과거 페가수스 스니커즈를 매시업한 디자인이 특징으로, 2000년대 초의 러닝화 감성을 현대적으로 업그레이드했습니다. 통기성 좋은 메쉬와 스포티한 라인이 특징이며, 시선을 사로잡는 룩과 우수한 통기성 및 편안함이 완벽한 조화를 이룹니다. 아래에는 폼 쿠셔닝을 적용해 트랙에서 영감을 받은 높은 실루엣과 놀라운 쿠셔닝을 선사합니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: false,
          category: ['PC01', 'PC0102'], // Men > 신발
          size: [
            240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300,
            305, 310,
          ],
          color: '카키/메탈릭 플래티넘/퓨어 플래티넘/메탈릭 실버',
          styleNo: 'HQ3030-200',
          primeCost: 129000,
          gender: 'men',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 169000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 에어맥스 1 에센셜',
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_AIR_MAX_1_ESS_01.png`,
            name: 'NIKE_AIR_MAX_1_ESS_01.png',
            originalname: 'NIKE_AIR_MAX_1_ESS_01.png',
          },
        ],
        content: `무리를 이끄는 리더를 만나 보세요. 시끄러운 소음 너머, 구름 위를 걷는 듯한 느낌을 주는 에어맥스 1은 유행을 타지 않는 디자인과 편안한 쿠셔닝을 조합했습니다. 맥스 에어 유닛과 혼합 소재가 특징인 이 아이콘은 1987년에 처음 등장한 이후 오늘날까지 프랜차이즈의 영혼으로 자리매김하고 있습니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 1,
          isNew: false,
          isBest: false,
          category: ['PC01', 'PC0102'], // Women > 신발
          primeCost: 169000,
          gender: 'men',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 169000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 에어맥스 1 에센셜',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_AIR_MAX_1_ESS_01.png`,
            name: 'NIKE_AIR_MAX_1_ESS_01.png',
            originalname: 'NIKE_AIR_MAX_1_ESS_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_MAX_1_ESS_02.png`,
            name: 'NIKE_AIR_MAX_1_ESS_02.png',
            originalname: 'NIKE_AIR_MAX_1_ESS_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_MAX_1_ESS_03.png`,
            name: 'NIKE_AIR_MAX_1_ESS_03.png',
            originalname: 'NIKE_AIR_MAX_1_ESS_03.png',
          },
        ],
        content: `나이키 에어맥스 1 에센셜 분홍색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 48,
          size: [
            240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300,
            305, 310,
          ],
          color: '서밋 화이트/울프 그레이/화이트/다크 스모크 그레이',
          styleNo: 'FZ5808-104',
          primeCost: 169000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 169000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 에어맥스 1 에센셜',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_AIR_MAX_1_ESS_y_01.png`,
            name: 'NIKE_AIR_MAX_1_ESS_y_01.png',
            originalname: 'NIKE_AIR_MAX_1_ESS_y_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_MAX_1_ESS_y_02.png`,
            name: 'NIKE_AIR_MAX_1_ESS_y_02.png',
            originalname: 'NIKE_AIR_MAX_1_ESS_y_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_MAX_1_ESS_y_03.png`,
            name: 'NIKE_AIR_MAX_1_ESS_y_03.png',
            originalname: 'NIKE_AIR_MAX_1_ESS_y_03.png',
          },
        ],
        content: `나이키 에어맥스 1 에센셜 노랑색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 48,
          size: [
            240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300,
            305, 310,
          ],
          color: '화이트/퓨어 플래티넘/블랙/유니버시티 골드',
          styleNo: 'FZ5808-100',
          primeCost: 169000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 169000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 에어맥스 1 에센셜',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_AIR_MAX_1_ESS_b_01.jpeg`,
            name: 'NIKE_AIR_MAX_1_ESS_b_01.jpeg',
            originalname: 'NIKE_AIR_MAX_1_ESS_b_01.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_MAX_1_ESS_b_02.png`,
            name: 'NIKE_AIR_MAX_1_ESS_b_02.png',
            originalname: 'NIKE_AIR_MAX_1_ESS_b_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_MAX_1_ESS_b_03.jpeg`,
            name: 'NIKE_AIR_MAX_1_ESS_b_03.jpeg',
            originalname: 'NIKE_AIR_MAX_1_ESS_b_03.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_MAX_1_ESS_b_04.jpeg`,
            name: 'NIKE_AIR_MAX_1_ESS_b_04.jpeg',
            originalname: 'NIKE_AIR_MAX_1_ESS_b_04.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_MAX_1_ESS_b_05.jpeg`,
            name: 'NIKE_AIR_MAX_1_ESS_b_05.jpeg',
            originalname: 'NIKE_AIR_MAX_1_ESS_b_05.jpeg',
          },
        ],
        content: `나이키 에어맥스 1 에센셜 파랑색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 48,
          size: [
            240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300,
          ],
          color: '스모크 그레이/울프 그레이/옵시디언/레이서 블루',
          styleNo: 'FZ5808-003',
          primeCost: 169000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 169000,
        show: true,
        active: true,
        name: '나이키 페가수스 41 프리미엄',
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/AIR_ZOOM_PEGASUS_41_PRM_01.png`,
            name: 'AIR_ZOOM_PEGASUS_41_PRM_01.png',
            originalname: 'AIR_ZOOM_PEGASUS_41_PRM_01.png',
          },
          {
            path: `/files/${clientId}/AIR_ZOOM_PEGASUS_41_PRM_02.png`,
            name: 'AIR_ZOOM_PEGASUS_41_PRM_02.png',
            originalname: 'AIR_ZOOM_PEGASUS_41_PRM_02.png',
          },
          {
            path: `/files/${clientId}/AIR_ZOOM_PEGASUS_41_PRM_03.png`,
            name: 'AIR_ZOOM_PEGASUS_41_PRM_03.png',
            originalname: 'AIR_ZOOM_PEGASUS_41_PRM_03.png',
          },
          {
            path: `/files/${clientId}/AIR_ZOOM_PEGASUS_41_PRM_04.jpeg`,
            name: 'AIR_ZOOM_PEGASUS_41_PRM_04.jpeg',
            originalname: 'AIR_ZOOM_PEGASUS_41_PRM_04.jpeg',
          },
          {
            path: `/files/${clientId}/AIR_ZOOM_PEGASUS_41_PRM_05.jpeg`,
            name: 'AIR_ZOOM_PEGASUS_41_PRM_05.jpeg',
            originalname: 'AIR_ZOOM_PEGASUS_41_PRM_05.jpeg',
          },
        ],
        content: `겨울용 페가수스의 반응성 좋은 쿠셔닝은 낮이든 밤이든 상관없이 로드 러닝을 더욱 활력 있게 만들어 줍니다. 듀얼 에어 줌 유닛과 리액트X 폼 중창이 결합되어 가벼우면서도 탁월한 에너지 반환력을 느낄 수 있으며, 중창부터 갑피까지 적용된 반사 페인트는 발걸음에 빛을 더해줍니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: false,
          category: ['PC01', 'PC0102'], // Men > 신발
          size: [
            240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300,
            305, 310,
          ],
          color: '하이퍼 크림슨/세이프티 오렌지/포톤 더스트/메탈릭 실버',
          styleNo: 'HQ2938-800',
          primeCost: 129000,
          gender: 'men',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 189000,
        show: true,
        active: true,
        name: '나이키 줌 보메로 5',
        quantity: 9999,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_ZOOM_VOMERO_5_01.png`,
            name: 'NIKE_ZOOM_VOMERO_5_01.png',
            originalname: 'NIKE_ZOOM_VOMERO_5_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZOOM_VOMERO_5_02.png`,
            name: 'NIKE_ZOOM_VOMERO_5_02.png',
            originalname: 'NIKE_ZOOM_VOMERO_5_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZOOM_VOMERO_5_03.png`,
            name: 'NIKE_ZOOM_VOMERO_5_03.png',
            originalname: 'NIKE_ZOOM_VOMERO_5_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_ZOOM_VOMERO_5_04.jpeg`,
            name: 'NIKE_ZOOM_VOMERO_5_04.jpeg',
            originalname: 'NIKE_ZOOM_VOMERO_5_04.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_ZOOM_VOMERO_5_05.png`,
            name: 'NIKE_ZOOM_VOMERO_5_05.png',
            originalname: 'NIKE_ZOOM_VOMERO_5_05.png',
          },
        ],
        content: `줌 보메로 5와 함께 나만을 위한 새로운 길을 개척하세요. 복잡성과 깊이를 선사하며 더욱 쉽게 스타일링할 수 있습니다. 풍부한 레이어드 디자인에 직물과 가죽, 플라스틱 액센트가 더해져 이번 시즌 가장 멋진 스니커즈가 탄생했습니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['PC01', 'PC0102'], // Men > 용품
          size: [
            240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300,
            305, 310,
          ],
          color: '블랙/앤트러사이트/메탈릭 다크 그레이/블랙',
          styleNo: 'HF1553-001',
          primeCost: 189000,
          gender: 'men',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 112000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 프리 메트콘 6',
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_FREE_METCON_6_01.png`,
            name: 'NIKE_FREE_METCON_6_01.png',
            originalname: 'NIKE_FREE_METCON_6_01.png',
          },
        ],
        content: `파워 리프트에서 사다리까지, 잔디밭에서 표면이 거친 플랫폼까지, 인조 구장에서 트랙까지. 모든 운동에는 특정한 목적과 집중하는 바가 있습니다. 프리 메트콘 6를 신으면 어떤 운동도 수월하게 하여 성과를 얻을 수 있습니다. 나이키에서 적응력이 가장 뛰어난 트레이너화에 앞꿈치 유연성을 좀 더 더하고 추가 폼으로 뒤꿈치를 보강했습니다. 덕분에 폴리오메트릭과 유산소 운동 중에 역동적인 움직임을 자유롭게 구사할 뿐 아니라 웨이트 트레이닝에 필요한 안정적인 베이스를 확보할 수 있죠.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 1,
          isNew: false,
          isBest: false,
          category: ['PC01', 'PC0102'], // Women > 신발
          primeCost: 139000,
          gender: 'men',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 112000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 프리 메트콘 6',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_FREE_METCON_6_01.png`,
            name: 'NIKE_FREE_METCON_6_01.png',
            originalname: 'NIKE_FREE_METCON_6_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_FREE_METCON_6_02.png`,
            name: 'NIKE_FREE_METCON_6_02.png',
            originalname: 'NIKE_FREE_METCON_6_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_FREE_METCON_6_03.png`,
            name: 'NIKE_FREE_METCON_6_03.png',
            originalname: 'NIKE_FREE_METCON_6_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_FREE_METCON_6_04.jpeg`,
            name: 'NIKE_FREE_METCON_6_04.jpeg',
            originalname: 'NIKE_FREE_METCON_6_04.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_FREE_METCON_6_05.png`,
            name: 'NIKE_FREE_METCON_6_05.png',
            originalname: 'NIKE_FREE_METCON_6_05.png',
          },
        ],
        content: `나이키 프리 메트콘 6 검은색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 54,
          size: [
            240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300,
            305, 310,
          ],
          color: '블랙/화이트',
          styleNo: 'FJ7127-001',
          primeCost: 139000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 112000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 프리 메트콘 6',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_FREE_METCON_6_b_01.jpeg`,
            name: 'NIKE_FREE_METCON_6_b_01.jpeg',
            originalname: 'NIKE_FREE_METCON_6_b_01.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_FREE_METCON_6_b_02.png`,
            name: 'NIKE_FREE_METCON_6_b_02.png',
            originalname: 'NIKE_FREE_METCON_6_b_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_FREE_METCON_6_b_03.jpeg`,
            name: 'NIKE_FREE_METCON_6_b_03.jpeg',
            originalname: 'NIKE_FREE_METCON_6_b_03.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_FREE_METCON_6_b_04.jpeg`,
            name: 'NIKE_FREE_METCON_6_b_04.jpeg',
            originalname: 'NIKE_FREE_METCON_6_b_04.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_FREE_METCON_6_b_05.jpeg`,
            name: 'NIKE_FREE_METCON_6_b_05.jpeg',
            originalname: 'NIKE_FREE_METCON_6_b_05.jpeg',
          },
        ],
        content: `나이키 프리 메트콘 6 파랑색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 54,
          size: [
            245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305,
          ],
          color: '애스트로너미 블루/하이퍼 크림슨/페일 아이보리/블랙',
          styleNo: 'FJ7127-401',
          primeCost: 139000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 139000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키 프리 메트콘 6',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_FREE_METCON_6_w_01.png`,
            name: 'NIKE_FREE_METCON_6_w_01.png',
            originalname: 'NIKE_FREE_METCON_6_w_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_FREE_METCON_6_w_02.png`,
            name: 'NIKE_FREE_METCON_6_w_02.png',
            originalname: 'NIKE_FREE_METCON_6_w_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_FREE_METCON_6_w_03.png`,
            name: 'NIKE_FREE_METCON_6_w_03.png',
            originalname: 'NIKE_FREE_METCON_6_w_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_FREE_METCON_6_w_04.png`,
            name: 'NIKE_FREE_METCON_6_w_04.png',
            originalname: 'NIKE_FREE_METCON_6_w_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_FREE_METCON_6_w_05.png`,
            name: 'NIKE_FREE_METCON_6_w_05.png',
            originalname: 'NIKE_FREE_METCON_6_w_05.png',
          },
        ],
        content: `나이키 프리 메트콘 6 흰색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 54,
          size: [250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300],
          color: '화이트/화이트/볼트',
          styleNo: 'FJ7127-104',
          primeCost: 139000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 71200,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키코트 라이트 4',
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/M_NIKE_COURT_LITE_4_01.png`,
            name: 'M_NIKE_COURT_LITE_4_01.png',
            originalname: 'M_NIKE_COURT_LITE_4_01.png',
          },
        ],
        content: `나이키코트 라이트 4는 디깅 또는 딩킹 동작을 하거나 스플릿 세트에서 스크램블링 후 공을 라인 아래로 보낼 때 서브를 지속하는 데 도움을 줍니다. 내구성이 좋으면서도 긴 랠리 중에도 활동성을 선사하므로 근거리든 원거리든 받아칠 수 없는 샷을 날리기에 이상적입니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 1,
          isNew: false,
          isBest: false,
          category: ['PC01', 'PC0102'], // Women > 신발
          primeCost: 89000,
          gender: 'men',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 72000,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키코트 라이트 4',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/M_NIKE_COURT_LITE_4_01.png`,
            name: 'M_NIKE_COURT_LITE_4_01.png',
            originalname: 'M_NIKE_COURT_LITE_4_01.png',
          },
          {
            path: `/files/${clientId}/M_NIKE_COURT_LITE_4_02.png`,
            name: 'M_NIKE_COURT_LITE_4_02.png',
            originalname: 'M_NIKE_COURT_LITE_4_02.png',
          },
          {
            path: `/files/${clientId}/M_NIKE_COURT_LITE_4_03.png`,
            name: 'M_NIKE_COURT_LITE_4_03.png',
            originalname: 'M_NIKE_COURT_LITE_4_03.png',
          },
          {
            path: `/files/${clientId}/M_NIKE_COURT_LITE_4_04.png`,
            name: 'M_NIKE_COURT_LITE_4_04.png',
            originalname: 'M_NIKE_COURT_LITE_4_04.png',
          },
          {
            path: `/files/${clientId}/M_NIKE_COURT_LITE_4_05.png    `,
            name: 'M_NIKE_COURT_LITE_4_05.png   ',
            originalname: 'M_NIKE_COURT_LITE_4_05.png   ',
          },
        ],
        content: `나이키코트 라이트 4 흰색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 58,
          size: [
            240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300,
            305, 310,
          ],
          color: '화이트/서밋 화이트/블랙',
          styleNo: 'FD6574-100',
          primeCost: 89000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 80100,
        shippingFees: 3000,
        show: true,
        active: true,
        name: '나이키코트 라이트 4',
        quantity: 20,
        buyQuantity: 10,
        mainImages: [
          {
            path: `/files/${clientId}/M_NIKE_COURT_LITE_4_m_01.png`,
            name: 'M_NIKE_COURT_LITE_4_m_01.png',
            originalname: 'M_NIKE_COURT_LITE_4_m_01.png',
          },
          {
            path: `/files/${clientId}/M_NIKE_COURT_LITE_4_m_02.png`,
            name: 'M_NIKE_COURT_LITE_4_m_02.png',
            originalname: 'M_NIKE_COURT_LITE_4_m_02.png',
          },
          {
            path: `/files/${clientId}/M_NIKE_COURT_LITE_4_m_03.png`,
            name: 'M_NIKE_COURT_LITE_4_m_03.png',
            originalname: 'M_NIKE_COURT_LITE_4_m_03.png',
          },
          {
            path: `/files/${clientId}/M_NIKE_COURT_LITE_4_m_04.png`,
            name: 'M_NIKE_COURT_LITE_4_m_04.png',
            originalname: 'M_NIKE_COURT_LITE_4_m_04.png',
          },
          {
            path: `/files/${clientId}/M_NIKE_COURT_LITE_4_m_05.png    `,
            name: 'M_NIKE_COURT_LITE_4_m_05.png   ',
            originalname: 'M_NIKE_COURT_LITE_4_m_05.png   ',
          },
        ],
        content: `나이키 프리 메트콘 6 민트색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 58,
          size: [
            240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300,
            305, 310,
          ],
          color: '화이트/아머리 네이비/데님 터콰이즈/볼트',
          styleNo: 'FD6574-101',
          primeCost: 89000,
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 47200,
        show: true,
        active: true,
        name: '나이키 캄',
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_CALM_SLIDE_01.png`,
            name: 'NIKE_CALM_SLIDE_01.png',
            originalname: 'NIKE_CALM_SLIDE_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_CALM_SLIDE_02.jpeg`,
            name: 'NIKE_CALM_SLIDE_02.jpeg',
            originalname: 'NIKE_CALM_SLIDE_02.jpeg',
          },
          {
            path: `/files/${clientId}/NIKE_CALM_SLIDE_03.png`,
            name: 'NIKE_CALM_SLIDE_03.png',
            originalname: 'NIKE_CALM_SLIDE_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_CALM_SLIDE_04.png`,
            name: 'NIKE_CALM_SLIDE_04.png',
            originalname: 'NIKE_CALM_SLIDE_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_CALM_SLIDE_05.png`,
            name: 'NIKE_CALM_SLIDE_05.png',
            originalname: 'NIKE_CALM_SLIDE_05.png',
          },
        ],
        content: `휴식하는 날 어디를 가든 차분하고 편안한 하루를 보낼 수 있습니다. 부드러우면서도 반응성이 좋은 폼으로 제작된 이 경량 슬라이드는 스타일링이 쉽고 휴대성이 뛰어납니다. 물놀이에 최적화된 디자인으로 해변이나 수영장에서 신기 좋을 뿐만 아니라, 미니멀한 룩이 도시에서 착용해도 어울릴 만큼 고급스러운 느낌을 선사합니다. 이 신발을 신고 직접 확인해 보세요.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: false,
          isBest: true,
          category: ['PC01', 'PC0102'], // Men > 신발
          size: [
            230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290,
            295, 300, 305, 310,
          ],
          color: '카키/카키',
          styleNo: 'FD4116-201',
          primeCost: 59000,
          gender: 'men',
        },
      },
      //// ✨SH
      {
        // 상품 PC0301
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 139000, // 1
        show: true,
        active: true,
        name: '나이키 에어 포스 1 LV8', // 1
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_01.png`,
            name: 'NIKE_AIR_FORCE_01.png',
            originalname: 'NIKE_AIR_FORCE_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_02.png`,
            name: 'NIKE_AIR_FORCE_02.png',
            originalname: 'NIKE_AIR_FORCE_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_03.png`,
            name: 'NIKE_AIR_FORCE_03.png',
            originalname: 'NIKE_AIR_FORCE_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_04.png`,
            name: 'NIKE_AIR_FORCE_04.png',
            originalname: 'NIKE_AIR_FORCE_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_05.png`,
            name: 'NIKE_AIR_FORCE_05.png',
            originalname: 'NIKE_AIR_FORCE_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_06.png`,
            name: 'NIKE_AIR_FORCE_06.png',
            originalname: 'NIKE_AIR_FORCE_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_07.png`,
            name: 'NIKE_AIR_FORCE_07.png',
            originalname: 'NIKE_AIR_FORCE_07.png',
          },
          {
            path: `/files/${clientId}/NIKE_AIR_FORCE_08.png`,
            name: 'NIKE_AIR_FORCE_08.png',
            originalname: 'NIKE_AIR_FORCE_08.png',
          },
        ],
        content: `40여 년 전 처음 출시되었을 때와 마찬가지로 오늘날에도 멋진 AF1은 믿을 수 있는 클래식 아이템입니다. 이 신발은 내구성 좋은 인조 가죽, 편안한 나이키 에어 쿠셔닝, 그립력이 좋은 밑창 덕분에 매일 착용해도 좋습니다. 그리고 메쉬에 오버레이된 견고한 캔버스에 농구에서 영감을 받은 마감을 더해, 코트 밖에서도 빛나는 스타일을 선사합니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: false,
          category: ['PC03', 'PC0301'], // 1
          size: [200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250], // 1
          color: '서밋 화이트/카키/코코넛 밀크/서밋 화이트', // 1
          styleNo: 'HF6924-100', // 1
          primeCost: 119000,
          gender: 'kids',
        },
      },
      {
        // 상품 PC0302
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 109000, //1
        show: true,
        active: true,
        name: '테이텀 3', //1
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/JORDAN_TATUM_3_01.png`,
            name: 'JORDAN_TATUM_3_01.png',
            originalname: 'JORDAN_TATUM_3_01.png',
          },
          {
            path: `/files/${clientId}/JORDAN_TATUM_3_02.png`,
            name: 'JORDAN_TATUM_3_02.png',
            originalname: 'JORDAN_TATUM_3_02.png',
          },
          {
            path: `/files/${clientId}/JORDAN_TATUM_3_03.png`,
            name: 'JORDAN_TATUM_3_03.png',
            originalname: 'JORDAN_TATUM_3_03.png',
          },
          {
            path: `/files/${clientId}/JORDAN_TATUM_3_04.png`,
            name: 'JORDAN_TATUM_3_04.png',
            originalname: 'JORDAN_TATUM_3_04.png',
          },
          {
            path: `/files/${clientId}/JORDAN_TATUM_3_05.png`,
            name: 'JORDAN_TATUM_3_05.png',
            originalname: 'JORDAN_TATUM_3_05.png',
          },
          {
            path: `/files/${clientId}/JORDAN_TATUM_3_06.png`,
            name: 'JORDAN_TATUM_3_06.png',
            originalname: 'JORDAN_TATUM_3_06.png',
          },
          {
            path: `/files/${clientId}/JORDAN_TATUM_3_07.png`,
            name: 'JORDAN_TATUM_3_07.png',
            originalname: 'JORDAN_TATUM_3_07.png',
          },
          {
            path: `/files/${clientId}/JORDAN_TATUM_3_08.png`,
            name: 'JORDAN_TATUM_3_08.png',
            originalname: 'JORDAN_TATUM_3_08.png',
          },
          {
            path: `/files/${clientId}/JORDAN_TATUM_3_09.png`,
            name: 'JORDAN_TATUM_3_09.png',
            originalname: 'JORDAN_TATUM_3_09.png',
          },
        ],
        content: `경기를 위해 끊임없이 움직이는 사람들을 위해 탄생한 테이텀 3는 경량 디자인으로 발에 꼭 맞는 핏을 제공하기 때문에 가장 수월한 방식으로 경기를 지배할 수 있습니다. 친숙하게 들리시나요? 강력하면서도 유연한 갑피가 빠른 컷 동작과 역동적인 움직임에 필요한 고정력과 신축성을 제공하기 때문에, 챔피언인 테이텀처럼 동작을 자유자재로 전환하는 플레이를 펼칠 수 있습니다. 어떤 압박감도 없이 경기를 즐겨보세요.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: false,
          category: ['PC03', 'PC0301'], // 1
          size: [225, 230, 235, 240, 245, 250], // 1
          color: '씨폼/스프루스 아우라/아틱 오렌지/애프리캇 아게이트', // 1
          styleNo: 'HF3136-002', // 1
          primeCost: 109000,
          gender: 'kids',
        },
      },
      {
        // 상품 PC0303
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 139000, //1
        show: true,
        active: true,
        name: '에어 조던 4RM', //1
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/AIR_JORDAN_4RM_A_01.png`,
            name: 'AIR_JORDAN_4RM_A_01.png',
            originalname: 'AIR_JORDAN_4RM_A_01.png',
          },
        ],
        content: `온종일 즐겁게 놀려면 튼튼한 신발이 필요합니다. 끊임없이 움직이는 일상을 위해 제작된 이 신발은 편안함과 내구성에 중점을 두고 AJ4의 장점을 재해석했습니다. 맥스 에어가 걸을 때마다 쿠셔닝을 제공하죠. 또한 신발을 감싸는 튼튼하고 유연한 케이지에 갑피의 일부가 어우러진 디자인이 일상 속 놀이에 필요한 견고함을 더합니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 1,
          isNew: true,
          isBest: false,
          category: ['PC03', 'PC0301'], //1
          primeCost: 109000,
          gender: 'kids',
        },
      },
      {
        // 상품 PC0303_A
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 139000, //1
        show: true,
        active: true,
        name: '에어 조던 4RM', //1
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/AIR_JORDAN_4RM_A_01.png`,
            name: 'AIR_JORDAN_4RM_A_01.png',
            originalname: 'AIR_JORDAN_4RM_A_01.png',
          },
          {
            path: `/files/${clientId}/AIR_JORDAN_4RM_A_02.png`,
            name: 'AIR_JORDAN_4RM_A_02,png',
            originalname: 'AIR_JORDAN_4RM_A_02.png',
          },
          {
            path: `/files/${clientId}/AIR_JORDAN_4RM_A_03.png`,
            name: 'AIR_JORDAN_4RM_A_03.png',
            originalname: 'AIR_JORDAN_4RM_A_03.png',
          },
          {
            path: `/files/${clientId}/AIR_JORDAN_4RM_A_04.png`,
            name: 'AIR_JORDAN_4RM_A_04.png',
            originalname: 'AIR_JORDAN_4RM_A_04.png',
          },
          {
            path: `/files/${clientId}/AIR_JORDAN_4RM_A_05.png`,
            name: 'AIR_JORDAN_4RM_A_05.png',
            originalname: 'AIR_JORDAN_4RM_A_05.png',
          },
          {
            path: `/files/${clientId}/AIR_JORDAN_4RM_A_06.png`,
            name: 'AIR_JORDAN_4RM_A_06.png',
            originalname: 'AIR_JORDAN_4RM_A_06.png',
          },
          {
            path: `/files/${clientId}/AIR_JORDAN_4RM_A_07.png`,
            name: 'AIR_JORDAN_4RM_A_07.png',
            originalname: 'AIR_JORDAN_4RM_A_07.png',
          },
          {
            path: `/files/${clientId}/AIR_JORDAN_4RM_A_08.png`,
            name: 'AIR_JORDAN_4RM_A_08.png',
            originalname: 'AIR_JORDAN_4RM_A_08.png',
          },
          {
            path: `/files/${clientId}/AIR_JORDAN_4RM_A_09.png`,
            name: 'AIR_JORDAN_4RM_A_09.png',
            originalname: 'AIR_JORDAN_4RM_A_09.png',
          },
          {
            path: `/files/${clientId}/AIR_JORDAN_4RM_A_010.png`,
            name: 'AIR_JORDAN_4RM_A_010.png',
            originalname: 'AIR_JORDAN_4RM_A_010.png',
          },
        ],
        content: `에어 조던 4RM 검은색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 64,
          size: [225, 230, 235, 240, 245, 250], // 1
          color: '블랙/화이트', // 1
          styleNo: 'FQ7938-004', // 1
        },
      },
      {
        // 상품 PC0303_B
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 139000, //1
        show: true,
        active: true,
        name: '에어 조던 4RM', //1
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/AIR_JORDAN_4RM_B_01.png`,
            name: 'AIR_JORDAN_4RM_B_01.png',
            originalname: 'AIR_JORDAN_4RM_B_01.png',
          },
          {
            path: `/files/${clientId}/AIR_JORDAN_4RM_B_02.png`,
            name: 'AIR_JORDAN_4RM_B_02.png',
            originalname: 'AIR_JORDAN_4RM_B_02.png',
          },
          {
            path: `/files/${clientId}/AIR_JORDAN_4RM_B_03.png`,
            name: 'AIR_JORDAN_4RM_B_03.png',
            originalname: 'AIR_JORDAN_4RM_B_03.png',
          },
          {
            path: `/files/${clientId}/AIR_JORDAN_4RM_B_04.png`,
            name: 'AIR_JORDAN_4RM_B_04.png',
            originalname: 'AIR_JORDAN_4RM_B_04.png',
          },
          {
            path: `/files/${clientId}/AIR_JORDAN_4RM_B_05.png`,
            name: 'AIR_JORDAN_4RM_B_05.png',
            originalname: 'AIR_JORDAN_4RM_B_05.png',
          },
          {
            path: `/files/${clientId}/AIR_JORDAN_4RM_B_06.png`,
            name: 'AIR_JORDAN_4RM_B_06.png',
            originalname: 'AIR_JORDAN_4RM_B_06.png',
          },
          {
            path: `/files/${clientId}/AIR_JORDAN_4RM_B_07.png`,
            name: 'AIR_JORDAN_4RM_B_07.png',
            originalname: 'AIR_JORDAN_4RM_B_07.png',
          },
          {
            path: `/files/${clientId}/AIR_JORDAN_4RM_B_08.png`,
            name: 'AIR_JORDAN_4RM_B_08.png',
            originalname: 'AIR_JORDAN_4RM_B_08.png',
          },
          {
            path: `/files/${clientId}/AIR_JORDAN_4RM_B_09.png`,
            name: 'AIR_JORDAN_4RM_B_09.png',
            originalname: 'AIR_JORDAN_4RM_B_09.png',
          },
          {
            path: `/files/${clientId}/AIR_JORDAN_4RM_B_010.png`,
            name: 'AIR_JORDAN_4RM_B_010.png',
            originalname: 'AIR_JORDAN_4RM_B_010.png',
          },
        ],
        content: `에어 조던 4RM 흰색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 64,
          size: [230, 235, 240, 245], // 1
          color: '블랙/다크 그레이/라이트 본', // 1
          styleNo: 'FQ7938-001', // 1
        },
      },
      {
        // 상품 PC0304
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 89000, // 1
        show: true,
        active: true,
        name: '나이키 코트 버로우 미드 2', // 1
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_COURT_BOROUGH_MID_01.png`,
            name: 'NIKE_COURT_BOROUGH_MID_01.png',
            originalname: 'NIKE_COURT_BOROUGH_MID_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_COURT_BOROUGH_MID_02.png`,
            name: 'NIKE_COURT_BOROUGH_MID_02.png',
            originalname: 'NIKE_COURT_BOROUGH_MID_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_COURT_BOROUGH_MID_03.png`,
            name: 'NIKE_COURT_BOROUGH_MID_03.png',
            originalname: 'NIKE_COURT_BOROUGH_MID_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_COURT_BOROUGH_MID_04.png`,
            name: 'NIKE_COURT_BOROUGH_MID_04.png',
            originalname: 'NIKE_COURT_BOROUGH_MID_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_COURT_BOROUGH_MID_05.png`,
            name: 'NIKE_COURT_BOROUGH_MID_05.png',
            originalname: 'NIKE_COURT_BOROUGH_MID_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_COURT_BOROUGH_MID_06.png`,
            name: 'NIKE_COURT_BOROUGH_MID_06.png',
            originalname: 'NIKE_COURT_BOROUGH_MID_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_COURT_BOROUGH_MID_07.png`,
            name: 'NIKE_COURT_BOROUGH_MID_07.png',
            originalname: 'NIKE_COURT_BOROUGH_MID_07.png',
          },
          {
            path: `/files/${clientId}/NIKE_COURT_BOROUGH_MID_08.png`,
            name: 'NIKE_COURT_BOROUGH_MID_08.png',
            originalname: 'NIKE_COURT_BOROUGH_MID_08.png',
          },
          {
            path: `/files/${clientId}/NIKE_COURT_BOROUGH_MID_09.png`,
            name: 'NIKE_COURT_BOROUGH_MID_09.png',
            originalname: 'NIKE_COURT_BOROUGH_MID_09.png',
          },
        ],
        content: `나이키 코트 보로 미드 2로 올스타처럼 코트 위를 누비세요. 내구성이 우수한 가죽으로 제작된 클래식한 미드탑 디자인이 고급스러운 룩과 느낌을 선사합니다. 설포와 발목에 패딩을 더해 더욱 편안합니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: false,
          category: ['PC03', 'PC0301'], // 1
          size: [225, 230, 235, 240, 245, 250], // 1
          color: '유니버시티 레드/화이트/블랙', // 1
          styleNo: 'CD7782-602', // 1
          primeCost: 79000,
          gender: 'kids',
        },
      },
      {
        // 상품 PC0305
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 119000, // 1
        show: true,
        active: true,
        name: '에어맥스 1', // 1
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/AIR_MAX_A_01.png`,
            name: 'AIR_MAX_A_01.png',
            originalname: 'AIR_MAX_A_01.png',
          },
        ],
        content: `여유로운 라인과 헤리티지 트랙 룩은 물론, 투명 에어 쿠셔닝이 돋보이는 나이키 에어맥스 1은 어떤 룩이든 완벽하게 마무리해 줍니다. 혼합 소재가 깊이감을 더하며 가볍고 내구성이 좋아 매일 착용할 수 있습니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 1,
          isNew: true,
          isBest: false,
          category: ['PC03', 'PC0301'], // 1
          primeCost: 119000,
          gender: 'kids',
        },
      },
      {
        // 상품 PC0305_A
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 119000, //1
        show: true,
        active: true,
        name: '에어맥스 1', //1
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/AIR_MAX_A_01.png`,
            name: 'AIR_MAX_A_01.png',
            originalname: 'AIR_MAX_A_01.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_A_02.png`,
            name: 'AIR_MAX_A_02,png',
            originalname: 'AIR_MAX_A_02.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_A_03.png`,
            name: 'AIR_MAX_A_03.png',
            originalname: 'AIR_MAX_A_03.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_A_04.png`,
            name: 'AIR_MAX_A_04.png',
            originalname: 'AIR_MAX_A_04.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_A_05.png`,
            name: 'AIR_MAX_A_05.png',
            originalname: 'AIR_MAX_A_05.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_A_06.png`,
            name: 'AIR_MAX_A_06.png',
            originalname: 'AIR_MAX_A_06.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_A_07.png`,
            name: 'AIR_MAX_A_07.png',
            originalname: 'AIR_MAX_A_07.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_A_08.png`,
            name: 'AIR_MAX_A_08.png',
            originalname: 'AIR_MAX_A_08.png',
          },
        ],
        content: `에어맥스 1 파란색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 68,
          size: [200, 205, 210, 220, 225, 230, 235, 240, 245, 250], // 1
          color: '스모크 그레이/울프 그레이/옵시디언/레이서 블루', // 1
          styleNo: 'DZ3307-007', // 1
        },
      },
      {
        // 상품 PC0305_B
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 119000, //1
        show: true,
        active: true,
        name: '에어맥스 1', //1
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/AIR_MAX_B_01.png`,
            name: 'AIR_MAX_B_01.png',
            originalname: 'AIR_MAX_B_01.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_B_02.png`,
            name: 'AIR_MAX_B_02,png',
            originalname: 'AIR_MAX_B_02.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_B_03.png`,
            name: 'AIR_MAX_B_03.png',
            originalname: 'AIR_MAX_B_03.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_B_04.png`,
            name: 'AIR_MAX_B_04.png',
            originalname: 'AIR_MAX_B_04.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_B_05.png`,
            name: 'AIR_MAX_B_05.png',
            originalname: 'AIR_MAX_B_05.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_B_06.png`,
            name: 'AIR_MAX_B_06.png',
            originalname: 'AIR_MAX_B_06.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_B_07.png`,
            name: 'AIR_MAX_B_07.png',
            originalname: 'AIR_MAX_B_07.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_B_08.png`,
            name: 'AIR_MAX_B_08.png',
            originalname: 'AIR_MAX_B_08.png',
          },
        ],
        content: `에어맥스 1 아이보리색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 68,
          size: [200, 205, 210, 220, 225, 230, 235, 240, 245, 250], // 1
          color: '페일 아이보리/화이트/바이코스털/빈티지 그린', // 1
          styleNo: 'DZ3307-113', // 1
        },
      },
      {
        // 상품 PC0305_C
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 119000, //1
        show: true,
        active: true,
        name: '에어맥스 1', //1
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/AIR_MAX_C_01.png`,
            name: 'AIR_MAX_C_01.png',
            originalname: 'AIR_MAX_C_01.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_C_02.png`,
            name: 'AIR_MAX_C_02,png',
            originalname: 'AIR_MAX_C_02.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_C_03.png`,
            name: 'AIR_MAX_C_03.png',
            originalname: 'AIR_MAX_C_03.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_C_04.png`,
            name: 'AIR_MAX_C_04.png',
            originalname: 'AIR_MAX_C_04.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_C_05.png`,
            name: 'AIR_MAX_C_05.png',
            originalname: 'AIR_MAX_C_05.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_C_06.png`,
            name: 'AIR_MAX_C_06.png',
            originalname: 'AIR_MAX_C_06.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_C_07.png`,
            name: 'AIR_MAX_C_07.png',
            originalname: 'AIR_MAX_C_07.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_C_08.png`,
            name: 'AIR_MAX_C_08.png',
            originalname: 'AIR_MAX_C_08.png',
          },
        ],
        content: `에어맥스 1 분홍색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 68,
          size: [200, 205, 210, 220, 225, 230, 235, 240, 245, 250], // 1
          color: '서밋 화이트/울프 그레이/화이트/다크', // 1
          styleNo: 'DZ3307-115', // 1
        },
      },
      {
        // 상품 PC0305_D
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 107100, //1
        show: true,
        active: true,
        name: '에어맥스 1', //1
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/AIR_MAX_D_01.png`,
            name: 'AIR_MAX_D_01.png',
            originalname: 'AIR_MAX_D_01.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_D_02.png`,
            name: 'AIR_MAX_D_02,png',
            originalname: 'AIR_MAX_D_02.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_D_03.png`,
            name: 'AIR_MAX_D_03.png',
            originalname: 'AIR_MAX_D_03.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_D_04.png`,
            name: 'AIR_MAX_D_04.png',
            originalname: 'AIR_MAX_D_04.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_D_05.png`,
            name: 'AIR_MAX_D_05.png',
            originalname: 'AIR_MAX_D_05.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_D_06.png`,
            name: 'AIR_MAX_D_06.png',
            originalname: 'AIR_MAX_D_06.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_D_07.png`,
            name: 'AIR_MAX_D_07.png',
            originalname: 'AIR_MAX_D_07.png',
          },
          {
            path: `/files/${clientId}/AIR_MAX_D_08.png`,
            name: 'AIR_MAX_D_08.png',
            originalname: 'AIR_MAX_D_08.png',
          },
        ],
        content: `에어맥스 1 갈색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 68,
          size: [200, 205, 210, 220, 225, 230, 235, 240, 245, 250], // 1
          color: '스모크 팬텀/라이트 오어우드 브라운/블랙/카키', // 1
          styleNo: 'DZ3307-006', // 1
        },
      },
      {
        // 상품 PC0306
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 119000, // 1
        show: true,
        active: true,
        name: '나이키 덩크 로우', // 1
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_01.png`,
            name: 'NIKE_DUNK_LOW_01.png',
            originalname: 'NIKE_DUNK_LOW_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_02.png`,
            name: 'NIKE_DUNK_LOW_02.png',
            originalname: 'NIKE_DUNK_LOW_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_03.png`,
            name: 'NIKE_DUNK_LOW_03.png',
            originalname: 'NIKE_DUNK_LOW_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_04.png`,
            name: 'NIKE_DUNK_LOW_04.png',
            originalname: 'NIKE_DUNK_LOW_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_05.png`,
            name: 'NIKE_DUNK_LOW_05.png',
            originalname: 'NIKE_DUNK_LOW_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_06.png`,
            name: 'NIKE_DUNK_LOW_06.png',
            originalname: 'NIKE_DUNK_LOW_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_07.png`,
            name: 'NIKE_DUNK_LOW_07.png',
            originalname: 'NIKE_DUNK_LOW_07.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_08.png`,
            name: 'NIKE_DUNK_LOW_08.png',
            originalname: 'NIKE_DUNK_LOW_08.png',
          },
        ],
        content: `올드스쿨 농구를 좋아한다면 이 나이키 덩크도 마음에 쏙 들 거예요. 80년대의 농구 아이콘에 튼튼한 인조 가죽과 과감한 스타일링을 더해 클래식한 코트 감성을 전달합니다. 농구계의 아이콘을 기념하는 이 신발은 학교, 공원 등 어디서든 쉽게 착용할 수 있는 디자인입니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: false,
          category: ['PC03', 'PC0301'], // 1
          size: [225, 230, 235, 240, 245, 250], // 1
          color: '짐 레드/화이트/블랙', // 1
          styleNo: 'HF9980-600', // 1
          primeCost: 99000,
          gender: 'kids',
        },
      },
      {
        // 상품 PC0307
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 129000, // 1
        show: true,
        active: true,
        name: '나이키 덩크 로우 SE', // 1
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_SE_01.png`,
            name: 'NIKE_DUNK_LOW_SE_01.png',
            originalname: 'NIKE_DUNK_LOW_SE_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_SE_02.png`,
            name: 'NIKE_DUNK_LOW_SE_02.png',
            originalname: 'NIKE_DUNK_LOW_SE_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_SE_03.png`,
            name: 'NIKE_DUNK_LOW_SE_03.png',
            originalname: 'NIKE_DUNK_LOW_SE_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_SE_04.png`,
            name: 'NIKE_DUNK_LOW_SE_04.png',
            originalname: 'NIKE_DUNK_LOW_SE_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_SE_05.png`,
            name: 'NIKE_DUNK_LOW_SE_05.png',
            originalname: 'NIKE_DUNK_LOW_SE_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_SE_06.png`,
            name: 'NIKE_DUNK_LOW_SE_06.png',
            originalname: 'NIKE_DUNK_LOW_SE_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_SE_07.png`,
            name: 'NIKE_DUNK_LOW_SE_07.png',
            originalname: 'NIKE_DUNK_LOW_SE_07.png',
          },
          {
            path: `/files/${clientId}/NIKE_DUNK_LOW_SE_08.png`,
            name: 'NIKE_DUNK_LOW_SE_08.png',
            originalname: 'NIKE_DUNK_LOW_SE_08.png',
          },
        ],
        content: `보다 쉽게 멋스러운 룩을 연출하고 싶으신가요? 1980년대의 아이콘이었던 나이키 덩크가 매일 신어도 좋은 클래식한 스타일로 돌아왔습니다. 이 스페셜 에디션 버전은 프리미엄 소재에 가벼운 무게의 쿠셔닝과 그립력이 우수한 평평한 밑창을 더해 오랫동안 편안한 착화감을 선사합니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: false,
          category: ['PC03', 'PC0301'], // 1
          size: [225, 230, 235, 240, 245, 250], // 1
          color: '세일/화이트/게임 로얄/세일', // 1
          styleNo: 'FV7472-100', // 1
          primeCost: 129000,
          gender: 'kids',
        },
      },
      {
        // 상품 PC0308
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 119000, // 1
        show: true,
        active: true,
        name: '루카 3 포토 피니시', // 1
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/LUKA_3_PHOTO_FINISH_01.png`,
            name: 'LUKA_3_PHOTO_FINISH_01.png',
            originalname: 'LUKA_3_PHOTO_FINISH_01.png',
          },
          {
            path: `/files/${clientId}/LUKA_3_PHOTO_FINISH_02.png`,
            name: 'LUKA_3_PHOTO_FINISH_02.png',
            originalname: 'LUKA_3_PHOTO_FINISH_02.png',
          },
          {
            path: `/files/${clientId}/LUKA_3_PHOTO_FINISH_03.png`,
            name: 'LUKA_3_PHOTO_FINISH_03.png',
            originalname: 'LUKA_3_PHOTO_FINISH_03.png',
          },
          {
            path: `/files/${clientId}/LUKA_3_PHOTO_FINISH_04.png`,
            name: 'LUKA_3_PHOTO_FINISH_04.png',
            originalname: 'LUKA_3_PHOTO_FINISH_04.png',
          },
          {
            path: `/files/${clientId}/LUKA_3_PHOTO_FINISH_05.png`,
            name: 'LUKA_3_PHOTO_FINISH_05.png',
            originalname: 'LUKA_3_PHOTO_FINISH_05.png',
          },
          {
            path: `/files/${clientId}/LUKA_3_PHOTO_FINISH_06.png`,
            name: 'LUKA_3_PHOTO_FINISH_06.png',
            originalname: 'LUKA_3_PHOTO_FINISH_06.png',
          },
          {
            path: `/files/${clientId}/LUKA_3_PHOTO_FINISH_07.png`,
            name: 'LUKA_3_PHOTO_FINISH_07.png',
            originalname: 'LUKA_3_PHOTO_FINISH_07.png',
          },
          {
            path: `/files/${clientId}/LUKA_3_PHOTO_FINISH_08.png`,
            name: 'LUKA_3_PHOTO_FINISH_08.png',
            originalname: 'LUKA_3_PHOTO_FINISH_08.png',
          },
          {
            path: `/files/${clientId}/LUKA_3_PHOTO_FINISH_09.png`,
            name: 'LUKA_3_PHOTO_FINISH_09.png',
            originalname: 'LUKA_3_PHOTO_FINISH_09.png',
          },
        ],
        content: `부드럽고 유연하게 디자인된 루카 3는 발걸음에 가벼운 마법을 더해줍니다. 발 아래에 탄력 있는 폼이 있어 코트에서 공간을 쉽게 확보할 수 있고, 경량 디자인 덕분에 움직이기 편합니다. 그리고 자동차에 대한 루카의 애정에서 영감을 받아 디자인에 속도감 있는 스타일을 적용해 근사한 모습으로 수비수를 제칠 수 있습니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: false,
          category: ['PC03', 'PC0301'], // 1
          size: [230, 235, 240, 245, 250], // 1
          color: '화이트/볼트 글로우/그린 글로우/블랙', // 1
          styleNo: 'HQ5058-107', // 1
          primeCost: 119000,
          gender: 'kids',
        },
      },
      {
        // 상품 PC0309
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 79000, // 1
        show: true,
        active: true,
        name: '나이키 주니어 팬텀 GX 2 아카데미', // 1
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_01.png`,
            name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_01.png',
            originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_01.png',
          },
        ],
        content: `멋진 패스로 동료에게 기회를 주었든, 환상적인 플레이를 펼쳤든 득점에 기여한 것입니다. 자, 득점을 이어 나가세요. 신발 끈이 없는 디자인의 이 축구화는 공을 가장 세게 차는 부분에 점착력 있는 텍스처가 적용되어 있어 슛을 날릴 수 있는 공간에 들어섰을 때 볼을 컨트롤할 수 있도록 도와줍니다. 득점을 염두에 두고 제작된 제품이죠.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 1,
          isNew: true,
          isBest: false,
          category: ['PC03', 'PC0301'], // 1
          primeCost: 79000,
          gender: 'kids',
        },
      },
      {
        // 상품 PC0309_A
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 79000, //1
        show: true,
        active: true,
        name: '나이키 주니어 팬텀 GX 2 아카데미', //1
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_01.png`,
            name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_01.png',
            originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_02.png`,
            name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_02,png',
            originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_03.png`,
            name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_03.png',
            originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_04.png`,
            name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_04.png',
            originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_05.png`,
            name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_05.png',
            originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_06.png`,
            name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_06.png',
            originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_07.png`,
            name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_07.png',
            originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_07.png',
          },
          {
            path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_08.png`,
            name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_08.png',
            originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_A_08.png',
          },
        ],
        content: `나이키 주니어 팬텀 희색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 76,
          size: [200, 205, 210, 220, 225, 230, 235, 240], // 1
          color: '메탈릭 실버/볼트/블랙', // 1
          styleNo: 'FJ2608-003', // 1
        },
      },
      {
        // 상품 PC0309_B
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 71100, //1
        show: true,
        active: true,
        name: '나이키 주니어 팬텀 GX 2 아카데미', //1
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_01.png`,
            name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_01.png',
            originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_02.png`,
            name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_02,png',
            originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_03.png`,
            name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_03.png',
            originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_04.png`,
            name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_04.png',
            originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_05.png`,
            name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_05.png',
            originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_06.png`,
            name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_06.png',
            originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_07.png`,
            name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_07.png',
            originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_07.png',
          },
          {
            path: `/files/${clientId}/NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_08.png`,
            name: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_08.png',
            originalname: 'NIKE_JUNIOR_PHANTOM_GX_2_ACADEMY_B_08.png',
          },
        ],
        content: `나이키 주니어 팬텀 GX 2 아카데미 파란색`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          depth: 2,
          parent: 76,
          size: [200, 205, 210, 220, 225, 230, 235, 240], // 1
          color: '블루 퓨리/화이트', // 1
          styleNo: 'FJ2608-400', // 1
        },
      },
      {
        // 상품 PC03010
        _id: await nextSeq('product'),
        seller_id: 2,
        price: 109000, // 1
        show: true,
        active: true,
        name: '나이키 마노아', // 1
        quantity: 9999,
        buyQuantity: 0,
        mainImages: [
          {
            path: `/files/${clientId}/NIKE_MANOA_01.png`,
            name: 'NIKE_MANOA_01.png',
            originalname: 'NIKE_MANOA_01.png',
          },
          {
            path: `/files/${clientId}/NIKE_MANOA_02.png`,
            name: 'NIKE_MANOA_02.png',
            originalname: 'NIKE_MANOA_02.png',
          },
          {
            path: `/files/${clientId}/NIKE_MANOA_03.png`,
            name: 'NIKE_MANOA_03.png',
            originalname: 'NIKE_MANOA_03.png',
          },
          {
            path: `/files/${clientId}/NIKE_MANOA_04.png`,
            name: 'NIKE_MANOA_04.png',
            originalname: 'NIKE_MANOA_04.png',
          },
          {
            path: `/files/${clientId}/NIKE_MANOA_05.png`,
            name: 'NIKE_MANOA_05.png',
            originalname: 'NIKE_MANOA_05.png',
          },
          {
            path: `/files/${clientId}/NIKE_MANOA_06.png`,
            name: 'NIKE_MANOA_06.png',
            originalname: 'NIKE_MANOA_06.png',
          },
          {
            path: `/files/${clientId}/NIKE_MANOA_07.png`,
            name: 'NIKE_MANOA_07.png',
            originalname: 'NIKE_MANOA_07.png',
          },
          {
            path: `/files/${clientId}/NIKE_MANOA_08.png`,
            name: 'NIKE_MANOA_08.png',
            originalname: 'NIKE_MANOA_08.png',
          },
          {
            path: `/files/${clientId}/NIKE_MANOA_09.png`,
            name: 'NIKE_MANOA_09.png',
            originalname: 'NIKE_MANOA_09.png',
          },
        ],
        content: `나이키 마노아를 신으면 다음 모험을 바로 시작할 수 있습니다. 튼튼한 가죽과 오래가는 디자인이 내구성을 더해 줍니다. 부드러운 폼 쿠셔닝과 견고한 접지력 덕분에 춥고 비 오는 날에도 거뜬합니다.`,
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          isNew: true,
          isBest: false,
          category: ['PC03', 'PC0301'], // 1
          size: [200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250], // 1
          color: '휘트/블랙/휘트', // 1
          styleNo: 'HF0750-700', // 1
          primeCost: 109000,
          gender: 'kids',
        },
      },
    ],
    // 주문
    order: [
      {
        _id: await nextSeq('order'),
        user_id: 4,
        state: 'OS020',
        products: [
          {
            _id: 2,
            seller_id: 2,
            state: 'OS020',
            name: '나이키 잼',
            image: {
              path: `/files/${clientId}/NIKE_JAM_01.jpg`,
              name: 'NIKE_JAM_01.jpg',
              originalname: 'NIKE_JAM_01.jpg',
            },
            quantity: 2,
            price: 250200,
            review_id: 1,
          },
        ],
        cost: {
          products: 250200,
          shippingFees: 3000,
          discount: {
            products: 0,
            shippingFees: 3000,
          },
          total: 250200,
        },
        createdAt: getTime(-6, -60 * 60 * 3),
        updatedAt: getTime(-6, -60 * 60 * 3),
      },
      {
        _id: await nextSeq('order'),
        user_id: 4,
        state: 'OS010',
        products: [
          {
            _id: 4,
            seller_id: 2,
            state: 'OS010',
            name: '나이키 투어 리펠',
            image: {
              path: `/files/${clientId}/NIKE_TOUR_REPEL_01.png`,
              name: 'NIKE_TOUR_REPEL_01.png',
              originalname: 'NIKE_TOUR_REPEL_01.png',
            },
            quantity: 1,
            price: 109000,
          },
          {
            _id: 7,
            seller_id: 2,
            state: 'OS010',
            name: '나이키 테크 윈드러너',
            image: {
              path: `/files/${clientId}/NIKE_TECH_WIND_o_01.png`,
              name: 'NIKE_TECH_WIND_o_01.png',
              originalname: 'NIKE_TECH_WIND_o_01.png',
            },
            quantity: 2,
            price: 358000,
          },
        ],
        cost: {
          products: 467000,
          shippingFees: 3000,
          discount: {
            products: 0,
            shippingFees: 3000,
          },
          total: 467000,
        },
        createdAt: getTime(-4, -60 * 60 * 22),
        updatedAt: getTime(-2, -60 * 60 * 12),
      },

    ],
    // 후기
    review: [
      {
        _id: await nextSeq('review'),
        user_id: 4,
        user: {
          _id: 4,
          name: '제이지',
          image: `/files/${clientId}/user-jayg.webp`
        },
        order_id: 1,
        product_id: 2,
        rating: 5,
        content: '아이가 좋아해요.',
        createdAt: getTime(-4, -60 * 60 * 12),
      },
    ],
    // 장바구니
    cart: [
      {
        _id: await nextSeq('cart'),
        user_id: 4,
        product_id: 2,
        quantity: 2,
        size: 255,
        createdAt: getTime(-7, -60 * 30),
        updatedAt: getTime(-7, -60 * 30),
        product: {
          _id: 2,
          name: '나이키 잼',
          price: 125100,
          seller_id: 2,
          quantity: 20,
          buyQuantity: 10,
          image: {
            path: '/files/vanilla00/NIKE_JAM_01.jpg',
            name: 'NIKE_JAM_01.jpg',
            originalname: 'NIKE_JAM_01.jpg'
          },
          extra: {
            depth: 2,
            parent: 1,
            size: [220, 225, 230, 235, 240, 245, 250, 255, 260],
            color: '다크 드리프트우드/헴프/세일/블랙',
            styleNo: 'FN0314-200',
            primeCost: 139000
          }
        }

      },

      {
        _id: await nextSeq('cart'),
        user_id: 4,
        product_id: 4,
        quantity: 1,
        size: 'XL',
        createdAt: getTime(-3, -60 * 60 * 4),
        updatedAt: getTime(-3, -60 * 60 * 4),
        product: {
          _id: 4,
          name: '나이키 투어 리펠',
          price: 109000,
          seller_id: 2,
          quantity: 30,
          buyQuantity: 10,
          image: {
            path: '/files/vanilla00/NIKE_TOUR_REPEL_01.png',
            name: 'NIKE_TOUR_REPEL_01.png',
            originalname: 'NIKE_TOUR_REPEL_01.png'
          },
          extra: {
            isNew: true,
            isBest: true,
            category: ['PC02', 'PC0203'],
            size: ['XS', 'S', 'M', 'L', 'XL'],
            color: '블랙/화이트',
            styleNo: 'DZ6021-010',
            primeCost: 109000,
            gender: 'women'
          }
        }
      }
    ],
    // 즐겨찾기/북마크
    bookmark: [
      {
        _id: await nextSeq('bookmark'),
        type: 'product',
        user_id: 4,
        target_id: 3,
        user: {
          _id: 4,
          name: '제이지',
          email: 'u1@gmail.com',
          image: `/files/${clientId}/user-jayg.webp`
        },
        memo: '첫째 크리스마스 선물.',
        createdAt: getTime(-3, -60 * 60 * 2),
      },
      {
        _id: await nextSeq('bookmark'),
        type: 'product',
        user_id: 4,
        target_id: 6,
        user: {
          _id: 4,
          name: '제이지',
          email: 'u1@gmail.com',
          image: `/files/${clientId}/user-jayg.webp`
        },
        memo: '둘째 생일 선물',
        createdAt: getTime(-1, -60 * 60 * 12),
      },
    ],
    // QnA, 공지사항 등의 게시판
    post: [],
    // 코드
    code: [
      {
        _id: 'productCategory',
        title: '상품 카테고리',
        codes: [
          {
            sort: 1,
            code: 'PC01',
            value: 'Men',
            desc: '남성',
            depth: 1,
          },
          {
            sort: 3,
            code: 'PC0101',
            value: '용품',
            parent: 'PC01',
            depth: 2,
          },
          {
            sort: 1,
            code: 'PC0102',
            value: '신발',
            parent: 'PC01',
            depth: 2,
          },
          {
            sort: 2,
            code: 'PC0103',
            value: '의류',
            parent: 'PC01',
            depth: 2,
          },
          // Men > 용품
          {
            sort: 2,
            code: 'PC010101',
            value: '가방',
            parent: 'PC0101',
            depth: 3,
          },
          {
            sort: 1,
            code: 'PC010102',
            value: '모자 & 헤드밴드',
            parent: 'PC0101',
            depth: 3,
          },
          {
            sort: 3,
            code: 'PC010103',
            value: '장갑',
            parent: 'PC0101',
            depth: 3,
          },
          {
            sort: 4,
            code: 'PC010104',
            value: '슬리브 & 암 밴드',
            parent: 'PC0101',
            depth: 3,
          },
          {
            sort: 5,
            code: 'PC010105',
            value: '공',
            parent: 'PC0101',
            depth: 3,
          },
          {
            sort: 6,
            code: 'PC010106',
            value: '보호대',
            parent: 'PC0101',
            depth: 3,
          },
          // Men > 신발
          {
            sort: 2,
            code: 'PC010201',
            value: '라이프스타일',
            parent: 'PC0102',
            depth: 3,
          },
          {
            sort: 1,
            code: 'PC010202',
            value: '조던',
            parent: 'PC0102',
            depth: 3,
          },
          {
            sort: 3,
            code: 'PC010203',
            value: '러닝',
            parent: 'PC0102',
            depth: 3,
          },
          {
            sort: 4,
            code: 'PC010204',
            value: '농구',
            parent: 'PC0102',
            depth: 3,
          },
          {
            sort: 5,
            code: 'PC010205',
            value: '미식축구',
            parent: 'PC0102',
            depth: 3,
          },
          {
            sort: 6,
            code: 'PC010206',
            value: '축구',
            parent: 'PC0102',
            depth: 3,
          },
          {
            sort: 7,
            code: 'PC010207',
            value: '트레이닝 및 짐',
            parent: 'PC0102',
            depth: 3,
          },
          {
            sort: 8,
            code: 'PC010208',
            value: '스케이트보딩',
            parent: 'PC0102',
            depth: 3,
          },
          {
            sort: 9,
            code: 'PC010209',
            value: '골프',
            parent: 'PC0102',
            depth: 3,
          },
          {
            sort: 10,
            code: 'PC010210',
            value: '테니스',
            parent: 'PC0102',
            depth: 3,
          },
          {
            sort: 11,
            code: 'PC010211',
            value: '샌들 & 슬리퍼',
            parent: 'PC0102',
            depth: 3,
          },
          // Men > 의류
          {
            sort: 1,
            code: 'PC010301',
            value: '탑 & 티셔츠',
            parent: 'PC0103',
            depth: 3,
          },
          {
            sort: 2,
            code: 'PC010302',
            value: '후디 & 크루',
            parent: 'PC0103',
            depth: 3,
          },
          {
            sort: 3,
            code: 'PC010303',
            value: '재킷 & 베스트',
            parent: 'PC0103',
            depth: 3,
          },
          {
            sort: 4,
            code: 'PC010304',
            value: '팬츠 & 타이즈',
            parent: 'PC0103',
            depth: 3,
          },
          {
            sort: 5,
            code: 'PC010305',
            value: '트랙수트',
            parent: 'PC0103',
            depth: 3,
          },
          {
            sort: 6,
            code: 'PC010306',
            value: '쇼츠',
            parent: 'PC0103',
            depth: 3,
          },
          {
            sort: 7,
            code: 'PC010307',
            value: '점프수트 & 롬퍼스',
            parent: 'PC0103',
            depth: 3,
          },
          {
            sort: 8,
            code: 'PC010308',
            value: '서핑 & 수영복',
            parent: 'PC0103',
            depth: 3,
          },
          {
            sort: 9,
            code: 'PC010309',
            value: '양말',
            parent: 'PC0103',
            depth: 3,
          },



          {
            sort: 2,
            code: 'PC02',
            value: 'Women',
            desc: '여성',
            depth: 1,
          },


          {
            sort: 1,
            code: 'PC0201',
            value: '신발',
            parent: 'PC02',
            depth: 2,
          },
          {
            sort: 2,
            code: 'PC0202',
            value: '의류',
            parent: 'PC02',
            depth: 2,
          },
          {
            sort: 3,
            code: 'PC0203',
            value: '용품',
            parent: 'PC02',
            depth: 2,
          },

          // Women > 신발
          {
            sort: 1,
            code: 'PC020101',
            value: '라이프스타일',
            parent: 'PC0201',
            depth: 3,
          },
          {
            sort: 2,
            code: 'PC020102',
            value: '러닝',
            parent: 'PC0201',
            depth: 3,
          },
          {
            sort: 3,
            code: 'PC020103',
            value: '농구',
            parent: 'PC0201',
            depth: 3,
          },
          {
            sort: 4,
            code: 'PC020104',
            value: '축구',
            parent: 'PC0201',
            depth: 3,
          },
          {
            sort: 5,
            code: 'PC020105',
            value: '드레이닝 & 짐',
            parent: 'PC0201',
            depth: 3,
          },
          {
            sort: 6,
            code: 'PC020106',
            value: '조던',
            parent: 'PC0201',
            depth: 3,
          },
          {
            sort: 7,
            code: 'PC020107',
            value: '스케이트보딩',
            parent: 'PC0201',
            depth: 3,
          },
          {
            sort: 8,
            code: 'PC020108',
            value: '골프',
            parent: 'PC0201',
            depth: 3,
          },
          {
            sort: 9,
            code: 'PC020109',
            value: '테니스',
            parent: 'PC0201',
            depth: 3,
          },
          {
            sort: 10,
            code: 'PC020110',
            value: '샌들 & 슬리퍼',
            parent: 'PC0201',
            depth: 3,
          },
          // Women > 의류
          {
            sort: 1,
            code: 'PC020201',
            value: '탑 & 티셔츠',
            parent: 'PC0202',
            depth: 3,
          },
          {
            sort: 2,
            code: 'PC020202',
            value: '스포츠 브라',
            parent: 'PC0202',
            depth: 3,
          },
          {
            sort: 3,
            code: 'PC020203',
            value: '후디 & 크루',
            parent: 'PC0202',
            depth: 3,
          },
          {
            sort: 4,
            code: 'PC020204',
            value: '쇼츠',
            parent: 'PC0202',
            depth: 3,
          },
          {
            sort: 5,
            code: 'PC020205',
            value: '팬츠 & 타이츠',
            parent: 'PC0202',
            depth: 3,
          },
          {
            sort: 6,
            code: 'PC020206',
            value: '재킷 & 베스트',
            parent: 'PC0202',
            depth: 3,
          },
          {
            sort: 7,
            code: 'PC020207',
            value: '트랙수트',
            parent: 'PC0202',
            depth: 3,
          },
          {
            sort: 8,
            code: 'PC020208',
            value: '점프수트 & 롬퍼스',
            parent: 'PC0202',
            depth: 3,
          },
          {
            sort: 9,
            code: 'PC020209',
            value: '스커트 & 드레스',
            parent: 'PC0202',
            depth: 3,
          },
          {
            sort: 10,
            code: 'PC020210',
            value: '서핑 & 수영복',
            parent: 'PC0202',
            depth: 3,
          },
          {
            sort: 11,
            code: 'PC020211',
            value: '양말',
            parent: 'PC0202',
            depth: 3,
          },
          // Women > 용품
          {
            sort: 1,
            code: 'PC020301',
            value: '가방',
            parent: 'PC0203',
            depth: 3,
          },
          {
            sort: 2,
            code: 'PC020302',
            value: '모자 & 헤드밴드',
            parent: 'PC0203',
            depth: 3,
          },
          {
            sort: 3,
            code: 'PC020303',
            value: '장갑',
            parent: 'PC0203',
            depth: 3,
          },
          {
            sort: 4,
            code: 'PC020304',
            value: '슬리브 & 암 밴드',
            parent: 'PC0203',
            depth: 3,
          },
          {
            sort: 5,
            code: 'PC020305',
            value: '공',
            parent: 'PC0203',
            depth: 3,
          },
          {
            sort: 6,
            code: 'PC020306',
            value: '보호대',
            parent: 'PC0203',
            depth: 3,
          },

          {
            sort: 3,
            code: 'PC03',
            value: 'Kids',
            desc: '키즈',
            depth: 1,
          },


          {
            sort: 1,
            code: 'PC0301',
            value: '신발',
            parent: 'PC03',
            depth: 2,
          },
          {
            sort: 2,
            code: 'PC0302',
            value: '의류',
            parent: 'PC03',
            depth: 2,
          },
          {
            sort: 3,
            code: 'PC0303',
            value: '용품',
            parent: 'PC03',
            depth: 2,
          },
          // Kids > 신발
          {
            sort: 1,
            code: 'PC030101',
            value: '라이프스타일',
            parent: 'PC0301',
            depth: 3,
          },
          {
            sort: 2,
            code: 'PC030102',
            value: '조던',
            parent: 'PC0301',
            depth: 3,
          },
          {
            sort: 3,
            code: 'PC030103',
            value: '러닝',
            parent: 'PC0301',
            depth: 3,
          },
          {
            sort: 4,
            code: 'PC030104',
            value: '농구',
            parent: 'PC0301',
            depth: 3,
          },
          {
            sort: 5,
            code: 'PC030105',
            value: '축구',
            parent: 'PC0301',
            depth: 3,
          },
          {
            sort: 6,
            code: 'PC030106',
            value: '스케이트보딩',
            parent: 'PC0301',
            depth: 3,
          },
          {
            sort: 7,
            code: 'PC030107',
            value: '샌들 & 슬리퍼',
            parent: 'PC0301',
            depth: 3,
          },
          {
            sort: 8,
            code: 'PC030108',
            value: '테니스',
            parent: 'PC0301',
            depth: 3,
          },

          // Kids > 의류
          {
            sort: 1,
            code: 'PC030201',
            value: '탑 & 티셔츠',
            parent: 'PC0302',
            depth: 3,
          },
          {
            sort: 2,
            code: 'PC030202',
            value: '쇼츠',
            parent: 'PC0302',
            depth: 3,
          },
          {
            sort: 3,
            code: 'PC030203',
            value: '상하의 세트',
            parent: 'PC0302',
            depth: 3,
          },
          {
            sort: 4,
            code: 'PC030204',
            value: '점프수트 & 롬퍼스',
            parent: 'PC0302',
            depth: 3,
          },
          {
            sort: 5,
            code: 'PC030205',
            value: '팬츠 & 타이츠',
            parent: 'PC0302',
            depth: 3,
          },
          {
            sort: 6,
            code: 'PC030206',
            value: '스커트 & 드레스',
            parent: 'PC0302',
            depth: 3,
          },
          {
            sort: 7,
            code: 'PC030207',
            value: '양말',
            parent: 'PC0302',
            depth: 3,
          },
          {
            sort: 8,
            code: 'PC030208',
            value: '스포츠 브라',
            parent: 'PC0302',
            depth: 3,
          },
          {
            sort: 9,
            code: 'PC030209',
            value: '재킷 & 베스트',
            parent: 'PC0302',
            depth: 3,
          },
          {
            sort: 10,
            code: 'PC030210',
            value: '후디 & 크루',
            parent: 'PC0302',
            depth: 3,
          },
          // Kids > 용품
          {
            sort: 1,
            code: 'PC030301',
            value: '가방',
            parent: 'PC0303',
            depth: 3,
          },
          {
            sort: 2,
            code: 'PC030302',
            value: '모자 & 헤드밴드',
            parent: 'PC0303',
            depth: 3,
          },
          {
            sort: 3,
            code: 'PC030303',
            value: '양말',
            parent: 'PC0303',
            depth: 3,
          },
          {
            sort: 4,
            code: 'PC030304',
            value: '장갑',
            parent: 'PC0303',
            depth: 3,
          },
          {
            sort: 5,
            code: 'PC030305',
            value: '공',
            parent: 'PC0303',
            depth: 3,
          },
          {
            sort: 6,
            code: 'PC030306',
            value: '보호대',
            parent: 'PC0303',
            depth: 3,
          },
        ],
      },
      {
        _id: 'orderState',
        title: '주문 상태',
        codes: [
          {
            sort: 1,
            code: 'OS010',
            value: '주문 완료',
          },
          {
            sort: 2,
            code: 'OS020',
            value: '결제 완료',
          },
          {
            sort: 3,
            code: 'OS030',
            value: '배송 준비중',
          },
          {
            sort: 4,
            code: 'OS035',
            value: '배송중',
          },
          {
            sort: 5,
            code: 'OS040',
            value: '배송 완료',
          },
          {
            sort: 6,
            code: 'OS110',
            value: '반품 요청',
          },
          {
            sort: 7,
            code: 'OS120',
            value: '반품 처리중',
          },
          {
            sort: 8,
            code: 'OS130',
            value: '반품 완료',
          },
          {
            sort: 9,
            code: 'OS210',
            value: '교환 요청',
          },
          {
            sort: 10,
            code: 'OS220',
            value: '교환 처리중',
          },
          {
            sort: 11,
            code: 'OS230',
            value: '교환 완료',
          },
          {
            sort: 12,
            code: 'OS310',
            value: '환불 요청',
          },
          {
            sort: 13,
            code: 'OS320',
            value: '환불 처리중',
          },
          {
            sort: 14,
            code: 'OS330',
            value: '환불 완료',
          },
        ],
      },
      {
        _id: 'membershipClass',
        title: '회원 등급',
        codes: [
          {
            sort: 1,
            code: 'MC01',
            value: '일반',
            discountRate: 0, // 할인율
          },
          {
            sort: 2,
            code: 'MC02',
            value: '프리미엄',
            discountRate: 10,
          },
          {
            sort: 3,
            code: 'MC03',
            value: 'VIP',
            discountRate: 20,
          },
        ],
      },

    ],
    // 설정
    config: [
      {
        _id: 'shippingFees',
        title: '배송비',
        value: 3500,
      },
      {
        _id: 'freeShippingFees',
        title: '배송비 무료 금액',
        value: 20000,
      },
    ],
  };
};
