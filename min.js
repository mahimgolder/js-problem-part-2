const prices = [20000, 16000, 100000, 12000, 30000, 35000];

// এখানে getmin নামের একটি ফাংশন ডিফাইন করা হয়েছে যা numbers নামের একটি প্যারামিটার গ্রহণ করছে।
// numbers হলো সেই অ্যারে যা আমরা ফাংশনে পাঠাতে চাই। তবে, ফাংশনের মধ্যে এখনো কিছু করা হয়নি, তাই এটি ফাঁকা।
function getmin(numbers){  
    let  min = numbers[0];
//for of use kore
    // for(const num of numbers){
    //     if(num < min){
    //         min = num;
    //     }
    // }


// for loop use kore
    for(let i = 1; i < numbers.length; i++){
        if(numbers[i] < min){
            min = numbers[i];
        }
    }
    return min;
}


//এই লাইনে getmin ফাংশনটিকে prices অ্যারে পাস করা হচ্ছে। অর্থাৎ, prices অ্যারেটি numbers প্যারামিটারে প্রবাহিত হচ্ছে।
//ফলস্বরূপ, cheap ভ্যারিয়েবলে সেই ফাংশনের রিটার্ন ভ্যালু সংরক্ষিত হবে। তবে, যেহেতু ফাংশনে কিছু ফেরত দেওয়া হয়নি, cheap এর মান হবে undefined।
const cheap = getmin(prices);    
console.log('cheapest one is :', cheap);