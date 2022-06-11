import { useEffect, useState, useContext } from 'react';
import ContentHeader from '../components/ContentHeader';
import DataTable from '../components/DataTable';
import SimpleInputField from '../components/SimpleInputField';
import SelectInput from '../components/SelectInput';
import ProductContext from "../context/ProductContext"
import CategoryContext from "../context/CategoryContext"
import PromotionContext from '../context/PromotionContext'
const Stock = () => {

  const {
    products,
    isLoading,
    deleteProductContext,
    addProduct,
    updateProductContext,
    fetchProducts,
   } = useContext(ProductContext)

   const {categories} = useContext(CategoryContext)
   const {promotions} = useContext(PromotionContext)
  const CategoryOptions = categories.map(
    cat=>{
      return {
        value: cat.id, display: cat.name
      }
    }
  )
  

  const promotionsOptions = promotions.map(
    cat=>{
      return {
        value: cat.id, display: cat.value
      }
    }
  )


  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState(0);
  const [category, setCategory] = useState("");
  const [quantite, setQuantite] = useState(0);
  const [promotion, setPromotion] = useState("")
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [toDeleteProductID, setToDeleteProductID] = useState(null)
  const handleChangeInput = (event, value) => {
    if (event.target.id === "nom")
      setNom(value)
    else if (event.target.id === "prix")
      setPrix(value)
    else if (event.target.id === "qty")
      setQuantite(value)
    else if (event.target.id === "category")
      setCategory(value)
    else if (event.target.id === "promotion")
      setPromotion(value)


  }

  const updateProduct = (event, product) => {
    setNom(product.nom)
    setPrix(product.prix)
    setCategory(product.category)
    setQuantite(product.quantite)
    setShowAddModal(true);
  }

  const closeModal = (event) => {
    setNom("")
    setPrix(0)
    setCategory("")
    setQuantite(0)
    setShowAddModal(false);
  }

  const deleteProduct = (id) => {
    console.log(id)
    deleteProductContext(id)
    setShowDeleteModal(true)
  }

  return (
    <div className="content-wrapper">
      <ContentHeader>Gestion de Stock</ContentHeader>
      <section className="content">
        <div className={`modal fade ${showDeleteModal ? "show" : ""}`} style={showDeleteModal ? { display: "block", paddingRight: "15px" } : { display: "none" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Confirmer la supprission</h4>
                <button type="button" className="close " data-dismiss="modal" aria-label="Close">
                  <span onClick={e => setShowDeleteModal(false)} aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body" style={{ display: "flex", justifyContent: "space-evenly" }}>
                <button type="button" style={{ width: "40%" }} className="btn btn-block btn-default" data-dismiss="modal" onClick={e => setShowDeleteModal(false)}>Annuler</button>
                <button type="button" style={{ width: "40%" }} className="btn btn-block btn-danger">supprimer</button>
              </div>
            </div>
          </div>
        </div>
        <div className={`modal fade ${showAddModal ? "show" : ""}`} style={showAddModal ? { display: "block", paddingRight: "15px" } : { display: "none" }} id="modal-default">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Ajouter Un Produit</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span onClick={closeModal} aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <SimpleInputField id="nom" setParentState={handleChangeInput} label="Nom de produit:" placeholder="Nom de produit" type='text' value={nom} />
                <SimpleInputField id="prix" setParentState={handleChangeInput} label="Prix de produit:" placeholder="Prix de produit" type='number' value={prix} step={0.001} />
                <SimpleInputField id="qty" setParentState={handleChangeInput} label="Quantite disponible:" placeholder="Quantite" type='number' value={quantite} />
                <SelectInput data={CategoryOptions} setParentState={handleChangeInput} id="category" label="Choisir une categorie" placeholder='choisir une categorie' value={category} />
                <SelectInput data={promotionsOptions} setParentState={handleChangeInput} id="promotion" label="Choisir une promotion" placeholder='choisir une promotion' value={category} isRequired={false} />
              </div>

              <div className="modal-footer justify-content-between">
                <button type="button" onClick={closeModal} className="btn btn-default" data-dismiss="modal">Annuler</button>
                <button type="button" className="btn btn-primary">Enregistrer</button>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Liste de Produits</h3>
                  <button type="button" style={{ float: "right", width: "fit-content" }} class="btn btn-block bg-gradient-primary" data-toggle="modal" data-target="#modal-default">Ajouter Produit</button>
                </div>
                <div className="card-body">
                  {
                    (products instanceof Array && products.length > 0) ? <DataTable deleteRow={deleteProduct} updateRow={updateProduct} data={
                      products.map(prod=>{
                        return {
                          id:prod.id,
                          nom:prod.name,
                          prix:prod.prix,
                          category:prod.category.name,
                          quantite:prod.quantiteStock
                        }
                      })
                    } update={true} _delete={true} /> : "pas des produits"
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Stock