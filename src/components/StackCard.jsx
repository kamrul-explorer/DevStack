
import {
  Atom,
  Code2,
  Palette,
  Database,
  Server,
  Globe,
  Terminal,
  Cpu,
  Layers,
  Star
} from "lucide-react";

const icons = {
  React: Atom,
  JavaScript: Code2,
  TypeScript: Code2,
  HTML: Globe,
  CSS: Palette,
  Tailwind: Palette,
  MongoDB: Database,
  Node: Server,
  "Node.js": Server,
  Python: Terminal,
  Java: Cpu,
  "Next.js": Layers,
};

    
  function StackCard({ stack, onAdd }) {
  const StackIcon = icons[stack.name] || Code2;

  return (
    <div className="w-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

     
      <div className="flex items-center justify-between">
        <StackIcon size={32} className="text-sky-400" />


        <span className="rounded-full border border-sky-100 bg-sky-50 px-4 py-1 text-sm text-sky-500">
          {stack.tag}
        </span>
      </div>

     
      <h2 className="mt-7 text-2xl font-bold text-slate-900">
        {stack.name}
      </h2>

      
      <p className="mt-2 text-sm leading-6 text-slate-500">
        {stack.description}
      </p>

     
      <div className="my-4 border-t border-slate-100" />

    
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm">

        <span className="rounded-md bg-slate-50 px-2.5 py-1 text-slate-600">
          {stack.category}
        </span>

        <span className="text-slate-500">
          {stack.level}
        </span>

        <span className="flex items-center gap-1 text-slate-700">
          <Star
            size={14}
            className="fill-amber-400 text-amber-400"
          />
          {stack.rating}
        </span>

      </div>

     <button
     onClick={() => onAdd(stack)}
     className="mt-5 w-full rounded-xl bg-slate-950 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
     >
     Add to Stack
     </button>
    </div>
  );
}

export default StackCard;
