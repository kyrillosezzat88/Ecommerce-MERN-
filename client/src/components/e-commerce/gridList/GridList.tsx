type TGridList<T> = {
  records: T[];
  renderItems: (record: T) => React.ReactNode;
  emptyMessage?: string;
};

const GridList = <T,>({ records, renderItems, emptyMessage }: TGridList<T>) => {
  if (records.length) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4">
        {records.map((record, idx) => (
          <div key={idx}>{renderItems(record)}</div>
        ))}
      </div>
    );
  }
  return <div>{emptyMessage || "No records found"}</div>;
};

export default GridList;
