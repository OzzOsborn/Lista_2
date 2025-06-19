let sprompt = require('prompt-sync')()

let data = Array()

do{
stringDate = sprompt('Insira uma data | [dd/mm/aaaa]: ')
data = stringDate.split('/')

if(data.length < 3 || data[2].length > 4)
    console.log('Formato de data inválida!')

}while(data.length < 3 || data[2].length > 4)

if(DataEhValida(data[0], data[1], data[2]))
    console.log('Data válida')
else 
    console.log('Dara inválida')

function DataEhValida(dia, mês, ano){
    if(mês == 2)
        if(!(ano % 400))
            return AnoBissexto(dia)
        else
            if(dia <= 28 && dia >= 1)
                return true
            else 
                return false
    else
        return MesTrinta(dia, mês)
}

function AnoBissexto(dia){
        if( dia >= 1 && dia <= 29)
            return true
        else 
            return false
}

function MesTrinta(dia, mês){
    const mesesTrintas = ['4', '6', '9', '11']

    if (mês in mesesTrintas)
        if(dia >= 1 && dia <= 30)
            return true
        else
            return false


    if(dia >= 1 && dia <= 31) 
        return true 
    else
        return false
}