class Node {
    constructor (data) {
        this.data = data
        this.left = null
        this.right = null
    }
}


class Tree {

    constructor (array, n) {

        let noDuplicatesArray = arr.filter(function(value, index, noDuplicatesArray) {
            return noDuplicatesArray.indexOf(value) === index
        })

        mergeSort(noDuplicatesArray)


        let arra = mergeSort(noDuplicatesArray)

        n = noDuplicatesArray.length

        this.node = this.buildTree(arra, 0, n - 1)
    }
    
    buildTree (arra, start, end) {


        // let noDuplicatesArray = arr.filter(function(value, index, noDuplicatesArray) {
        //     return noDuplicatesArray.indexOf(value) === index
        // })

        // let n = noDuplicatesArray.length

        // mergeSort(noDuplicatesArray)

        // // let start = 0
        // let mid
        // if (mid === undefined) {
        //     end = n - 1
        // }
        

        // let arra = mergeSort(noDuplicatesArray)

        if (start > end)
        {
            return null;
        }
        
        let mid = parseInt((start + end) / 2);
        let node = new Node(arra[mid]);
        
        node.left = this.buildTree(arra, start, mid - 1);
       
        node.right = this.buildTree(arra, mid + 1, end);
        return node;

    }


    insert (node, data) {

        let current = node

        while (current.data !== data) {

            if (current.data < data) {

                if (!current.data < data) {
                    current.right = new Node(data)
                    current = current.right
                }
                else {
                    current = current.right
                }
            }
            else {
                
                if (!current.left) {
                    current.left = new Node(data)
                    current = current.left
                }
                else {
                    current = current.left
                }
            }
        }
        
    }


    deleteItem (node, data) {


        let current = node

        let prev = node

        let thatNode = current

        while (current.data !== data) {

            if (current.data < data) {

                if (!current.data < data) {
                    prev = current
                    current = current.right
                }
                else {
                    prev = current
                    current = current.right
                }
            }
            else {
                
                if (!current.left) {
                    prev = current
                    current = current.left
                }
                else {
                    prev = current
                    current = current.left
                }
            }

            thatNode = current
        }



        //use the delete traversal thing to find the node


        // leaf node, no children
        if (current.left === null && current.right === null) {

            if (current === prev.right) {
                prev.right = null
                return node
            }
            else {
                prev.left = null
                return node
            }

            
        }


        // one child
        else if (current.left !== null && current.right === null) {

            if (current === prev.left) {
                prev.left = current.left
            }
            else if (current === prev.right) {
                prev.right = current.left
            }
        }
        else if (current.left === null && current.right !== null) {

            if (current === prev.left) {
                prev.left = current.right
            }
            else if (current === prev.right) {
                prev.right = current.right
            }

            // current = current.right

            // current.right = null

            // prev.left.right = null
            return node
        }


        // two children
        else if (current.left !== null && current.right !== null) {


            if (current.right.left === null) {
                prev.right = current.right 
                prev.right.left = current.left
                
            }
            else {
                current = current.right

                while (current.left !== null) {
                    prev = current
                    current = current.left
                }

                thatNode.data = current.data
                prev.left = current.right
            }

            


            //current = current.right
        }
    }


    find (data) {

        let current = tree.node

        while (current.data !== data) {

            if (current.data < data) {

                if (!current.data < data) {
                    current = current.right
                }
                else {
                    current = current.right
                }
            }
            else {
                
                if (!current.left) {
                    current = current.left
                }
                else {
                    current = current.left
                }
            }
        }

        return current

    }


    levelOrder () {
        
        if(!tree.node) return []
        const queue = []
        const output = []
        queue.push(tree.node)
        while(queue.length) {
            // Remove all the current nodes in the queue and add each node's children to the queue
            const len = queue.length
            const row = []
            for(let i = 0; i < len; i++) {
                const cur = queue.shift()
                if(cur.left) queue.push(cur.left)
                if(cur.right) queue.push(cur.right)
                // Push the current node data to the row array
                row.push(cur.data)
            }
            // Push the current row array into the output array
            
            output.push(row)
        }
        return output

    }


    inOrder (node) {

        
        const nodes = []
        
        function inOrderTraverse (node) {
            if (node) {
                inOrderTraverse(node.left)
                nodes.push(node.data)
                inOrderTraverse(node.right)
            }
        }
        inOrderTraverse (node)
        
        return nodes

    }


    preOrder (node) {

        const nodes = []

        function preOrderTraverse (node) {
            if (node) {
                nodes.push(node.data)
                preOrderTraverse(node.left)
                preOrderTraverse(node.right)
            }
        }
        preOrderTraverse (node)
        
        return nodes

    }


    postOrder (node) {

        const nodes = []

        function postOrderTraverse (node) {
            if (node) {
                postOrderTraverse(node.left)
                postOrderTraverse(node.right)
                nodes.push(node.data)
            }
        }
        postOrderTraverse (node)
        
        return nodes

    }

    
    height (node) {

        if (node == null) 
            return 0;
          
        else {
            /* compute the depth of each subtree */
            let lDepth = this.height(node.left);
            let rDepth = this.height(node.right);
   
            /* use the larger one */
            if (lDepth > rDepth)
                return (lDepth + 1);
            else
                return (rDepth + 1);
            
        
        }   

    }


    depth (data) {


        let current = tree.node

        while (current.data !== data) {

            if (current.data < data) {

                if (!current.data < data) {
                    current = current.right
                }
                else {
                    current = current.right
                }
            }
            else {
                
                if (!current.left) {
                    current = current.left
                }
                else {
                    current = current.left
                }
            }
        }

        function depthRec (node) {

            if (node == null) 
                return 0;
            
            else {
                /* compute the depth of each subtree */
                let lDepth = depthRec(node.left);
                let rDepth = depthRec(node.right);
    
                /* use the larger one */
                if (lDepth > rDepth)
                    return (lDepth + 1);
                else
                    return (rDepth + 1);
                
            
            }

        }

        return depthRec (current)

    }

    
}





function mergeSort (noDuplicatesArray) {

    if (noDuplicatesArray.length <= 1) {
        return noDuplicatesArray
    }

    const halfIndex = Math.floor(noDuplicatesArray.length / 2)
    const leftArray = noDuplicatesArray.slice(0, halfIndex)
    const rightArray = noDuplicatesArray.slice(halfIndex)

    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(left, right) {
    const result = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
        result.push(left.shift())
        }
        else {
        result.push(right.shift())
        }

    }

    let sortedArray = []
    
    return sortedArray = [...result, ...left, ...right]
}


let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]


const tree = new Tree

// let array = arr.filter(function(value, index, array) {
//     return array.indexOf(value) === index
// })

// console.log(array)


// console.log(tree.buildTree(noDuplicatesArray, start, end))

//root = buildTree(arr, 0, n - 1)

const prettyPrint = (node, prefix = "", isLeft = true) => {

    
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
}


console.log(prettyPrint(tree.node, prefix = "", isLeft = true))

// console.log(tree.insert(tree.node, 2))

console.log(prettyPrint(tree.node, prefix = "", isLeft = true))

console.log(tree.deleteItem(tree.node, 8))

console.log(prettyPrint(tree.node, prefix = "", isLeft = true))

console.log(tree.find(5))

console.log(tree.depth(1))