#include <stdio.h>
#include <cs50.h>

void print_row(int bricks);

int main(void)
{
    //ask the user the height of the pyramid
    int height;
    do{
      height = get_int("Height: ");
    }
    while(height < 1);

    //make a pyramid of that height
    for(int i = 0; i < height; i++)
    {
        //print the bricks
        print_row(i + 1);

    }

}

void print_row(int bricks)
{
    //print row of bricks
    for(int i = 0; i < bricks; i++)
    {
        printf("#");
    }
    printf("\n");
}
