using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FlyFast.Migrations
{
    public partial class AddBookingColoumns : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "BookDate",
                table: "Bookings",
                newName: "BookingDate");

            migrationBuilder.AddColumn<int>(
                name: "NoOfTickets",
                table: "Bookings",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NoOfTickets",
                table: "Bookings");

            migrationBuilder.RenameColumn(
                name: "BookingDate",
                table: "Bookings",
                newName: "BookDate");
        }
    }
}
