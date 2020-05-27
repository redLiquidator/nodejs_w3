*** git guide ***
vscode에서 git을 연동하려면 :
    0.git설치
    1.Ctrl + Shift + X 확장 검색창에서 실행 
    2.githistory, gitlens 를 설치
    3. CMD 창을 열고 GIT 설치된 경로로 가서 아래 등록
    git config user.email "inufuni@naver.com"
    git config user.name "oimbird1!"..확인필요
    4.git clone
    5.git repository 생성 : git init
       내 노트북 repository 위치 : C:/Users/inufu/.git/
git add 파일명 : index 에 새로운 파일이 생겼다고 알려준다. 
    아직은 커밋이 일어난 상태가 아니라 저장소에는 없다.
git add * : 전체파일 git add
git commit -m "comment" :  로컬 저장소에 변경사항 추가
git remote add origin 본인의 Github 레파지토리 url : 리모트에 생성한 리포지 토리를 
로컬의 해당 폴더와 매칭
git push origin master : 마지막 커밋을 원격 서버로 전송 
git clone : 저장소 소스코드를 checkout 받을수 있다. 
    svn 과의 차이는, git 은 저장소가 local 에도 있기 때문에 
    원격 중앙 저장소의 소스코드를 체크아웃 받을수도 있고,
    작업한 로컬의 저장소의 소스코드를 체크아웃 받을수도 있다. 
    ctrl+shift+p -> git:clone -> repository url 입력
git pull :  svn update. 수정한 소스코드를 원격저장소에 변경     

*** nodejs guide ***
node -v : node 설치버전확인
npm -v  : npm 설치버전확인
npm init :  create a package.json file
npm list : check packages that are already installed
npm install mysql --save :  save the packages to the pckage.json file
nodejs : lock 이 없어서 프로세스를 dead-locking 할 걱정이 없고 I/O를 직접 수행하지 않는다. 
         즉, 실시간 웹 어플리케이션이다. 
npm start: "npm start" is a run command from your scripts located in your package.json file.
            Usually "npm start" runs your server file. If you don't have a "start" script 
            in your package.json file this command will run the default "node server"

npm install express : a Node.js web application framework that provides a robust set of features
                        to develop web and mobile applications. 
node: node를 실행한다. node myfirst.js 등 파일 실행 전에 이 명령어를 실행해야 한다. 
package.json : 프로젝트에 대한 명세.. 해당 프로젝트의 이름, 버전, 사용되는 모듈 등의 스펙을 기록.
                모듈의존성 모듈관리. 
npm install -g: -g는 전역설치모듈. C:\Users\사용자명\AppData\Roaming\npm에 설치된다. 
package-lock.json : npm을 사용하여 package.json파일 또는 node_modules트리를 수정하면
                    자동으로 생성되는 파일이다. 한마디로 파일이 생성되는 시점의 의존성 트리를 가지고 있다. 
npm ls : installed module info list

***nodejs error***
1. listen EADDRINUSE: address already in use :::8080
netstat -ano | findstr "PID :8080" 로 pid확인(ex.1422) -> taskkill /pid 1422 \f

***vscode 관련***