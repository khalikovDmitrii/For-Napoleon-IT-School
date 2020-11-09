#include <stdio.h>
#include <conio.h>
#include <math.h>

int main(void) {
	int a, a1, a2, a3, a4;

	printf("a (<10000) = ");
	scanf_s("%i", &a);

	if (a < 10000) {
		a1 = a / 1000;
		a2 = (a / 100) % 10;
		a3 = (a / 10) % 10;
		a4 = a % 10;
		if (a1 == a4 && a2 == a3) {
			printf("Число является палиндромом");
		}
		else {
			printf("Число не является палиндромом");
		}
	}
	else {
		printf("Число должно быть <10000");
	}

	_getch();
	return 0;
}
