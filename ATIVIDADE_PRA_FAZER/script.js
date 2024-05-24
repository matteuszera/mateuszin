
    
    const formulario = document.querySelector("#formulario_aluno");

     
    formulario.addEventListener("submit", function(event) {
       
        event.preventDefault();

        
        const nome = document.querySelector("#nome").value;
        const nota1 = parseFloat(document.querySelector("#nota1").value);
        const nota2 = parseFloat(document.querySelector("#nota2").value);
        const nota3 = parseFloat(document.querySelector("#nota3").value);
        const nota4 = parseFloat(document.querySelector("#nota4").value);

        
        let media = (nota1 + nota2 + nota3 + nota4) / 4;

        
        let tabela = document.querySelector("#corpo_tabela");

        
        let linha_tabela = tabela.insertRow();

       
        let celulaNome = linha_tabela.insertCell(0);
        let celulaNota1 = linha_tabela.insertCell(1);
        let celulaNota2 = linha_tabela.insertCell(2);
        let celulaNota3 = linha_tabela.insertCell(3);
        let celulaNota4 = linha_tabela.insertCell(4);
        let celulaMedia = linha_tabela.insertCell(5);

        
        celulaNome.innerHTML = nome;
        celulaNota1.innerHTML = nota1;
        celulaNota2.innerHTML = nota2;
        celulaNota3.innerHTML = nota3;
        celulaNota4.innerHTML = nota4;
        celulaMedia.innerHTML = media.toFixed(2);

        
        document.querySelector("#formulario_aluno").reset();
    });

