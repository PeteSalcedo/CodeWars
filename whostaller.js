function smaller(nums) {
    var i=0;
    var ans=[];
    while(i<nums.length)
    {
        var j=i+1;
        var count=0;
        while(j<nums.length)
        {
            if(nums[i]>nums[j])
            {
                count++;
            }
            j++;
        }
        ans.push(count);
        i++;
    }
    return ans;
}