using backend.Data.Database;
using backend.Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly TaskCraftDbContext _context;

        public TodoController(TaskCraftDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllTasksRelatedToSingleWorkSpace([FromQuery] string workSpaceId)
        {
            var tasksrelatedToSingleWorkSpace = await _context.Todos
            .Where(task => task.workSpaceId == workSpaceId)
            .ToListAsync();

            return Ok(tasksrelatedToSingleWorkSpace);
        }




        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> getSingleTask([FromRoute] Guid id)
        {
            var task = await _context.Todos.FirstOrDefaultAsync(x => x.Id == id);
            if (task == null)
            {
                return NotFound();
            }
            return Ok(task);
        }



        [HttpPost]
        public async Task<IActionResult> CreateSingleTask([FromBody] Todo tododata)
        {
            tododata.Id = Guid.NewGuid();
            await _context.Todos.AddAsync(tododata);
            await _context.SaveChangesAsync();

            return Ok(tododata);
        }


        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateTask([FromRoute] Guid id, Todo updatedTask)
        {
            //access that data before update
            var task = await _context.Todos.FindAsync(id);
            if (task == null)
            {
                return NotFound();
            }

            //update fiels
            task.Name = updatedTask.Name;
            task.status = updatedTask.status;

            await _context.SaveChangesAsync();
            return Ok(task);
        }


        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteSingleTask([FromRoute] Guid id)
        {
            var task = await _context.Todos.FindAsync(id);
            if (task == null)
            {
                return NotFound();
            }

            _context.Todos.Remove(task);
            await _context.SaveChangesAsync();

            return Ok();
        }





    }
}
