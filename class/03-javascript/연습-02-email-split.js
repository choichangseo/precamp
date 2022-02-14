let email = "codecamp@gamil.com"
// undefined
email.includes("@")
// true
email.split("@")
// (2) ['codecamp', 'gamil.com']
let userMail = email.split("@")[0]
// undefined
userMail
// 'codecamp'
let company = email.split("@")[1]
// undefined
company
// 'gamil.com'
let mask = []
// undefined
mask
// []
mask.push(userMail[0])
// 1
mask
// ['c']
mask.push(userMail[1])
// 2
mask.push(userMail[2])
// 3
mask.push(userMail[3])
// 4
mask
// (4) ['c', 'o', 'd', 'e']
mask.push("*")
// 5
mask.push("*")
// 6
mask.push("*")
// 7
mask.push("*")
// 8
mask.join("") + "@" + company
// 'code****@gamil.com'
let result = mask.join("")+"@"+company
// undefined