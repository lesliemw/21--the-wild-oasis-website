import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>The Wild Oasis</h1>
      <h2>Welcome to Paradise!</h2>
      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  );
}
