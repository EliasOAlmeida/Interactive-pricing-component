let money = 16

function rangeValue ( value ) {
 if (value >= 0 && value < 25) {
    document.getElementById('money').innerText = '$8.00'
    document.getElementById('views').innerText = '10K Pageviews'
    money = 8
  } else if (value >= 25 && value < 50) {
     document.getElementById('money').innerText = '$12.00'
     document.getElementById('views').innerText = ' 50K Pageviews'
     money = 12
   } else if (value >= 50 && value < 75) {
     document.getElementById('money').innerText = '$16.00'
     document.getElementById('views').innerText = '100K Pageviews'
     money = 16
   } else if (value >= 75 && value < 100) {
     document.getElementById('money').innerText = '$24.00'
     document.getElementById('views').innerText = '500K Pageviews'
     money = 24
   } else if (value >= 100 ) {
     document.getElementById('money').innerText = '$36.00' 
     document.getElementById('views').innerText = '1M Pageviews'
     money = 36
   } else {
       alert ('error')
   }
   
   console.log (money)
}
