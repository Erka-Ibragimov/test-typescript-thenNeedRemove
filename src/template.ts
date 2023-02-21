type ReadOrWrite = "read" | "write";
type Bulk = "bulk" | "";
type Access = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`;
type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never;
type T = ReadOrWriteBulk<Access>;
type ErrorOrSuccess = "error" | "success";
type ResType = {
  result: `http${Capitalize<ErrorOrSuccess>}`;
};
const q: ResType = {
  result: "httpSuccess",
};
