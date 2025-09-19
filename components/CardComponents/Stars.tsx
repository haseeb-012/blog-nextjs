function Stars({size}: {size?: number}) {
  return (
    <div className="sm::mt-6 flex items-center gap-2 pl-22 sm:pl-14">
      {Array.from({ length: 5 }).map((_, idx) => (
        <svg
          key={idx}
          width={size || 32}
          height={size || 32}
          fill="#FFD700"
          viewBox="0 0 28 28"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default Stars;
