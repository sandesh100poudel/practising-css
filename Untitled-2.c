#inlcude<stdio.h>
void main()
{
    FILE *fp;
    int roll;
    char name  [30];
    float per;
    fp=fopen("info.txt","r");
    printf("\nData from the file\n")
    while((fscanf(fp,%d\t%s\t%f",&roll,name,&per))!EOF)
    printf("\n%d\t%s\t%f",roll,name,per);
    fclose(fp);
}