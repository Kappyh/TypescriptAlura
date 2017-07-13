export abstract class View<T> {

    private _elemento: JQuery;
    private _escape: boolean;

    constructor(seletor: string, escape: boolean = false) {

        this._elemento = $(seletor);
        this._escape = escape;
    }

    update(model: T) {

        const t1 = performance.now();

        this._elemento.html(this.template(model));

        const t2 = performance.now();
        console.log(`Tempo de execução do método update(): ${(t2 - t1) / 1000} segundos`);
    }

    abstract template(model: T): string;

}