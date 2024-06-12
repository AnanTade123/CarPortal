import { useState } from "react";
import Inputs from "../../forms/Inputs";
import { useNavigate, useParams } from "react-router";

export default function Wallet() {
    const [formData, setFormData] = useState({
     
      // fields
      panCard: "",
      status: "",
      openingBalance: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const data = {
          panCard: formData.panCard,
    
          status: formData.status,
    
          openingBalance: formData.openingBalance,
          
        };
}

return(
    <div className="mt-5 w-full">
         <form onSubmit={handleSubmit} >
    <Inputs
      label={"panCard"}
      type={"text"}
      name={"panCard"}
      value={formData.panCard}
      onChange={(event) =>
        setFormData({
          ...formData,
          panCard: event.target.value,
        })
      }
    />
     <Inputs
      label={"status"}
      type={"text"}
      name={"status"}
      value={formData.status}
      onChange={(event) =>
        setFormData({
          ...formData,
          status: event.target.value,
        })
      }
    />
     <Inputs
      label={"openingBalance"}
      type={"number"}
      name={"openingBalance"}
      value={formData.openingBalance}
      onChange={(event) =>
        setFormData({
          ...formData,
          openingBalance: event.target.value,
        })
      }
    />
    </form>
  </div>

)
}