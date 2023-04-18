// Creator: k6 Browser Recorder 0.6.2
//-----------------------------init code-------------------------------------------//
import { sleep, group, check } from 'k6'
import http from 'k6/http'
import exec from "k6/execution";
export const options = { vus: 1, duration: '5s' }

//--------------------------------vu code-------------------------------------------------//
export default function main() {
 
 group('S01_T01_Launch - https://blazedemo.com', function () {

 let response1; let response2;

   response1 = http.get('https://blazedemo.com/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    }) 

    
    
  })
  sleep(2)
 

  group('S01_T02_Find_Flight - https://blazedemo.com/reserve.php', function () {
    response2 = http.post('https://blazedemo.com/reserve.php',   
      {
        fromPort: 'London',
        toPort: 'Berlin',
      },
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          origin: 'https://blazedemo.com',
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
            })
      sleep(2)
  
  
     
  group('S01_T03_Purchase_Flight - https://blazedemo.com/purchase.php', function () {
  let response3 = http.post('https://blazedemo.com/purchase.php',
      {
        flight: '43',
        price: '472.3',
        airline: 'Virgin America',
        fromPort: 'London',
        toPort: 'Berlin',
      },
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          origin: 'https://blazedemo.com',
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      })

  sleep(2);

  group('s01_T04_Confirm_Flight - https://blazedemo.com/confirmation.php', function () {
  let  response4 = http.post(
      'https://blazedemo.com/confirmation.php',
      {
        _token: '',
        inputName: 'Richa',
        address: 'address',
        city: 'Pune',
        state: 'state',
        zipCode: '123456',
        cardType: 'visa',
        creditCardNumber: '',
        creditCardMonth: '11',
        creditCardYear: '2017',
        nameOnCard: ''
      },
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          origin: 'https://blazedemo.com',
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
  })}sleep(5)

  
