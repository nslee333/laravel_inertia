import { Link } from "@inertiajs/react";

export default function Users() {

  return (
    <>
      <div className="flex justify-around text-5xl">
        <div>/users</div>
        <Link href="/">Back to homepage</Link>
      </div>
    </>
  );
}