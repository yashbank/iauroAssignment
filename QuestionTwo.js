// Step 1: Create a simple Node class to make our linked list
class ListNode {
    constructor(value) {
        this.value = value; // store data (like stage number)
        this.next = null;   // pointer to the next node
    }
}

// Step 2: Function to check if there is a cycle
function hasCycle(head) {
    // If the list is empty or has only one node, it can't have a cycle
    if (head === null || head.next === null) {
        return false;
    }

    // Step 3: Create two pointers (slow and fast)
    let slow = head;
    let fast = head;

    // Step 4: Move through the list
    while (fast !== null && fast.next !== null) {
        slow = slow.next;        // move slow by 1 step
        fast = fast.next.next;   // move fast by 2 steps

        // Step 5: If they ever meet, that means there is a loop
        if (slow === fast) {
            return true;
        }
    }

    // Step 6: If we reach here, fast pointer hit null → no loop
    return false;
}


//lets take example one 
let head = new ListNode(20);
head.next = new ListNode(30);
head.next.next = new ListNode(40);
head.next.next.next = new ListNode(60);
head.next.next.next.next = new ListNode(80);

// Create a cycle (last node points back to 3rd node)
head.next.next.next.next.next = head.next.next;

console.log(hasCycle(head)); // true


// lets take another example
let head2 = new ListNode(6);
head2.next = new ListNode(4);
head2.next.next = new ListNode(2);
head2.next.next.next = new ListNode(8);

console.log(hasCycle(head2)); // false
