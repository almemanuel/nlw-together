export default function Modal(){
    function open(){
        document.querySelector(".modal-wrapper").classList.add("active")
    }
    function close(){

    }

    return{
        open,
        close
    }
}

// pause in 01:22:10