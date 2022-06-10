habitTracker는 Habit을 입력해 해당 Habit을 몇 번 수행하고
총 몇 가지의 Habit을 가지고 있는지 보여주는 간단한 웹어플리케이션입니다.

22/06/09 SHA(3f9a8427)

habitTracker 프로젝트 생성
class-compoment branch 생성

class-compoment branch에서는 class를 이용해 생성한 컴포먼트로 웹어플리케이션을 작성하고.

main branch에서는 hook을 이용해 작성 할 예정.

22/06/09 SHA(11c9582)

기본적인 기능 구현 완료.

상단 input을 이용해 habit을 입력하고 해당 입력하면,
app 컴포넌트 상태의 배열로 들어가 리스트로 출력하게 됨.
➕➖버튼은 해당 habit의 실행 횟수을 증가 혹은 감소 시킬 수 있고,
🪄을 클릭하면 해당 habit을 삭제 할 수 있음.

22/06/10 SHA(805ef8c)

habit 더블클릭 수정기능 구현.
이제 수정을 원하는 habit의 이름을 더블클릭 시 해당 habit의 이름을 value로 가지는 input이 렌더링되어 엔터를 눌러 submit을 하면 수정 할 수 있음.

각 Habit 컴포넌트 또한 상태를 가질 수 있다는 점과,
setState메소드를 호출하면 이전 상태의 VDOM과 현재 VDOM (setState에 들어온 인자를 받아 변경된 VDOM)을 비교해 다른 부분만 수정된다는 사실이 익숙하지 않아 상당한 시간이 걸렸음.
