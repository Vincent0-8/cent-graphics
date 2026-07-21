import { useState } from "react";
import palettes from "../data/palettes";
import "./Collection.css"



function Collection() {

    const [copiedHex, setCopiedHex] = useState(null); 
    const copyHexCode = (hex) => {
        navigator.clipboard.writeText(hex)
        setCopiedHex(hex)
        setTimeout(() => setCopiedHex(null), 1500)
    }

   const [savedPalettes, setSavedPalettes] = useState(
  JSON.parse(localStorage.getItem('saved-palettes')) || []
)
    const allPalettes = palettes.flatMap(edition => edition.palettes)
    const collectionPalettes = allPalettes.filter(p => savedPalettes.includes(p.id))

    /// function untuk menghapus palette dari localStorage
const handleRemove = (paletteId) => {
  const updated = savedPalettes.filter(id => id !== paletteId)
  setSavedPalettes(updated)
  localStorage.setItem('saved-palettes', JSON.stringify(updated))
}
    return (
        <main>
            <h1>Collection</h1>

             {collectionPalettes.map(p => (
                <div key={p.id} className="palette-card">
                    <p className="palette-name">{p.name}</p>
                    <button className={`palette-del-button ${palettes.editionClass}`} onClick={() => handleRemove(p.id)}>Remove from Collection</button>
                    
                    <div className="palette-colors" style={{ display: "flex" }}>
                        {p.colors.map(color => (
                            <div key={color} className="color-item">
                                <div style={{ width: "60px", height: "60px", backgroundColor: color, borderRadius: "8px", border: "2px solid white" }}></div>
                                <p className="hex-code" onClick={() => copyHexCode(color)}>{ copiedHex === color ? "Copied!" : color}</p>
                            </div>
                        ))}
                    </div>
                  
                    
                </div>
            ))}
        </main>
    )
}

export default Collection