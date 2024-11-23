import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col gap-6 items-center justify-center">
        HOme Page
        <Link href={"./portail"}> Go to Portail </Link>
      </div>
    </main>
  );
}
