using System;
using System.Collections.Generic;

namespace overflow.Models
{


  public class Question
  {

    public int Id { get; set; }

    public string Name { get; set; }

    public string Description { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;

    public List<Answer> Answers { get; set; } = new List<Answer>();
  }
}