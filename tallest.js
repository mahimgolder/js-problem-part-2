
function getMax(heights){
    let max =heights[0];
    for(let i = 1; i < heights.length; i++ ){
        if(heights[i] > max){
            max = heights[i];
        }
    }
    return max;
}
const heights =[65, 66, 64, 72, 78, 60, 65, 66];
const max = getMax(heights);
console.log('max value is :', max );

// -----------****-----------
