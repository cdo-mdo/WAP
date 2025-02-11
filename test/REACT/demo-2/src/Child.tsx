
function Child({ setMessage }: { setMessage: (msg: string) => void; }) {
    return (
        <div>
            <button onClick={() => setMessage('This message from Child')}>Send</button>
        </div>
    );
}

export default Child;
