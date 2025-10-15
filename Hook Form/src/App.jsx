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
            <input className={errors.firstName?"input-err": ""}
             {...register('firstName',{
              required: true,
              minLength :{value:3,message:"Min len should be 3"},
              maxLength: {value: 6,message: "Max len should be 6"}
            })} />
            {errors.firstName&&<p className='err'>{errors.firstName.message}</p>}
          </div>
          <div>
            <label>lastName: </label>
            <input className={errors.lastName?"input-err": ""}
             {...register('lastName',
              {
                required: true,
                minLength: {value:3,message: "minLength should be 3"},
                maxLength: {value: 6, message: "Max len should be 6"}
              })
            } />
            {errors.lastName&&<p className='err'>{errors.lastName.message}</p>}
          </div>
          <button type='submit' disabled={isSubmitting}>Submit</button>
        </form>
      
     
  )
}

export default App
