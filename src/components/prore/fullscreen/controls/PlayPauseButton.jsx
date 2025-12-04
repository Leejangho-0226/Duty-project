export default function PlayPauseButton({ isPlaying, onToggle }) {
  return (
    <button
      className="prore-samsung-play"
      onClick={onToggle}
    >
      {isPlaying ? (
        // 일시정지 아이콘
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <rect x="6" y="5" width="4" height="14" />
          <rect x="14" y="5" width="4" height="14" />
        </svg>
      ) : (
        // 재생 아이콘
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </button>
  );
}
