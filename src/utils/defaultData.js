
const Users = require("../models/user.model")
const Roles = require("../models/roles.model")

const uuid = require('uuid');


const generateData = async () => {

  // await Accommodations.sync({force: true})
  // await Places.sync({force: true})
  // await Roles.sync({force: true})
  // await Users.sync({force: true})

  await Roles.bulkCreate([{ name: "guest", id: "fef3a08d-2cec-4728-9745-7cbd2b37e557" }, { name: "host", id: "97006fe0-4a35-47f4-bfbf-fc962e5fe500" }, { name: "admin", id: "5ee551ed-7bf4-44b0-aeb5-daaa824b9473" }], { validate: true })
  await Users.create({
    id: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
    firstName: "Sahid",
    lastName: "Kick",
    gender: "male",
    email: "sahid.kick@academlo.com",
    password: "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
    phone: "1234567890",
    birthdayDate: "2000/10/22",
    dni: "",
    address: "",
    roleId: "5ee551ed-7bf4-44b0-aeb5-daaa824b9473",
    profileImage: "asd.com",
    status: "active",
    verified: false
  })
  await Users.create({
    id: "7b6fc3bd-14b6-4090-a64e-d3f840a6bc6e",
    firstName: "Sahid",
    lastName: "Kick",
    gender: "male",
    email: "iasiba@academlo.com",
    password: "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
    phone: "1234567890",
    birthdayDate: "2000/10/22",
    dni: "",
    address: "",
    roleId: "5ee551ed-7bf4-44b0-aeb5-daaa824b9473",
    profileImage: "asd.com",
    status: "active",
    verified: false
  })
  /*
  await Places.bulkCreate([
    {
      id: '864ee3c2-facd-4a23-8b4a-4e9d342d9036',
      city: 'Guadalajara',
      state: 'Jalisco',
      country: 'México',
      continent: 'America'
    },
    {
      id: '9c0412b6-7d56-4347-8fbe-5455e8a42438',
      city: 'Zapopan',
      state: 'Jalisco',
      country: 'México',
      continent: 'America'
    },
    {
      id: '3436a556-6623-40ba-88b8-2e01009f9d82',
      city: 'Suba',
      state: 'Bogotá',
      country: 'Colombia',
      continent: 'America'
    },
    {
      id: '134a55b6-487c-46cc-a5b5-9392af20c205',
      city: 'Medellín',
      state: 'Antioquia',
      country: 'Colombia',
      continent: 'America'
    },
    {
      id: '3a230417-80ae-4232-a8ff-6fd50068a777',
      city: 'Azcapotzalco',
      state: 'CDMX',
      country: 'México',
      continent: 'America'
    },
    {
      id: '0d907427-7623-4ec9-8c6d-270bb92fbbe7',
      city: 'Monterrey',
      state: 'Muevo León',
      country: 'México',
      continent: 'America'
    },
  ])
  await Accommodations.create({
    id: "7e5fc196-8f45-46d2-bb2b-2f8b95340d50",
    title: "premium - vistas 360 ciudad (alberca y gym)",
    description: "asd",
    guests: 6,
    rooms: 3,
    beds: 3,
    bathrooms: 4.5,
    price: 1536.00,
    userId: '74cd6011-7e76-4d6d-b25b-1d6e4182ec2f',
    score: 0.00,
    placeId: '9c0412b6-7d56-4347-8fbe-5455e8a42438',
    commision: 150.00
  })
  await Accommodations.create({
    id: "aab040fc-d538-4487-aebc-7ca42374532a",
    title: "XXX - vistas 360 ciudad (alberca y gym)",
    description: "asd",
    guests: 6,
    rooms: 3,
    beds: 3,
    bathrooms: 4.5,
    price: 1536.00,
    userId: '74cd6011-7e76-4d6d-b25b-1d6e4182ec2f',
    score: 0.00,
    placeId: '9c0412b6-7d56-4347-8fbe-5455e8a42438',
    commision: 150.00
  })
  await Reservations.create({
    id:"7fc1b2fc-398b-4364-a9b2-d1f42f0f6766",
    userId: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
    arrival: "2010/10/22",
    departure: "2000/11/22",
    acomodationId: "aab040fc-d538-4487-aebc-7ca42374532a",
    adults: 5,
    kids: 4,
    babies: 3,
    pets: 2,
    score: 0,
    is_finished: false,
    is_canceled: false
  })
  await Users_images.create({
    id: "5b793ee8-f4b6-46c7-9152-f12dd66884de",
    url: "https://youtu.be/xAc23Dx-63Y",
    userId: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
    updatedAt: "2022-09-12T05:11:34.016Z",
    createdAt: "2022-09-12T05:11:34.016Z"
  })*/
}


module.exports = generateData

