const formulario= document.getElementById('formulario')


formulario.click =(e) =>{
    e.preventDefault()
    const infousuario= []
    for(const input of e.target.children){
      const obj={}
        obj['tipo'] = input.name
        obj['valor'] = input.value
        infousuario.push(obj)
    }
    localStorage.setItem('infousuario',JSON.stringify(infousuario))
  }
  
  const info= JSON.parse(localStorage.getItem('infousuario'))
  let nombre=''
  let apellido= ''
  info.forEach(dato => {
    if (dato.tipo=== 'name'){
      nombre=dato.valor
    }
    if(dato.tipo==='lastname'){
      apellido= dato.valor
    }
  
  })
  