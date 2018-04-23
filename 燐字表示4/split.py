from matplotlib.image import imread
import matplotlib.pyplot as plt
import numpy as np
linziList1 = [
	"互","文","","","","雪","夏","","","","","","春","","","","","","","","","","","","","定","","軟","豊","","","","","圧","","包","","","門","傷","棚","寝","綿","","少","反","","","血","","","","","琴","","煙","","耳","","","","","十","道","","","","","","","","","","","","","","","","","","","","","","","","","","近","","","","平","","欽","夘","布","械","函","","","岩","禦","","","疲","","耒","貓","","","柔","","","","聯","","","","","棉","箏","","","","","","","","","","","","","","","",""]


t1 = [[  2.48750000e+02,   8.14473684e+01,   8.33333333e-02],
 [  3.05000000e+02,  -1.05263158e-01,   1.16166667e+02]];


def main():
	foo('img1.png',linziList1,t1)

def foo(path,list_,t):
	A = imread(path)
	for i in range(len(list_)):
		save(t,A,int(i/20),i%20,list_[i]);


# ith row, jth column
def save(t,A,i,j,name):
	if name == "":
		return
	I = int(t[0][0] + t[0][1]*j + t[0][2]*i)
	J = int(t[1][0] + t[1][1]*j + t[1][2]*i)
	B = A[J:J+81,I:I+85]
	plt.imsave('../燐字画像6/'+name + '.png', B)
	print(name)

if __name__ == '__main__':
    main()
