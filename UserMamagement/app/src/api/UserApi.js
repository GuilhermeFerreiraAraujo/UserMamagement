
import axios from 'axios';

export default class DeviceApi {

    
     async GetUsers(handleResponse){
         axios(`http://localhost:50589/Api/User/Get`,{
            method: 'GET',
        })
        .then((response) => {
            handleResponse(response);
        })

        .catch((error) => {
            handleResponse( error.response);
          });
    }


    async AddUser(
        FullName,
        Description,
        Hobbies,
        HomeTown,
        Motto,
        PersonalBlog,
        Image,
        handleResponse){

        axios.post(`http://localhost:50589/Api/User/Add`,
            {
                FullName,
                Description,
                Hobbies,
                HomeTown,
                Motto,
                PersonalBlog,
                Image
            },
        )
            .then((response) => {
                handleResponse(response);
            })
    
            .catch((error) => {
                handleResponse( error.response);
              });


        }


        async EditUser(
            FullName,
            Description,
            Hobbies,
            HomeTown,
            Motto,
            PersonalBlog,
            Id,
            Image,
            handleResponse){
    console.log(Image);
            axios.put(`http://localhost:50589/Api/User/Edit`,
                {
                    FullName,
                    Description,
                    Hobbies,
                    HomeTown,
                    Motto,
                    PersonalBlog,
                    Id,
                    Image,
                },
            )
                .then((response) => {
                    handleResponse(response);
                })
        
                .catch((error) => {
                    handleResponse( error.response);
                  });
            }



            async DeleteUser(
                Id,
                handleResponse
                ){
        
                axios.post(`http://localhost:50589/Api/User/Delete`,
                   {
                    Id
                   } 
                    ,
                )
                    .then((response) => {
                        handleResponse();
                    })
            
                    .catch((error) => {
                        handleResponse();
                      });
        
        
                }
    




}
