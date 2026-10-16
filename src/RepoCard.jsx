import { useState } from "react";

function RepoCard(props) {
    const [portfolioStars, setPortfolioStars] = useState(0);
    const [todoStars, setTodoStars] = useState(0);
    const [dotfilesStars, setDotfilesStars] = useState(0);

    function handleStarPortfolio() {
        setPortfolioStars(portfolioStars + 1);
    }

    function handleStarTodo() {
        setTodoStars(todoStars + 1);
    }

    function handleStarDotfiles() {
        setDotfilesStars(dotfilesStars + 1);
    }

    return (
        <main className="grid grid-cols-3 gap-8 px-20 pt-8">
            <div className="rounded-xl border-2 border-[#222222] p-8">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{props.name}</h3>
                <button
                className="cursor-pointer rounded-lg border-2 border-[#222222] px-4 py-1 text-xl"
                onClick={handleStarPortfolio}
                >
                ★ {portfolioStars}
                </button>
            </div>
            <p className="mt-2 text-xl">{props.description}</p>
            <div className="mt-6 flex items-center gap-4 text-lg">
                <span className="rounded-full bg-[#222222] px-4 py-1 text-[#FAF3E1]">
                {props.language}
                </span>
                <span>{props.commits} commits</span>
            </div>
            </div>
            <div className="rounded-xl border-2 border-[#222222] p-8">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{props.name1}</h3>
                <button
                className="cursor-pointer rounded-lg border-2 border-[#222222] px-4 py-1 text-xl"
                onClick={handleStarTodo}
                >
                ★ {todoStars}
                </button>
            </div>
            <p className="mt-2 text-xl">{props.description1}</p>
            <div className="mt-6 flex items-center gap-4 text-lg">
                <span className="rounded-full bg-[#222222] px-4 py-1 text-[#FAF3E1]">
                {props.language1}
                </span>
                <span>{props.commits1} commits</span>
            </div>
            </div>
            <div className="rounded-xl border-2 border-[#222222] p-8">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{props.name2}</h3>
                <button
                className="cursor-pointer rounded-lg border-2 border-[#222222] px-4 py-1 text-xl"
                onClick={handleStarDotfiles}
                >
                ★ {dotfilesStars}
                </button>
            </div>
            <p className="mt-2 text-xl">{props.description2}</p>
            <div className="mt-6 flex items-center gap-4 text-lg">
                <span className="rounded-full bg-[#222222] px-4 py-1 text-[#FAF3E1]">
                {props.language2}
                </span>
                <span>{props.commits2} commits</span>
            </div>
            </div>
        </main>
    );
}

export default RepoCard;