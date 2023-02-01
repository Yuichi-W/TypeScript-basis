export const Practice3 = () => {
  // 返却値の型指定していなく文字列をテスト用に返却
  const getTotalFree = (num: number) => {
    const total = num * 1.1;
    return total.toString();
  };

  const onClickPractice = () => {
    let total: number = 0;
    // 返却値が他の型でも変数の型を指定しておけばエラー出せる
    total = getTotalFree(1200);
    console.log(total);
  };

  return (
    <div>
      <p>練習問題：変数の型指定</p>
      <button onClick={onClickPractice}>練習3を実行する</button>
    </div>
  );
};
