function echoType(input) {
    let type = input[0];
   if (typeof(type) !== String || typeof(type) !== Number) {
       console.log('Parameter is not suitable for printing');
   } else {
       console.log(typeof(type));
    }
    console.log(type);
}
echoType([18])