namespace backend.Data.Models
{
    public class Todo
    {
        public Guid Id { get; set; }

        public string workSpaceId { get; set; }

        public string Name { get; set; }

        public string user { get; set; }

        public string status { get; set; }

        public DateTime Date { get; set; }

        public string Description { get; set; }
    }
}
