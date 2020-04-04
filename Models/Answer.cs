using System;

namespace overflow.Models
{
  public class Answer
  {
    public int Id { get; set; }
    public string Description { get; set; }
    public DateTime AnsweredAt { get; set; } = DateTime.Now;

    public int QuestionId { get; set; }
    public Question Question { get; set; }
  }
}