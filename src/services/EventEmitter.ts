export class EventEmitter implements IEventEmitter  {
    listeners: { [event: string]: IEventListener[]; };
    maxListener: number;
    
    on(event: string, listener: IEventListener): void {
        if (this.listeners[event] && this.listeners[event].length >= this.maxListener) {
            throw console.error("超過最大限制: ", this.maxListener)
        }
        if (this.listeners[event] instanceof Array) {
            if (this.listeners[event].indexOf(listener) === -1) {
                this.listeners[event].push(listener);
            }
        } else {
            this.listeners[event] = [listener];
        }
    }
    addListener = this.on;

    emit(event: string, ...args: any[]): void {
        if (this.listeners[event]) {
            this.listeners[event].forEach(cb => {
                cb(...args);
            });
        }
    }
    
    once(event: string, listener: IEventListener): void {
        const tempFunction: IEventListener = (...args: any[]): void => {
            listener(...args);
            this.removeListener(event, tempFunction);
        }
        this.on(event, tempFunction);
    }
    removeListener(event: string, listener: IEventListener): void {
        let arr = this.listeners[event] || [];
        let i = arr.indexOf(listener);
        if (i >= 0) {
            this.listeners[event].splice(i, 1);
        }
    }
    removeAllListeners(event?: string): void {
        if(event) this.listeners[event] = [];
        else this.listeners = {};
    }
    setMaxListeners(n: number): void {
        this.maxListener = n;
    }
    getListeners(event: string): IEventListener[] {
        return this.listeners[event] || [];
    }
}