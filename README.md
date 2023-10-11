## A simple project design to return helloworld in terminal 

1. create a folder <learn-webapp-backend-nodejs-01>

2. run the following command to  make it node backend project
npm init -y 

3.  enter to this folder 
cd learn-webapp-backend-nodejs-01 

4.  create a file  - index.js and write the code 

5. Install the express dependency 
npm i express

6. then open the package.json file , write the following code there - 
"scripts":{
    "start": "node index.js"
}

7. run the following command to start it 
npm start 

8. add the .gitignore file using below command 
  -> press Ctrl+Shift+P to open the pallet
  -> add gitignore file 
  -> search node gitignore file and add 

9. Now push it git
```git
  git remote add origin git@github.com:abhiramdas99/learn-webapp-backend-nodejs-01.git
  git branch -M main
  git add .
  git commit -m "1st commit"
  git push -u origin main
```


