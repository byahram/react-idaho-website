# first-react-website

[view my react website]()

<br/><br/>

---

## To set the react environment using [create-react-app](https://create-react-app.dev/)

---

1. Download `node.js` <br/>
   https://nodejs.org/en/ <br/>
   ![이미지](/src/assets/img/readme_0.png) <br/><br/>
2. Download `git` <br/>
   https://git-scm.com/downloads <br/>
   ![이미지](/src/assets/img/readme_00.png) <br/><br/>
3. Use `npx create-react-app [react-folder-name]` to make the react project folder <br/>
   ![이미지](/src/assets/img/readme_1.png) <br/>
   ![이미지](/src/assets/img/readme_4.png) <br/><br/>
4. `npm start` to run the app using vsCode terminal or git bash in the [react-folder-name] project folder <br/>
   ![이미지](/src/assets/img/readme_2.png) <br/><br/>
5. Open `http://localhost:3000` in my web browser <br/>
   ![이미지](/src/assets/img/readme_3.png) <br/><br/>
6. builds the app for production to the build folder using `npm run build` <br/>
   ![이미지](/src/assets/img/readme_5.png) <br/>
   ![이미지](/src/assets/img/readme_6.png)

<br/><br/>

---

## how to use `Prettier` code formatter

---

1. vsCode extension에서 prettier 다운로드 하고 vscode를 껐다가 켠다.
2. 다시 켠 vsCode에서 f1을 눌러 setting.js을 검색해 user형인 setting.json 연다.
3. setting.json에 다음 코드를 추가해준다.

```json
"emmet.includeLanguages": {
    "javascript": "javascriptreact"
},
"editor.defaultFormatter": "esbenp.prettier-vscode", "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"editor.formatOnSave": true,    // react 할거면 활성화 html은 비활성화
```

<br/><br/>

---

## Learn More

---

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/). <br/><br/>
