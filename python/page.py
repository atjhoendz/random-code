import math

ids = [1,2,3,4,5]

batch_size = 2
total_page = int(math.ceil(len(ids)/batch_size))
curr_page = 0
next_page = batch_size


print("tot: ", total_page)
for i in range(total_page):
    print("i ", i)
    print("curr: ", curr_page)
    print("next: ", next_page)
    curr_ids = ids[curr_page:next_page] 

    # reindex
    print(curr_ids)

    curr_page = next_page 
    next_page += batch_size

