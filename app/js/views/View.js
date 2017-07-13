System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(seletor, escape = false) {
                    this._elemento = $(seletor);
                    this._escape = escape;
                }
                update(model) {
                    const t1 = performance.now();
                    this._elemento.html(this.template(model));
                    const t2 = performance.now();
                    console.log(`Tempo de execução do método update(): ${(t2 - t1) / 1000} segundos`);
                }
            };
            exports_1("View", View);
        }
    };
});
