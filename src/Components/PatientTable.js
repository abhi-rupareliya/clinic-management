import React from 'react'
import { Fragment, useState, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'




const people = [
    { name: 'Lindsay Walton', mobile: '9xxxxxxxxxx', email: 'lindsay.walton@example.com', date: '10/05/2023' },
    { name: 'Lindsay Walton', mobile: '9xxxxxxxxxx', email: 'lindsay.walton@example.com', date: '10/05/2023' },
    { name: 'Lindsay Walton', mobile: '9xxxxxxxxxx', email: 'lindsay.walton@example.com', date: '10/05/2023' },
    { name: 'Lindsay Walton', mobile: '9xxxxxxxxxx', email: 'lindsay.walton@example.com', date: '10/05/2023' },
    { name: 'Lindsay Walton', mobile: '9xxxxxxxxxx', email: 'lindsay.walton@example.com', date: '10/05/2023' },
    { name: 'Lindsay Walton', mobile: '9xxxxxxxxxx', email: 'lindsay.walton@example.com', date: '10/05/2023' },
    { name: 'Lindsay Walton', mobile: '9xxxxxxxxxx', email: 'lindsay.walton@example.com', date: '10/05/2023' },
    // More people...
]



function PatientTable() {
    const [openEdit, setOpenEdit] = useState(false)
    const cancelButtonRef = useRef(null)

    return (
        <div className="py-4">
            <div className="h-auto" >
                <>
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-xl font-semibold text-gray-900">Patients Details</h1>
                                {/* <p className="mt-2 text-sm text-gray-700">
                              A list of all the users in your account including their name, title, email and role.
                            </p> */}
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                >
                                    Add Patient
                                </button>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col">
                            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-300">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                        Name
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Mobile Number
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Email
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Date
                                                    </th>
                                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                        <span className="sr-only">Edit</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white">
                                                {people.map((person, personIdx) => (
                                                    <tr key={person.email} className={personIdx % 2 === 0 ? undefined : 'bg-gray-50'}>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                            {person.name}
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.mobile}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.date}</td>

                                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                            <a href="#" className="text-indigo-600 hover:text-indigo-900" onClick={
                                                                () => {
                                                                    setOpenEdit(true)
                                                                }
                                                            }>
                                                                Edit
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Transition.Root show={openEdit} as={Fragment}>
                        <Dialog
                            as="div"
                            className="relative z-10"
                            initialFocus={cancelButtonRef}
                            onClose={setOpenEdit}
                        >
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm transition-opacity" />
                            </Transition.Child>
                            <div className="fixed inset-0 z-10 overflow-y-auto">
                                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    >
                                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 content-center " >
                                                <div className="flex justify-center">
                                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                        <Dialog.Title
                                                            as="h3"
                                                            className="text-lg font-bold text-center leading-6 text-gray-900"
                                                        >
                                                            Edit patient details
                                                        </Dialog.Title>
                                                        <div className="mt-2">
                                                            <div className="grid justify-center p-3 md:gap-5">
                                                                <div className="relative z-0 w-full mb-6 group">
                                                                    Content
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row space-x-11 sm:justify-center">
                                                <button
                                                    type="button"
                                                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                                // onClick={async (e) => {
                                                //   e.preventDefault()
                                                //   // User confirmation
                                                //   const res = await FDeleteMenu(iid) // from iid state.
                                                //   FGetMenu().then((res) => setMenu(res))
                                                //   setIid('')
                                                //   setOpenDelete(false)
                                                // }}
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    type="button"
                                                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={async (e) => {
                                                  setOpenEdit(false)
                                                }}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition.Root> */}
                    <Transition.Root show={openEdit} as={Fragment}>
                        <Dialog
                            as="div"
                            className="relative z-30"
                            initialFocus={cancelButtonRef}
                            onClose={setOpenEdit}
                        >
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            <div className="fixed inset-0 z-10 overflow-y-auto">
                                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    >
                                        <Dialog.Panel className="relative rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:m-5 xl:mx-64">
                                            <form className="space-y-8 divide-y divide-gray-200 px-20 py-10">
                                                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">

                                                    <div className="space-y-6 sm:space-y-5">
                                                        <div>
                                                            <h3 className="text-lg font-medium leading-6 text-gray-900">Patient Information</h3>
                                                            {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">Use a permanent address where you can receive mail.</p> */}
                                                        </div>
                                                        <div className="space-y-6 sm:space-y-5">
                                                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                                                <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                                    Full name
                                                                </label>
                                                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                                                    <input
                                                                        type="text"
                                                                        name="first-name"
                                                                        id="first-name"
                                                                        autoComplete="given-name"
                                                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                                                <label htmlFor="mobile-no" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                                    Mobile Number
                                                                </label>
                                                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                                                    <input
                                                                        type="tel"
                                                                        name="phone"
                                                                        id="phone"
                                                                        autoComplete="family-name"
                                                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                                    Email address
                                                                </label>
                                                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                                                    <input
                                                                        id="email"
                                                                        name="email"
                                                                        type="email"
                                                                        autoComplete="email"
                                                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                                                <label htmlFor="age" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                                    Age
                                                                </label>
                                                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                                                    <input
                                                                        type="number"
                                                                        name="age"
                                                                        id="age"
                                                                        autoComplete="address-level2"
                                                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                                                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                                    Address
                                                                </label>
                                                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                                                    <textarea
                                                                        name="street-address"
                                                                        id="street-address"
                                                                        autoComplete="street-address"
                                                                        className="block h-20 resize-y w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                                                    // className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                                    ></textarea>
                                                                </div>
                                                            </div>



                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="bg-gray-50 py-3 flex flex-row-reverse px-6 rounded-xl gap-x-5">
                                                <button
                                                    type="submit"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setOpenEdit(false)
                                                    }
                                                    }
                                                    type="button"
                                                    className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition.Root>
                </>
            </div>
        </div>
    )
}

export default PatientTable