<h3> habitTracker는 Habit을 입력해 해당 Habit을 몇 번 수행하고 총 몇 가지의 Habit을 가지고 있는지 보여주는 간단한 웹어플리케이션입니다. </h3>

<strong> 👉22/06/09 SHA(3f9a842) </strong>

habitTracker 프로젝트 생성 class-compoment branch 생성

class-compoment branch에서는 class를 이용해 생성한 컴포먼트로 웹어플리케이션을 작성하고.

main branch에서는 hook을 이용해 작성 할 예정.

<strong> 👉22/06/12 SHA(42e9356) </strong>

hook을 이용한 habitTracker 구현 완료.

class component를 이용해서 구현했을 때와 비교하자면

간단한 기능을 구현했을 뿐이지만 hook을 이용해 구현하면 코드량이 적어지는 것을 느꼇고,

class component에서 state는 병합이 되어서 편하다고 느꼈었지만,

생각해보면 state에서 어느 부분은 변경되고 어느 부분은 변경되지 않는 것을 생각해야하니,

state가 병합되지 않고 대체되는 hook의 방식이 조금 더 직관적으로 생각하기 좋다고 생각된다.
