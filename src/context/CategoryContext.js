import { createContext, useState, useEffect } from 'react'
import Toast from '../components/Toast'

const CategoryContext = createContext()

export const CategoryProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [categories, setCategories] = useState([])

const BASE_URL = 'http://localhost:8080/api'
useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    setIsLoading(true)
    
    let url = `${BASE_URL}/categories`

    const response = await fetch(url,{"headers":{
"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvdXNzYW1hIiwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfU1VQRVJfQURNSU4iLCJST0xFX1VTRVIiXSwiaXNzIjoiL2FwaS9sb2dpbiIsImV4cCI6MTY1NDA5OTgxOX0.x7-CLYeUJs7kRrOXTlmg0S-srqigeUxVlVrl8VU9sR0",
"Accept": "*/*",
"Accept-Encoding": "gzip, deflate, br",
"Accept-Language": "en-US,en;q=0.9,fr;q=0.8,fr-FR;q=0.7,ar;q=0.6",
"Cache-Control": "no-cache",
"Connection": "keep-alive",
"Content-type": "application/json; charset=UTF-8",
"Host": "localhost:8080",
"Origin": "http://localhost:3000",
"Pragma": "no-cache",
"Referer": "http://localhost:3000/",
"sec-ch-ua-platform": "Linux",
"Sec-Fetch-Dest": "empty",
"Sec-Fetch-Mode": "cors",
"Sec-Fetch-Site": "same-site",
"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36"



}})
    const data = await response.json()
    console.log(data)
    setCategories(data)
    setIsLoading(false)      
  }


//   const addCategory = async (newCategory) => {
//     setIsLoading(true)
//     var formdata = new FormData();
//     formdata.append("name", newCategory.nom);
//     //if(newCategory.promotion)
//         //formdata.append("quantiteStock", newCategory.promotion);
//     var requestOptions = {
//       method: 'POST',
//       body: formdata,
//       redirect: 'follow'
//     };
    
//     fetch(`${BASE_URL}/catgory/create/`, requestOptions)
//       .then(response => response.text())
//       .then(result => {
        
//         console.log(result);
//         result = JSON.parse(result)
//         setCategories([{
//         nom: result.name,
//       },...categories])
//       Toast("The category has been added successfully!")
//     })
//       .catch(error => console.log('error', error));
      
//       setIsLoading(false)
//   }

  // Delete category
  const deleteCategory = async (id) => {
      setIsLoading(true)
      await fetch(`${BASE_URL}/delete_category/${id}`, { method: 'DELETE' })
      setCategories(categories.filter((item) => item.id !== id))
      setIsLoading(false)
      Toast("The category has been deleted!")
    }


    // const updateCategory = async (id, updItem) => {
    //   var formdata = new FormData();
    //   formdata.append("name", updItem.nom);
    //   var requestOptions = {
    //     method: 'PUT',
    //     body: formdata,
    //     redirect: 'follow'
    //   };
      
    //   fetch(`${BASE_URL}/category/update/${id}`, requestOptions)
    //     .then(response => response.text())
    //     .then(result => {
    //       console.log(result)
    //       result = JSON.parse(result)
    //       setCategories(categories.map(category=>id==category.id ? 
    //         {
    //           id,
    //           nom: category.name,
    //         }
    //         : category))
    //         Toast("The category has been Updated!")
    //     })
    //     .catch(error => console.log('error', error));
        
        
    // }
    return (
      <CategoryContext.Provider
        value={{
          categories,
          isLoading,
          deleteCategory,
          fetchCategories,
        }}
      >
        {children}
      </CategoryContext.Provider>
    )
  

}

export default CategoryContext
