import React from 'react'

const Form = () => {
  return (
    <form action="http://localhost:3000/mergepdf" method="post" enctype="multipart/form-data">
            <div class="form-group">
                <label for="files">Upload Single or Multiple PDF Files:</label>
                <input type="file" multiple name="files" class="form-control" required id="" />
            </div>
            <div class="form-group">
                <button class="btn btn-danger btn-block">
                    Merge PDF
                </button>
            </div>
        </form>
  )
}

export default Form