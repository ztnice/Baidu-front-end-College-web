function save() {
    var name= document.getElementById("sitename").value;
    var url = document.getElementById("siteurl").value;
    localStorage.setItem(name,url);
    alert("save success!")
}

function find(){
    var findSite = document.getElementById("findsite").value;
    var findUrl =localStorage.getItem(findSite);
    alert(findSite+"的网址是："+findUrl);
}

function loadAll() {
    var list = document.getElementById("list");
    if(localStorage.length>0){
        var result = "<table border='1'>";
        result+="<tr><td>网址名</td><td>网址</td></tr>";
        for(var i=0;i<localStorage.length;i++){
            var siteName = localStorage.key(i);
            var siteUrl = localStorage.getItem(siteName);
            result+="<tr><td>"+siteName+"</td><td>"+siteUrl+"</td></tr>";
        }
        result+="</table>"
        list.innerHTML=result;
    }else{
        list.innerHTML="暂时没有数据！";
    }
}