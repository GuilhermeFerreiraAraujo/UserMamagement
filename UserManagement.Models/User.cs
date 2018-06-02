
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UserManagement.Models
{

    public class User
    {
        [Required]
        [StringLength(100)]
        public string FullName { get; set; }

        [Required]
        [StringLength(250)]
        public string Description { get; set; }

        [Required]
        [StringLength(250)]
        public string Motto { get; set; }

        [Required]
        [StringLength(250)]
        public string Hobbies { get; set; }

        [Required]
        [StringLength(250)]
        public string HomeTown { get; set; }

        [Required]
        [StringLength(250)]
        public string PersonalBlog { get; set; }

        public string Id { get; set; }

        
        [StringLength(250)]
        public string Img { get; set; }

        public string Image { get; set; }

    }
}




