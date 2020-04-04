using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using overflow.Models;

namespace overflow.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SearchController : ControllerBase
  {


    private DatabaseContext _context;

    public SearchController(DatabaseContext context)
    {
      _context = context;
    }

    [HttpGet("questions")]
    public async Task<ActionResult> SearchQuestions(string searchTerm)
    {
      var results = _context.Questions.Where(w => w.Name.ToLower().Contains(searchTerm.ToLower()));

      return Ok(await results.ToListAsync());
    }

  }
}