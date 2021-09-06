using Estoque.Model;
using Estoque.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RabbitMQ.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StockController : ControllerBase
    {
        [HttpPost]
        public void Post([FromBody] Stock model)
        {
            var factory = new ConnectionFactory() { HostName = "192.168.0.103" };
            using (var connection = factory.CreateConnection())
            using (var channel = connection.CreateModel())
            {
                channel.QueueDeclare(
                        queue: "stock_queue",
                        durable: false,
                        exclusive: false,
                        autoDelete: false,
                        arguments: null
                        );

                string message = System.Text.Json.JsonSerializer.Serialize(model);
                var body = Encoding.UTF8.GetBytes(message);
                channel.BasicPublish(exchange: "",
                                                routingKey: "stock_queue",
                                                basicProperties: null,
                                                body: body);
            }

        }
    }
}
