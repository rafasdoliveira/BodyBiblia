export default function Data() {
    var data = new Date();
    var dias = new Array(
        'domingo','segunda','terça','quarta','quinta','sexta','sábado'
    );

    ('Hoje é ' + dias[data.getDay()]);
    

}