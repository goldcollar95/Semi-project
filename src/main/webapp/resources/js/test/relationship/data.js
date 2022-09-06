/*
low, 0
middle, 1
high, 2
*/

const qnaList = [
  {
    q: '1. 공개 석상에서 당신이 연설을 해야 한다면?',
    a: [
      { answer: '다른 사람에게 맡기지 절대 연설하지 않는다.', type: [0] },
      { answer: '되도록 짧게 이야기하고 끝내려고 한다.', type: [1] },
      { answer: '전달해야 할 내용은 잘 전달한다.', type: [2] },
      { answer: '자신의 소신을 마음껏 표현하여 발표한다.', type: [3] },
    ]
  },
  {
    q: '2. 친구와 있을 때 상대방과의 대화 상태는? ',
    a: [
      { answer: '말이 제대로 나오지 않는다.', type: [0] },
      { answer: '말이 잘 막히고 어색한 순간이 많다.', type: [1] },
      { answer: '주로 내가 말을 많이 하지만 상대방의 호응이 적은 편이다.', type: [2] },
      { answer: '서로 간에 화제가 끊어지지 않고 잘 이어지는 편이다.', type: [3] },
    ]
  },
  {
    q: '3. 전화로 통화할 때 당신의 태도는?',
    a: [
      { answer: '전화하는 것이 무서워 문자로 대체한다.', type: [0] },
      { answer: '용건만 간단히 말한다.', type: [1] },
      { answer: '용건을 전달하고 확실히 해결까지 한다.', type: [2] },
      { answer: '통화가 즐거워서 아무런 걱정 없이 대화한다.', type: [3] },
    ]
  },
  {
    q: '4. 친구들과 어울릴 때 당신의 태도는?',
    a: [
      { answer: '친구들과 어울리는데 어려움을 느낀다.', type: [0] },
      { answer: '마음에 드는 친한 친구하고만 어울린다.', type: [1] },
      { answer: '상황에 따라 다른 친구하고도 어울리지만 그 범위가 좁다.', type: [2] },
      { answer: '교제 대상을 특별히 가리지 않으며 친구도 많다.', type: [3] },
    ]
  },
  {
    q: '5. 낯선 사람과 있을 때 당신의 태도는?',
    a: [
      { answer: '눈을 전혀 마주치지 못하고 피하기 바쁘다.', type: [0] },
      { answer: '얼굴을 마주 대할 수는 있지만, 말이 잘 안 나온다.', type: [1] },
      { answer: '어렵지만 대화를 이어갈 수 있다.', type: [2] },
      { answer: '대화가 물 흐르듯 잘 이어지고 끊임없이 대화할 수 있다.', type: [3] },
    ]
  },
  {
    q: '6. 당신에게 불리한 상황일 때 당신의 태도는?',
    a: [
      { answer: '안절부절 못하고 상황이 너무 두렵다.', type: [0] },
      { answer: '상황을 해결하려고 생각은 하지만 두렵다.', type: [1] },
      { answer: '두려움을 이겨내고 상황을 해결해보려 한다.', type: [2] },
      { answer: '상황을 해결하기 위해 노력하며 두렵지 않다.', type: [3] },
    ]
  },
  {
    q: '7. 당신의 속마음을 털어놓을 친구가 있나요?',
    a: [
      { answer: '전혀 없다.', type: [0] },
      { answer: '있긴 하지만 이야기하기 꺼려진다.', type: [1] },
      { answer: '있으며 이야기할 수는 있다.', type: [2] },
      { answer: '있으며 자신의 속마음을 충분히 털어놓을 수 있다.', type: [3] },
    ]
  }
  
]

const infoList = [
  {
    name: '지구',
    desc: '대인관계를 유지하는 것에 어려움을 겪고 있는 것 같아요. <br> 천리길도 한 걸음부터! <br> 마음약국의 커뮤니티에서 속마음을 털어놓는 것부터 <br> 시작하는 건 어떠세요?'
  },
  {
    name: '태양계',
    desc: '태양계처럼 대인관계를 유지하고는 있지만, 아직 부족함을 느끼고 있군요. <br> 자신이 어떻게 대인관계를 유지하고 있는지 되돌아보는 시간을 가져보세요:)'
  },
  {
    name: '은하수',
    desc: '은하수처럼 당신의 대인관계에는 많은 사람이 있지만, 때때로 고민에 빠지시는 군요? <br> 오늘 하루는 친구에게 전화해서 고민을 말해보는 건 어떨까요?'
  	},
  {
    name: '우주',
    desc: '우주처럼 넓은 대인관계를 갖고 있는 당신! <br> 지금처럼 대인관계를 잘 유지해주세요:)'
  	},
  	
  ]