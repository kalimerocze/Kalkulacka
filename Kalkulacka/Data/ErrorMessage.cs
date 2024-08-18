using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Kalkulacka.Data
{

    public class ErrorMessage
    {
        public string? Message { get; set; }
        public string? Place { get; set; }
        public string? Method { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.Now;

    }
}
