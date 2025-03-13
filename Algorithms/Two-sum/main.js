let nums = [2, 7, 11, 15];
let target = 9;

function twoSum(nums, target) 
{
    let map = new Map();

    for(let i =0; i <= nums.length -1 ; i++)
    {
        let diff = target - nums[i];
        
        if(map.has(diff))
        {
            return [map.get(diff), i];
        }
        map.set(nums[i], i)
    }
};

//Another solution

var twoSum = function(nums, target) {
    for(i = 0; i < nums.length; i++){
        for(j = i +1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                let number = [];
                number.push(i);
                number.push(j);
                return number ;
            }
        }
    }
};
 