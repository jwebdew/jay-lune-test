$(function () { 
    //onkeyup() 사용자가 키보드 눌렀다가 땠을 때
    let searchBox = document.querySelector('#search')
    function filter() {
        let search = document.getElementById("search").value;
        let listInner = document.getElementsByClassName("item");

        for (let i = 0; i < listInner.length; i++) {
            city = listInner[i].getElementsByTagName("h4");
            country = listInner[i].getElementsByTagName("p");
            if (city[0].innerHTML.indexOf(search) != -1 ||
                country[0].innerHTML.indexOf(search) != -1
            ) {
                listInner[i].style.display = 'block'
            } else {
                listInner[i].style.display = 'none'
            }
            console.log(listInner[i])
        }
    }
    searchBox.onkeyup = function () {
        filter()

    }

    
    /* mouseup : 마우스 누르고 있는 상태에서 뗐을 경우 */
    $(window).mouseup(function(){
        archive.css({
            'display' : 'none'
        });
        $('body').removeClass('itemWrap__archive_on');

    })

    const main = () => {
        const articles = Array.from(document.querySelectorAll(".item"));
      
        articles.forEach((article, index) => {
          setTimeout(() => {
            article.classList.add("reveal");
          }, index * 250);
        });
      }; 
      main();
});//jquery end

