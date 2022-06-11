import { useEffect, useState, useContext } from 'react';
import ContentHeader from '../components/ContentHeader';
import DataTable from '../components/DataTable';
import SimpleInputField from '../components/SimpleInputField';
import SelectInput from '../components/SelectInput';
import ProductContext from "../context/ProductContext"
import CategoryContext from "../context/CategoryContext"
import PromotionContext from '../context/PromotionContext'
const Promotions = () => {

   const {          
     promotions,
    isLoading,
    addPromotion,
    fetchPromotions,
    deletePromotionContext,
    updatePromotionContext
} = useContext(PromotionContext)  

  const [nom, setNom] = useState("");
  const [dateDebut, setDateDebut] = useState("0");
  const [dateFin, setDateFin] = useState("");
  const [valeur, setValeur] = useState(0);
  const [idToDelete, setIdToDelete] = useState(null)
  const [idToUpdate, setIdToUpdate] = useState(null)

  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [action, setAction] = useState(0)
  const handleChangeInput = (event, value) => {
    if (event.target.id === "nom")
      setNom(value)
    else if (event.target.id === "dateFin")
      setDateFin(value)
    else if (event.target.id === "dateDebut")
      setDateDebut(value)
    else if (event.target.id === "valeur")
    setValeur(value)

  }

  const updatePromotion = (event, produit) => {
    console.log(produit);
    setNom(produit.nom)
    setDateFin(produit.date_fin)
    setDateDebut(produit.date_debut)
    setValeur(produit.valeur)
    setAction(2)
    setIdToUpdate(produit.id)
    setShowAddModal(true);
  }

  const closeModal = (event) => {
    setNom("")
    setDateDebut("")
    setDateFin("")
    setValeur(0)
    setShowAddModal(false);
  }

  const deletePromotion = (id) => {
    setShowDeleteModal(true)
    setIdToDelete(id)

  }

  const updateOrDeletePromotion = (e)=>{
    if(action == 2){
      updatePromotionContext(idToUpdate,{
        "date_debut":dateDebut,
        "date_exp":dateFin,
        "value":valeur,
        "name":nom
      })
    }
  }

  return (
    <div className="content-wrapper">
      <ContentHeader>Gestion de Promotions</ContentHeader>
      <section className="content">
        <div className={`modal fade ${showDeleteModal ? "show" : ""}`} style={showDeleteModal ? { display: "block", paddingRight: "15px" } : { display: "none" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Confirmer la supprission</h4>
                <button type="button" className="close " data-dismiss="modal" aria-label="Close">
                  <span onClick={e => setShowDeleteModal(false)} aria-hidden="true">×</span>
                </button>
              </div>date_debut
              <div className="modal-body" style={{ display: "flex", justifyContent: "space-evenly" }}>
                <button type="button" style={{ width: "40%" }} className="btn btn-block btn-default" data-dismiss="modal" onClick={e => setShowDeleteModal(false)}>Annuler</button>
                <button onClick={e=>deletePromotionContext(idToDelete)} type="button" style={{ width: "40%" }} className="btn btn-block btn-danger">supprimer</button>
              </div>
            </div>
          </div>
        </div>
        <div className={`modal fade ${showAddModal ? "show" : ""}`} style={showAddModal ? { display: "block", paddingRight: "15px" } : { display: "none" }} id="modal-default">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Ajouter Un Promotion</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span onClick={closeModal} aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <SimpleInputField id="nom" setParentState={handleChangeInput} label="Nom de produit:" placeholder="Nom de produit" type='text' value={nom} />
                <SimpleInputField id="dateDebut" setParentState={handleChangeInput} label="Date de debut:" placeholder="Date de debut" type='date' value={dateDebut} size={60} />
                <SimpleInputField id="dateFin" setParentState={handleChangeInput} label="Date de fin:" placeholder="Date de fin" type='date' value={dateFin} size={60} />
                <SimpleInputField id="valeur" setParentState={handleChangeInput} label="valeur de promotion:" placeholder="valeur de promotion" type='number' step={0.01} value={valeur} />

              </div>

              <div className="modal-footer justify-content-between">
                <button onClick={updateOrDeletePromotion}  type="button" className="btn btn-primary">Enregistrer</button>
              </div>
            </div>data-target="#modal-default
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
                    (promotions instanceof Array && promotions.length > 0) ? <DataTable deleteRow={deletePromotion} updateRow={updatePromotion} data={
                      promotions.map(prom=>{
                        console.log(prom)
                        return {
                          id:prom.id,
                          nom:prom.name,
                          date_debut:prom.date_debut,
                          date_fin:prom.date_exp,
                          valeur:prom.value
                        }
                      })
                    } update={true} _delete={true} /> : "pas des promotions"
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

export default Promotions