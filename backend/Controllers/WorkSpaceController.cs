using backend.Data.Database;
using backend.Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

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

        // Get all workspaces related to an email
        [HttpGet("GetByEmail")]
        public async Task<IActionResult> GetAllWorkSpacesByEmail([FromQuery] string email)
        {
            var workspaces = await _context.WorkSpaces
                .Where(workspace => workspace.user == email)
                .ToListAsync();

            return Ok(workspaces);
        }

        // Get Single workspace
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

        // Create new workspace
        [HttpPost]
        public async Task<IActionResult> AddWorkSpace([FromBody] WorkSpace workSpaceData)
        {
            workSpaceData.Id = Guid.NewGuid();
            await _context.WorkSpaces.AddAsync(workSpaceData);
            await _context.SaveChangesAsync();

            return Ok(workSpaceData);
        }

        // Get workspaces as a collaborator
        [HttpGet("GetByCollaboratorEmail")]
        public async Task<IActionResult> GetAllWorkSpacesByCollaboratorEmail([FromQuery] string CollaboratorEmail)
        {
            var workspaces = await _context.WorkSpaces
           .Where(workspace =>
               workspace.colloborator1 == CollaboratorEmail ||
               workspace.colloborator2 == CollaboratorEmail ||
               workspace.colloborator3 == CollaboratorEmail)
           .ToListAsync();

            return Ok(workspaces);
        }


        // Update workspace with a new collaborators 
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateWorkSpace([FromRoute] Guid id, WorkSpace updatedWorkSpace) //colloborator details comes with this request
        {
            var workspace = await _context.WorkSpaces.FindAsync(id);
            if (workspace == null)
            {
                return NotFound();
            }

            workspace.colloborator1 = updatedWorkSpace.colloborator1;
            workspace.colloborator2 = updatedWorkSpace.colloborator2;
            workspace.colloborator3 = updatedWorkSpace.colloborator3;

            await _context.SaveChangesAsync();
            return Ok(workspace);
        }



        // Delete workspace
        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteWorkSpace([FromRoute] Guid id)
        {
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
