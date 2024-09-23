# Vue + Javascript Template

- vite로 생성한 vue 프로젝트의 기본 코드 삭제
- 폴더 구조 정의

## 로컬 호스트를 https로 테스트

루트 디렉토리에서 실행

프로젝트 최초 생성

```
git clone https://github.com/ganggyunggyu/ar-docent-example-with-vuejs.git
rm -rf .git
git init
mkcert localhost
```

## lib

- vue-router
- pinia
- threejs

## custom-lib

- setViewPort

## custom-hook

- useSetVh

## tree

```
.
├── App.vue
├── app
│   ├── config
│   │   └── env-config.js
│   ├── provider
│   │   └── AppProvider.vue
│   ├── store
│   │   └── useDarkMode.js
│   └── styles
│       ├── app.css
│       └── index.css
├── assets
│   └── vue.svg
├── entities
│   ├── domain1
│   │   ├── api
│   │   │   └── api.js
│   │   └── components
│   │       └── UI.vue
│   └── domain2
│       ├── api
│       │   └── api.js
│       └── components
│           └── UI.vue
├── features
│   ├── domain1
│   │   ├── api
│   │   │   └── api.js
│   │   └── components
│   │       └── UI.vue
│   └── domain2
│       ├── api
│       │   └── api.js
│       └── components
│           └── UI.vue
├── main.js
├── router
│   └── index.js
├── shared
│   ├── components
│   ├── hooks
│   │   └── useSetVh.js
│   └── lib
│       └── setViewPort.js
└── views
    ├── Routing1.vue
    └── Routing2.vue
```

## 코드 컨벤션

### javascript

1. 변수, 함수 명은 소문자 카멜 케이스를 사용한다.

```
const handleClick = () => {};

const clickCount = 0;
```

2. 변수 선언은 const, let을 이용한다.

```
❌
var count;

✅
let count;

constc count = 0;
```

3. 배열 변수명의 끝에는 List를 붙인다.

```
const nameList = [];
```

4. Boolean 타입의 변수는 is로 시작한다.

```
const isLoading = true;
```

5. 클래스는 파스칼 케이스를 사용한다.

```
class Experience {}
```

6. 상수는 대문자 + 스네이크 케이스를 사용한다.

```
const FIRST_NAME = 'Kang'
```

7. 객체의 경우 다음의 형태를 따른다.

```
변수 객체
const userInfo = {
  name: name,
  age: age,
};

상수 객체
const USER_INFO = {
  name: '강경규',
  age: 28,
};
```

8. 무언가를 생성, 불러오기, 수정, 삭제하는 함수의 경우 다음과 같이 작명한다.

```
생성
const createUser = () => {};

불러오기
const getUser = () => {};

수정
const updateUser = () => {};

삭제
const removeUser = () => {};
```

9. 모달창과 같이 Boolean을 토글하는 함수의 경우 toggle로 시작한다.

```
const toggleModal = (isModal) => {
  isModal = !isModal
};
```

10. 특정 값을 받아 변환하여 반환하는 함수는 convert로 시작한다.

```
const convertUser = () => {};
```

11. 배열을 순회하여 필터링 된 결과물을 반환하는 함수는 filter로 시작한다.

```
const filterUser = () => {};
```

12. 배열을 순회하여 특정 요소를 찾아 반환하는 함수는 find로 시작한다.

```
const findUser = () => {};
```

13. 배열을 순회하여 요소들을 변환하여 반환하는 함수는 convert로 시작한다.

```
const convertUser = () => {};
```

14. 일반적인 케이스에 해당하지 않는 경우 최대한 자세하게 작명한다.

```
const copyHashtag = () => {};

const setVh = () => {};
```

15. 이벤트 핸들러 함수의 경우 handle로 시작하여 event 이름으로 끝난다.

```
const handleButtonClick = () => {};
```

### vue

1. 모든 vue 컴포넌트는 특별항 상황이 아니라면 script setup & style scoped를 사용한다.

```
<script setup></script>

<template></template>

<style scoped></style>
```

2. 커스텀 훅은 use로 시작한다.

```
const useSetVh = () => {};
```

### css

1. style scoped에서는 Element명으로 css를 작성하지 않는다.
2. id 선택자의 경우 특별한 이유가 있지 않다면 사용하지 않는다.

```
❌
div {****
  display: flex;
}

✅
.modal-container {
  display: flex;
}
```

3. Animation을 정의할 땐 src/app/style/animation.css 파일을 별도로 생성한다.

## update
