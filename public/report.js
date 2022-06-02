function download(){
        axios.get('http://54.215.236.204:3000/user/download', { headers: {"Authorization" : token} })
        .then((response) => {
            if(response.status === 200){
                var a = document.createElement("a");
                a.href = response.data.fileURL;
                a.download = 'myexpense.csv';
                a.click();
            } else {
                throw new Error(response.data.message)
            }
    
        })
        .catch((err) => {
            showError(err)
        });
    }

