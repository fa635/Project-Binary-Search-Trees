class Node {
    constructor (data, left, right) {
        this.data = data
        this.left = left
        this.right = right
    }
}


class Tree {
    
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
       
        node.right = this.buildTree(arr, mid + 1, end);
        return node;

    }

    constructor (array, n) {

        let noDuplicatesArray = arr.filter(function(value, index, noDuplicatesArray) {
            return noDuplicatesArray.indexOf(value) === index
        })

        mergeSort(noDuplicatesArray)


        let arra = mergeSort(noDuplicatesArray)

        n = noDuplicatesArray.length

        this.node = this.buildTree(arra, 0, n - 1)
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