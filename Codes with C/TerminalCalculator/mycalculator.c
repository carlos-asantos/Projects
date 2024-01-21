#include<stdio.h>
#include<cs50.h>
#include<string.h>

int main(void)
{
    string addition = "addition";
    string subtraction = "subtraction";
    string multiplication = "multiplication";
    string division = "division";
    string remainder = "remainder";

    string operation = get_string("Type in lower case the operation you want: ");

    if(strcmp(addition,operation)==0)
    {
        int x = get_int("x: ");
        int y = get_int("y: ");
        printf("%i\n", x + y);
    }

    if(strcmp(subtraction,operation)==0)
    {
        int x = get_int("x: ");
        int y = get_int("y: ");
        printf("%i\n", x - y);
    }

    if(strcmp(multiplication,operation)==0)
    {
        int x = get_int("x: ");
        int y = get_int("y: ");
        printf("%i\n", x * y);
    }

    if(strcmp(division,operation)==0)
    {
        float x = get_float("x: ");
        float y = get_float("y: ");
        printf("%f\n", x / y);
    }

    if(strcmp(remainder,operation)==0)
    {
        int x = get_int("x: ");
        int y = get_int("y: ");
        printf("%i\n", x % y);
    }

}
