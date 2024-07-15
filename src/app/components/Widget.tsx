export default function Widget({ title }: { title: string }) {
    return (
        <div className="bg-white shadow-md rounded p-4">
            <h2 className="text-xl font-bold">{title}</h2>
            {/* Chart or data display here */}
        </div>
    );
}