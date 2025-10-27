"use client";

export default function Page() {
  return (
    <>
      <h1>ボタンを押してみよう</h1>
      <button
        onClick={() => {alert("ボタンがクリックされました")}}
        className="px-4 py-2 bg-blue-500 text-white"
      >
        クリック
      </button>
    </>
  );
}
