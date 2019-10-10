## About

Custom Web Storage methods by using cookie. You can set/get/search/remove key value pair by simply calling inbuilt methods.

## How to integrate?

###### Step 1
Clone/Download a script1.js file to your root directory.

###### Step 2
Link this script to index.html

## How to use?

MyStorage object is available globaly which have three usefull methods
  1. setItem()
  2. getItem()
  3. removeItem()
  
> 1. MyStorage.setItem(key,value)
  
- Take key value pair
- Store this pair to cookie
- If key already exists return **FALSE**
- Otherwise return **TRUE**

> 2. MyStorage.getItem(key)
  
- Take a key
- Search value by key 
- If value found return **Value (string)**
- Otherwise return **FALSE** 

> 3. MyStorage.removeItem(key)
  
- Take a key
- Search value by key 
- If value found, remove it and return **TRUE**
- Otherwise return **FALSE** 

## Example

1. Store red color hex code    
    `MyStorage.setItem('red','#ff0000')`

2. Retrive hex code color name    
    `MyStorage.getItem('red')`
    
3. Remove red color    
    `MyStorage.removeItem('red')`
    
