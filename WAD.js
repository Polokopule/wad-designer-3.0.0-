class ImageGallery {
    static create(images = [], columns = 3, gap = '10px') {
        const galleryContainer = document.createElement('div');
        galleryContainer.style.display = 'grid';
        galleryContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        galleryContainer.style.gap = gap;
        galleryContainer.style.width = '100%';
        galleryContainer.style.boxSizing = 'border-box';

        images.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.setAttribute("src",imageUrl);
            console.log(imageUrl);
            img.alt = 'Gallery Image';
            img.style.width = '100%';
            img.style.borderRadius = '5px';
            img.style.objectFit = 'cover'; // Ensures images maintain aspect ratio

            galleryContainer.appendChild(img);
        });

        // Responsive adjustments
        const style = document.createElement('style');
        style.innerHTML = `
            @media (max-width: 800px) {
                .responsive-gallery {
                    grid-template-columns: repeat(2, 1fr);
                }
            }
            @media (max-width: 500px) {
                .responsive-gallery {
                    grid-template-columns: 1fr;
                }
            }
        `;

        document.head.appendChild(style);
        galleryContainer.classList.add('responsive-gallery');
        
        return galleryContainer;
    }
}

class Tabs { 
static create(tabs) {
 const container = document.createElement('div'); 
const tabList = document.createElement('div');
 Object.assign(tabList.style, { 
    display: 'flex', 
    cursor: 'pointer',
     }); 
     const contentContainer = document.createElement('div');
      tabs.forEach((tab, index) => { 
          const tabButton = document.createElement('button'); 
          tabButton.innerHTML = tab.title;
           Object.assign(tabButton.style, {
           padding: '10px', 
          backgroundColor: index=== 0 ? '#007BFF' : '#ddd',
           color: index === 0 ? '#fff' : '#333',
           border: 'none', 
          outline: 'none', 
          cursor: 'pointer',
           flex: 1, });
           tabButton.onclick = () => {
            Array.from(tabList.children).forEach((btn, btnIndex) => {
            btn.style.backgroundColor = btnIndex === index ? '#007BFF' : '#ddd';
             btn.style.color = btnIndex === index ? '#fff' : '#333'; 
            }); 
                 contentContainer.innerHTML= tab.content;   
            if(tab.content == "[object HTMLFormElement]" || tab.content == "[object HTMLDivElement]"){
                        contentContainer.innerHTML="";
                        contentContainer.append(tab.content);
                    }else if(tab.content == 0){
                        contentContainer.innerHTML+= tab.content;  
                    }
              
           };
            tabList.appendChild(tabButton);
             }); 
                    contentContainer.innerHTML+= tabs[0].content; 
                    if(tabs[0].content == "[object HTMLFormElement]" || tabs[0].content == "[object HTMLDivElement]"){
                        contentContainer.innerHTML="";
                        contentContainer.append(tabs[0].content);
                    }else if(tabs[0].content == 0){
                        contentContainer.innerHTML+= tabs[0].content;  
                    }
              
              container.appendChild(tabList);
              
               container.appendChild(contentContainer); 
               return container; 
               } }


class Table { static create(headers, rows) { const table = document.createElement('table');
 Object.assign(table.style, {
  width: '100%',
     borderCollapse: 'collapse',
     }); 
     const thead = document.createElement('thead'); 
     const tr = document.createElement('tr');
      headers.forEach(header => {
       const th = document.createElement('th');
       th.innerHTML = header; 
       Object.assign(th.style, 
           { 
           border: '1px solid #ddd',
            padding: '8px', 
           backgroundColor: '#f4f4f4', 
           textAlign: 'left', 
           });
            tr.appendChild(th);
             }); 
             thead.appendChild(tr); table.appendChild(thead); 
    const tbody = document.createElement('tbody');
              
       rows.forEach(rowData => { 
           const row = document.createElement('tr');
     rowData.forEach(cellData => { 
    const td = document.createElement('td');
 td.innerHTML = cellData; Object.assign(td.style, { 
     border: '1px solid #ddd', 
     padding: '8px', 
     }); 
     row.appendChild(td);
      }); 
      tbody.appendChild(row); 
      }); 
      table.appendChild(tbody); 
      return table; 
      } 
      }
