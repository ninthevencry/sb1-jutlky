import { EventData, Page } from '@nativescript/core';
import { ChatViewModel } from './main-view-model';

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new ChatViewModel();
}