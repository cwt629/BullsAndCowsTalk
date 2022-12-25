# 프로젝트: 숫자야구톡 (bulls-and-cows-talk)  
  
## 프로젝트 소개  
이 프로젝트는 숫자야구 게임을 웹 사이트 상에서 플레이할 수 있도록 구현한 프로젝트입니다.  
기존에 구현했던 숫자야구 게임 웹 사이트와 다르게,  
해당 프로젝트는 모바일 환경에서도 편하게 게임을 진행할 수 있도록 설계하고  
숫자야구 게임을 실제로 다른 사람과 함께 하는 느낌을 주게 하는 것을 목표로 수행되었습니다.  
![overall](https://user-images.githubusercontent.com/81515049/209473545-292839e9-e70b-4409-a98c-35025941854f.JPG)  
  
## 프로젝트 목표  
- 모바일 환경에서도 문제 없이 수행할 수 있는 숫자야구 게임을 만든다.  
- 메신저 UI 느낌으로 구성하여, 친구가 생각하는 정답을 맞추는 느낌을 준다.  
- vanilla js가 아닌 React로 구성하여, 스스로 React에 더 익숙해지고 필요한 개념을 스스로 학습 및 반영한다.  
- 단순 웹 페이지보다, react app 형태로 배포한다.  
  
## 컴포넌트 소개  
  
### Title  
제목 및 만든 이의 이름에 대한 컴포넌트입니다.  
  
### InputShow  
사용자가 입력하는 숫자를 보기 편하게 구성하고, 올바르지 않은 입력에 대해 매번 오류를 보여주는 컴포넌트입니다.  
  
1) 기본적인 작동 모습  
![inputshow](https://user-images.githubusercontent.com/81515049/209473557-17e6708b-7892-4432-a395-f41d53f11a84.JPG)  
  
2) 올바르지 않은 입력에 대해 오류를 보여주는 모습  
![inputshow-zerostart](https://user-images.githubusercontent.com/81515049/209473571-5a3acb19-955d-49d9-8a27-b5d6abd6c013.JPG)  
  
3) 이미 입력한 숫자에 대해 안내해주는 모습  
![inputshow-sameinput](https://user-images.githubusercontent.com/81515049/209473580-8c14bbd2-07dc-403a-b624-bc551daf6e92.JPG)  
  
### TalkSpace  
전반적인 게임 설명과 사용자의 입력, 그리고 그 입력에 대한 판정 결과 등 게임의 전체적인 진행을 확인할 수 있는 컴포넌트입니다.  
  
1) 기본적인 작동 모습  
![talkspace](https://user-images.githubusercontent.com/81515049/209473624-10603a16-6ff0-4c95-947b-0a754ff3281c.JPG)  
  
2) 정답을 맞춘 경우  
![talkspace-gotcorrect](https://user-images.githubusercontent.com/81515049/209473633-46af31d5-3490-470d-b4f0-fd23c899aa0c.JPG)  
  
### FormDiv  
맨 아래에 위치하여, 실제 메신저로 입력하듯이 본인이 생각하는 정답을 입력할 수 있는 컴포넌트입니다.