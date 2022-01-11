import { useMemo } from "react";
import { Link } from "react-router-dom";
import { PaginationTable } from "components/table/PaginationTable";

const MyPatientsListPage = () => {
  const data = useMemo(
    () => [
      {
        id: 1,
        registrationDate: new Date(),
        status: "active",
        patientName: "Rosa",
        birthDate: new Date("1987-02-01"),
        gender: "Female",
        patientPhoneNumber: "08123595033",
        ivfDoctor: "Dr. Jane",
      },
      {
        id: 2,
        registrationDate: new Date(),
        status: "drafted",
        patientName: "Jenny",
        birthDate: new Date("1987-02-01"),
        gender: "Female",
        patientPhoneNumber: "08123595033",
        ivfDoctor: "Dr. Jane",
      },
    ],
    []
  );
  const columns = useMemo(
    () => [
      {
        Header: "Tanggal Terdaftar",
        Footer: "Tanggal Terdaftar",
        accessor: "registrationDate",
        Cell: ({ value }: { value: Date }) => value.toLocaleDateString("id-ID"),
      },
      {
        Header: "Status Rujukan",
        Footer: "Status Rujukan",
        accessor: "status",
      },
      {
        Header: "Nama Pasien",
        Footer: "Nama Pasien",
        accessor: "patientName",
      },
      {
        Header: "Tanggal Lahir",
        Footer: "Tanggal Lahir",
        accessor: "birthDate",
        Cell: ({ value }: { value: Date }) => value.toLocaleDateString("id-ID"),
      },
      {
        Header: "Jenis Kelamin",
        Footer: "Jenis Kelamin",
        accessor: "gender",
      },
      {
        Header: "No. Telp Pasien",
        Footer: "No. Telp Pasien",
        accessor: "patientPhoneNumber",
      },
      {
        Header: "Dokter IVF",
        Footer: "Dokter IVF",
        accessor: "ivfDoctor",
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

export default MyPatientsListPage;
