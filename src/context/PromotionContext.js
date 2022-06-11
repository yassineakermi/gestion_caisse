import { createContext, useState, useEffect } from 'react'
import Toast from '../components/Toast'

const PromotionContext = createContext()

export const PromotionProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [promotions, setPromotions] = useState([])

const BASE_URL = 'http://localhost:8080/api'
useEffect(() => {
    fetchPromotions()
  }, [])

  const fetchPromotions = async () => {
    setIsLoading(true)
    
    let url = `${BASE_URL}/promotions`
    
    const response = await fetch(url,{"headers":{"Content-type": "application/json; charset=UTF-8"}})
    const data = await response.json()
    console.log(data)
    setPromotions(data)
    setIsLoading(false)      
  }


  const addPromotion = async (newPromotion) => {
    setIsLoading(true)
    var formdata = new FormData();
    formdata.append("date_exp", newPromotion.date_exp);
    formdata.append("date_debut", newPromotion.date_debut);
    formdata.append("value", newPromotion.value );
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(`${BASE_URL}/promotion/create/`, requestOptions)
      .then(response => response.text())
      .then(result => {
        
        console.log(result);
        result = JSON.parse(result)
        setPromotions([{
            date_debut: result.date_debut,
            date_exp: result.date_exp,
            value: result.value,
      },...promotions])
      Toast("The promotion has been added successfully!")
    })
      .catch(error => console.log('error', error));
      
      setIsLoading(false)
  }

  // Delete promotion
  const deletePromotionContext = async (id) => {
      setIsLoading(true)
      await fetch(`${BASE_URL}/delete_promotion/${id}`, { method: 'DELETE' })

      setPromotions(promotions.filter((item) => item.id !== id))
      setIsLoading(false)
      Toast("The promotion has been deleted!")
    }


    const updatePromotionContext = async (id, updItem) => {
      console.log(updItem);
      var formdata = new FormData();
      formdata.append("date_debut", updItem.date_debut);
      formdata.append("date_exp", updItem.date_exp);
      formdata.append("value", updItem.value );
      formdata.append("name", updItem.name );

          
      var requestOptions = {
        method: 'PUT',
        body: formdata,
        redirect: 'follow'
      };
      
      fetch(`${BASE_URL}/promotion/update/${id}`, requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result)
          result = JSON.parse(result)
          setPromotions(promotions.map(promotion=>id==promotion.id ? 
            {
              id,
              nom: promotion.name,
              prix: promotion.prix,
              category: promotion.category,
              quantite: promotion.quantiteStock,
            }
            : promotion))
            Toast("The promotion has been Updated!")
        })
        .catch(error => console.log('error', error));
        
        
    }
    return (
      <PromotionContext.Provider
        value={{
          promotions,
          isLoading,
          deletePromotionContext,
          addPromotion,
          fetchPromotions,
          updatePromotionContext
        }}
      >
        {children}
      </PromotionContext.Provider>
    )
}

export default PromotionContext