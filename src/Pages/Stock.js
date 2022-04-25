import { useEffect, useRef, useState } from 'react';
import ContentHeader from '../components/ContentHeader';
import DataTable from '../components/DataTable';
import SimpleInputField from '../components/SimpleInputField';
const Stock = () => {

  useEffect(_ => {
    const script = document.createElement("script");
    script.src = 'dist/js/select.js';
    script.async = true;
    console.log(script)
    document.body.appendChild(script);
  }, [])


  const [data, setData] = useState([
    {
      nom: "Lait 1L",
      prix: 1.35,
      category: "Laiter",
      quantite: 123
    },
    {
      nom: "Couscous 1KG",
      prix: 0.85,
      category: "Ajin",
      quantite: 500

    },
    {
      nom: "Lait 1L",
      prix: 1.35,
      category: "Laiter",
      quantite: 123
    },
    {
      nom: "Couscous 1KG",
      prix: 0.85,
      category: "Ajin",
      quantite: 500

    },
    {
      nom: "Lait 1L",
      prix: 1.35,
      category: "Laiter",
      quantite: 123
    },
    {
      nom: "Couscous 1KG",
      prix: 0.85,
      category: "Ajin",
      quantite: 500

    },
    {
      nom: "Lait 1L",
      prix: 1.35,
      category: "Laiter",
      quantite: 123
    },
    {
      nom: "Couscous 1KG",
      prix: 0.85,
      category: "Ajin",
      quantite: 500

    },
    {
      nom: "Lait 1L",
      prix: 1.35,
      category: "Laiter",
      quantite: 123
    },
    {
      nom: "Couscous 1KG",
      prix: 0.85,
      category: "Ajin",
      quantite: 500

    },
    {
      nom: "Lait 1L",
      prix: 1.35,
      category: "Laiter",
      quantite: 123
    },
    {
      nom: "Couscous 1KG",
      prix: 0.85,
      category: "Ajin",
      quantite: 500

    },
    {
      nom: "Lait 1L",
      prix: 1.35,
      category: "Laiter",
      quantite: 123
    },
    {
      nom: "Couscous 1KG",
      prix: 0.85,
      category: "Ajin",
      quantite: 500

    },
    {
      nom: "Lait 1L",
      prix: 1.35,
      category: "Laiter",
      quantite: 123
    },
    {
      nom: "Couscous 1KG",
      prix: 0.85,
      category: "Ajin",
      quantite: 500

    }
  ])

  const [nom,setNom] = useState("");
  const [prix,setPrix] = useState(0);
  const [category,setCategory] = useState("");
  const [quantite,setQuantite] = useState(0);


  return (
    <div className="content-wrapper">
      <ContentHeader>Gestion de Stock</ContentHeader>
      <section className="content">
        <div className="modal fade" id="modal-default">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Ajouter Un Produit</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
              <SimpleInputField id="nom" label="Nom de produit:"  placeholder="Nom de produit" type='text' />
              <SimpleInputField id="prix" label="Prix de produit:"  placeholder="Prix de produit" type='number' step={0.001} />
              <SimpleInputField id="qty" label="Quantite disponible:"  placeholder="Quantite" type='number' />
              <div className="form-group">
                <label>User Id</label>
                <select
                  className="select2"
                  id="sel"
                  data-placeholder="Select a State"
                  style={{ width: "100%" }}
                >
                  <option>Alabama</option>
                  <option>Alaska</option>
                  <option>California</option>
                  <option>Delaware</option>
                  <option>Tennessee</option>
                  <option>Texas</option>
                  <option>Washington</option>
                </select>
              </div>
              </div>
              <div className="modal-footer justify-content-between">
                <button type="button" className="btn btn-default" data-dismiss="modal">Annuler</button>
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
                    (data instanceof Array && data.length > 0) ? <DataTable data={data} update={true} _delete={true} /> : "pas des produits"
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