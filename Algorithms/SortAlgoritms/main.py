def quicksort(array):
    less = []
    equal = []
    greater = []

    if len(array) > 1:
        pivot = array[0]
        for x in array:
            if x < pivot:
                less.append(x)
            elif x == pivot:
                equal.append(x)
            elif x > pivot:
                greater.append(x)
        return sorted(less)+equal+sorted(greater)  
    else:
        return array

test = [21, 4, 1, 3, 9, 20, 25, 6, 21, 14]
print quicksort(test)

#result [1, 3, 4, 6, 9, 14, 20, 21, 21, 25]
