//called the class "menu-item"
const menuItem = document.querySelectorAll('.menu-item');
//called the class "message-notification"
const messagesNotification = document.querySelector('#messages-notifications');
//called the class "messages"
const messages = document.querySelector('.messages');
//called the class "message"
const message = messages.querySelectorAll('.message');
//called the class "message-search"
const messageSearch = document.querySelector('#message-search');
//called the class "theme"
const theme = document.querySelector('#theme');
//called the class "customize-theme"
const themeModal = document.querySelector('.customize-theme');
//called the class "span" that has a parenet of choose-size
const fontSizes = document.querySelectorAll('.choose-size span');
//called the classes undr the root"
var root = document.querySelector(':root');
//called the span element under the choose-color clas under choose-color
const colorPallete = document.querySelectorAll('.choose-color span');
//called the class "bg-1"
const Bg1 = document.querySelector('.bg-1');
//called the class "bg-2"
const Bg2 = document.querySelector('.bg-2');
//called the class "bg-3"
const Bg3 = document.querySelector('.bg-3');
//called the class "menu-btn"
const menuBar = document.querySelector('.menu-btn');
//called the class "left"
const sideBar = document.querySelector('.left');
//called the class "cancel"
const closeBtn = document.querySelector('#cancel');


//remove the active class from the active item when the user clicks on it.
const removeActive = () => {
        menuItem.forEach(item => {
            item.classList.remove('active');
        })
    }
    // let Map = {
    //     activeItem: 1
    // };
    // menuItem.forEach(item => {
    //         if (item.classList.contains('active')) {
    //             Map.activeItem = item;
    //         }
    //     })
    //I added an event listener to the menuItems to change the active class when the user clicks on them.   I also added a class to the active item to make it look like it's highlighted.
menuItem.forEach(item => {
        item.addEventListener('click', () => {
            // if (item == Map.activeItem) return;
            // Map.activeItem.classList.remove('active');
            // Map.activeItem = item;
            // Map.activeItem.classList.add('active');
            removeActive();
            item.classList.add('active');

            //I called an if statement too show the messages with class "notifications-popup" whenever the user clicks on the notification button
            if (item.id != 'notifications') {
                document.querySelector('.notifications-popup').style.display = 'none';
            } else {
                document.querySelector('.notifications-popup').style.display = 'block';

                document.querySelector('#notifications #notification-count').style.display = 'none';
            }
        })
    })
    //added an event listener click to the messagesNotification
messagesNotification.addEventListener('click', () => {
        //add a  boxShadow to the message class
        messages.style.boxShadow = '0 0 1rem var(--color-primary)';
        messagesNotification.querySelector('#notification-count').style.display = 'none';
        setTimeout(() => messages.style.boxShadow = 'none', 2000);
    })
    //MESAGES SEARCH CHAT
    //chats searchmessage
const searchMessage = () => {
        const val = messageSearch.value.toString().toLowerCase();

        message.forEach(chat => {
            //Get all h5
            let names = chat.querySelectorAll('h5');
            //run a foreach on all h5
            names.forEach(name => {
                //get the name nside the h5 and covert it into lowercase letters
                let message = name.textContent.toString().trim().toLowerCase();
                //print to screen
                console.log(message);
                if (message.indexOf(val) > -1) {
                    chat.style.display = 'flex';
                    chat.style.transition = "all 0.4s ease";
                } else {
                    chat.style.display = 'none';
                }
            })
        })
    }
    // const searchMessage = (e) => {
    //         const value = e.target.value.toLowerCase();
    //         // console.log(value);
    //         const texts = document.getquerySelectorAll('.message-body h5');
    //         texts.forEach(function(chat) {
    //             let message = chat.firstChild.textContent;
    //             if (message.toLowerCase().indexOf(value) !== -1) {
    //                 chat.style.display = 'block';
    //             } else {
    //                 chat.style.display = 'none';
    //             }
    //         })
    //     }
    //chat search
messageSearch.addEventListener('keyup', searchMessage);
//THEME CUSTOMISATION Opens the modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
const closeThemeModal = (e) => {
        if (e.target.classList.contains('customize-theme')) {
            themeModal.style.display = 'none';
        }
    }
    //closes the modal
themeModal.addEventListener('click', closeThemeModal);

//THEME CUSTOMISATION
theme.addEventListener('click', openThemeModal);
//FONT SIZE
const removeActiveSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}
fontSizes.forEach(size => {


    size.addEventListener('click', () => {
        let fontSize;
        size.classList.add('active');
        removeActiveSizeSelector();
        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem')
            root.style.setProperty('----sticky-top-right', '5.4rem')
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem')
            root.style.setProperty('----sticky-top-right', '-7rem')
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem')
            root.style.setProperty('----sticky-top-right', '-17rem')
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem')
            root.style.setProperty('----sticky-top-right', '-25rem')
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem')
            root.style.setProperty('----sticky-top-right', '-35rem')
        }
        //Change font size of html root
        document.querySelector('html').style.fontSize = fontSize;
    })
})

//COLOR PALLETE
const removeActiveColorSelector = () => {
    colorPallete.forEach(colorPicker => {
        if (colorPicker.classList.contains('active')) {
            colorPicker.classList.remove('active');
        } else {
            colorPicker.classList.add('active');
        }
    })
}
colorPallete.forEach(color => {

        color.addEventListener('click', () => {
            let primaryHue;
            removeActiveColorSelector();

            if (color.classList.contains('color-1')) {
                primaryHue = 252;
            } else if (color.classList.contains('color-2')) {
                primaryHue = 52;
            } else if (color.classList.contains('color-3')) {
                primaryHue = 352;
            } else if (color.classList.contains('color-4')) {
                primaryHue = 152;
            } else if (color.classList.contains('color-5')) {
                primaryHue = 202;
            }
            root.style.setProperty('--primary-color-hue', primaryHue);
        })
    })
    //theme background value
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
//changes background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}
Bg1.addEventListener('click', () => {



    //add active class
    Bg1.classList.add('active');
    //remove active class
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    //remove customize change from local storage
    window.location.reload();


})

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';


    //add active class
    Bg2.classList.add('active');
    //remove active class
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //add active class
    Bg3.classList.add('active');
    //remove active class
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})

menuBar.addEventListener('click', () => {
    sideBar.style.display = 'block';

})
closeBtn.addEventListener('click', () => {
    sideBar.style.display = 'none';
})