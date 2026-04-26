interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-canvas">
      <div className="text-center max-w-sm">
        <h1 className="text-4xl font-bold text-primary mb-2">Bingo Mixer</h1>
        <p className="text-lg text-secondary mb-8">Find your people!</p>
        
        <div className="bg-surface rounded-lg p-6 shadow-sm border border-line mb-8">
          <h2 className="font-semibold text-primary mb-3">How to play</h2>
          <ul className="text-left text-secondary text-sm space-y-2">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-accent text-white font-semibold py-4 px-8 rounded-lg text-lg active:bg-accent-light transition-colors cursor-pointer"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
