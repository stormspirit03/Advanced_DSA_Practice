
/*
          

This problem is nested recursion.  combined with height of the BT and diameter of BT.
There are two major cases either diametr path passes through original root node and second
one where it does not passes through original root node.
so we need to return whichever is max . 
but wait
-when diameter passes through the root  then diameter becomes ( left Height +right Height  something live  /*\ ).
-and when it does not passes through the root node then it's in either right of the root or left of the root. so we take max of 
    (leftDiameter, rightDiameter). 
now  take max of ( when passes through root node , when it does not passes through root node) which is equal to 
                 max( (leftHeight+rightHeight)   , max( leftDiameter , rightDiameter) );   
                 
                 Once you understand this concept the solution is pretty straight forward.
                 Note: for this we will need a helper function which calculates height of BT.
        
 */



class TreeNode{
    constructor(val,left,right){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function depthOfBinaryTree(root){
    function heightOfBinaryTree(root){
        if (!root) return 0;
        return 1 + Math.max(heightOfBinaryTree(root.left), heightOfBinaryTree(root.right));
   } 
   
   var diameterOfBinaryTree = function(root) {
       if(!root) return 0;
       let leftHeight = heightOfBinaryTree(root.left);
       let rightHeight = heightOfBinaryTree(root.right);
       let leftDiameter = diameterOfBinaryTree(root.left);
       let rightDiameter = diameterOfBinaryTree(root.right);
       return Math.max((leftHeight + rightHeight), Math.max(leftDiameter, rightDiameter) );
       
   };
}