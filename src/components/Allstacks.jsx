
import { useState } from "react";
import { X } from "lucide-react";
import StackCard from "./StackCard";

function Allstacks({ allstacks }) {
  const [selectedStacks, setSelectedStacks] = useState([]);

  // Add technology to stack
  const handleAdd = (stack) => {
    setSelectedStacks((prev) => {
      // Prevent duplicate selection
      if (prev.some((item) => item.id === stack.id)) {
        return prev;
      }

      return [...prev, stack];
    });
  };

  // Remove one technology
  const handleRemove = (id) => {
    setSelectedStacks((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setSelectedStacks([]);
  };

  return (
    <div className="container mx-auto grid grid-cols-12 gap-6 px-4">

     
      <div className="col-span-12 md:col-span-9">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Explore The{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mb-8 text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {allstacks.map((stack) => (
            <StackCard
              key={stack.id}
              stack={stack}
              onAdd={handleAdd}
            />
          ))}
        </div>
      </div>

      
      <aside className="col-span-12 md:col-span-3 md:mt-27">
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">

          <h3 className="text-lg font-bold text-slate-900">
            Your Stack
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            {selectedStacks.length === 0
              ? "No technologies selected yet."
              : `${selectedStacks.length} Technology Selected`}
          </p>

          
          {selectedStacks.length === 0 ? (
            <div className="mt-4 flex min-h-17 items-center justify-center rounded-xl border border-dashed border-slate-200 px-3 text-center text-sm text-slate-400">
              Your stack is empty.
            </div>
          ) : (
            <>
              
              <div className="mt-4 space-y-2">
                {selectedStacks.map((stack) => (
                  <div
                    key={stack.id}
                    className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 p-3"
                  >
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-slate-900">
                        {stack.name}
                      </h4>

                      <p className="text-xs text-slate-400">
                        {stack.category}
                      </p>
                    </div>

                    <button
                      onClick={() => handleRemove(stack.id)}
                      aria-label={`Remove ${stack.name}`}
                      className="shrink-0 rounded-md p-1 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ))}
              </div>

             
              <button
                onClick={handleRemoveAll}
                className="mt-12 w-full rounded-lg border border-red-200 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
              >
                Remove All
              </button>
            </>
          )}
        </div>
      </aside>
    </div>
  );
}

export default Allstacks;
