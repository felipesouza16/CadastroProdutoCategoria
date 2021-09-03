using Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace TestData.Models
{
    public class TestProduto
    {
        [Fact]
        public void TestarHerançaDaBaseModel()
        {
            //Arrange
            Type v = typeof(Produto);
            Type b = typeof(Base);

            //Act
            bool vl = b.IsAssignableFrom(v);

            //Assert
            Assert.True(vl);
        }
        [Fact]
        public void TestarPropNomeDeVarejo()
        {
            //Arrange
            Produto v = new Produto();
            string a = "apae"; 

            //Act
            v.Nome = a;

            //Assert
            Assert.Equal(a, v.Nome);

        }
        [Fact]
        public void TestarPropDescriptionDeVarejo()
        {
            //Arrange
            Produto v = new Produto();
            string b = "algumlugar";

            //Act
            v.Description = b;

            //Assert
            Assert.Equal(b, v.Description);

        }
        [Fact]
        public void TestarPropIdDeVarejo()
        {
            //Arrange
            Produto v = new Produto();
            int b = 11;

            //Act
            v.Id = b;

            //Assert
            Assert.Equal(b, v.Id);

        }
    }
}
