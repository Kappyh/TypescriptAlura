import { logarTempoDeExecucao } from '../helpers/decorators/index';

export abstract class View<T> {

    private _elemento: JQuery;
    private _escape: boolean;

    constructor(seletor: string, escape: boolean = false) {

        this._elemento = $(seletor);
        this._escape = escape;
    }

    @logarTempoDeExecucao()
    update(model: T) {

        this._elemento.html(this.template(model));

    }

    abstract template(model: T): string;

}