async function getdata() {
    
    
    let data = document.getElementById('data').value;
    
    let imgSize = document.getElementById('imgSize').value;
    
    
    
    if (data === '') {
        alert("Your Input must have one character to proceed!")
        window.location.reload();
        return;s
    }
    
    
    data = encodeURIComponent(data);
    

    let link = 'https://api.qrserver.com/v1/create-qr-code/?size=' + imgSize + '&data=' + data;
    
    
    
    try {
        const content = await fetch(link);
        let currimg = document.getElementById('current_img');
        currimg.src = content.url;
        currimg.alt = "qr_img";

    } catch (error) {
        alert("faild to Generate : check internet connectivity and try again");
        window.location.reload();
        return;
    }
}




