import {HistoryStore} from '../history-store';
import {ExtensionCommand} from './extension-command';

export class ClearHistoryCommand implements ExtensionCommand {
    constructor(private readonly historyStore: HistoryStore) {}

    async execute() {
        this.historyStore.clear();
    }

}
