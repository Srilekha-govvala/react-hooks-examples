import { useActionState } from "react";
async function loginForm(previousState,formData){
    const name=formData.get('name');
    const email=formData.get('email');
    //simulating API call to observe the loading action
    await new Promise(resolve => setTimeout(resolve,2000));
    if(!name ||!email){
        return {error:'All fields are required',success:false}
    }
    return{
        success:true,message:`Wlecome, ${name}`,email:email
    }
}

export default function UseActionStateHook(){
    const [state, formAction, isPending]=useActionState(loginForm,null)
    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h3 className="text-xl font-bold mb-6 text-gray-800">
                    <form action={formAction} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input type="text"name="name"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email"name="email"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"/>
                        </div>
                        <button type="submit" disabled={isPending}
                        className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 disabled:bg-gray-400 transistion">
                            {isPending?'Submitting...':'Submit'}
                        </button>
                    </form>
                    {state?.error&&(<p className="mt-4 text-green-500 text-sm">{state.error}</p>)}
                    {state?.message && (<p className="mt-4 text-green-500 text-sm">{state.message}</p>)}
                </h3>
            </div>
        </div>
    )
}