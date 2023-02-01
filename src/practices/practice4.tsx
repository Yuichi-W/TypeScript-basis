export const Practice4 = () => {
  // テスト用で受け取った数値に税率をかけるコンポーネント
  // tsconfigでコメントアウトしていた「"strict": true,」をもとに戻しての作業
  // そうすると下記の型指定していない部分(num)でエラー出る
  const calcTotalFree = (num) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => calcTotalFree(1000);

  return (
    <div>
      <p>練習問題：設定ファイル「tsconfig」に触れてみる</p>
      <button onClick={onClickPractice}>練習4を実行する</button>
    </div>
  );
};
