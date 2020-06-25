// istenen değer dizide bir değere denk veya büyükse sonuç yazılıcak
var searchInsert = function(nums, target) {
    for (let i=0; i < nums.length; i++){
      if (nums[i] === target){
        console.log("değer bulundu")
        return i
      } 
    }
    // 0 istendiği zaman 
      for (let j= 0; j<nums.length;j++){
          if (target === 0){
            console.log("0 yazıldı")
              return 0;
          } 
      }
      return nums.length
  };