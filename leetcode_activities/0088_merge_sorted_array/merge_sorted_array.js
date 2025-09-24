//define function which accepts two arrrays and two values function merge (nums1, m, nums2, n)
function merge (nums1, m, nums2, n) {
    //define counter variable let count = 0
    let count = 0;
    //while (count < m + n)
    while (count < m + n) {
        //if (nums1[count] != 0 || null) check if the element at count in 1st arr isn't zero or doesn't exist
        if (nums1[count] != 0 || null) {
            //if (nums1[count] <= nums2[count]) check if element at count in 1st arr is less than or equal to the element at count in 2nd arr
                //nums1.splice(count+1, 0, nums2[count]) if so then that means the element in the 2nd array should come after the element in the 1st
            if (nums1[count] <= nums2[count]) nums1.splice(count+1, 0, nums2[count]);
            //nums1.splice(count-1, 0, nums2[count]) other wise it should come before
            else nums1.splice(count-1, 0, nums2[count]);
        }
        //else nums1[count] = nums2[count] if element in first array is = to 0 then replace it with the current element in the 2nd array
        else nums1[count] = nums2[count];
        //counter++ increase the counter before cycling through the loop again
        count++;
    }
}