class Footer{
           static create(items){
           
           var footercont = document.createElement("div");
          var footerbottom= document.createElement("div");
          var tx = document.createElement("p");
          var d = new Date();
          var year ="2024";
          var dmd = document.createTextNode(` ©  ${year} ${items[0].companyName}. ${items[0].copyright}`);
          tx.append(dmd);
          
               var footer = document.createElement("footer");
              var content = document.createElement("div"); 
              var h3 = document.createElement("h3");
              var h = document.createTextNode(items[0].companyName);
              h3.append(h);
              content.append(h3);
              var p = document.createElement("p");
              var pm = document.createTextNode(items[0].motto);
              p.append(pm);
              content.append(p);
              var ul = document.createElement("ul");
              ul.setAttribute("class","socilas");
              for(var i =0; i< items[0].links.length;i++){
              var n = items[0].links[i].text;
              var n9 = items[0].links[i].href;
                var li = document.createElement("li");
                var a = document.createElement("a");
                a.setAttribute("href",n9);
                var g = document.createTextNode(n);
                Object.assign(li.style, { 
    margin: "0 15px"
    
    });
    Object.assign(a.style, { 
    color:" #ffffff",
    textDecoration: "none",
    fontSize: "18px",
    transition: "color 0.3s"
    });
    
                a.append(g);
                li.append(a);
                ul.append(li);
              }
             
             content.append(ul);
             footercont.append(content);
             footer.append(footercont)
              Object.assign(footer.style, { 
    background:" #282c34",
    color:" #ffffff",
    padding: "40px 20px",
    fontFamily: "'Arial', sans-serif",
    
    }); 
    
    Object.assign(footercont.style, { 
        maxWidth: "1200px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"

    
    });
    Object.assign(content.style, { 
  marginBottom: "20px"

    
    });
    
    Object.assign(h3.style, { 
    marginBottom: "10px",
    fontSize: "24px",
    color:" #61dafb",
    
    });
    Object.assign(p.style, { 
   marginBottom: "20px",
    fontSize: "16px"
    
    });
    Object.assign(ul.style, { 
    listStyle: "none",
    padding: "0",
    display: "flex",
    justifyContent: "center"
    
    });
    Object.assign(footerbottom.style, { 
    borderTop: "1px solid #444",
    paddingTop: "20px",
    fontSize: "14px"
    
    });
    footerbottom.append(dmd);
          footercont.append(footerbottom);
    
    return footer;
           }
       }
class ZoomText{
          static create(texttozoom){
              var text = document.querySelector(texttozoom);
              var wrap = document.createElement("div");
              var num = 10;
              var plus = Button.create("+",()=>{
                  num+=3;
                  text.style.fontSize=num+"px";
                  
              });
              var minus = Button.create("-",()=>{
                    num-=3;
                  text.style.fontSize=num+"px"; 
              });
              minus.style.fontSize="20px";
             minus.style.background="#ddd"; 
             minus.style.color="#000";
              Object.assign(wrap.style, { 
    display: 'flex',
    gap:'10px',
    
    });
              wrap.append(plus);
              wrap.append(minus);
              
              return wrap;
          }
      } 
 

class ReadMore{
           static create(content) {
          var type = typeof content;
          switch(type){
              case "string":
              var hide = content.split("/wad-hide/");
              break;
              case "object":
            var ok =  document.querySelector(content[0]);
           var jj =ok.innerText;
           var hide =  jj.split("/wad-hide/");
         ok.innerHTML=""
              break;
          }
           
           
                   var div2 = document.createElement("p");
                   
            
                   var div = document.createElement("span");
                      
                var dots =document.createElement("span");
            var d = document.createTextNode("...");
            var text = document.createTextNode(hide[0]);
            var text2 = document.createTextNode(hide[1]);
            console.log(hide[0]);
          
            div.style.display="none";
              div2.style.display="fex";
              div2.style.flexWrap="";
            div.append(text2)
            div2.append(text);
            dots.append(d);
            div2.appendChild(dots);
            div2.onclick =()=>{
                 if(div.style.display=="block"){
                     div.style.display="none";
                     div2.appendChild(dots);
                 }else{
                     div.style.display="block";
                     dots.remove()
                 }
                 div2.append(div); 
        
             }
           
             return div2
           }
           
        }
       
 class Grid {
         static create(columns = 4, gap = '10px', items = []) {
         const gridContainer = document.createElement('div');
          gridContainer.style.display = 'grid';
           gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
            gridContainer.style.gap = gap;
             gridContainer.style.width = '100%';
              gridContainer.style.boxSizing = 'border-box';
       items.forEach(itemContent => {
        const item = document.createElement('div');
         
          item.style.padding = '0px'; 
          item.style.border = '1px solid #ddd';
           item.style.borderRadius = '5px';
            item.style.boxSizing = 'border-box';
            gridContainer.append(item); 
            if(itemContent){
            item.append(itemContent);
                    }else{
                item.innerHTML = itemContent;
            }
             
             });
              // Responsive adjustments 
              const style = document.createElement('style'); 
              style.innerHTML = ` @media (max-width: 1200px) { .responsive-grid { grid-template-columns: repeat(2, 1fr); } } @media (max-width: 800px) { .responsive-grid { grid-template-columns: 1fr;
               } } `; 
               
               
               
               document.head.appendChild(style); gridContainer.classList.add('responsive-grid'); return gridContainer; } }
           
