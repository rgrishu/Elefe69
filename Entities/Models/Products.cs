using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Entities.Models
{
    public class Products : ProductShippingDetail
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Please Enter Name")]
        [MaxLength(240, ErrorMessage = "Allowed Maximum 240 Characters For Name")]
        public string Name { get; set; }
        //[Required(ErrorMessage ="Please Enter Title")]
        //public string Title { get; set; }
        [MaxLength(3000, ErrorMessage ="Allowed Maximum 3000 Characters For Description")]
        public string Description { get; set; }
        [MaxLength(50, ErrorMessage = "Allowed Maximum 50 Characters For SKU")]
        public string SKU { get; set; }

        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Please Select a Brand")]
        public int BrandId { get; set; }
        public string BrandName { get; set; }
        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Please Select a Category")]
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public int VendorId { get; set; }
        public string VendorName { get; set; }
        public int EntryBy { get; set; }   
        public int ModifyBy { get; set; }   
        public string EntryOn { get; set; }   
        public string ModifyOn { get; set; }   
        public bool IsPublished { get; set; }
        public string Specification { get; set; }
        [MaxLength(1000, ErrorMessage = "Allowed Maximum 1000 Characters For Short Description")]
        public string ShortDescription { get; set; }
        public bool IsCod { get; set; }
    }
    public class ProductShippingDetail
    {
        public int ShippingDetailId { get; set; } 
        public int ProductId { get; set; }
        [Required (ErrorMessage ="Please Enter Charges")]
        public decimal Charges { get; set; }
        public decimal FreeOnAmount { get; set; }
        public bool IsFlat { get; set; }
    }
    public class UpdateIsPublishProduct
    {
        public int ID { get; set; }
        public bool IsPublish { get; set; }
    }
}
