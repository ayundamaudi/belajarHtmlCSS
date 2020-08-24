// function login(){
    // var email= $("#exampleInputEmail1").val();
    // var password= $("#exampleInputPassword1").val();
      
    $.ajax({
   
        //    url: WEB_URL+'/public/API/superAdmin.php?login',
        url : 'http://api.themoviedb.org/3/discover/movie?language=en-US&api_key=cd8dbb788edd89ca755f429a50beded3',
        method: 'GET',
        // data: {
        //    "username":email,
        //    "password":password,
        // },
        
        success: function (data) {
            var response= JSON.stringify(data);
            var myResponse=JSON.parse(response);

            console.log(myResponse);
            console.log(myResponse.page);

            var arrayResults = myResponse.results;
            //console.log(arrayResults[0].title);
            // console.log(myResponse.message);
            // if(myResponse.message=="Account Found"){
            //     localStorage.setItem("token", myResponse.token);
            //     localStorage.setItem("iduser", myResponse.data.id);
            //     localStorage.setItem("super_user_id", myResponse.data.super_user_id);
            //     localStorage.setItem("nama", myResponse.data.nama);
            //     localStorage.setItem("username", myResponse.data.username);
            //     localStorage.setItem("account_category", myResponse.data.account_category);
            //     localStorage.setItem("gambar", myResponse.data.gambar);
            //     window.location=WEB_URL+"/dashboard";
            // }
            // else{
            //     alert(myResponse.message);
            // }
            // console.log(JSON.stringify(data));
            // alert(data);

            var tableText ="";
            for (let a = 0; a < arrayResults.length; a++) {
                tableText+=`
                    <tr>
                        <td>`+arrayResults[a].title+`</td>
                        <td>`+arrayResults[a].poster_path+`</td>
                        <td>`+arrayResults[a].original_language+`</td>
                        <td>`+arrayResults[a].popularity+`</td>
                    </tr>
                    `;
            }

            document.getElementById("list-data").innerHTML=tableText;
        }
    });
// }