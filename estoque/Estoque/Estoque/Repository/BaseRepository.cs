using Estoque.Context;
using Estoque.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Estoque.Repository
{
    public class BaseRepository<M> where M: Base
    {
        public void Create(M model)
        {
            using(var context = new BaseContext())
            {
                context.Set<M>().Add(model);
                context.SaveChanges();
            }
        }
        public M Read(int id)
        {
            M model = Activator.CreateInstance<M>();
            using (var context = new BaseContext())
            {
                model = context.Set<M>().Find(id);
            }
            return model;
        }
        public List<M> Read()
        {
            List<M> list = new List<M>();
            using (var context = new BaseContext())
            {
                list = context.Set<M>().ToList();
            }
            return list;
        }
        public void Update(M model)
        {
            using (var context = new BaseContext())
            {
                context.Entry<M>(model).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            }
        }
        public void Delete(int id)
        {
            using (var context = new BaseContext())
            {
                context.Entry<M>(Read(id)).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
            }
        }
    }
}
