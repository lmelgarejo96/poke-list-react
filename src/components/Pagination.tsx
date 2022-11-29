const Pagination = (
  { 
    prev = () => {}, 
    next = () => {},
    disabledPrev = false,
    disabledNext = false,
  },
) => {
  return (
    <div className="flex justify-center gap-1 py-1">
      <button disabled={disabledPrev} className="px-4 py-1 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm opacity-100 disabled:opacity-20" onClick={prev}>
        Back
      </button>
      <button disabled={disabledNext} className="px-4 py-1 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm opacity-100 disabled:opacity-20" onClick={next}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
