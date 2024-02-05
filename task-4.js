
// function will take an object as input
function findAddress(obj) {
    // access the elements of the objects and replace the value of missing property as '__'
    const street = obj.street || '__' ;
    const house = obj.house || '__';
    const society = obj.society || '__';
     // format the string as given sample
    return street +',' + house+','+society


}
console.log(findAddress({street:'10', house:'15A', society:'Earth Perfect' }));
console.log(findAddress({street:'10', house:'15A'}));
console.log(findAddress({street:'10' }));