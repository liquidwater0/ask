export default function Main({ answer }: { answer: string }) {
    return (
        <main className='main'>
            <div>
                <h2>Computer Says</h2>
                <div className='answer-text'>{ answer }</div>
            </div>
        </main>
    );
}