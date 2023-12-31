namespace backend.Data.Models
{
    public class WorkSpace
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string user { get; set; }
        public DateTime DateCreated { get; set; }
        public string colloborator1 { get; set; }

        public string colloborator2 { get; set; }

        public string colloborator3 { get; set; }

    }
}