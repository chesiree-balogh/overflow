using System;

namespace overflow.Models
{


  public class Question
  {

    public int id { get; set; }

    public string Name { get; set; }

    public string Description { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;
  }
}