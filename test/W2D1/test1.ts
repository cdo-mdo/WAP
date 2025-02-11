class Meditation {
    #duration: number;

    constructor(duration) {
        this.#duration = duration;
    }

    start() {
        let count = this.#duration;
        console.log('Start Meditation');
        while (count > 0) {
            setTimeout(() => this.#work(1000), 0);
            count--
        }
        console.log('Jay Guru Dev');
    }

    #work(milliseconds: number) {
        let startTime: number = Date.now();
        let endTime: number = startTime + milliseconds;

        while (startTime < endTime) {
            startTime = Date.now();
        }
    }
}

const morning_meditation = new Meditation(5);
morning_meditation.start();
