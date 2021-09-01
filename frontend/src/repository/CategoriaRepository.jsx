class CategoriaRepository{
    categorias;
    #inscritos;

    constructor(){
        this.categorias = []
    }
    inscrever(func){
        let insc = [...this.#inscritos, func]
        this.#inscritos = insc;
    }
    desinscrever(func){
        let dsinsc = this.#inscritos.findIndex(func);
        this.#inscritos.splice(dsinsc, 1);
    }

    notificar(){
        this.#inscritos.forEach(insc => {
            insc(this.categorias)
        });
    }
    
    createCateg(categ){
        let ex = [...this.categorias, categ]
        this.categorias = ex;
        console.log("salvando categorias")
    }
    list(){
        return this.categorias;
    }
}
export default CategoriaRepository;