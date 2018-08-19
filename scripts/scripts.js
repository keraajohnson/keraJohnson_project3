
const myApp = {}

// array of objects which contain my values 
myApp.messages = [
    {
        tone: 'friendshipOver',
        relation: 'friend',
        why: 'reallyHot',
        message: function (personName) {
            return `Hey ${personName}, I know that we're supposed to hang out tonight but TBH it's really hot outside. Oh also, I just don't want to...So, bye 👋`}          
    },
    {
        tone: 'friendshipOver',
        relation: 'friend',
        why: 'betterOffer',
        message: function (personName) { 
            return `Oh hi ${personName}, I "think" we were supposed to hang out tonight but I need to tell you that I have a better offer on the table and... I'm just going to take it. Sorry, not sorry!`}
    },
    {
        tone: 'friendshipOver',
        relation: 'friend',
        why: 'calledBack',
        message: function () {
            return `ET phone hooooooooome`}
    },
    {
        tone: 'friendshipOver',
        relation: 'friend',
        why: 'dogRoll',
        message: function (personName) { 
            return `Hey ${personName}! Wow, I totally forgot that we were supposed to hang out. Anyways, I hate to be the bearer of bad news but my dog just literally rolled over into the cutest position. So, I need to cancel (but for reals, I was never going to show anyway). See ya (maybe never?)`}
    },
    {
        tone: 'friendshipOver',
        relation: 'friend',
        why: 'napRecover',
        message: function (personName) {
            return `Hey${personName}... I know that we're supposed to hang but, I just had a life altering nap.  So, I think I might just stay here, in bed, without you, maybe forever.`}
    },
    {
        tone: 'friendshipOver',
        relation: 'friend',
        why: 'actualExcuse',
        message: function (personName) {
            return `${personName}, I have to work late and school is crazy and you know, life? I can't hang out with you, maybe ever again. 👋`}
    },
    {
        tone: 'friendshipOver', 
        relation: 'family', 
        why: 'reallyHot',
        message: function (personName) { 
            return `${personName}, I know we're family so hopefully you can forgive me, but I just can't see you tonight. Have you noticed that it's TOO hot out there? Maybe I'll see you at a family reunion or... not?`}
    },
    {
        tone: 'friendshipOver',
        relation: 'family',
        why: 'betterOffer', 
        message: function (personName) {
            return `${personName}, listen, I know we're bound by blood but a super cool friend just called and invited me to a super cool party... See you never?`}
    },
    {
        tone: 'friendshipOver',
        relation: 'family',
        why: 'calledBack',
        message: function (personName) {
            return `${personName}☟︎♓︎  ♓︎ ♍︎♋︎■︎🕯︎⧫︎ ♒︎♋︎■︎♑︎ □︎◆︎⧫︎📪︎ ♓︎ ⬥︎♓︎⬧︎♒︎ ⍓︎□︎◆︎ ⬥︎□︎◆︎●︎♎︎ ●︎♏︎♋︎❖︎♏︎ ❍︎♏︎ ♋︎●︎□︎■︎♏︎ ♌︎⍓︎♏︎`}
    },
    {
        tone: 'friendshipOver',
        relation: 'family',
        why: 'dogRoll',
        message: function (personName) {
            return `${personName} you like dogs right? Well then I hope you understand that I can't leave my house because fido just rolled over and it's too instagram worthy to pass up. Love you fam (but please stop calling me)`}
    },
    {
        tone: 'friendshipOver',
        relation: 'family',
        why: 'napRecover',
        message: function (personName) {
            return `Hi ${personName}! Oh boy, I just had an intense nap. Can we raincheck for perhaps the early 2050's? Or like maybe at the next time some in our fam gets married? I should be recovered by then. `} 
    },
    {
        tone: 'friendshipOver',
        relation: 'family',
        why: 'actualExcuse', 
        message: function (personName) {
            return `${personName}, listen, I've got work or school or something important - if you could just give me some space for the next 30-60 years? That would be great, bye fam 👋`}
    },
    {
        tone: 'friendshipOver',
        relation: 'partner',
        why: 'reallyHot',
        message: function (personName) {
            return `Hi ${personName}, ugh babe, It's soooooo hot out. Can we reschedule for when global warming is over? Also, I want to break up 💔 `}
    },
    {
        tone: 'friendshipOver',
        relation: 'partner',
        why: 'betterOffer',
        message: function (personName) {
            return `${personName}, babe, so weird but I just heard from that hottie from a few months ago. Anyway, they want to get together - so let's just call it quits for now so I can go on this hot hot date? 💔 I never really loved you.`}
    },
    {
        tone: 'friendshipOver',
        relation: 'partner',
        why: 'calledBack',
        message: function () {
            return `ET PHOOOOONE ME AND WANTS TO HOOOOOOOK UP`}
    },
    {
        tone: 'friendshipOver',
        relation: 'partner',
        why: 'dogRoll',
        message: function (personName) {
            return `${personName}, my sweetie pie. My dog just rolled over into the most instagram worthy position (you know how important it is I break 600 followers...). Anyway, I have to cancel. Also, I want to break up 💔`}
    },
    {
        tone: 'friendshipOver',
        relation: 'partner',
        why: 'napRecover',
        message: function (personName) {
            return `${personName} hmmm, I just had the greatest nap without you. And honestly, I kind of want to have more naps without you. Like forever. So, I can't make it tonight and I want to break up 💔`}
    },
    {
        tone: 'friendshipOver',
        relation: 'partner',
        why: 'actualExcuse',
        message: function (personName) {
            return `${personName} I've got work//school//sports? I can't make it tonight or ever. Sorry not sorry, let's break up 💔`}
    },
    {
        tone: 'friendsStill',
        relation: 'friend',
        why: 'reallyHot',
        message: function (personName) {
            return `Hi ${personName}! Ugh, so hot outside right? Can we reschedule? I sooo want to see you but it is sooooo hot.`}
    },
    {
        tone: 'friendsStill',
        relation: 'friend',
        why: 'betterOffer',
        message: function (personName) {
            return `${personName}, you know how much I love you, right? Of course you do. Anyway, I just got an offer I can't pass up. Don't hate me, brunch soon?`}
    },
    {
        tone: 'friendsStill',
        relation: 'friend',
        why: 'calledBack',
        message: function (personName) {
            return `✋︎ ♍︎♋︎■︎🕯︎⧫︎ ♒︎♋︎■︎♑︎ □︎◆︎⧫︎📪︎ ●︎□︎❖︎♏︎ ⍓︎□︎◆︎ ♌︎♌︎📪︎ ⧫︎♋︎●︎🙵 ⬧︎□︎□︎■︎📪︎ □︎🙵♋︎⍓︎ ●︎♏︎⧫︎🕯︎⬧︎ ♑︎♏︎⧫︎ ⬧︎□︎□︎□︎□︎□︎ ❍︎◆︎♍︎♒︎ ♌︎❒︎◆︎■︎♍︎♒︎ ⬧︎□︎□︎■︎`}
    },
    {
        tone: 'friendsStill',
        relation: 'friend',
        why: 'dogRoll',
        message: function (personName) {
            return `${personName}, omg, omg, omg, omg. My dog just did the cutest thing, she's on her back and -- well you really have to be here to see it. Can't meet up later, brunch soon?`}
    },
    {
        tone: 'friendsStill',
        relation: 'friend',
        why: 'napRecover',
        message: function (personName) {
            return `Heyyyyy ${personName}. Just woke up, can't make it tonight. Wish I could, brunch soon? `}
    },
    {
        tone: 'friendsStill',
        relation: 'friend',
        emoji: '🍟',
        name: '"Friend"',
        why: 'actualExcuse',
        message: function (personName) {
            return `${personName}, work amirite? I can't meet up anymore because I need to work, go to the bank and like some other very important actual things happening. Love ya, brunch next week?`}
    },
    {
        tone: 'friendsStill',
        relation: 'family',
        why: 'reallyHot',
        message: function (personName) {
            return `HEY ${personName}, you really are my fav family member. However, it is too hot to trot. Let's reschedule? Maybe for winter? or Fall? Or like even spring would be good. We'll do brunch 🍳 `}
    },
    {
        tone: 'friendsStill',
        relation: 'family',
        why: 'betterOffer',
        message: function (personName) {
            return `Hi ${personName}, omg so you'll never guess what just happened? I was walking down the street and I got a way better offer for tonight. Family-shamily right? Love you, let's do lunch next month? 🥪`}
    },
    {
        tone: 'friendsStill',
        relation: 'family',
        why: 'calledBack',
        message: function (personName) {
            return `ET PHONE HOOOOOOOME AND MOM SAYS HIIIIIIIIIIIIII`}
    },
    {
        tone: 'friendsStill',
        relation: 'family',
        why: 'dogRoll',
        message: function (personName) {
            return `HEY ${personName}, AH! So, the dog is rolled over into the cutest position in my arms. Can't go out tonight, let's meet up next week? Love youuuuuu`}
    },
    {
        tone: 'friendsStill',
        relation: 'family',
        why: 'napRecover',
        message: function (personName) {
            return `Hello ${personName}. Wow, so out of it. Had THE most intense nap. Love you but can't hang tonight. Let's get together before the next faily reunion? LUV U BB`}
    },
    {
        tone: 'friendsStill',
        relation: 'family',
        why: 'actualExcuse',
        message: function (personName) {
            return `${personName}, I got work. Your family, you'll get it. BYE.`}
    },
    {
        tone: 'friendsStill',
        relation: 'partner',
        why: 'reallyHot',
        message: function (personName) {
            return `Hi ${personName}, babe, you know how I feel about this heat right? I can't do anything tonight but stick my head in the freezer. Love you, but just not tonight`}
    },
    {
        tone: 'friendsStill',
        relation: 'partner',
        why: 'betterOffer',
        message: function (personName) {
            return `${personName}, so weird but my ex just called and wants to grab a coffee. Let's raincheck our date? I just want to make sure that you're still the one - ya know? Love ya sweetiecakes 💚`}
    },
    {
        tone: 'friendsStill',
        relation: 'partner',
        why: 'calledBack',
        message: function () {
            return `♋︎♒︎ ●︎♋︎🙵♎︎🙰♐︎🖴︎🙵♋︎♎︎🙰 ♋︎ ⬧︎♎︎🙵🙰♒︎♐︎◆︎♏︎♒︎ ⬧︎♒︎🙰♍︎♑︎⬧︎🙰🙵♒︎♑︎♏︎ 🙵⬧︎♎︎♐︎🙰♓︎♏︎♒︎♒︎♒︎♒︎ ●︎⬧︎♎︎♐︎🖴︎♏︎♓︎♐︎ 📂︎🗏︎🖰︎🖲︎🖮︎🖲︎🖰︎🗏︎🗄︎⌛︎ ●︎♎︎♐︎🙰♒︎`}
    },
    {
        tone: 'friendsStill',
        relation: 'partner',
        why: 'dogRoll',
        message: function (personName) {
            return `${personName}, babe omg the dog just ROLLED OVER. Can't make our date tonight. I love you, but this is too cute to pass up, ya know?`}
    },
    {
        tone: 'friendsStill',
        relation: 'partner',
        why: 'napRecover',
        message: function (personName) {
            return `Hi ${personName}! Just had a crazy nap. I can't do dinner tonight, or tomorrow. This was one hell of a nap. I love you but I just need some space to recover from this`}
    },
    {
        tone: 'friendsStill',
        relation: 'partner',
        why: 'actualExcuse',
        message: function (personName) {
            return `${personName}, ugh babe! The boss is keeping me late tonight. Can you ever forgive me? Sorry not sorry, love you.`}
    }
]


