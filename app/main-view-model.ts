import { Observable, ObservableArray } from '@nativescript/core';
import { Message } from './models/message';

export class ChatViewModel extends Observable {
    private messages: ObservableArray<Message>;
    private _newMessage: string;

    constructor() {
        super();
        this.messages = new ObservableArray<Message>();
        this._newMessage = '';
    }

    get messageList(): ObservableArray<Message> {
        return this.messages;
    }

    get newMessage(): string {
        return this._newMessage;
    }

    set newMessage(value: string) {
        if (this._newMessage !== value) {
            this._newMessage = value;
            this.notifyPropertyChange('newMessage', value);
        }
    }

    sendMessage() {
        if (this._newMessage.trim()) {
            const message: Message = {
                id: Date.now().toString(),
                text: this._newMessage,
                sender: 'Me',
                timestamp: new Date()
            };
            this.messages.unshift(message);
            this.newMessage = '';
        }
    }
}