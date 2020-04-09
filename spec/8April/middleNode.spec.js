const {middleNode, ListNode} = require('../../src/8April/middleNode');


describe('Given a non-empty, singly linked list with head node head, return a middle node of linked list.', () => {
    it('[1,2,3,4,5] should return 3', () => {
        const node = new ListNode(1);
        node.next = new ListNode(2);
        node.next.next = new ListNode(3);
        node.next.next.next = new ListNode(4);
        node.next.next.next.next = new ListNode(5);

        expect(middleNode(node).val).toEqual(3);
    });
    it('[1,2,3,4,5,6] should return 4', () => {
        const node = new ListNode(1);
        node.next = new ListNode(2);
        node.next.next = new ListNode(3);
        node.next.next.next = new ListNode(4);
        node.next.next.next.next = new ListNode(5);
        node.next.next.next.next.next = new ListNode(6);

        expect(middleNode(node).val).toEqual(4);
    });
    it('[1] should return 1', () => {
        const node = new ListNode(1);
        expect(middleNode(node).val).toEqual(1);
    });
});
