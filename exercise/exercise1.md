# 1 App scripts
Let `url` represent your app script entry point.

## 1.1 
Complete corresponding scripts so that a `url?scenario=login&email=janet@gmail.com` will
get a returned value of
```
 {
        alreadyBorrowed: false,
        alreadyOnHold: false,
        inventory: the C1 cell value of sheet inventoryCount
    }
```

## 1.2 
Complete corresponding scripts so that a `url?scenario=onHold&email=janet@gmail.com&id=411073007` will
get a returned value of
```
{
    expirationDate: the date on hold expired (which is 2 days from the request timestamp date)
}
```
and the same time sheet on hold will have a proper record of janet.
