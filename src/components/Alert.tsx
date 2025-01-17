"use client"
import { X } from "react-feather";


interface AlertProps {
    title: string,
    message?: string,
    type: "success" | "error" | "warning" | "info",
}

export default function Alert({title, message, type}: AlertProps) {
    switch(title){
        case 'Newsletter':
            if(type === 'success'){
                message = 'You have subscribed our newsletter successfully'
            } else if(type === 'error'){
                message = 'Failed to subscribe our newsletter'
            }
            break;
        default:
            message = message;
            break;
    }

    function toogleAlert(){
        const alert = document.querySelector("#Alert");
        if(alert?.classList.contains('hidden')){
            alert?.classList.remove('hidden');
        }else{
            alert?.classList.add('hidden');
        }
    }
    
  return (
    <div id="Alert" className={`alert-${type} z-50 flex justify-between shadow-costum w-3/4 h-fit bg-white text-black p-4 rounded-md fixed top-10 left-2/4 -translate-x-2/4`}>
        <div className="w-full">
            <h2>{title}</h2>
            <p>{message}</p>
        </div>

        <X
            color="gray" 
            size={20}
            className="hover:scale-110 hover:cursor-pointer transition-transform h-full"
            onClick={toogleAlert}
        />
    </div>
  );
}