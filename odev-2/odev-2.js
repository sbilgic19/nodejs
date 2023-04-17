/*
Post Sıralama ve Post Ekleme
Blog oluşturmaya hazır mısınız? 


Konsol ekranında postlarımızı sıralayalım, sonrasında 
yeni bir post oluşturalım ve 
yeni post ile birlikte postlarımızı tekrar sıralayalım.
*/

const myPosts = [
  {
    id: "1",
    title: "Javascript",
    body: "Lorem ipsum dolar...!",
    date: "2021-01-22",
  },
  {
    id: "2",
    title: "NodeJS",
    body: "Lorem ipsum dolar...!",
    date: "2022-03-13",
  },
  {
    id: "3",
    title: "Async-Await",
    body: "Lorem ipsum dolar...!",
    date: "2023-01-14",
  },
  {
    id: "4",
    title: "Material UI",
    body: "Lorem ipsum dolar...!",
    date: "2023-02-20",
  }
];


const showMyPosts = () => {
    myPosts.map((post) => {
        console.log(post);
    });
}

const addNewPost = (newPost) => {
    
    const promise1 = new Promise((resolve, reject) => {
        myPosts.push(newPost);
        //reject("Bir hata oluştu");
        resolve(myPosts);
    });

    return promise1;
}

async function addAndShowAllPosts() {

    try {
        const posts = await addNewPost(
            {   id: 5, 
                title: "Express JS", 
                body: "Lorem ipsum dolor...!",
                date: "2024-01-29"
            });
        showMyPosts();
    } catch(err) {
        console.log(err);
    }
    
}

addAndShowAllPosts();