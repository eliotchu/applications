import { useState } from "react";
import './Display.css'

function Display(problemLink, difficulty, dataStructure, solutionLink) {
  const [pageNumber, setPageNumber] = useState(1);
  const leetCodeProblems = [
    {
      title: "Two Sum",
      problemLink: "https://leetcode.com/problems/two-sum/",
      difficulty: "Easy",
      dataStructures: ["Array", "Hash Table"],
      solutionLink: "https://www.youtube.com/watch?v=KLlXCFG5TnA"
    },
    {
      title: "Add Two Numbers",
      problemLink: "https://leetcode.com/problems/add-two-numbers/",
      difficulty: "Medium",
      dataStructures: ["Linked List", "Math"],
      solutionLink: "https://www.youtube.com/watch?v=wgFPrzTjm7s"
    },
    {
      title: "Longest Substring Without Repeating Characters",
      problemLink: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      difficulty: "Medium",
      dataStructures: ["Hash Table", "String", "Sliding Window"],
      solutionLink: "https://www.youtube.com/watch?v=wiGpQwVHdE0"
    },
    {
      title: "Median of Two Sorted Arrays",
      problemLink: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      difficulty: "Hard",
      dataStructures: ["Array", "Binary Search", "Divide and Conquer"],
      solutionLink: "https://www.youtube.com/watch?v=LPFhl65R7ww"
    },
    {
      title: "Longest Palindromic Substring",
      problemLink: "https://leetcode.com/problems/longest-palindromic-substring/",
      difficulty: "Medium",
      dataStructures: ["String", "Dynamic Programming"],
      solutionLink: "https://www.youtube.com/watch?v=XYQecbcd6_c"
    },
    {
      title: "Zigzag Conversion",
      problemLink: "https://leetcode.com/problems/zigzag-conversion/",
      difficulty: "Medium",
      dataStructures: ["String"],
      solutionLink: "https://www.youtube.com/watch?v=Q2Tw6gcVEwc"
    },
    {
      title: "Reverse Integer",
      problemLink: "https://leetcode.com/problems/reverse-integer/",
      difficulty: "Medium",
      dataStructures: ["Math"],
      solutionLink: "https://www.youtube.com/watch?v=HAgLH58IgJQ"
    },
    {
      title: "String to Integer (atoi)",
      problemLink: "https://leetcode.com/problems/string-to-integer-atoi/",
      difficulty: "Medium",
      dataStructures: ["String"],
      solutionLink: "https://www.youtube.com/watch?v=twAv6K5jGG4"
    },
    {
      title: "Palindrome Number",
      problemLink: "https://leetcode.com/problems/palindrome-number/",
      difficulty: "Easy",
      dataStructures: ["Math"],
      solutionLink: "https://www.youtube.com/watch?v=0nVYiE2cMfw"
    },
    {
      title: "Regular Expression Matching",
      problemLink: "https://leetcode.com/problems/regular-expression-matching/",
      difficulty: "Hard",
      dataStructures: ["String", "Dynamic Programming", "Recursion"],
      solutionLink: "https://www.youtube.com/watch?v=l3hda49XcDE"
    },
    {
      title: "Container with Most Water",
      problemLink: "https://leetcode.com/problems/container-with-most-water/",
      difficulty: "Medium",
      dataStructures: ["Array", "Two Pointers", "Greedy"],
      solutionLink: "https://www.youtube.com/watch?v=UuiTKBwPgAo"
    },
    {
      title: "Integer to Roman",
      problemLink: "https://leetcode.com/problems/integer-to-roman/",
      difficulty: "Medium",
      dataStructures: ["Hash Table", "Math", "String"],
      solutionLink: "https://www.youtube.com/watch?v=ohBNdSJyLh8"
    },
    {
      title: "Roman to Integer",
      problemLink: "https://leetcode.com/problems/roman-to-integer/",
      difficulty: "Easy",
      dataStructures: ["Hash Table", "Math", "String"],
      solutionLink: "https://www.youtube.com/watch?v=3jdxYj3DD98"
    },
    {
      title: "Longest Common Prefix",
      problemLink: "https://leetcode.com/problems/longest-common-prefix/",
      difficulty: "Easy",
      dataStructures: ["String"],
      solutionLink: "https://www.youtube.com/watch?v=0sWShKIJoo4"
    },
    {
      title: "3Sum",
      problemLink: "https://leetcode.com/problems/3sum/",
      difficulty: "Medium",
      dataStructures: ["Array", "Two Pointers", "Sorting"],
      solutionLink: "https://www.youtube.com/watch?v=jzZsG8n2R9A"
    },
    {
      title: "3Sum Closest",
      problemLink: "https://leetcode.com/problems/3sum-closest/",
      difficulty: "Medium",
      dataStructures: ["Array", "Two Pointers", "Sorting"],
      solutionLink: "https://www.youtube.com/watch?v=BSLr6wQSBLI"
    },
    {
      title: "Letter Combinations of a Phone Number",
      problemLink: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
      difficulty: "Medium",
      dataStructures: ["Hash Table", "String", "Backtracking"],
      solutionLink: "https://www.youtube.com/watch?v=0snEunUacZY"
    },
    {
      title: "4Sum",
      problemLink: "https://leetcode.com/problems/4sum/",
      difficulty: "Medium",
      dataStructures: ["Array", "Two Pointers", "Sorting"],
      solutionLink: "https://www.youtube.com/watch?v=4ggF3tXIAp0"
    },
    {
      title: "Remove Nth Node From End of List",
      problemLink: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
      difficulty: "Medium",
      dataStructures: ["Linked List", "Two Pointers"],
      solutionLink: "https://www.youtube.com/watch?v=XVuQxVej6y8"
    },
    {
      title: "Valid Parentheses",
      problemLink: "https://leetcode.com/problems/valid-parentheses/",
      difficulty: "Easy",
      dataStructures: ["String", "Stack"],
      solutionLink: "https://www.youtube.com/watch?v=WTzjTskDFMg"
    },
    {
      title: "Merge Two Sorted Lists",
      problemLink: "https://leetcode.com/problems/merge-two-sorted-lists/",
      difficulty: "Easy",
      dataStructures: ["Linked List", "Recursion"],
      solutionLink: "https://www.youtube.com/watch?v=XIdigk956u0"
    },
    {
      title: "Generate Parentheses",
      problemLink: "https://leetcode.com/problems/generate-parentheses/",
      difficulty: "Medium",
      dataStructures: ["String", "Dynamic Programming", "Backtracking"],
      solutionLink: "https://www.youtube.com/watch?v=s9fokUqJ76A"
    },
    {
      title: "Merge K Sorted Lists",
      problemLink: "https://leetcode.com/problems/merge-k-sorted-lists/",
      difficulty: "Hard",
      dataStructures: ["Linked List", "Divide and Conquer", "Heap (Priority Queue)", "Merge Sort"],
      solutionLink: "https://www.youtube.com/watch?v=q5a5OiGbT6Q"
    },
    {
      title: "Swap Nodes in Pairs",
      problemLink: "https://leetcode.com/problems/swap-nodes-in-pairs/",
      difficulty: "Medium",
      dataStructures: ["Linked List", "Recursion"],
      solutionLink: "https://www.youtube.com/watch?v=9Kc0eZBGLw0"
    },
    {
      title: "Reverse Linked List",
      problemLink: "https://leetcode.com/problems/reverse-linked-list/",
      difficulty: "Easy",
      dataStructures: ["Linked List"],
      solutionLink: "https://www.youtube.com/watch?v=G0_I-ZF0S38"
    },
    {
      title: "Binary Tree Inorder Traversal",
      problemLink: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
      difficulty: "Easy",
      dataStructures: ["Tree", "Stack", "Recursion"],
      solutionLink: "https://www.youtube.com/watch?v=wlKQTZx2erQ"
    },
    {
      title: "Symmetric Tree",
      problemLink: "https://leetcode.com/problems/symmetric-tree/",
      difficulty: "Easy",
      dataStructures: ["Tree", "Recursion", "Queue"],
      solutionLink: "https://www.youtube.com/watch?v=eH6h7TloAk8"
    },
    {
      title: "Maximum Depth of Binary Tree",
      problemLink: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      difficulty: "Easy",
      dataStructures: ["Tree", "Recursion"],
      solutionLink: "https://www.youtube.com/watch?v=hTM3phVI6YQ"
    },
    {
      title: "Construct Binary Tree from Preorder and Inorder Traversal",
      problemLink: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
      difficulty: "Medium",
      dataStructures: ["Tree", "Array", "Recursion"],
      solutionLink: "https://www.youtube.com/watch?v=ihj4IQGZ2zc"
    },
    {
      title: "Unique Binary Search Trees",
      problemLink: "https://leetcode.com/problems/unique-binary-search-trees/",
      difficulty: "Medium",
      dataStructures: ["Tree", "Dynamic Programming"],
      solutionLink: "https://www.youtube.com/watch?v=Ox0TenN3Zpg"
    },
    {
      title: "Number of Islands",
      problemLink: "https://leetcode.com/problems/number-of-islands/",
      difficulty: "Medium",
      dataStructures: ["Array", "DFS", "BFS", "Union Find"],
      solutionLink: "https://www.youtube.com/watch?v=pV2kpPD66nE"
    },
    {
      title: "Course Schedule",
      problemLink: "https://leetcode.com/problems/course-schedule/",
      difficulty: "Medium",
      dataStructures: ["Graph", "DFS", "BFS", "Topological Sort"],
      solutionLink: "https://www.youtube.com/watch?v=kXy0ABd1vwo"
    },
    {
      title: "Valid Sudoku",
      problemLink: "https://leetcode.com/problems/valid-sudoku/",
      difficulty: "Medium",
      dataStructures: ["Array", "Hash Set"],
      solutionLink: "https://www.youtube.com/watch?v=TjFXEUCMqI8"
    },
    {
      title: "Spiral Matrix",
      problemLink: "https://leetcode.com/problems/spiral-matrix/",
      difficulty: "Medium",
      dataStructures: ["Array"],
      solutionLink: "https://www.youtube.com/watch?v=BJnMZNwUk1M"
    },
    {
      title: "Jump Game",
      problemLink: "https://leetcode.com/problems/jump-game/",
      difficulty: "Medium",
      dataStructures: ["Array", "Greedy"],
      solutionLink: "https://www.youtube.com/watch?v=Yan0cv2cLy8"
    },
    {
      title: "Merge Intervals",
      problemLink: "https://leetcode.com/problems/merge-intervals/",
      difficulty: "Medium",
      dataStructures: ["Array", "Sorting"],
      solutionLink: "https://www.youtube.com/watch?v=44H3cEC2fFM"
    },
    {
      title: "Insert Interval",
      problemLink: "https://leetcode.com/problems/insert-interval/",
      difficulty: "Medium",
      dataStructures: ["Array"],
      solutionLink: "https://www.youtube.com/watch?v=A8NUOmlwOlM"
    },
    {
      title: "LRU Cache",
      problemLink: "https://leetcode.com/problems/lru-cache/",
      difficulty: "Medium",
      dataStructures: ["Hash Map", "Linked List", "Design"],
      solutionLink: "https://www.youtube.com/watch?v=7ABFKPK2hD4"
    },
    {
      title: "Find Minimum in Rotated Sorted Array",
      problemLink: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
      difficulty: "Medium",
      dataStructures: ["Array", "Binary Search"],
      solutionLink: "https://www.youtube.com/watch?v=JZJzU0jmKoM"
    },
    {
      title: "Maximal Rectangle",
      problemLink: "https://leetcode.com/problems/maximal-rectangle/",
      difficulty: "Hard",
      dataStructures: ["Array", "Stack", "Dynamic Programming"],
      solutionLink: "https://www.youtube.com/watch?v=V9_75cmJjwY"
    }, 
    {
      title: "Word Search",
      problemLink: "https://leetcode.com/problems/word-search/",
      difficulty: "Medium",
      dataStructures: ["Array", "Backtracking"],
      solutionLink: "https://www.youtube.com/watch?v=pfiQ_PS1g8E"
    },
    {
      title: "Sliding Window Maximum",
      problemLink: "https://leetcode.com/problems/sliding-window-maximum/",
      difficulty: "Hard",
      dataStructures: ["Array", "Heap", "Deque"],
      solutionLink: "https://www.youtube.com/watch?v=DfljaUwZsOk"
    },
    {
      title: "Word Ladder",
      problemLink: "https://leetcode.com/problems/word-ladder/",
      difficulty: "Hard",
      dataStructures: ["Hash Set", "Breadth-First Search"],
      solutionLink: "https://www.youtube.com/watch?v=h9iTnkgv05E"
    },
    {
      title: "Clone Graph",
      problemLink: "https://leetcode.com/problems/clone-graph/",
      difficulty: "Medium",
      dataStructures: ["Graph", "DFS", "BFS"],
      solutionLink: "https://www.youtube.com/watch?v=f2EfGComRKM"
    },
    {
      title: "Graph Valid Tree",
      problemLink: "https://leetcode.com/problems/graph-valid-tree/",
      difficulty: "Medium",
      dataStructures: ["Graph", "Union Find", "DFS", "BFS"],
      solutionLink: "https://www.youtube.com/watch?v=bXsUuownnoQ"
    },
    {
      title: "Reverse Bits",
      problemLink: "https://leetcode.com/problems/reverse-bits/",
      difficulty: "Easy",
      dataStructures: ["Bit Manipulation"],
      solutionLink: "https://www.youtube.com/watch?v=UcoN6UjAI64"
    },
    {
      title: "Maximum Product Subarray",
      problemLink: "https://leetcode.com/problems/maximum-product-subarray/",
      difficulty: "Medium",
      dataStructures: ["Array", "Dynamic Programming"],
      solutionLink: "https://www.youtube.com/watch?v=lXVy6YWFcRM"
    },
    {
      title: "House Robber",
      problemLink: "https://leetcode.com/problems/house-robber/",
      difficulty: "Medium",
      dataStructures: ["Array", "Dynamic Programming"],
      solutionLink: "https://www.youtube.com/watch?v=73r3KWiEvyk"
    },
    {
      title: "Minimum Window Substring",
      problemLink: "https://leetcode.com/problems/minimum-window-substring/",
      difficulty: "Hard",
      dataStructures: ["Hash Table", "Sliding Window"],
      solutionLink: "https://www.youtube.com/watch?v=eS6PZLjoaq8"
    }
  ];
  

  let pages;
  // function displayArray(){
  //   if(array.length > 0){

  //   }
  // }

  function handleIncrement(direction) {
    if (direction === "next") {
      setPageNumber(pageNumber + 1);
    } else if (direction === "back") {
      if (pageNumber > 1) {
        setPageNumber(pageNumber - 1);
      }
    }
  }

  function handleLastPage(){
    if ((leetCodeProblems.length % 20) !== 0){
      pages = Math.floor(leetCodeProblems.length / 20) + 1;
    }else{
      pages = leetCodeProblems.length / 20;
    }
  }

  handleLastPage()

  return (
    <>
      <div class="display">
        <table class="leet">
          <thead class="table-top">
            <tr class="table-titles">
              <th class="table-headings">Problem</th>
              <th class="table-headings">Difficulty</th>
              <th class="table-headings">Data Strucutres</th>
              <th class="table-headings">Video Solution</th>
            </tr>
          </thead>
          <tbody class="table-body">
            <tr class="table-records">
            {leetCodeProblems.slice((pageNumber - 1) * 20, pageNumber * 20).map((problem, index) => (
              <tr key={index}>
                <td><a href={problem.problemLink}>{problem.title}</a></td>
                <td>{problem.difficulty}</td>
                <td>{problem.dataStructures.join(", ")}</td>
                <td><a href={problem.solutionLink}>View Solution</a></td>
              </tr>
            ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div class="page">
      <button onClick={() => handleIncrement("back")} id="back" disabled={pageNumber === 1}>
        &lt; Back
      </button>
      <button onClick={() => handleIncrement("next")} id="next" disabled={pageNumber === pages}>
        Next &gt;
      </button>
      <p>Current Page: {pageNumber}</p>
      </div>
    </>
  );
}

export default Display;
