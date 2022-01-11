import { useMemo } from "react";
import { Link } from "react-router-dom";
import { PaginationTable } from "components/table/PaginationTable";

const IVFTrackListPage = () => {
  const data = useMemo(
    () => [
      {
        id: 1,
        procedureNumber: "IVF-0021",
        doctor: "Dr. Jane",
        startDate: new Date(),
        status: "ongoing",
      },
    ],
    []
  );
  const columns = useMemo(
    () => [
      {
        Header: "Procedure Number",
        Footer: "Procedure Number",
        accessor: "procedureNumber",
      },
      {
        Header: "Doctor",
        Footer: "Doctor",
        accessor: "doctor",
      },
      {
        Header: "Start Date",
        Footer: "Start Date",
        accessor: "startDate",
        Cell: ({ value }: { value: Date }) => value.toLocaleDateString("id-ID"),
      },
      {
        Header: "Status",
        Footer: "Status",
        accessor: "status",
        Cell: ({ value }: { value: string }) => (
          <span className="px-4 py-1 rounded-full bg-green-100 text-green-700 uppercase text-xs font-semibold">
            {value}
          </span>
        ),
      },

      {
        Header: "Action",
        Footer: "Action",
        Cell: () => (
          <div className="flex items-center space-x-4">
            <Link
              to="123"
              className="rounded-md px-4 py-1 bg-primary-500 text-white hover:bg-primary-600 text-sm"
            >
              Details
            </Link>
            {/* <button className="p-2 rounded-lg hover:bg-gray-100">
              <DotsVerticalIcon className="w-5 h-5 text-gray-600" />
            </button> */}
          </div>
        ),
      },
    ],
    []
  );
  return (
    <>
      <div className="mt-4 overflow-hidden p-1">
        <PaginationTable
          showFooter={false}
          data={data}
          columns={columns}
          searchable={true}
          pagination={true}
          extraPaddingBottom={false}
          dense={true}
        />
      </div>
    </>
  );
};

export default IVFTrackListPage;
