import React, { useEffect, useState, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Clasificador.css'
import { Grid, Button, Text, Container } from "@nextui-org/react";
import * as mobilenet from "@tensorflow-models/mobilenet";


function Clasificador()  {

    const [isModelLoading, setIsModelLoading] = useState(false)
    const [model, setModel] = useState(null)
    const [imageURL, setImageURL] = useState(null);
    const [results, setResults] = useState([])
    const [history, setHistory] = useState([])

    const imageRef = useRef()
    const textInputRef = useRef()
    const fileInputRef = useRef()

    const loadModel = async () => {
        setIsModelLoading(true)
        try {
            const model = await mobilenet.load()
            setModel(model)
            setIsModelLoading(false)
        } catch (error) {
            console.log(error)
            setIsModelLoading(false)
        }
    }

    const uploadImage = (e) => {
        const { files } = e.target
        if (files.length > 0) {
            const url = URL.createObjectURL(files[0])
            setImageURL(url)
        } else {
            setImageURL(null)
        }
    }

    const identify = async () => {
        textInputRef.current.value = ''
        const results = await model.classify(imageRef.current)
        setResults(results)
    }

    const handleOnChange = (e) => {
        setImageURL(e.target.value)
        setResults([])
    }

    const triggerUpload = () => {
        fileInputRef.current.click()
    }

    useEffect(() => {
        loadModel()
    }, [])

    useEffect(() => {
        if (imageURL) {
            setHistory([imageURL, ...history])
        }
    }, [imageURL])

    if (isModelLoading) {
        return <h2>Cargando Modelo ...</h2>
    }

    return (
        <div>
            <h1>Clasificador</h1>
            <div className='inputHolder'>
                <input type='file' accept='image/*' capture='camera' className='uploadInput' onChange={uploadImage} ref={fileInputRef} />
                <button className='uploadImage' onClick={triggerUpload}>Subiir imagen</button>
                <span className='or'>O</span>
                <input type="text" placeholder='URL de la imagen' ref={textInputRef} onChange={handleOnChange} />
            </div>
            <div className="mainWrapper">
                <div className="mainContent">
                    <div className="imageHolder">
                        {imageURL && <img src={imageURL} alt="Upload Preview" crossOrigin="anonymous" ref={imageRef} />}
                    </div>
                    {results.length > 0 && <div className='resultsHolder'>
                        {results.map((result, index) => {
                            return (
                                <div className='result' key={result.className}>
                                    <span className='name'>{result.className}</span>
                                    <span className='confidence'>Nivel de Confianza: {(result.probability * 100).toFixed(2)}% {index === 0 && <span className='bestGuess'>Mejor suposicion</span>}</span>
                                </div>
                            )
                        })}
                    </div>}
                </div>
                {imageURL && <button className='button' onClick={identify}>Identificar Imagen</button>}
            </div>
            {history.length > 0 && <div className="recentPredictions">
                <h2>Imagenes Recientes</h2>
                <div className="recentImages">
                    {history.map((image, index) => {
                        return (
                            <div className="recentPrediction" key={`${image}${index}`}>
                                <img src={image} alt='Recent Prediction' onClick={() => setImageURL(image)} />
                            </div>
                        )
                    })}
                </div>
            </div>}
        </div>
  )
}

export default Clasificador