let a = document.getElementsByClassName("td");
    for (let i = 0; i < a.length; i++) {
        a[i].innerHTML = (i+1)+".";
    };
    let b = document.getElementsByClassName("td1");
    for (let j = 0; j < b.length; j++) {
        b[j].innerHTML = (j+1)+".";
    };
    let c = document.getElementsByClassName("td2");
    for (let k = 0; k < c.length; k++) {
        c[k].innerHTML = (k+1)+".";
    };
    let d = document.getElementsByClassName("td3");
    for (let w = 0; w < d.length; w++) {
        d[w].innerHTML = (w+1)+".";
    };
        let editable = document.getElementById('mesage')
        if(editable != null){
            editable.contentEditable = true;
        }
        let select = document.getElementsByTagName('select')[0];
        if(select != null){
            setInterval(function(){
        if(select.selectedIndex == 0){
            document.getElementsByClassName('attendance')[0].style.display = "block";
            document.getElementsByClassName('invites')[0].style.display = "none";
            document.getElementsByClassName('messages')[0].style.display = "none";
            document.getElementsByClassName('comments')[0].style.display = "none";
        }
        if(select.selectedIndex == 1){
            document.getElementsByClassName('invites')[0].style.display = "block";
            document.getElementsByClassName('attendance')[0].style.display = "none";
            document.getElementsByClassName('messages')[0].style.display = "none";
            document.getElementsByClassName('comments')[0].style.display = "none";
        }
        if(select.selectedIndex == 2){
            document.getElementsByClassName('messages')[0].style.display = "block";
            document.getElementsByClassName('attendance')[0].style.display = "none";
            document.getElementsByClassName('invites')[0].style.display = "none";
            document.getElementsByClassName('comments')[0].style.display = "none";
        }
        if(select.selectedIndex == 3){
            document.getElementsByClassName('comments')[0].style.display = "block";
            document.getElementsByClassName('attendance')[0].style.display = "none";
            document.getElementsByClassName('invites')[0].style.display = "none";
            document.getElementsByClassName('messages')[0].style.display = "none";
        }
        let msg = document.getElementById('mesage').innerHTML;
        if(msg ===""){
            document.getElementsByTagName("button")[4].disabled = true;
        }
        else{
            document.getElementsByTagName("button")[4].disabled = false;
            document.getElementsByTagName("button")[4].onclick = function(){
                let para = document.createElement("span");
                para.setAttribute('id','messages')
                let node = document.createTextNode(msg);
                para.appendChild(node);
                let element = document.getElementById("div");
                element.append(para)
                let top = element.offsetTop;
                element.scrollTop = top**15;
                document.getElementById("mesage").innerHTML = "";
        }
            }
    },1)

        }
        
        
    let clicked = document.querySelectorAll("#nav-cont");
    for(let i=0 ; i<clicked.length; i++){
        clicked[i].onclick = function(){
           switch(i){
            case 0:
                window.location.assign("user.html");
                break;
            case 1:
                window.location.assign("user.html");
                break;
            case 2:
                window.location.assign("user.html");
                break;
            case 3:
                window.location.assign("clients.html");
                break;
            case 4:
                window.location.assign("clients.html");
                break;
            case 5:
                window.location.assign("clients.html");
                break;
           }
        }
    }

    let links = document.querySelectorAll("a.nav-item");
   /* for(let i=0; i< links.length; i++){
        link[i].onclick = function(){
            switch(i){
                case 0:
                    window.location.assign("admin.html");
                    break;
                case 1:
                    window.location.assign("user.html")
                    break;
                case 2:
                    document.getElementById("myModal").style.display = "block";
                    break;
                case 3:
                    window.location.assign("index.html");
                    break;
                case 4:
                    break;
                case 5:
                    document.getElementById("myModal1").style.display = "block";
                    break
                case 6:
                    document.location.assign("settings.html")
                    break;
                case 7:
                    alert("juma");
                    break;
            }
        }
    }*/
    let planModals = document.querySelectorAll('#myModal1'),
        membersModal = document.querySelectorAll('#myModal');
    links.forEach(link => {
        link.addEventListener('click',(e)=>{
            e.preventDefault()
            if( link.dataset.modal === 'plan'){
                planModals.forEach(plan => {
                    plan.style.display = 'block'
                });
            }
            else if( link.dataset.modal === 'member'){
                membersModal.forEach(plan => {
                    plan.style.display = 'block'
                });
            }
            else{
                window.location.href = link.dataset.url
            }
        })
    });





    let month_to_be_graphed = document.querySelectorAll(".month"),
        num = document.getElementById("num2");
    if(month_to_be_graphed != null && num != null){
        let dat = new Date ();
        let month_in = dat.getMonth()
        month_to_be_graphed[11-month_in].style.height += num.innerHTML * 10 + "px" ;
    }
    
  
    function disappear(){
        document.getElementById("myModal").style.display = "none";
        document.getElementById("myModal1").style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == document.getElementById("myModal")) {
            document.getElementById("myModal").style.display = "none";
        }
        else if(event.target == document.getElementById("myModal1")) {
            document.getElementById("myModal1").style.display = "none";
        }
      }