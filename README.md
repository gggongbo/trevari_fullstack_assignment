# **TREVARI_FULLSTACK_ASSIGNMENT**

## **Contents**

- [**TREVARI FULLSTACK ASSIGNMENT**](#TREVARI-FULLSTACK-ASSIGNMENT)
  - [**Contents**](#contents)
  - [**Requirements**](#requirements)
  - [**Tools**](#tools)
  - [**Environment Setting**](#environment-setting)
  - [**테스트 방법**](#테스트-방법)
  - [**Features**](#features)
  - [**Dependencies**](#dependencies)
  - [**TroubleShooting**](#troubleShooting)
  - [**Code Structure**](#code-structure)

## **Requirements**

### Common

1. Typescript : 5.1.6
2. Jest : 29.5.0
3. Husky : 8.0.0
4. ESLint : 8.44.0
5. Prettier : 2.8.8

### Frontend

1. Nextjs : 13.4.7 (버전은 13이지만 12버전 구조 사용)
2. React-Query : 4.29.19
3. Axios : 1.4.0
4. Lodash : 4.17.21
5. Styled-Components: 6.0.1

### Backend

1. Nestjs : 10.0.0
2. Nestjs/Axios : 3.0.0
3. RXJS : 7.8.1

## **Tools**

| Tool          | Name                                                               |
| ------------- | ------------------------------------------------------------------ |
| IDE           | Visual Studio Code                                                 |
| Code Managing | [Github](https://github.com/gggongbo/trevari_fullstack_assignment) |

                                             |

## **Environment Setting**

```bash
#ubuntu 환경 기준으로 작성
sudo apt install nodejs #nodejs 설치
sudo apt install npm #npm 설치

npm install --global yarn #yarn 설치
yarn set version berry #yarn berry workspace 사용을 위한 버전 설정

#In project path
trevari_fullstack_assignment$ git submodule init #backend, frontend 서브모듈 세팅
trevari_fullstack_assignment$ git submodule update --recursive
trevari_fullstack_assignment$ yarn #node_modules 설치
```

## **테스트 방법**

- 프론트엔드, 백엔드 각각 bash 창을 띄워 테스트 진행했었습니다.

### Frontend

```bash
trevari_fullstack_assignment$ yarn next dev
or
trevari_fullstack_assignment/frontend$ yarn dev
```

### Backend

```bash
trevari_fullstack_assignment$ yarn nest start:dev
or
trevari_fullstack_assignment/backend$ yarn start:dev
```

## **Features**

| Feature                                                           | Description                                                                                                 |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 도서 리스트 조회                                                  | 특정 키워드에 대해 검색된 서적 정보(제목, 부제목, 책 이미지)를 리스트 형태로 조회 가능                      |
| 도서 리스트 검색                                                  | 도서 키워드, 페이지번호를 입력 받아 https://itbook.store/ 검색 결과를 반환                                  |
| 두 키워드를 포함한 도서리스트 검색                                | or(｜) operator를 키워드 사이에 넣어 두 키워드를 포함한 도서리스트 검색 가능                                |
| 첫 번째 키워드는 포함하고 두 번째 키워드는 제외한 도서리스트 검색 | not(-) operator를 키워드 사이에 넣어 첫 번째 키워드는 포함하고 두 번째 키워드는 제외한 도서리스트 검색 가능 |

## **Dependencies**

| Dependency  | Description                                                                                                           |
| ----------- | --------------------------------------------------------------------------------------------------------------------- |
| Nextjs      | SSR 기능 활용을 생각하여 프론트엔드 프레임워크로 이용했습니다.                                                        |
| Nestjs      | Controller, Service, Module 분리가 용이하고, jest 테스트 코드를 자동으로 제공해줘서 백엔드 프레임워크로 이용했습니다. |
| React-Query | 프론트엔드에서 데이터 패칭을 위해 사용했습니다.                                                                       |
| Axios       | 백엔드, 프론트엔드에서 모두 외부 서버간 통신을 하기 위해 사용했습니다.                                                |
| Lodash      | isString, isNumber 등의 함수 사용을 위해 사용했습니다.                                                                |
| RXJS        | Axios 통신 에러 처리 및 response data 추출을 위해 사용했습니다.                                                       |

## **TroubleShooting**

| Issue                                                                                         | Description                                                                                                                                                |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| backend 폴더에서 Can not find module 에러메시지와 domain 폴더 참조가 안되는 현상              | backend 폴더 tsconfig에 paths 설정 추가 후, backend/dist에 domain, backend/src 폴더가 분리되어 빌드되도록 하고, nest-cli.json의 entry 경로를 설정해서 해결 |
| 로컬 실행 환경에서 frontend=>backend api 통신시 CORS(Cross-Origin Resource Sharing) 에러 발생 | frontend next.config.js에 rewrite 설정으로 프록시 설정하여 해결                                                                                            |
| yarn worspace dependency 호이스팅으로 frontend jest test가 잘 안되는 현상 `(해결중)`          | 프론트엔드 유닛 테스트 시, jest 모듈이 호이스팅되어 관련 설정이 잘 인식되지 않는 현상 확인                                                                 |
| Docker 빌드시 Dockerfile을 읽어오지 못하는 현상 `(해결중) `                                   | Dockerfile.dockerfile 등으로 확장자 변경을 해봤으나 Windows WSL 환경에서 Dockerfile 인식이 잘 되지 않는 현상 확인                                          |

## **Code Structure**

- **backend**
  - \_\_mocks\_\_ : domain mock file 위치
  - src
    - books : 도서리스트 검색 관련 로직 위치
      - books.controller.ts
      - books.service.ts
      - books.module.ts
    - app.controller.ts
    - app.service.ts
    - app.module.ts
    - main.ts
- **domain**: frontend, backend에서 공통으로 바라보는 VO, DTO 정의
  - src
    - cores : 공통 VO인 Book VO 정의
    - dtos : 공통 DTO인 Book DTO 정의
- **frontend**
  - \_\_mocks\_\_ : jpg, png 이미지 대체할 수 있는 mock file 위치
  - components : 아토믹 디자인 적용하여 공통 컴포넌트 작성, 공통 컴포넌트는 jest 유닛 테스트 코드, jsDoc 작성
    - atom : 분리되지 않는 컴포넌트, 다른 컴포넌트와의 의존성이 없는 컴포넌트
      - Image
      - Text
    - molecule : atom 컴포넌트 두 개 이상으로 구성, 단순한 유저 인터랙션 로직 포함
      - Button
      - InputText
      - LinkBox
    - organism : atom 컴포넌트, molecule 컴포넌트로 구성, 다양한 유저 인터랙션 로직 포함
      - Header
      - ListBox
      - Pagination
    - template : 공통으로 사용되어 양식화할 수 있는 화면 컴포넌트, 자체로 하나의 화면이 될 수 있음
      - Error
      - Layout
  - hooks
    - window
    - lifecycle
    - state
  - lib : 외부 라이브러리 위치, 외부 라이브러리 모듈 타입 재정의를 위해 생성
  - styles
    - globals.css : 전체 페이지에 적용되는 css 속성 정의
    - theme: colors, media 관련 설정값 위치
  - utils
    - queryUtils.ts : 리액트 쿼리 옵션, 쿼리 키 정의
    - routers.ts : 라우팅 path 정의
  - pages
    - \_app.tsx
    - \_document.tsx
    - books : 도서 검색 화면 로직 위치
      - [page] : 도서 검색 페이지별 화면 로직 위치
