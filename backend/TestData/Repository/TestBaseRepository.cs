using Data.Models;
using Data.Repository;
using Xunit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestData.Repository
{
    public class TestBaseRepository
    {
        [Fact]
        public void TestCreateProdutoRepository()
        {
            //Arrange
            ProdutoRepository repo = new ProdutoRepository();
            Produto modela = new Produto();

            //Act
            int idZerado = 0;
            modela.Nome = "Havan";
            modela.Description = "Havan Brusque";

            repo.Create(modela);

            //Assert
            Assert.NotEqual(idZerado, modela.Id);

        }
        [Fact]
        public void TestReadProdutoRepository()
        {
            //Arrange
            ProdutoRepository repo = new ProdutoRepository();

            //Act


            //Assert


        }

    }
}
