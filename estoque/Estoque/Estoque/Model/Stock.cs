using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Estoque.Model
{
    [Table("Stocks")]
    public class Stock : Base
    {
        public decimal Quantidade { get; set; }
    }
}
