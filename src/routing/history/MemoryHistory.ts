import { History, HistoryOptions, OnChangeFunction } from './../interfaces';

export class MemoryHistory implements History {
	private _onChangeFunction: OnChangeFunction;
	private _current = '/';

	constructor({ onChange }: HistoryOptions) {
		this._onChangeFunction = onChange;
	}

	public start() {
		this._onChange();
	}

	public prefix(path: string) {
		return path;
	}

	public set(path: string) {
		if (this._current === path) {
			return;
		}
		this._current = path;
		this._onChange();
	}

	public replace(path: string) {
		this.set(path);
	}

	public get current(): string {
		return this._current;
	}

	private _onChange() {
		this._onChangeFunction(this._current);
	}
}

export default MemoryHistory;
