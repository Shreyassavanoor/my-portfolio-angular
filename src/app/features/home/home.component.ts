import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    typewriter_text = ["I Love Python.", "I Love Data Science.", "I Love Image Processing."];
    index = 0;
    typewriter_display: string = "";
    constructor() { }

    ngOnInit(): void {
        this.typingCallback();
    }

    typingCallback() {
        let array_length = this.typewriter_text.length;
        if (this.index < array_length) {
            this.showTypingText(this.typewriter_text[this.index]);
        } else {
            this.index = 0;
            setTimeout(() => {
                this.typingCallback();
            }, 200);
        }
    }

    showTypingText(text) {
        let total_length = text.length;
        let current_length = this.typewriter_display.length;
        if (current_length < total_length) {
            this.typewriter_display += text[current_length];
            setTimeout(() => {
                this.showTypingText(text);
            }, 200);
        } else {
            setTimeout(() => {
                this.clearTypingText(this.typewriter_display);
            }, 200);
        }
    }

    clearTypingText(text) {
        let current_length = text.length;
        if (current_length === 0) {
            this.index += 1;
            setTimeout(() => {
                this.typingCallback();
            }, 200);
        } else {
            this.typewriter_display = this.typewriter_display.slice(0, current_length - 1);
            setTimeout(() => {
                this.clearTypingText(this.typewriter_display);
            }, 200);
        }
    }
}
