This is the solution to a MOEMS "M" middle school math problem.  There
was some debate amongst my son and another student wrt whether the
solution was 32 or 64 so I wrote this for fun as an attempt to solve
the debate!  :)



## Ant Problem

Here's the problem:

In the diagram below, an ant begins at point B (the beginning) and
must walk up the ladder to point E (the end) by traversing the
vertical and/or horizontal lines.  The ant can go up or across, but
not down, nor can it retrace its steps.  How many different ways can
the ant ascend the ladder?

```
11--E--12
 |     |
 9-----10
 |     |
 7-----8
 |     |
 5-----6
 |     |
 3-----4
 |     |
 1--B--2
```



## Spoiler

```
$ node ant.js
{
  '1': [ 3 ],
  '2': [ 4 ],
  '3': [ 4, 5 ],
  '4': [ 3, 6 ],
  '5': [ 6, 7 ],
  '6': [ 5, 8 ],
  '7': [ 8, 9 ],
  '8': [ 7, 10 ],
  '9': [ 10, 11 ],
  '10': [ 9, 12 ],
  '11': [ 'END' ],
  '12': [ 'END' ],
  BEG: [ 1, 2 ]
}
1: 1,3,4,6,5,7,8,10,9,11
2: 1,3,4,6,5,7,8,10,12
3: 1,3,4,6,5,7,9,10,12
4: 1,3,4,6,5,7,9,11
5: 1,3,4,6,8,7,9,10,12
6: 1,3,4,6,8,7,9,11
7: 1,3,4,6,8,10,9,11
8: 1,3,4,6,8,10,12
9: 1,3,5,6,8,7,9,10,12
10: 1,3,5,6,8,7,9,11
11: 1,3,5,6,8,10,9,11
12: 1,3,5,6,8,10,12
13: 1,3,5,7,8,10,9,11
14: 1,3,5,7,8,10,12
15: 1,3,5,7,9,10,12
16: 1,3,5,7,9,11
17: 2,4,3,5,6,8,7,9,10,12
18: 2,4,3,5,6,8,7,9,11
19: 2,4,3,5,6,8,10,9,11
20: 2,4,3,5,6,8,10,12
21: 2,4,3,5,7,8,10,9,11
22: 2,4,3,5,7,8,10,12
23: 2,4,3,5,7,9,10,12
24: 2,4,3,5,7,9,11
25: 2,4,6,5,7,8,10,9,11
26: 2,4,6,5,7,8,10,12
27: 2,4,6,5,7,9,10,12
28: 2,4,6,5,7,9,11
29: 2,4,6,8,7,9,10,12
30: 2,4,6,8,7,9,11
31: 2,4,6,8,10,9,11
32: 2,4,6,8,10,12
```
