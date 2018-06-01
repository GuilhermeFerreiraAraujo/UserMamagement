namespace UserManagement.Repository.SqlServerRepository
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using UserManagement.Models;

    public partial class UserManagementDb : DbContext
    {
        public UserManagementDb()
            : base("name=UserManagementDb")
        {
        }

        public virtual DbSet<User> Users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .Property(e => e.FullName)
                .IsUnicode(false);

            modelBuilder.Entity<User>()
                .Property(e => e.Description)
                .IsUnicode(false);

            modelBuilder.Entity<User>()
                .Property(e => e.Motto)
                .IsUnicode(false);

            modelBuilder.Entity<User>()
                .Property(e => e.Hobbies)
                .IsUnicode(false);

            modelBuilder.Entity<User>()
                .Property(e => e.HomeTown)
                .IsUnicode(false);

            modelBuilder.Entity<User>()
                .Property(e => e.PersonalBlog)
                .IsUnicode(false);

            modelBuilder.Entity<User>()
                .Property(e => e.Img)
                .IsUnicode(false);
        }
    }
}
