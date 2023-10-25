// if need element separated level wise in sub arrays then use extra for loop , for the time of lengh of q at start of while loop.
function levelOrderTraversal(root){
    let q=[];
    let result =[];
    if(!root)return [];
    q.push(root);
    while(q.length){
        let level =[];
        let curr = q.shift;
        let qLen= q.length;
        for(let i=0; i<=qLen; i++){
            level.push(curr);  
            if(curr.left) q.push(curr.left);
            if(curr.right) q.push(curr.right);
        }
        if(level) result.push(level); 
    }
    return result;
}