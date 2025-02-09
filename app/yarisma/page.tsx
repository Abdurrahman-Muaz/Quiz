"use client";

import { useState } from "react";
import SecenekButon from "./SecenekButon";
import veri from "./veri";



export default function Page() {
  const [puan, puanGuncelle] = useState(0); // puan state'i ve puanGuncelle fonksiyonu
  const [can, canGuncelle] = useState(3); // can state'i ve canGuncelle fonksiyonu
  const [dogruIndex, dogruIndexGuncelle] = useState(null); // doğruIndex state'i ve dogruIndexGuncelle fonksiyonu
  const [yanlisIndex, yanlisIndexGuncelle] = useState(null); // yanlisIndex state'i ve yanlisIndexGuncelle fonksiyonu

  // Kullanıcının seçim yapmasını sağlayan fonksiyon
  function secimYap(indeks) {
    // Kullanıcının seçtiği seçenek doğru cevap mı kontrol et
    if (veri.dogruCevapIndeks === indeks) {
      // Doğru cevap ise
      puanGuncelle(puan + 5); // Doğru cevap ise puanı 5 arttır
    } else {
      // yanlış cevap ise
      yanlisIndexGuncelle(indeks); // Yanlış cevabın indeksini güncelle
      canGuncelle(can - 1); // Yanlış cevap ise canı 1 azalt
    }

    dogruIndexGuncelle(veri.dogruCevapIndeks); // Doğru cevabın indeksini güncelle
  }

  return (
    <main className="p-8 flex flex-col items-center justify-center h-screen relative">
      <div id="oyun-bilgi" className="absolute top-8 right-8 flex gap-6">
        <div>
          Puan: <span className="border rounded-lg p-3">{puan}</span>
        </div>
        <div>
          Can: <span className="border rounded-lg p-3">{can}</span>
        </div>
      </div>

      <section className="flex flex-col items-center justify-center">
        <p className="mb-8 text-4xl">{veri.soru}</p>

        <div className="flex flex-col items-center justify-center gap-4">


            {veri.secenekler.map((secenek,indeks)=> (

                <SecenekButon key={indeks} secenek={secenek} indeks={indeks} secimYap={secimYap} dogruIndex={dogruIndex} yanlisIndex={yanlisIndex} />

            ))}

            


           



        </div>
      </section>
    </main>
  );
}
