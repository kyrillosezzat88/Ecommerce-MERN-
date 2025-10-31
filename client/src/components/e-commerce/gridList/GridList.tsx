type TGridList<T> = {
  records: T[];
  renderItems: (record: T) => React.ReactNode;
  emptyMessage?: string;
  className?: string;
};

const GridList = <T,>({
  records,
  renderItems,
  emptyMessage,
  className = "grid grid-cols-1 md:grid-cols-4",
}: TGridList<T>) => {
  if (records.length) {
    return (
      <div className={className}>
        {records.map((record, idx) => (
          <div key={idx}>{renderItems(record)}</div>
        ))}
      </div>
    );
  }
  return <div>{emptyMessage || "No records found"}</div>;
};

export default GridList;
