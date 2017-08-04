// A C program for Build a bridge challenge
#include<stdio.h>
#include<stdlib.h>

struct Node 
{
int data;
struct Node *next;
};

struct Node* head;

//This function creates a linked list with T elements
void createList(int T){
	int i, size = T;
	struct Node* temp = malloc(sizeof(struct Node));
	head = temp;

	for(i=0;i<size;i++){
	    temp->data = i+1;
	    temp->next = i < size - 1 ? malloc(sizeof(struct Node)) : NULL;
	    temp = temp->next;
	}


}

//This function takes the head node and insert to the end.

void changeList(){
	struct Node *toLast; //To hold head
	struct Node *temp; //To traverse the list
	toLast = head;

	head = head->next; //Make second head

	toLast->next = NULL; //Make old head point to NULL
	//Traversing began
	temp = head;
	//Traverse to the last node
    while(temp->next != NULL)
        temp = temp->next;
    temp->next = toLast;//Now the old head become new last

}

// This function prints contents of linked list starting from 
// the given node
void printList(struct Node *n)
{
while (n != NULL)
{
	printf("%d\n", n->data);
	n = n->next;
}
}

int main()
{
int T,N;
scanf("%d", &T);
scanf("%d", &N);
createList(T);
for(int i=T;i<N;i++)
	changeList();

printList(head);

return 0;
}
 