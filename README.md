# 스토리지
local 스토리지
브라우저에 데이터 영구보관

session 스토리지
창을 닫으면 데이터 소멸
local보다 더 안전 보안
창마다 다른 스토리지를 가짐

cookies
4kb 이하의 작은 저장공간
매 api 요청마다 함께 전송
client side에서의 접근 보호

# 렌더링
SSG static site generation
클라이언트에서 페이지를 미리 준비, 요청 시 파일 반환

SSR server side rendering
서버에서 뷰 구성에 필요한 html을 요청하면 생성 후 반환

CSR client side rendering
클라이언트 브라우저에서 어플리케이션 렌더링 진행
html, js, css 등의 파일을 모두 다운 후 뷰 구성