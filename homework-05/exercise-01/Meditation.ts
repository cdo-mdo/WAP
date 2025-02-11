class Meditation {
    private duration: number;
    
    constructor(duration: number) {
        this.duration = duration;
    }
    
    async start(): Promise<void> {
        console.log(`start meditation`);

        for (let i = this.duration; i > 0; i--) {
            console.log(`${i} ${Date.now()}`);
            await this.sleep(1000);
        }

        console.log(`Jay Guru Dev`);
    }

    private sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

const morning_meditation = new Meditation(5);
morning_meditation.start();
