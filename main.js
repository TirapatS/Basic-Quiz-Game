const slider_img = document.querySelector('.profile-img')
const profileimages = []

const student = {
    fullName: "",
    pfp_img: "",
}

function setImg() {
    return slider_img.setAttribute('src', 'profileimages/ ' + profileimages[i])
}
