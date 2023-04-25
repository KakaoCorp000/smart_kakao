# 카카오톡 스마트인증 우회

# 세팅 하는법
1. index.js 파일에 들어간다
2. accountsid와 authtoken에 Twilio Account SID랑 인증 토큰을 넣는다
3. sendphonenumber에는 Twilio에서 발급 받은 전화번호를 넣는다
4. number에는 카카오톡 스마트인증 할떄 쓰는 번호를 넣는다

# 사용법
1. node index.js를 한다
2. 스마트인증 인증코드를 넣는다
3. 인증 된다.

# 주의사항
Twilio 평가판 사용시 인증이 안될수도 있습니다.
