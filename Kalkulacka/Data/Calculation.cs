using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Kalkulacka.Data
{

    public class Calculation
    {
        [Key]
        public int Id { get; set; }

        public string? Result { get; set; }
        public string? Computing { get; set; }
        public string? Input1 { get; set; }
        public string? Input2 { get; set; }
        public string? Operation { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.Now;
    }
}
