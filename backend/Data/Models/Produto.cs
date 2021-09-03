using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    [Table("Produto")]
    public class Produto : Base
    {
        private string _nome;
        public string Nome { get { return _nome; }
            set { _nome = value; } }
        public string Description { get; set; }
        public Categoria Categoria { get; set; }
    }
}