myApp.relationshipInfo = {
    partner: '💋',
    friend: '👯‍♀️',
    family: '👨‍👩‍👧‍👦 '
}

myApp.changeHeader = function () {
    $('.relationship').on('click', function() { 
        const relationShipSelection = $(this).val();
        const objectSelection = myApp.relationshipInfo[relationShipSelection];
        $('#emoji').html(objectSelection);
    });
};

myApp.textDisappear = function () {
    $('input').on('click', function (){
        const getParents = $(this).parents();
        
        function hideDots() {
            $('.typing-indicator').removeClass('hide-dots');
            setTimeout(showDots, 2000);
        };

        hideDots();

        function showDots() {
            $('.typing-indicator').addClass('hide-dots');
            getParents.next('section').removeClass('hide');
            myApp.updateScroll(); 
        }   
    });
}  

myApp.updateScroll = function () {
    var element = document.getElementById("phone-main");
    element.scrollTop = element.scrollHeight;
}

myApp.hideHeader = function () {
    $('.start').on('click', function (){
        console.log('click');
        $('.header').addClass('display-none');
    })
}

myApp.inputDots = function () {
    $('.who-bail').on('click', function () {
        $('.typing-indicator').addClass('hide-dots');
    });
}

myApp.submitChoice = function () {
    $('form').on('submit', function (e) {
        // preventing submit default 
        e.preventDefault();
        // variable to determine what the users realtionship is 
        myApp.personName = $('input[name=who-bail]').val();
        myApp.userRelationChoice = $('input[name=who-are-they]:checked').val();
        // variable to determine what the users reason why choice is 
        myApp.userWhyBailChoice = $('input[name=why-bail]:checked').val();
        // variable to determine what the users tone choice was 
        myApp.userToneChoice = $('input[name=tone]:checked').val();

        // filter method to determine what object should display
        myApp.firstFilteredArray = myApp.messages.filter(message => message.relation === myApp.userRelationChoice);
        myApp.secondFilteredArray = myApp.firstFilteredArray.filter(message => message.why === myApp.userWhyBailChoice);
        myApp.finalFilteredArray = myApp.secondFilteredArray.filter(message => message.tone === myApp.userToneChoice);

        myApp.finalMsg = function () {
            $('.final-message').removeClass('hide');
            $('.your-excuse').append(`<p>${myApp.finalFilteredArray[0].message(myApp.personName)}</p>`);
            myApp.updateScroll(); 
        }   
        
        myApp.showFinalMsg = function () {
            setTimeout(myApp.finalMsg, 2000);
        }

        myApp.showFinalMsg();

        $('.who-bail').val('');
        });
    };    

myApp.init = function () {
    myApp.changeHeader();
    myApp.submitChoice();
    myApp.textDisappear();
    myApp.hideHeader();
    myApp.inputDots();
}

$(function() {
    myApp.init();   
});
    