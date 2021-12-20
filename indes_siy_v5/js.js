let slb = document.querySelectorAll('.slb')
let vd = document.querySelectorAll('.vd')
let i

for (i = 0; i < slb.length; i++) {
    addEventListener('click', clique)
}

function clique(e) {
    let btn = e.target.id

    for (let i = 0; i < slb.length; i++) {

        vd[i].classList.remove('video-active')

        switch (btn) {
            case "slb1":
                vd[0].classList.add('video-active')
                break
            case "slb2":
                vd[1].classList.add('video-active')
                break
            case "slb3":
                vd[2].classList.add('video-active')
                break
        }
    }
}