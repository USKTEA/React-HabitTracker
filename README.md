habitTracker는 Habit을 입력해 해당 Habit을 몇 번 수행하고
총 몇 가지의 Habit을 가지고 있는지 보여주는 간단한 웹어플리케이션입니다.

22/06/09 SHA(3f9a8427)

habitTracker 프로젝트 생성
class-compoment branch 생성

class-compoment branch에서는 class를 이용해 생성한 컴포먼트로 웹어플리케이션을 작성하고.

main branch에서는 hook을 이용해 작성 할 예정.

22/06/09 SHA(11c9582)

기본적인 기능 작성 완료.

상단 input을 이용해 habit을 입력하고 해당 입력하면,
app 컴포넌트 상태의 배열로 들어가 리스트로 출력하게 됨.
➕➖버튼은 해당 habit의 실행 횟수을 증가 혹은 감소 시킬 수 있고,
🪄을 클릭하면 해당 habit을 삭제 할 수 있음.
