/* eslint-disable prefer-const */
class TextScrambler {
  element: HTMLElement;
  chars: string;
  _update?: () => void;
  queue: {
    from: string;
    to: string;
    start: number;
    end: number;
    char?: string;
  }[];
  frame: number;
  frameRequest: number | null;
  _resolve?: () => void;
  delay: number;
  duration: number;

  constructor(
    element: HTMLElement,
    delay: number = 50,
    duration: number = 2000
  ) {
    this.element = element;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this._update = this._update && this._update.bind(this);
    this.queue = [];
    this.frame = 0;
    this.frameRequest = null;
    this.delay = delay;
    this.duration = duration;
  }

  setText(newText: string): Promise<void> {
    const oldText = this.element.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => (this._resolve = resolve));

    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * this.delay);
      const end = start + Math.floor(Math.random() * this.delay);
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest as number);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.element.innerHTML = output;

    if (complete === this.queue.length) {
      this._resolve?.();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar(): string {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

export default TextScrambler;
