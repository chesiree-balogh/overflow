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
  public class AnswerController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public AnswerController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Answer
    [HttpGet("/questions/{questionId}/answers")]
    public async Task<ActionResult<IEnumerable<Answer>>> GetAnswers()
    {
      return await _context.Answers.ToListAsync();
    }

    // GET: api/Answer/5
    [HttpGet("/questions/{questionId}/answers/{answerId}")]
    public async Task<ActionResult<Answer>> GetAnswer(int id)
    {
      var answer = await _context.Answers.FindAsync(id);

      if (answer == null)
      {
        return NotFound();
      }

      return answer;
    }

    // PUT: api/Answer/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutAnswer(int id, Answer answer)
    {
      if (id != answer.Id)
      {
        return BadRequest();
      }

      _context.Entry(answer).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!AnswerExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/Answer
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost("/questions/{questionId}/answers")]
    public async Task<ActionResult<Answer>> PostAnswer(int questionId, Answer answer)
    {
      answer.QuestionId = questionId;
      _context.Answers.Add(answer);
      await _context.SaveChangesAsync();

      return Ok(answer);
    }

    // DELETE: api/Answer/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Answer>> DeleteAnswer(int id)
    {
      var answer = await _context.Answers.FindAsync(id);
      if (answer == null)
      {
        return NotFound();
      }

      _context.Answers.Remove(answer);
      await _context.SaveChangesAsync();

      return answer;
    }

    private bool AnswerExists(int id)
    {
      return _context.Answers.Any(e => e.Id == id);
    }
  }
}
