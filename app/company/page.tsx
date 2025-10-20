export default function Page() {
  return (
    <div className="mx-auto my-10 w-[720px] border border-gray-200 p-8">
      <h2 className="text-2xl font-bold text-red-800 border-b-2 border-red-800">私たちについて</h2>
      <p className="mt-4">
        BlueWave Solutions（ブルーウェーブ・ソリューションズ）は、クラウド導入支援と業務システム開発を専門とするテクノロジーカンパニーです。
      </p>
      <p className="mt-4">
        会社の理念や提供サービスの詳細は<a href="https://www.google.com/">会社概要</a>
        をご覧ください。
      </p>
      <div className="border border-gray-200">
        <div>
          <p>お名前</p>
          <input type="text" placeholder="山田 太郎" />
        </div>
        <div>
          <input type="checkbox" />
          <span>最新情報(イベント・導入事例・技術ブログ)の配信を希望する</span>
        </div>
        <button className="bg-red-800 text-white">送信する</button>
      </div>
    </div>
  );
}