class Search {
  static create(placeholder = 'Search...', onSearch) {
   const container = document.createElement('div');
    Object.assign(container.style, { 
    display: 'flex',
    gap:'10px',
     alignItems: 'center',
      marginBottom: '20px',
       });
        const input = document.createElement('input');
         input.type = 'text';
          input.placeholder = placeholder;
           Object.assign(input.style, { 
           padding: '10px',
            border: '1px solid #ddd',
             borderRadius: '5px',
              width: '100%',
              outline:'none',
               boxSizing: 'border-box',
                });
                var button = Button.create("Search",()=>{
          if (onSearch) onSearch(input.value);          
                })
                 
                             input.addEventListener('keypress', (event) => {
                             if (event.key === 'Enter') {
                              if (onSearch) onSearch(input.value);
                               } }); container.appendChild(input); container.appendChild(button); 
                               return container; } } 


class Card {
    static create(content) {
        const card = document.createElement("div");
        card.innerHTML = content;
        Object.assign(card.style, {
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            padding: "16px",
            margin: "auto 10px",
            width: "300px",
        });
        return card;
    }
}

class Avatar {
    static create(imageUrl, initials, size = '50px') {
        const avatar = document.createElement('div');
        Object.assign(avatar.style, {
            width: size,
            height: size,
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ddd',
        });
        if (imageUrl) {
            const img = document.createElement('img');
            img.src = imageUrl;
            Object.assign(img.style, {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            });
            avatar.appendChild(img);
        } else if (initials) {
            avatar.innerHTML = initials;
            Object.assign(avatar.style, {
                fontSize: '1.5rem',
                color: '#fff',
                backgroundColor: '#007BFF',
            });
        }
        return avatar;
    }
}

class Accordion {
    static create(items) {
        const container = document.createElement('div');
        items.forEach(item => {
            const button = document.createElement('button');
            button.innerHTML = item.title;
            Object.assign(button.style, {
                width: '100%',
                padding: '10px',
                textAlign: 'left',
                backgroundColor: '#007BFF',
                color: '#fff',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                transition: '0.4s',
            });
            const content = document.createElement('div');
            content.innerHTML = item.content;
            Object.assign(content.style, {
                maxHeight: '0',
                overflow: 'hidden',
                transition: 'max-height 0.4s ease',
                backgroundColor: '#f9f9f9',
                padding: '0 15px',
            });
            button.onclick = () => {
                content.style.maxHeight = content.style.maxHeight ? '' : `${content.scrollHeight}px`;
            };
            container.appendChild(button);
            container.appendChild(content);
        });
        return container;
    }
}

class Alert {
    static create(message, type = 'info') {
        const alert = document.createElement('div');
        Object.assign(alert.style, {
            padding: '15px',
            backgroundColor: type === 'error' ? '#f44336' : type === 'success' ? '#4CAF50' : '#2196F3',
            color: 'white',
            marginBottom: '15px',
            position: 'relative',
        });
        alert.innerHTML = message;
        const closeBtn = document.createElement('span');
        closeBtn.innerHTML = '&times;';
        Object.assign(closeBtn.style, {
            position: 'absolute',
            top: '5px',
            right: '10px',
            cursor: 'pointer',
        });
        closeBtn.onclick = () => alert.remove();
        alert.appendChild(closeBtn);
        return alert;
    }
}

class Badge {
    static create(text, type = 'primary') {
        const badge = document.createElement('span');
        badge.innerHTML = text;
        Object.assign(badge.style, {
            padding: '5px 10px',
            backgroundColor: type === 'primary' ? '#007BFF' : '#28a745',
            color: '#fff',
            borderRadius: '12px',
            fontSize: '12px',
        });
        return badge;
    }
}

class Breadcrumb {
    static create(items) {
        const container = document.createElement('nav');
        const list = document.createElement('ol');
        Object.assign(list.style, {
            display: 'flex',
            listStyle: 'none',
            padding: '0',
        });
        items.forEach((item, index) => {
            const listItem = document.createElement('li');
            Object.assign(listItem.style, {
                marginRight: '10px',
            });
            if (index < items.length - 1) {
                listItem.innerHTML = `<a href="${item.href}" style="text-decoration:none;color:#007BFF;">${item.text}</a> / `;
            } else {
                listItem.innerHTML = item.text;
            }
            list.appendChild(listItem);
        });
        container.appendChild(list);
        return container;
    }
}

class Button {
    static create(text, onClick) {
        const button = document.createElement('button');
        button.innerHTML = text;
        Object.assign(button.style, {
            backgroundColor: '#007BFF',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        });
             button.onclick = onClick;
        return button;
    }
}

