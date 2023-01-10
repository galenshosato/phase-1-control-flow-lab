
function scuberGreetingForFeet(distance){
  let x 
  if (distance <= 400) {
    x = "This one is on me!"
    return x
  }

  else if (distance > 400 && distance <= 2000) {
    x = "That will be twenty bucks."
    return x
  }
  
  else if (distance > 2000 && distance <= 2500) {
    x = 'I will gladly take your thirty bucks.'
    return x
  }

  else {
    x = 'No can do.'
    return x
  }
}

function ternaryCheckCity(city){
  let y 
  city === 'NYC' ? (y='Ok, sounds good.') : (y= 'No go.')
  return y
}

function switchOnCharmFromTip(tip){
  let z
  switch (tip) {
    case 'generous':
      z = 'Thank you so much.'
      break;
    case 'not as generous':
      z = 'Thank you.'
      break;
    default:
      z = 'Bye.'
      break;
  }
  return z
}