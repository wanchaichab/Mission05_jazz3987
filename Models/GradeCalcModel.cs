using System;
using System.ComponentModel.DataAnnotations;

namespace Mission04_jazz3987.Models
{
	public class GradeCalcModel
	{
        //Validation for each value
        [Required]
        [Range(0, 100, ErrorMessage="Assignment score must be between 0 and 100")]
		public double assignmentGrade { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Group Project score must be between 0 and 100")]
        public double groprojectGrade { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Quiz score must be between 0 and 100")]
        public double quizGrade { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Midterm score must be between 0 and 100")]
        public double midtermExGrade { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Final score must be between 0 and 100")]
        public double finalExGrade { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "INTEX score must be between 0 and 100")]
        public double intexGrade { get; set; }


        public string letterGrade { get; set; }
    }
}

