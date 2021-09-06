using Estoque.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Estoque.Context
{
    public class BaseContext : DbContext
    {
        public DbSet<Stock> Stock { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql("Database = mariadb; SERVER = localhost; Password = 123; User Id = root", new MariaDbServerVersion(new Version()));
        }
    }
}
