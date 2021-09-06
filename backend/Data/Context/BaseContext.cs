using Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Context
{
    public class BaseContext : DbContext
    {
        public DbSet<Categoria> Categoria { get; set; }
        public DbSet<Produto> Produto { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql("server=localhost;user id=root;persistsecurityinfo=True;sslmode=None;database=mariadb", new MariaDbServerVersion(new Version()));
        }

    }
}
