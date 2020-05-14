export class Component {

    _cycle: number = 0;
    _state: string = "foo";

    get state() { return this._state; }
    set state(value) {
        if (value === this._state) return;
        setTimeout(() => {
            this._state = value;
            this.render();
        }, 0);
    }

    render() {
        const cycle = ++this._cycle;
        this.log(cycle);
        this.state = "bar";
        this.log(cycle);
        setTimeout(() => this.log(cycle), 0);
    }

    log(cycle: number) {
        console.log(this.state, `Itteration ${cycle}`);
    }
}
