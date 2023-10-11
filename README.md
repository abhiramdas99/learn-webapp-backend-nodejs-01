## A simple project design to return Hello world in terminal 

1. create a folder 
  ```git
 mkdir  learn-webapp-backend-nodejs-01
 cd learn-webapp-backend-nodejs-01
```

2. run the following command to  make it node backend project
```git
npm init -y 
```
3.  open vss 

4.  create a file  - index.js and write the code  in ide

5. Install the express dependency within the project folder
```git
npm i express
```
6. then open the package.json file , write the following code there - 
```git
"scripts":{
    "start": "node index.js"
}
```
7. run the following command to start it 
```git
npm start 
```
8. press Ctrl+Shift+P to open the pallet and add the .gitignore file as following instruction -

  * press Ctrl+Shift+P to open the pallet
  * add gitignore file 
  * search node gitignore file and add 

10. Now push it git
```git
  git remote add origin git@github.com:abhiramdas99/learn-webapp-backend-nodejs-01.git
  git branch -M main
  git add .
  git commit -m "1st commit"
  git push -u origin main
```


