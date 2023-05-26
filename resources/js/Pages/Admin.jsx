import { Link } from "@inertiajs/react";

export default function Admin() {
  return (
    <>
      <div className="flex justify-around text-5xl">
        <div>/Admin</div>
        <Link href="/">Back to homepage</Link>
      </div>
    </>
  );
}