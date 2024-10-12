function FilterButton({ current, flag, setFilter, children }) {
  const style = {    
    background: current === flag ? "dimgray" : "transparent",
    color: current === flag ? "white" : "dimgray",
    padding: "4px 10px",
    border: "1px solid dimgray",
  };
  return (
    <button style={style} onClick={() => setFilter(flag)}>
      {children}
    </button>
  );
}

export default FilterButton;
