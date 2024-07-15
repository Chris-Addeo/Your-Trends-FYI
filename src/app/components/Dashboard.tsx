import Widget from './Widget';

export default function Dashboard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Widget title="Followers Growth" />
            <Widget title="Post Performance" />
            <Widget title="Engagement Rate" />
        </div>
    );
}