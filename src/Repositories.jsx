import RepoCard from "./RepoCard";

function Repositories() {
    return (
    <div>
        <RepoCard
          name="portfolio"
          description="My personal page built with React."
          language="JavaScript"
          commits="48"
          name1="todo-api"
          description1="A small REST API for a to-do list."
          language1="Java"
          commits1="31"
          name2="dotfiles"
          description2="My terminal and editor settings."
          language2="Shell"
          commits2="12"
        />
    </div>
    )
}
 
export default Repositories;
              