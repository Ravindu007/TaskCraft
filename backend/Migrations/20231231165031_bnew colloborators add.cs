using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class bnewcolloboratorsadd : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "colloborator",
                table: "WorkSpaces",
                newName: "colloborator3");

            migrationBuilder.AddColumn<string>(
                name: "colloborator1",
                table: "WorkSpaces",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "colloborator2",
                table: "WorkSpaces",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "colloborator1",
                table: "WorkSpaces");

            migrationBuilder.DropColumn(
                name: "colloborator2",
                table: "WorkSpaces");

            migrationBuilder.RenameColumn(
                name: "colloborator3",
                table: "WorkSpaces",
                newName: "colloborator");
        }
    }
}
