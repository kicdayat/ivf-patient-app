import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { ArrowRightIcon, PlusIcon } from "@heroicons/react/outline";
import { FaRegCalendar, FaRegClock, FaRegHospital } from "react-icons/fa";

import RangeDayPicker, { Range } from "components/datepicker/RangeDayPicker";
import {
  FormLabel,
  Select,
  ToggleGroup,
  ToggleGroupItem,
  Input,
  Textarea,
} from "components/forms";
import {
  Button,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "components/elements";

const slots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00"];

const BookingPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [range, setRange] = useState<Range>();
  const [patient, setPatient] = useState("me");

  return (
    <>
      {step === 1 && (
        <>
          <div className="flex space-x-6">
            {/* Right column */}
            <div className="flex-shrink-0">
              <h1 className="mt-3 block text-2xl py-1  font-bold mb-5 leading-3">
                Booking
              </h1>
              {/* schedules */}
              <section aria-labelledby="profile-overview-title">
                <div className="rounded-lg bg-white overflow-hidden shadow">
                  <h2 className="sr-only" id="profile-overview-title">
                    Booking Data
                  </h2>
                  <div className="p-6 space-y-4">
                    <div>
                      <FormLabel htmlFor="service">Pilih Layanan</FormLabel>
                      <div className="mt-1">
                        <Select id="service">
                          <option>Pilih Layanan</option>
                          <option value="Layanan 1">Layanan 1</option>
                          <option value="Layanan 2">Layanan 2</option>
                          <option value="Layanan 3">Layanan 3</option>
                          <option value="Layanan 4">Layanan 4</option>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <FormLabel htmlFor="doctor">Pilih Dokter</FormLabel>
                      <div className="mt-1">
                        <Select id="doctor">
                          <option>Pilih Dokter</option>
                          <option value="Dokter 1">Dokter 1</option>
                          <option value="Dokter 2">Dokter 2</option>
                          <option value="Dokter 3">Dokter 3</option>
                          <option value="Dokter 4">Dokter 4</option>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="date-range"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Pilih Rentang Waktu
                      </label>
                      {/* <DatePicker
                    selectedRange={selectedRange}
                    setSelectedRange={setSelectedRange}
                    close={() => {}}
                  /> */}
                      <div className="mt-1 border border-gray-300 rounded-md shadow-sm p-0.5">
                        <RangeDayPicker range={range} setRange={setRange} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Left column */}
            <div className="flex-1">
              <div className="flex justify-between items-center py-1 px-2">
                <h2 className="font-bold">Available Schedule</h2>
                <div className="flex items-center space-x-5">
                  <div className="flex space-x-2 items-center">
                    <FormLabel htmlFor="limit">Show</FormLabel>
                    <Select id="limit">
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="25">25</option>
                    </Select>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <FormLabel htmlFor="page">Page</FormLabel>
                    <Select id="page">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Select>
                  </div>
                  <div className="flex space-x-2 item">
                    {" "}
                    <Button variant="gray">
                      <ArrowLeftIcon className="w-4 h-4 text-gray-500" />
                      <span className="sr-only">Previous Page</span>
                    </Button>
                    <Button variant="gray">
                      <ArrowRightIcon className="w-4 h-4 text-gray-500" />
                      <span className="sr-only">Next Page</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <ul className="space-y-4">
                  <li>
                    <div className="bg-white p-4 shadow rounded-md flex items-center justify-between">
                      <div className="flex space-x-6 items-center">
                        <Avatar size="lg">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
                            alt="John Doe"
                          />
                          <AvatarFallback delayMs={600}>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">Dr. Jane</p>
                          <p className="text-sm text-gray-600">
                            Spesialis Kandungan
                          </p>
                          <div className="-ml-0.5 mt-2 flex items-center space-x-5">
                            <div className="flex space-x-1.5 items-center">
                              <FaRegHospital className="w-4 h-4 text-primary-600" />
                              <span className="text-sm font-semibold text-gray-600">
                                Klinik ASHA IVF
                              </span>
                            </div>
                            <div className="flex space-x-1.5 items-center">
                              <FaRegCalendar className="w-4 h-4 text-primary-600" />
                              <span className="text-sm font-semibold text-gray-600">
                                {new Date().toLocaleDateString("en", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                })}
                              </span>
                            </div>
                            <div className="flex space-x-1.5 items-center">
                              <FaRegClock className="w-4 h-4 text-primary-600" />
                              <span className="text-sm font-semibold text-gray-600">
                                09:00 - 13:00
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xl font-bold text-gray-800">
                          Rp. 50.000
                        </p>
                        <Button variant="secondary" size="small" shadow="small">
                          See Available Slot
                        </Button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="bg-white p-4 shadow rounded-md flex items-center justify-between">
                      <div className="flex space-x-6 items-center">
                        <Avatar size="lg">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
                            alt="John Doe"
                          />
                          <AvatarFallback delayMs={600}>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">Dr. Jane</p>
                          <p className="text-sm text-gray-600">
                            Spesialis Kandungan
                          </p>
                          <div className="-ml-0.5 mt-2 flex items-center space-x-5">
                            <div className="flex space-x-1.5 items-center">
                              <FaRegHospital className="w-4 h-4 text-primary-600" />
                              <span className="text-sm font-semibold text-gray-600">
                                Klinik ASHA IVF
                              </span>
                            </div>
                            <div className="flex space-x-1.5 items-center">
                              <FaRegCalendar className="w-4 h-4 text-primary-600" />
                              <span className="text-sm font-semibold text-gray-600">
                                {new Date().toLocaleDateString("en", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                })}
                              </span>
                            </div>
                            <div className="flex space-x-1.5 items-center">
                              <FaRegClock className="w-4 h-4 text-primary-600" />
                              <span className="text-sm font-semibold text-gray-600">
                                09:00 - 13:00
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xl font-bold text-gray-800">
                          Rp. 50.000
                        </p>
                        <Button variant="secondary" size="small" shadow="small">
                          See Available Slot
                        </Button>
                      </div>
                    </div>
                    <div className="mt-1 bg-white p-4 shadow rounded-md">
                      <ToggleGroup
                        type="single"
                        className="grid grid-cols-6 gap-6"
                      >
                        {slots.map((slot) => (
                          <ToggleGroupItem key={slot} value={slot}>
                            {slot}
                          </ToggleGroupItem>
                        ))}
                      </ToggleGroup>
                    </div>
                  </li>
                  <li>
                    <div className="bg-white p-4 shadow rounded-md flex items-center justify-between">
                      <div className="flex space-x-6 items-center">
                        <Avatar size="lg">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
                            alt="John Doe"
                          />
                          <AvatarFallback delayMs={600}>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">Dr. Jane</p>
                          <p className="text-sm text-gray-600">
                            Spesialis Kandungan
                          </p>
                          <div className="-ml-0.5 mt-2 flex items-center space-x-5">
                            <div className="flex space-x-1.5 items-center">
                              <FaRegHospital className="w-4 h-4 text-primary-600" />
                              <span className="text-sm font-semibold text-gray-600">
                                Klinik ASHA IVF
                              </span>
                            </div>
                            <div className="flex space-x-1.5 items-center">
                              <FaRegCalendar className="w-4 h-4 text-primary-600" />
                              <span className="text-sm font-semibold text-gray-600">
                                {new Date().toLocaleDateString("en", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                })}
                              </span>
                            </div>
                            <div className="flex space-x-1.5 items-center">
                              <FaRegClock className="w-4 h-4 text-primary-600" />
                              <span className="text-sm font-semibold text-gray-600">
                                09:00 - 13:00
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xl font-bold text-gray-800">
                          Rp. 50.000
                        </p>
                        <Button variant="secondary" size="small" shadow="small">
                          See Available Slot
                        </Button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              onClick={() => setStep(2)}
              variant="primary"
              shadow="medium"
            >
              <div className="flex space-x-1 items-center">
                <span>Next</span>
                <ArrowRightIcon className="w-4 h-4" />
              </div>
            </Button>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <div className="max-w-md mx-auto">
            <h2 className="block text-center font-semibold text-2xl mb-6">
              Pilih Patient
            </h2>
            <ToggleGroup
              type="single"
              className="grid grid-cols-2 gap-6 py-6"
              aria-label="Patient"
              defaultValue={patient}
              onValueChange={(value) => setPatient(value)}
            >
              <ToggleGroupItem
                value="me"
                className="font-semibold text-lg text-gray-600 bg-white rounded-md py-6 shadow hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 radix-state-on:bg-primary-600 radix-state-on:text-white"
              >
                Saya
              </ToggleGroupItem>
              <ToggleGroupItem
                value="other"
                className="font-semibold text-lg text-gray-600 bg-white rounded-md py-6 shadow hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 radix-state-on:bg-primary-600 radix-state-on:text-white"
              >
                Orang Lain
              </ToggleGroupItem>
            </ToggleGroup>

            {patient === "other" ? (
              <div className="max-w-xs mx-auto space-y-4 min-h-[350px]">
                <ToggleGroup
                  type="single"
                  className="flex flex-col space-y-2 mt-6"
                  aria-label="Patient"
                >
                  <ToggleGroupItem
                    value="father"
                    className="font-semibold text-md text-gray-600 bg-white rounded-md py-2 shadow hover:bg-primary-100 focus:outline-none focus:ring-2 border-2 border-transparent focus:ring-primary-500 focus:ring-offset-2 radix-state-on:bg-primary-100 radix-state-on:text-primary-700
                radix-state-on:border-primary-500"
                  >
                    <div className="px-6 flex space-x-4 items-center">
                      <Avatar size="sm">
                        <AvatarImage
                          src="https://images.unsplash.com/photo-1605126164543-7e9ea393f8a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhbmRmYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=200&q=60"
                          alt="Father"
                        />
                        <AvatarFallback delayMs={600}>FT</AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <p className="text-gray-900">Mr. John Doe</p>
                        <p className="text-sm font-normal text-gray-700">
                          Father
                        </p>
                      </div>
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="mother"
                    className="font-semibold text-md text-gray-600 bg-white rounded-md py-2 shadow hover:bg-primary-100 focus:outline-none focus:ring-2 border-2 border-transparent focus:ring-primary-500 focus:ring-offset-2 radix-state-on:bg-primary-100 radix-state-on:text-primary-700
                radix-state-on:border-primary-500"
                  >
                    <div className="px-6 flex space-x-4 items-center">
                      <Avatar size="sm">
                        <AvatarImage
                          src="https://images.unsplash.com/photo-1442458370899-ae20e367c5d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
                          alt="Mother"
                        />
                        <AvatarFallback delayMs={600}>MT</AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <p className="text-gray-900">Mrs. Jane Doe</p>
                        <p className="text-sm font-normal text-gray-700">
                          Mother
                        </p>
                      </div>
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="anak 1"
                    className="font-semibold text-md text-gray-600 bg-white rounded-md py-2 shadow hover:bg-primary-100 focus:outline-none focus:ring-2 border-2 border-transparent focus:ring-primary-500 focus:ring-offset-2 radix-state-on:bg-primary-100 radix-state-on:text-primary-700
                radix-state-on:border-primary-500"
                  >
                    <div className="px-6 flex space-x-4 items-center">
                      <Avatar size="sm">
                        <AvatarImage
                          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=150&q=60"
                          alt="Child"
                        />
                        <AvatarFallback delayMs={600}>CD1</AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <p className="text-gray-900">Sara Doe</p>
                        <p className="text-sm font-normal text-gray-700">
                          Child
                        </p>
                      </div>
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="anak 2"
                    className="font-semibold text-md text-gray-600 bg-white rounded-md py-2 shadow hover:bg-primary-100 focus:outline-none focus:ring-2 border-2 border-transparent focus:ring-primary-500 focus:ring-offset-2 radix-state-on:bg-primary-100 radix-state-on:text-primary-700
                radix-state-on:border-primary-500"
                  >
                    <div className="px-6 flex space-x-4 items-center">
                      <Avatar size="sm">
                        <AvatarImage
                          src="https://images.unsplash.com/photo-1560706980-0ee43b01f4c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGtpZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=200&q=60"
                          alt="Child"
                        />
                        <AvatarFallback delayMs={600}>CD1</AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <p className="text-gray-900">Ben Doe</p>
                        <p className="text-sm font-normal text-gray-700">
                          Child
                        </p>
                      </div>
                    </div>
                  </ToggleGroupItem>
                </ToggleGroup>
                <div>
                  <button className="border-2 border-dashed border-gray-600 w-full py-3 rounded-md hover:bg-white transition flex space-x-2 justify-center items-center">
                    <PlusIcon className="w-4 h-4 text-gray-600 font-semibold" />
                    <span className="pt-0.5 text-sm font-semibold">
                      Add New Dependent
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="min-h-[350px]"></div>
            )}
          </div>
          <div className="mt-16 flex justify-end space-x-2">
            <Button onClick={() => setStep(1)} variant="gray" shadow="small">
              <div className="flex space-x-1 items-center">
                <ArrowLeftIcon className="w-4 h-4 text-gray-600" />
                <span className="text-gray-600">Back</span>
              </div>
            </Button>
            <Button
              onClick={() => setStep(3)}
              variant="primary"
              shadow="medium"
            >
              <div className="flex space-x-1 items-center">
                <span>Next</span>
                <ArrowRightIcon className="w-4 h-4" />
              </div>
            </Button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <div>
            <h2 className="block text-center font-semibold text-2xl mb-6">
              Lengkapi Data Pasien
            </h2>
            <div className="grid grid-cols-2 gap-6 bg-white p-6 shadow rounded-md max-w-3xl mx-auto">
              <div>
                {/* <h3 className="font-semibold">Personal Information</h3> */}
                <div className="space-y-4">
                  <div>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <div className="mt-1">
                      <Input id="name" />
                    </div>
                  </div>
                  <div>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <div className="mt-1">
                      <Input type="email" id="email" />
                    </div>
                  </div>
                  <div>
                    <FormLabel htmlFor="identity-number">
                      Identity Number
                    </FormLabel>
                    <div className="mt-1">
                      <Input id="identity-number" />
                    </div>
                  </div>
                  <div>
                    <FormLabel htmlFor="phone">Phone Number</FormLabel>
                    <div className="mt-1">
                      <Input id="phone" />
                    </div>
                  </div>
                  <div>
                    <FormLabel htmlFor="birthdate">Birth Date</FormLabel>
                    <div className="mt-1">
                      <Input type="date" id="birthdate" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-4">
                  <div>
                    <FormLabel htmlFor="blood-type">Blood Type</FormLabel>
                    <div className="mt-1">
                      <Select id="blood-type">
                        <option value="">Choose</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                        <option value="O">O</option>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <FormLabel htmlFor="height">Height</FormLabel>
                    <div className="mt-1">
                      <Input type="number" id="height" />
                    </div>
                  </div>
                  <div>
                    <FormLabel htmlFor="weight">Weight</FormLabel>
                    <div className="mt-1">
                      <Input type="number" id="weight" />
                    </div>
                  </div>
                  <div>
                    <FormLabel htmlFor="allergy">Allergy</FormLabel>
                    <div className="mt-1">
                      <Textarea id="allergy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex justify-end space-x-2">
            <Button onClick={() => setStep(2)} variant="gray" shadow="small">
              <div className="flex space-x-1 items-center">
                <ArrowLeftIcon className="w-4 h-4 text-gray-600" />
                <span className="text-gray-600">Back</span>
              </div>
            </Button>
            <Button
              onClick={() => setStep(4)}
              variant="primary"
              shadow="medium"
            >
              <div className="flex space-x-1 items-center">
                <span>Next</span>
                <ArrowRightIcon className="w-4 h-4" />
              </div>
            </Button>
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <div>
            <h2 className="block text-center font-semibold text-2xl mb-6">
              Konfirmasi Booking
            </h2>
            <div className="grid grid-cols-3 gap-10 items-start">
              {/* Left Side */}
              <div className="col-span-2 space-y-4">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-4 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Schedule Information
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Personal details and application.
                    </p>
                  </div>
                  <div className="border-t border-gray-200">
                    <dl>
                      <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Layanan
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          Konsultasi IVF
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Dokter
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          Dr. Jane
                        </dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Institution
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          Klinik ASHA IVF
                        </dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Date
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {new Date().toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Time
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          12:00
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-4 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Patient Information
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Personal details and application.
                    </p>
                  </div>
                  <div className="border-t border-gray-200">
                    <dl>
                      <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Nama
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          Chelsea Hagon
                        </dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Birth Date
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {new Date("1982-10-10").toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Gender
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          Female
                        </dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Golongan Darah
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          A
                        </dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Tinggi Badan
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          174 cm
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Berat Badan
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          62 Kg
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="bg-white rounded-md shadow p-6">
                <h3 className="">Payment</h3>
                <p className="mt-1 text-2xl font-bold">
                  {formatter.format(50000)}
                </p>
                <div className="mt-3">
                  <FormLabel htmlFor="payment-method">Payment Method</FormLabel>
                  <div className="mt-1">
                    <Select id="payment-method">
                      <option value="">Choose</option>
                      <option value="Transfer VA BNI">Transfer VA BNI</option>
                      <option value="Gopay">Gopay</option>
                      <option value="Indomaret">Indomaret</option>
                    </Select>
                  </div>
                </div>
                {/* <div className="flex"> */}
                <Button
                  className="w-full mt-4"
                  onClick={() =>
                    navigate(
                      "/booking/success/e48a1075-8f13-49fb-8379-b7d00477bf3b"
                    )
                  }
                >
                  Book
                </Button>
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className="mt-16 flex justify-end space-x-2">
            <Button onClick={() => setStep(3)} variant="gray" shadow="small">
              <div className="flex space-x-1 items-center">
                <ArrowLeftIcon className="w-4 h-4 text-gray-600" />
                <span className="text-gray-600">Back</span>
              </div>
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default BookingPage;

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});
