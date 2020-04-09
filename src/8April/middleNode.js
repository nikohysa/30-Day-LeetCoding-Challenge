/**
 * Given a non-empty, singly linked list with head node head, return a middle node of linked list.
 *
 * If there are two middle nodes, return the second middle node.
 *
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
    let slow = head;
    let fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

const ListNode = function (val) {
    this.val = val;
    this.next = null;
};

module.exports = {middleNode, ListNode};
