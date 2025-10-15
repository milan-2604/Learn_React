import {useForm} from 'react-hook-form'
import './App.css'

function App() {
  const {
    handleSubmit,
    watch,
    register,
   formState: {errors,isSubmitting}
  }=useForm();
  
  async function onSubmit(data){
    await new Promise((res)=>setTimeout(res,5000));
    console.log("submitting the form",data);
  }
  return (
     
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label >firstName: </label>
            <input {...register('firstName',{
              required: true,
              minLength :{value:3,message:"Min len should be 3"},
              maxLength: {value: 6,message: "Max len should be 6"}
            })} />
            {errors.firstName&&<p>{errors.firstName.message}</p>}
          </div>
          <div>
            <label>lastName: </label>
            <input {...register('lastName',
              {
                required: true,
                minLength: {value:3,message: "minLength should be 3"},
                maxLength: {value: 6, message: "Max len should be 6"}
              })
            } />
            {errors.lastName&&<p>{errors.lastName.message}</p>}
          </div>
          <button type='submit' disabled={isSubmitting}>Submit</button>
        </form>
      
     
  )
}

export default App
