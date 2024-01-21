#include <stdio.h>
#include <cs50.h>

int main(void)
{
    printf("\nC O N T A C T  I N F O\n");
    string name = get_string("\nFirst name: ");
    string last_name = get_string("Last name: ");
    string email = get_string("E-mail: ");
    string phone_number = get_string("Phone number: ");
    printf("\nY O U R  C O N T A C T  I N F O  I S:\n");
    printf("\nName: %s %s\nE-mail: %s\nPhone number: %s\n", name, last_name, email, phone_number);
}
