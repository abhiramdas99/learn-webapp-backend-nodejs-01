## A simple project design to return helloworld in terminal 

-- create a folder <learn-webapp-backend-nodejs-01>

1) run the following command to  make it node backend project
npm init -y 

2) enter to this folder 
cd learn-webapp-backend-nodejs-01 

3) create a file  - index.js and write the code 

4) Install the express dependency 
npm i express

5) then open the package.json file , write the following code there - 
"scripts":{
    "start": "node index.js"
}

6) run the following command to start it 
npm start 

7) add the .gitignore file using below command 
  -> press Ctrl+Shift+P to open the pallet
  -> add gitignore file 
  -> search node gitignore file and add 

8) Now push it git 
  -> git remote add origin git@github.com:abhiramdas99/learn-webapp-backend-nodejs-01.git
  -> git branch -M main
  -> git add .
  -> git commit -m "1st commit"
  -> git push -u origin main


