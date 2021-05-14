using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobVacancies.API.Domain.Models
{
    public class Vacancy
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Range(0, 999999999)]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        [Required]
        [MaxLength(150)]
        public string Description { get; set; }

        [Range(0, 999999999)]
        public int CompanyId { get; set; }

        [JsonIgnore]
        [ForeignKey("CompanyId")]
        public Company Company { get; set; }
    }
}
