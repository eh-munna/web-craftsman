{
  // Spread and Rest Operator

  const playerList1: string[] = ['player1', 'player2', 'player3'];
  const playerList2: string[] = ['player4', 'player5', 'player6'];

  //   spreading one array to another array

  const playerList = playerList1.push(...playerList2); // return new length

  //   spreading object to another object

  const coachList1 = {
    coach1: 'coach1',
    coach2: 'coach2',
    coach3: 'coach3',
  };
  const coachList2 = {
    coach4: 'coach4',
    coach5: 'coach5',
    coach6: 'coach6',
  };

  const coachList = { ...coachList1, ...coachList2 };

  console.log(playerList1);
  console.log(playerList);
  console.log(coachList);
}
