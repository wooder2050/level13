# LEVEL13 - client

## 배포 

https://lookpin-mall-example.netlify.com/

![](display.gif)

## Content

- [Requirements](#requirements)
- [Installation](#installation)
- [Features](#features)
- [Skills](#skills)
- [Tests](#tests)
- [Sincere-Thanks](#Sincere-Thanks)


## Requirements

- 1024px 이상의 큰 브라우저 환경에서 실행해야 합니다.(반응형 작업은 하지 않았습니다.)
- 브라우저는 최신 버전 크롬 사용을 권장합니다.

## Installation

<pre>
cd level13
yarn install
yarn start
</pre>

## Features

1. 이미지 썸네일을 클릭하면 보여주는 이미지가 바뀝니다.

- 현재 데이터베이스에 있는 참가자 리스트를 보여주는 UI를 구현했습니다.
- 데이터베이스에 존재하는 참가자의 리스트를 서버를 통해서 데이터를  받아서 브라우저 오른쪽 영역에 출력되도록 했습니다.
- 리스트 박스에는 참가자의 이름과 삭제 버튼이 있으며 스크롤 가능하게 구성했습니다.

2. 옵션 선택하기

- 옵션은 1개일 수도 있고, 여러 개일 수도 있습니다. 
- 품절일 경우 선택할 수 없습니다. 
- 이미 선택한 상품은 추가될 수 없고, 수량 조절을 해야 합니다. 

3. HTML 끼워넣기

4. 배열 기반으로 텍스트 나열 

## Skills Client

- ES2015+
- React
- Redux
- Sass

## Test
- Component Unit Test (Jest, Enzyme)

## Sincere-Thanks
- 쇼핑몰 상세 페이지 과제를 할 수 있어서 좋았습니다. 쇼핑몰을 처음으로 구현해 보았는데 새롭게 배울 수 있는 기회가 된 거 같습니다. 기회를 주셔서 감사합니다.
