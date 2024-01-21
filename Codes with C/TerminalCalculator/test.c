#include <stdio.h>
#include <cs50.h>
#include <string.h>

int main(void)
{
    string operation = get_string("operation: ");
    string addition = "addition";

    if(strcmp(operation,addition)==0)
    {
        printf("working correctly");
    }
    
}