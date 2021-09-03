using Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace TestData.Models
{
    public class TestBase
    {


        [Fact]
        public void TestarInstanciaDaBaseModel()
        {
            //Arrange
            //Act
            Action ab = () => Activator.CreateInstance<Base>();

            //Assert
            Assert.Throws<MissingMethodException>(ab);
        }
    }
}