class CardCarousel {
    static create(cards) {
        const container = document.createElement('div');
        Object.assign(container.style, {
            display: 'flex',
            overflowX: 'auto',
        });
        cards.forEach(card => {
            const cardElement = document.createElement('div');
            Object.assign(cardElement.style, {
                flex: '0 0 300px',
                marginRight: '10px',
            });
            cardElement.appendChild(card);
            container.appendChild(cardElement);
        });
        return container;
    }
}

class Chip {
    static create(text, removable = false, onRemove) {
        const chip = document.createElement('div');
        Object.assign(chip.style, {
            display: 'inline-flex',
            alignItems: 'center',
            padding: '5px 10px',
            backgroundColor: '#007BFF',
            color: '#fff',
            borderRadius: '20px',
            margin: '5px',
        });
        chip.innerHTML = text;
        if (removable) {
            const removeButton = document.createElement('span');
            removeButton.innerHTML = '&times;';
            Object.assign(removeButton.style, {
                marginLeft: '10px',
                cursor: 'pointer',
            });
            removeButton.onclick = () => {
                chip.remove();
                if (onRemove) onRemove();
            };
            chip.appendChild(removeButton);
        }
        return chip;
    }
}

class Dropdown {
    static create(options, onSelect) {
        const select = document.createElement('select');
        Object.assign(select.style, {
            padding: '10px',
            margin: '8px 0',
            border: '1px solid #ddd',
            borderRadius: '5px',
            backgroundColor: '#fff',
            cursor: 'pointer',
        });
        options.forEach(text => {
            const option = document.createElement('option');
            option.value = text;
            option.innerHTML = text;
            select.appendChild(option);
        });
        select.onchange = () => {
            const selectedValue = select.value;
            if (onSelect) onSelect(selectedValue);
        };
        return select;
    }
}

class Input{
    static create(fields){
       var div = document.createElement("div");
          fields.forEach(field => {
            let input;
            if (field.type == "textarea") {
                input = document.createElement(field.type);
            } else {
                input = document.createElement("input");
                input.setAttribute("type", field.type);
            }
            Object.assign(input.style, {
                padding: '10px',
                margin: '8px 0',
                border: '1px solid #ddd',
                borderRadius: '5px',
                outline: "none",
                width:"min(90%)"
            });
           input.setAttribute("id",field.id);
            input.placeholder = field.placeholder;
            const label = document.createElement('b');
            label.innerHTML = field.label || '';
            if (field.required) input.required = true;
          div.appendChild(input);
          
        });
        
    return div
    }
}


class Form {
    static create(fields, buttonText = "Submit", submitCallback) {
        const form = document.createElement('form');
        Object.assign(form.style, {
            display: 'flex',
            flexDirection: 'column',
            width: 'min(95%)',
            margin: "0",
        });
        fields.forEach(field => {
            let input;
            if (field.type == "textarea") {
                input = document.createElement(field.type);
            } else {
                input = document.createElement("input");
                input.setAttribute("type", field.type);
            }
            Object.assign(input.style, {
                padding: '10px',
                margin: '8px 0',
                border: '1px solid #ddd',
                borderRadius: '5px',
                outline: "none",
            });
            input.placeholder = field.placeholder;
            const label = document.createElement('b');
            label.innerHTML = field.label || '';
            if (field.required) input.required = true;
            form.appendChild(label);
            form.appendChild(input);
        });
        
        const submitButton = Button.create(buttonText, (e) => {
            e.preventDefault();
            let isValid = true;
            form.querySelectorAll('input, textarea').forEach(input => {
                if (input.required && !input.value.trim()) {
                    input.style.borderColor = 'red';
                    isValid = false;
                } else {
                    input.style.borderColor = '#ddd';
                }
            });
            if (isValid && submitCallback) submitCallback();
        });
        
        form.appendChild(submitButton);
        return form;
    }
}

class Sidebar {
    static create(items) {
        const sidebar = document.createElement('div');
        Object.assign(sidebar.style, {
            height: '100%',
            width: '250px',
            position: 'fixed',
            left: '-270px',
            top: '0',
            backgroundColor: '#333',
            padding: '10px',
            transition: '0.3s',
            zIndex: '1',
        });
        const toggleButton = document.createElement('button');
        toggleButton.innerHTML = 'Toggle Sidebar';
        Object.assign(toggleButton.style, {
            marginBottom: '10px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        });
        toggleButton.onclick = () => {
            sidebar.style.left = sidebar.style.left === '0' ? '-270px' : '0';
        };
        sidebar.appendChild(toggleButton);
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = item;
            Object.assign(itemElement.style, {
                color: '#fff',
                padding: '10px',
                cursor: 'pointer',          });
            sidebar.appendChild(itemElement);
        });
        return sidebar;
    }
} 

