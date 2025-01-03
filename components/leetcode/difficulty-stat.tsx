interface DifficultyStatProps {
    label: string;
    solved: number;
    total: number;
    colorClass: string;
  }
  
  export const DifficultyStat = ({ label, solved, total, colorClass }: DifficultyStatProps) => (
    <div className="relative group">
      <div className="flex items-center justify-between p-3.5 rounded-lg bg-black/40 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-[1.02]">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${colorClass} opacity-80 group-hover:opacity-100 transition-opacity`} />
          <span className={`text-sm font-medium ${colorClass} group-hover:opacity-100 transition-opacity`}>
            {label}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-semibold text-white/90">{solved}</span>
          <span className="text-xs text-gray-400">/</span>
          <span className="text-xs text-gray-400">{total}</span>
        </div>
      </div>
      <div className={`absolute inset-0 rounded-lg ${colorClass} opacity-0 group-hover:opacity-5 transition-opacity blur-xl`} />
    </div>
  );
  
  