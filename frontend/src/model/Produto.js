import Categoria from "./Categoria"

class Produto {
    constructor(name, description, Categoria){
        this.name = name;
        this.description = description;
        this.Categoria = Categoria;
    }
    name;
    description;
    Categoria = new Categoria();
}
export default Produto;