using backend.Data.Database;
using backend.Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkSpaceController : ControllerBase
    {

        private readonly TaskCraftDbContext _context;

        public WorkSpaceController(TaskCraftDbContext context)
        {
            _context = context;
        }


        //Get all workspaces realed to a email 
        [HttpGet]
        public async Task<IActionResult> GetAllWorkSpacesByEmail([FromQuery] string email)
        {
            var workspaces = await _context.WorkSpaces
            .Where(workspace => workspace.user == email)
            .ToListAsync();

            return Ok(workspaces);

        }

        //Get Single workspace
        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetWorkSpaceById([FromRoute] Guid id)
        {
            var workspace = await _context.WorkSpaces.FirstOrDefaultAsync(x => x.Id == id);
            if (workspace == null)
            {
                return NotFound();
            }

            return Ok(workspace);
        }


        //create new workspace
        [HttpPost]
        public async Task<IActionResult> AddWorkSpace([FromBody] WorkSpace workSpaceData)
        {
            workSpaceData.Id = Guid.NewGuid();
            await _context.WorkSpaces.AddAsync(workSpaceData);
            await _context.SaveChangesAsync();

            return Ok(workSpaceData);
        }

        //No update for workspace

        //Delete workspace
        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteWorkSpace([FromRoute] Guid id)
        {
            //check before delete
            var workSpace = await _context.WorkSpaces.FindAsync(id);
            if (workSpace == null)
            {
                return NotFound();
            }

            _context.WorkSpaces.Remove(workSpace);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
