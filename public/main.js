let n=1
getPage.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status===200){
            const array = JSON.parse(request.response)
            array.forEach(item=>{
                const li = document.createElement('li')
                li.textContent=item.id
                ulId.appendChild(li)
            })
            n+=1
        }
    }
    request.send()
}

getJSON.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            // const object = JSON.parse(request.response)
            let object
            try{
                 object = JSON.parse(request.response)
            }catch(error){
                console.log(error);
                object={'name':'userName'}
                }
            myName.textContent=object.name
        }
    }
    request.send()
}

getXML.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            // console.log(request.response);
            // console.log(request.responseXML);
            const dom =request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim());
           
        }
    }
    request.send()
}

getHtml.onclick=()=>{
    const request = new XMLHttpRequest
    request.open('GET','/3.html')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            //下载完成，但是不知道下载完成的是200成功，还是404失败
            if(request.status>=200&&request.status<300){
                const div = document.createElement('div')
                div.innerHTML=request.response
                document.body.appendChild(div)
            }else{
                alert('加载3.html失败')
            }
        }
    }
    
    request.send()
}

requestJs.onclick=()=>{
    const request = new XMLHttpRequest
    request.open('GET','/2.js')
    request.onload=()=>{
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror=()=>{
        console.log('加载失败了');
    }
    request.send()
}

requestCss.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onload =()=>{
        console.log('request.response:')
        console.log(request.response)

        // 创建style标签
        const style =document.createElement('style')
        // 填写style的内容
        style.innerHTML=request.response
        //插到头里
        document.head.appendChild(style)
    }
    request.onerror=()=>{
        console.log('加载失败了')
    }
    request.send()
}