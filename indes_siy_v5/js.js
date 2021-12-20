let slb = document.querySelectorAll('.slb')
let vd = document.querySelectorAll('.vd')
let i

for (i = 0; i < slb.length; i++) {
    addEventListener('click', clique)
}

function clique(e) {

    let btn = e.target.id

    for (i = 0; i < slb.length; i++) {

        switch (btn) {

            case "slb1":
                vd[i].classList.remove('video-active')
                vd[0].classList.add('video-active')
                break

            case "slb2":
                vd[i].classList.remove('video-active')
                vd[1].classList.add('video-active')
                break

            case "slb3":
                vd[i].classList.remove('video-active')
                vd[2].classList.add('video-active')
                break

        }
    }
}