const R4L = {
  name:"R4L", type:"abgang", echo:true,
  run(pxOut){
    const reversed = pxOut.text.split('').reverse().join('');
    return {
      move:"R4L", action:"abgang", echo:true,
      role:pxOut.role, text:pxOut.text,
      echoText: pxOut.text + " | " + reversed,
      reversed, timestamp: new Date().toISOString(),
      sector: 81 // 81 voll → 82=VOID
    }
  }
}
