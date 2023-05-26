import {Head, Link} from '@inertiajs/react';

export default function Welcome() {
    return (
        <div className="bg-[#ccc] h-screen">
            <Head title="Welcome" />

            <div className="flex justify-around text-4xl">
                <div>Welcome page</div>
                <Link href="/dashboard">Dashboard</Link>
            </div>
        </div>
    );
}
