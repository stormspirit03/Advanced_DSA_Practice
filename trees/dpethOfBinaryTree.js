class TreeNode{
    constructor(val,left,right){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function depthOfBinaryTree(root){
    if(!root) return 0;
    return 1+ Math.max(depthOfBinaryTree(root.left),depthOfBinaryTree(root.right));
}