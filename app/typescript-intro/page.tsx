"use client";

export default function Page() {

  function add(a : number, b : number) : number{
    return a + b;
  }

  console.log(add(10, 20));
  //console.log(add("10", 20));

  type Person = {
  name: string;
  age: number;
  height: number;
};

const taro: Person = {
  name: "山田太郎",
  age: 25,
  height: 170
};

console.log(person.); // ← ドットを打った瞬間に name, age, height が補完される

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">TypeScript</h1>
    </div>
  );
}

