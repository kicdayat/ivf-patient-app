import { useMemo } from "react";
import { Link } from "react-router-dom";
import { PaginationTable } from "components/table/PaginationTable";

const TransactionHistoryList = () => {
  const data = useMemo(
    () => [
      {
        id: 1,
        transactionDate: new Date(),
        transactionType: "Polikinik IVF",
        transactionName: "Konsultasi Online",
        price: 100000,
        invoiceNumber: "932847318",
        paymentStatus: "paid",
        bookingStatus: "completed",
      },
      {
        id: 2,
        transactionDate: new Date(),
        transactionType: "Farmasi",
        transactionName: "Resep 093452",
        price: 5000000,
        invoiceNumber: "112847118",
        paymentStatus: "paid",
        bookingStatus: "completed",
      },
    ],
    []
  );
  const columns = useMemo(
    () => [
      {
        Header: "Tanggal Transaksi",
        Footer: "Tanggal Transaksi",
        accessor: "transactionDate",
        Cell: ({ value }: { value: Date }) => value.toLocaleDateString("id-ID"),
      },
      {
        Header: "Jenis Transaksi",
        Footer: "Jenis Transaksi",
        accessor: "transactionType",
      },
      {
        Header: "Nama Transaksi",
        Footer: "Nama Transaksi",
        accessor: "transactionName",
      },
      {
        Header: "Total Harga",
        Footer: "Total Harga",
        accessor: "price",
        Cell: ({ value }: { value: number }) =>
          new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(value),
      },
      {
        Header: "Invoice Number",
        Footer: "Invoice Number",
        accessor: "invoiceNumber",
      },
      {
        Header: "Status Pembayaran",
        Footer: "Status Pembayaran",
        accessor: "paymentStatus",
        Cell: ({ value }: { value: string }) => (
          <span
            className={`uppercase text-xs font-semibold px-4 py-1 rounded-full ${
              value === "paid"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {value}
          </span>
        ),
      },
      {
        Header: "Status Pemesanan",
        Footer: "Status Pemesanan",
        accessor: "bookingStatus",
        Cell: ({ value }: { value: string }) => (
          <span
            className={`uppercase text-xs font-semibold px-4 py-1 rounded-full ${
              value === "completed"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
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

export default TransactionHistoryList;
