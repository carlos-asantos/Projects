#include <stdio.h>
#include <cs50.h>
#include <string.h>

int main(void)
{
    //asking the user the operation he wants to do
    string operation = get_string("Type in lower case the operation you want: ");
    //declaring the strings for the operations
    string addition = "addition";
    string subtraction = "subtraction";
    string multiplication = "multiplication";
    string division = "division";
    string remainder = "remainder";

    //using the if statement to set the addition funcionality
    if(strcmp(operation,addition)==0)
    {
        float x = get_float("x: ");
        float y = get_float("y: ");
        printf("%F\n", x + y);
    }

    //using the if statement to set the subtraction funcionality
    if(strcmp(operation,subtraction)==0)
    {
        float x = get_float("x: ");
        float y = get_float("y: ");
        printf("%f\n", x - y);
    }

    //using the if statement to set the multiplication funcionality
    if(strcmp(operation,multiplication)==0)
    {
        float x = get_float("x: ");
        float y = get_float("y: ");
        printf("%f\n", x * y);
    }

    //using the if statement to set the division funcionality
    if(strcmp(operation,division)==0)
    {
        float x = get_float("x: ");
        float y = get_float("y: ");
        printf("%f\n", x / y);
    }

    //using the if statement to set the remainder funcionality
    if(strcmp(operation,remainder)==0)
    {
        int x = get_int("x: ");
        int y = get_int("y: ");
        printf("%i\n", x % y);
    }
}
