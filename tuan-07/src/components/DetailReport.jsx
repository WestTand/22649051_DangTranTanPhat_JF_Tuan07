import React from 'react';
import DataTable from 'react-data-table-component';
import { NotebookText, FileDown, FileUp, Edit } from 'lucide-react';
import { useState } from 'react';
import { useEffect } from 'react';



const customStyles = {
    headCells: {
        style: {
            fontWeight: 'bold',
            fontSize: '14px',
        },
    },
    rows: {
        style: {
            fontSize: '14px',
        },
    },
};

const DetailReport = () => {


    const [data, setData] = useState()
    const [selectedRow, setSelectedRow] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch('https://67f3bf0ccbef97f40d2be9d8.mockapi.io/Users').then(res => res.json())
            .then(data1 => setData(data1))
    }, [])

    const handleEdit = (row) => {
        setSelectedRow(row);
        setIsModalOpen(true);
    };

    const columns = [
        {
            name: 'Customer',
            selector: row => row.name,
            sortable: true,
            cell: row => (
                <div className="flex items-center gap-2">
                    <img src={row.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
                    <span className="font-medium">{row.name}</span>
                </div>
            ),
        },
        {
            name: 'Company',
            selector: row => row.company,
            sortable: true,
        },
        {
            name: 'Order Value',
            selector: row => row.value,
            sortable: true,
        },
        {
            name: 'Order Date',
            selector: row => row.date,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
            cell: row => {
                let color = '';
                switch (row.status) {
                    case 'New':
                        color = 'bg-blue-100 text-blue-700';
                        break;
                    case 'Completed':
                        color = 'bg-green-100 text-green-700';
                        break;
                    case 'In-progress':
                        color = 'bg-yellow-100 text-yellow-700';
                        break;
                    default:
                        color = 'bg-gray-100 text-gray-700';
                }
                return (
                    <span className={`px-2 py-1 rounded-full text-sm font-medium ${color}`}>
                        {row.status}
                    </span>
                );
            },
        },
        {
            name: 'Edit',
            cell: row => (
                <button onClick={() => handleEdit(row)} className='text-gray-400 hover:text-blue-400'>
                    <Edit size={20} />
                </button>
            )
        },
    ];



    return (
        <div className="p-6">
            <div className='flex flex-row justify-between items-center'>
                <div className='items-center flex flex-row justify-center text-center gap-3'>
                    <NotebookText className='text-red-400' size={24} />
                    <h2 className="text-xl font-bold text-center">Detailed Report</h2>
                </div>

                <div className="flex justify-end items-center gap-3 mb-4">

                    <button
                        className=" hover:bg-gray-200 text-red-400 font-medium px-4 py-2 rounded-md text-sm transition flex items-center gap-2 border-2 border-red-400"
                    >
                        <FileDown size={16} />
                        Import
                    </button>


                    <button
                        className=" hover:bg-blue-700 text-red-400 font-medium px-4 py-2 rounded-md text-sm transition flex items-center gap-2 border-2 border-red-400"
                    >
                        <FileUp size={16} />
                        Export
                    </button>
                </div>
            </div>



            <DataTable
                columns={columns}
                data={data}
                pagination
                customStyles={customStyles}
                highlightOnHover
                striped
            />


            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Edit Customer</h2>

                        <div className="space-y-3">
                            <div>
                                <label className="block text-sm text-gray-600">Name</label>
                                <input
                                    className="w-full border px-3 py-2 rounded-md"
                                    value={selectedRow?.name}
                                    onChange={(e) => setSelectedRow({ ...selectedRow, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-600">Company</label>
                                <input
                                    className="w-full border px-3 py-2 rounded-md"
                                    value={selectedRow?.company}
                                    onChange={(e) => setSelectedRow({ ...selectedRow, company: e.target.value })}
                                />
                            </div>
                            {/* Bạn có thể thêm các input khác ở đây */}
                        </div>

                        <div className="flex justify-end gap-2 mt-6">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 border rounded-md text-gray-500 hover:bg-gray-100"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    // Gọi API cập nhật nếu cần
                                    setIsModalOpen(false);
                                }}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailReport;