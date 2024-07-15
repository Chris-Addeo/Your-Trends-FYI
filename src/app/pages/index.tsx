import { useSession, signIn, signOut } from 'next-auth/react';
import Dashboard from '../components/Dashboard';

export default function Home() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-3xl font-bold mb-6">Welcome to Your Trends, FYI</h1>
                <button
                    onClick={() => signIn()}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Sign in
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-white shadow-md">
                <div className="container mx-auto p-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Your Trends, FYI</h1>
                    <button
                        onClick={() => signOut()}
                        className="px-4 py-2 bg-red-500 text-white rounded"
                    >
                        Sign out
                    </button>
                </div>
            </header>
            <main className="flex-grow container mx-auto p-4">
                <Dashboard />
            </main>
            <footer className="bg-white shadow-md">
                <div className="container mx-auto p-4 text-center">
                    © 2024 Your Trends, FYI
                </div>
            </footer>
        </div>
    );
}