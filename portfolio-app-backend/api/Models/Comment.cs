using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models;

[Table("Comments")]
public class Comment
{
    public int Id { get; set; }
    
    [Column(TypeName = "varchar(100)")]
    public string Title { get; set; } = string.Empty;
    
    [Column(TypeName = "varchar(1000)")]
    public string Content { get; set; } = string.Empty;
    
    public DateTime CreatedOn { get; set; } = DateTime.Now;
    
    public int StockId { get; set; }

    public Stock? Stock { get; set; }
}