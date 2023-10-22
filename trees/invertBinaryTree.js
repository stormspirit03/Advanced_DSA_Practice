

// swap right and left nodes 
class TreeNode{
    constructor(val,left,right){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function invertBT(root){
    if(!root) return null;

    // swap right with left
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    // recursion
    invertBT(root.left);
    invertBT(root.right);
    return root;
}