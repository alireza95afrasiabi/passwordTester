
let x

document.getElementById('inp').addEventListener('input', function () {
    x = this.value
    console.log(x)
    if (
        ((x.search(/[a-z]/i)) > -1) || ((x.search(/[0-9]/i)) > -1) || ((x.search(/[!@#$%^&*]/i)) > -1)
    ) {
        document.getElementById('box').style.background = 'red'
        document.getElementById('box').style.width = '33%'
    } else {
        document.getElementById('box').style.background = 'transparent'
        document.getElementById('box').style.width = '0'
    }
    if (
        (((x.search(/[a-z]/i)) > -1) && (((x.search(/[0-9]/i)) > -1))) || ((((x.search(/[a-z]/i)) > -1) && (((x.search(/[!@#$%^&*]/i)) > -1)))) || (((x.search(/[!@#$%^&*]/i)) > -1) && (((x.search(/[0-9]/i)) > -1)))
    ) {
        document.getElementById('box').style.background = 'orange'
        document.getElementById('box').style.width = '66%'
    }
    if (((x.search(/[a-z]/i)) > -1) && (((x.search(/[0-9]/i)) > -1)) && (((x.search(/[!@#$%^&*]/i)) > -1)) && (x.length > 7)) {
        document.getElementById('box').style.background = 'green'
        document.getElementById('box').style.width = '100%'
    }
})


document.getElementById('light').addEventListener('click', function () {
    document.getElementById('main').style.background = 'white'
    document.getElementById('p').style.color = 'black'
    document.getElementById('h3').style.color = 'black'
    document.getElementById('dark').style.color = 'black'
    document.getElementById('light').style.color = 'black'
})


document.getElementById('dark').addEventListener('click', function () {
    document.getElementById('main').style.background = 'black'
    document.getElementById('p').style.color = 'white'
    document.getElementById('h3').style.color = 'white'
    document.getElementById('dark').style.color = 'white'
    document.getElementById('light').style.color = 'white'
})
