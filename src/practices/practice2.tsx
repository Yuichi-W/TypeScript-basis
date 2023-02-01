export const Practice2 = () => {
  // 返却値の型指定は引数の型指定の（）の後に記載していく
  const getTotalFree = (num: number): number => {
    const total = num * 1.1;
    return total;
    // 下記のように返却型をreturn時に他の型にしてしまう場合もあるための返却型指定
    // return total.toString();
  };

  const onClickPractice = () => {
    console.log(getTotalFree(1100));
  };

  return (
    <div>
      <p>練習問題：返却値の型指定</p>
      <button onClick={onClickPractice}>練習２を実行する</button>
    </div>
  );
};
