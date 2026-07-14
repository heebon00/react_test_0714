# 재목1
## 재목2
### 재목3

#### 리액트 앱 실행
- 개발서버 실행
   
    1.`npm run dev `
#### 리액트 앱 설치
- npm 모듈 설치
   
    1.`npm i` 
#### 깃으로 관리하기
1. 프로젝트에서 깃 시스템 초기화 (최초 1회)

    `git init`
    - 현재 폴더를 Git 저장소로 초기화합니다.
    - `.git` 폴더가 생성되고 버전 관리가 시작됩니다.

2. 관리할 파일을 스테이지로 등록

    `git add 파일명`
    - 수정한 파일을 커밋 후보로 등록합니다.
    - `.`은 변경된 모든 파일을 선택합니다.
    - `*`는 모든 파일을 선택합니다.

3. 커밋 메시지와 함께 커밋

    `git commit -m "first commit"`
    - 스테이징 영역의 변경을 커밋으로 저장합니다.
    - `-m` 뒤에 커밋 메시지를 적습니다.

4. 브랜치 이름을 main으로 변경

    `git branch -M main`
    - 현재 브랜치 이름을 `main`으로 변경합니다.
    - `-M`은 이미 같은 이름이 있는 경우에도 강제로 변경합니다.

5. 원격 저장소 연결

    `git remote add origin https://github.com/heebon00/react-test.git`
    - 원격 저장소를 `origin`으로 등록합니다.
    - 이후 원격 저장소로 `push`하거나 `pull`할 때 사용합니다.

6. 원격 저장소에 푸시

    `git push -u origin main`
    - 로컬 `main` 브랜치를 원격 `origin`에 업로드합니다.
    - `-u` 옵션은 로컬 브랜치와 원격 브랜치의 추적 관계를 설정합니다.

예시 순서:

    echo "# react-test" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/heebon00/react-test.git
    git push -u origin main
