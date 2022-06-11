import { createContext, useState, useEffect } from 'react'
import Toast from '../components/Toast'
const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])

const BASE_URL = 'http://localhost:8080/api'
useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    setIsLoading(true)
    
    let url = `${BASE_URL}/produits`
    
    const response = await fetch(url,{"headers":{"Content-type": "application/json; charset=UTF-8"}})
    const data = await response.json()
    console.log(data)
    setProducts(data)
    setIsLoading(false)      
  }


  const addProduct = async (newProduct) => {
    setIsLoading(true)
    var formdata = new FormData();
    formdata.append("name", newProduct.nom);
    formdata.append("prix", newProduct.prix);
    formdata.append("category", newProduct.category );
    formdata.append("quantiteStock", newProduct.quantite);
    //if(newProduct.promotion)
        //formdata.append("quantiteStock", newProduct.promotion);
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(`${BASE_URL}/produit/create/`, requestOptions)
      .then(response => response.text())
      .then(result => {
        
        console.log(result);
        result = JSON.parse(result)
        setProducts([{
        nom: result.name,
        prix: result.prix,
        category: result.category,
        quantite: result.quantiteStock,
      },...products])
      Toast("The product has been added successfully!")
    })
      .catch(error => console.log('error', error));
      
      setIsLoading(false)
  }

  // Delete product
  const deleteProductContext = async (id) => {
      setIsLoading(true)
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvdXNzYW1hIiwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfU1VQRVJfQURNSU4iLCJST0xFX1VTRVIiXSwiaXNzIjoiL2FwaS9sb2dpbiIsImV4cCI6MTY1NDA5NTYzNn0.v--e6deRY7A98CMsuS01byzx-EiObtLKqctmtG93fNQ");

      await fetch(`${BASE_URL}/delete_produit/${id}`, { method: 'DELETE', headers:myHeaders })

      setProducts(products.filter((item) => item.id !== id))
      setIsLoading(false)
      Toast("The product has been deleted!")
    }


    const updateProductContext = async (id, updItem) => {
      var formdata = new FormData();
      formdata.append("name", updItem.nom);
      formdata.append("prix", updItem.prix);
      formdata.append("category", updItem.category );
      formdata.append("quantiteStock", updItem.quantite);
        
      var requestOptions = {
        method: 'PUT',
        body: formdata,
        redirect: 'follow'
      };
      
      fetch(`${BASE_URL}/produit/update/${id}`, requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result)
          result = JSON.parse(result)
          setProducts(products.map(product=>id==product.id ? 
            {
              id,
              nom: product.name,
              prix: product.prix,
              category: product.category,
              quantite: product.quantiteStock,
            }
            : product))
            Toast("The product has been Updated!")
        })
        .catch(error => console.log('error', error));
        
        
    }
    return (
      <ProductContext.Provider
        value={{
          products,
          isLoading,
          deleteProductContext,
          addProduct,
          updateProductContext,
          fetchProducts,
        }}
      >
        {children}
      </ProductContext.Provider>
    )
  

}

export default ProductContext