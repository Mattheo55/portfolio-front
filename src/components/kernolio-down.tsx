"use client";

/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function KernolioDown() {
    const handleReloadWindow = () => {
        window.location.reload();
    }

  return (
    <div className="w-[75%] p-10 rounded-2xl mt-5 bg-gray-100 shadow-lg flex flex-col gap-4">
        <p className='text-5xl flex gap-5'>
            <span>:(</span>
            <span>500</span>
        </p>
        <div className="flex flex-col gap-4 text-lg text-gray-700">
            <p className="text-2xl">Votre navigation a rencontré un problème : Kernolio est down.</p>
            
            <p>
                Nous procédons actuellement à la recherche de cette URL dans les abysses de ce site internet, mais il semblerait qu'elle n'existe pas ou plus. 
                <br/>
                <span className="font-mono text-sm text-gray-500 mt-2 block">
                  100% d'incompréhension achevée
                </span>
            </p>

            <p className="font-mono text-sm">Pour en savoir plus, vous pouvez rechercher cette erreur en ligne : <span className="font-bold">KERNOLIO_DOWN</span></p>
        </div>

        <div className="mt-4">
            <button onClick={handleReloadWindow} className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300 inline-block" >
                Redémarrer (Recharger la page)
            </button>
        </div>
    </div>
  )
}
