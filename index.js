var QrCode =require('qrcode');
var { Command } = require('commander');
var program = new Command();



program.option('-o,--outputfile <data>','output the qrcode as image file')
.option('-t, --terminal <data>','print the qrcode on terminal');

program.parse(process.argv);
const options=program.opts();

if(options.outputfile){
    program.argument('filename','enter filename for output').action(function(filename){

    QrCode.toFile(`image/${filename}.png`,`${options.outputfile}`,(err)=>{
    })
})
program.parse(process.argv);

}
if(options.terminal){
    QrCode.toString(`${options.terminal}`,{type:'terminal'},(err,url)=>{
        console.log(url);
    });
}
