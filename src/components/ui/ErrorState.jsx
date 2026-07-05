import { AlertCircle, RotateCcw } from 'lucide-react';

function ErrorState({ onRetry }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-red-100 rounded-2xl p-12 flex flex-col items-center text-center max-w-md w-full">
        <AlertCircle className="text-red-400 w-12 h-12 mb-4" strokeWidth={1.5} />
        <h2 className="text-xl font-bold text-black mb-3">Something went wrong</h2>
        <button
          onClick={onRetry}
          className="flex items-center gap-1.5 text-black hover:text-gray-600 transition"
        >
          Try again <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default ErrorState;