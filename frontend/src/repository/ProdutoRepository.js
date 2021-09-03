class ProdutoRepository{
    list;
    inscritos;

    constructor(){
        this.list = [];
        this.inscritos = [];
    }

    inscrever(func){
        let insc = [...this.inscritos, func]
        this.inscritos = insc;
    }
    desinscrever(func){
        let dsinsc = this.inscritos.findIndex(func);
        this.inscritos.splice(dsinsc, 1);
    }

    notificar(){
        this.inscritos.forEach(insc => {
            insc(this.list)
        });

    }

    create(prod){
        let prods = [...this.list, prod];
        this.list = prods;
        this.notificar();
    }

    list(){
        return this.list;
    }
}
export default ProdutoRepository