export const Practice1 = () => {
  // テスト用で受け取った数値に税率をかけるコンポーネント
  const calcTotalFree = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  // 型指定していないが引数に文字列渡してもJSで暗黙的に型変換してくれる
  // ただこれだと1,000みたいに文字列そのまま入ってNaNとかになってしまう
  // よって受け取り側で(num)→(num: number)として防ぐ
  const onClickPractice = () => calcTotalFree(1000);

  return (
    <div>
      <p>練習問題：引数の型指定</p>
      <button onClick={onClickPractice}>練習１を実行する</button>
    </div>
  );
};
