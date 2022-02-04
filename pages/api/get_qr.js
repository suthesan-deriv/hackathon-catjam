// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const url = 'https://api.beaconstac.com/api/2.0/qrcodes/'

export default function handler(req, res) {
  const req_data = JSON.parse(req.body)
  console.log(req_data)

  let data = {
    name: 'Static vCard QR Code',
    qr_type: 1,
    organization: 96712,
    attributes: {
      color: '#000000',
      margin: 25,
      logoImage: `https://cataas.com/cat`,
    },

    fields_data: {
      qr_type: 5,
      first_name: req_data.first_name,
      last_name: req_data.last_name,
      address_line1: req_data.address_line_1,
      address_line2: req_data.address_line_2,
      city: req_data.city,
      state: req_data.state,
      zip: req_data.zip,
      country: req_data.country,
      phone: {
        mobile: req_data.phone.mobile,
        work: req_data.phone.work,
      },
      email: req_data.email,
      company: req_data.company,
      designation: req_data.designation,
      website: `https://cataas.com/cat/gif/says/${req_data.first_name}`,
    },
  }

  let createQR = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      Authorization: 'Token 3fcd4f9c7f87250987571df08b85dbf08df6ad8d',
      'Content-Type': 'application/json',
    }),
  }

  let getQr = {
    method: 'GET',
    headers: new Headers({
      Authorization: 'Token 3fcd4f9c7f87250987571df08b85dbf08df6ad8d',
    }),
  }

  fetch(url, createQR)
    .then((response) => response.json())
    .then((data) => {
      fetch(
        `https://api.beaconstac.com/api/2.0/qrcodes/${data.id}/download/?canvas_type=png`,
        getQr,
      )
        .then((response) => response.json())
        .then((data) => {
          res.status(200).json({ qr_url: data.urls.png })
        })
    })
}
