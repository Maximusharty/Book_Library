books_Array=[];
function Book(title,author,pages,isRead){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isRead=isRead;
    return this;
}
/*
function addBooktoLibrary(){
    const title=prompt("What is the title of the book?");
    const author=prompt("Who is the author of the book?");
    const pages=prompt("How many pages does this book contain?");
    const status=Boolean(prompt("Have you read or not? "));
    const book1=new Book(title,author,pages,status);
    books_Array.push(book1);
    console.log(books_Array);
  
}
addBooktoLibrary();
 author=[];
const author1=books_Array.forEach((element)=>{
    return author.push(element.author);
}
)
console.log(author);*/



const book_title=document.querySelector('#title');
const book_author=document.querySelector('#author');
const no_of_pages=document.querySelector('#pages');
const btn=document.querySelector('#submit');
const book1=new Book('Atomic Habits','James Clear',320,false);
const book2=new Book('Code Complete','Steve McConnell',857,true);
books_Array.push(book1);
books_Array.push(book2);


const first_book=document.querySelector('.alpha');
const second_book=document.querySelector('.beta');
first_book.addEventListener('click',()=>{
    if(book1.isRead==false){
        first_book.textContent='Read';
        first_book.classList.remove('not_read');
        first_book.classList.add('read');
        book1.isRead=true;
        
    }
    else{
        first_book.textContent='Not Read';
        first_book.classList.remove('read');
        first_book.classList.add('not_read');
        book1.isRead=false;
        
    }
    
})
second_book.addEventListener('click',()=>{
    if(book2.isRead==false){
        second_book.textContent='Read';
        second_book.classList.remove('not_read');
        second_book.classList.add('read');
        book2.isRead=true;
        
    }
    else{
        second_book.textContent='Not Read';
        second_book.classList.remove('read');
        second_book.classList.add('not_read');
        book2.isRead=false;
        
    }
    
})
const removal1=document.querySelector('.delete1');
const removal2=document.querySelector('.delete2');
const row1=document.querySelector('.default1');
const row2=document.querySelector('.default2');

removal1.addEventListener('click',()=>{
    const index=books_Array.findIndex(object=>{
        return (object.title===book1.title)&&(object.author===book1.author);
    })
   

        row1.remove();

     
        
       books_Array= books_Array.filter(element=>{
            if(element!=books_Array[index]){
                return true;
            }
        })
        


        



      
      
        
        

    })
    removal2.addEventListener('click',()=>{
        const index=books_Array.findIndex(object=>{
            return (object.title===book2.title)&&(object.author===book2.author);
        })
       

            row2.remove();

         
            
           books_Array= books_Array.filter(element=>{
                if(element!=books_Array[index]){
                    return true;
                }
            })
          

            



          
          
            
            

        })










btn.addEventListener('click',addBooktoLibrary,false);
function addBooktoLibrary(event){
        event.preventDefault();
        const Book_Title=book_title.value;
        const Book_Author=book_author.value;
        const No_of_Pages=no_of_pages.value;
        
      
       
        const book=new Book(Book_Title,Book_Author,No_of_Pages,false);
        x=true;
        for(i=0;i<books_Array.length;i++){
            if(books_Array[i].title===book.title&&books_Array[i].author===book.author){
                x=x&&(false);
            }
            else{
                x=x&&(true);
            }
        }

        if(x==true&&book.title!==''){

        books_Array.push(book);

      
        
        
        
                 
               
            
           
          
            
            

       
     
            

            
            const table=document.querySelector('table');
            
            
            const table_row=document.createElement('tr');
            const table_data1=document.createElement('td');
            const table_data2=document.createElement('td');
            const table_data3=document.createElement('td');
            const table_data4=document.createElement('td');
            const table_data5=document.createElement('td');
            const button=document.createElement('button');
            
           

            const recycle=document.createElement('button');
            recycle.classList.add('recycle');
            table_row.classList.add('table_row');
            
            
            
            
            recycle.textContent='Delete';
            
            button.textContent='Not Read';
            
            button.classList.add('not_read');
            button.addEventListener('click',function isReading(){
                if(book.isRead==false){
                    button.textContent='Read';
                    button.classList.remove('not_read');
                    button.classList.add('read');
                    
                    book.isRead=true;
                    console.log(book);
                    
                    
                }
                else{
                    button.textContent='Not Read';
                    button.classList.remove('read');
                    button.classList.add('not_read');
                    
                    book.isRead=false;
                    console.log(book);
                    
                    
                }
                
            })
    

            
            
           
            
            
            
               
        
            
            
            
    
            
            table_data1.textContent=book.title;
            table_data2.textContent=book.author;
            table_data3.textContent=book.pages;
            table_row.appendChild(table_data1);
            table_row.appendChild(table_data2);
            table_row.appendChild(table_data3);
            table_data4.appendChild(button);
            table_row.appendChild(table_data4);
            table_data5.appendChild(recycle);
            table_row.appendChild(table_data5);
            table.appendChild(table_row);
            
            
         

           recycle.addEventListener('click',()=>{
            const index=books_Array.findIndex(object=>{
                return (object.title===book.title)&&(object.author===book.author);
            })
            console.log(book);

                table_row.remove();

             
                
               books_Array= books_Array.filter(element=>{
                    if(element!=books_Array[index]){
                        return true;
                    }
                })
                console.log(books_Array);
                
                console.log(index);


                



              
              
                
                

            })
            
        
        
            
            
           
           
            

        }

        


        
        
}

