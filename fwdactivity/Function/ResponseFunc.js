function searchResponse(statusCode){

    
    if(statusCode === 200 ){
      return  ResponseModel
    }else{
        return status400 
    }
}


const ResponseModel = {

         action : '123',
         message : '123',
         status : 200
}

const status400 ={
    action : 'asdasd',
    message : '1asdasdsa23',
    status : 400
}


module.exports = {searchResponse,ResponseModel};