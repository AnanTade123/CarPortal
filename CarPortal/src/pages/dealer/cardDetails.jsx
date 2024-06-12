import { useState } from "react";
import Inputs from "../../forms/Inputs";
 
export default function cardDetails() {
    const [formData, setFormData] = useState({
     
      // fields
      status: "",
      panCard: "",
      openingBalance: "",
      lastUpdateTime: "",
      accountId: "",
    });
 
    const handleSubmit = async (event) => {
        event.preventDefault();
   
        const data = {
          panCard: formData.panCard,
   
          status: formData.status,
   
          openingBalance: formData.openingBalance,

          lastUpdateTime: formData.lastUpdateTime,

          accountId: formData.accountId,
         
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
    <Inputs
      label={"lastUpdateTime"}
      type={"number"}
      name={"lastUpdateTime"}
      value={formData.lastUpdateTime}
      onChange={(event) =>
        setFormData({
          ...formData,
          lastUpdateTime: event.target.value,
        })
      }
    />
    <Inputs
      label={"accountId"}
      type={"number"}
      name={"accountId"}
      value={formData.accountId}
      onChange={(event) =>
        setFormData({
          ...formData,
          accountId: event.target.value,
        })
      }
    />
    </form>
  </div>
 
)
}
