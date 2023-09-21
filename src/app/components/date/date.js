'use client'

import React, { useState, useEffect } from 'react';

export default function Data() {
  const [dataAtual, setDataAtual] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDataAtual(new Date());
    }, 1000); // Atualiza a cada 1000 milissegundos (1 segundo)

    // Limpa o intervalo quando o componente é desmontado para evitar vazamentos de memória
    return () => clearInterval(intervalId);
  }, []);

  const dia = dataAtual.getDate().toString().padStart(2, '0');
  const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
  const ano = dataAtual.getFullYear();
  const hours = dataAtual.getHours().toString().padStart(2, '0');
  const minutes = dataAtual.getMinutes().toString().padStart(2, '0');
  const seconds = dataAtual.getSeconds().toString().padStart(2, '0');

  return (
    <div>
      {`${dia}/${mes}/${ano} - ${hours}:${minutes}:${seconds}`}
    </div>
  );
}