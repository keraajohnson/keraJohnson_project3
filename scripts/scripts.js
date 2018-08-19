
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
            return `${personName} the copy for a friendshipOver family member who has an actual excuse `}
    },
    {
        tone: 'friendshipOver',
        relation: 'partner',
        why: 'reallyHot',
        message: function (personName) {
            return `${personName} the copy for a friendship over partner member really hot`}
    },
    {
        tone: 'friendshipOver',
        relation: 'partner',
        why: 'betterOffer',
        message: function (personName) {
            return `${personName} the copy for a friendship over partner member better offer`}
    },
    {
        tone: 'friendshipOver',
        relation: 'partner',
        why: 'calledBack',
        message: function (personName) {
            return `${personName} the copy for a friendshipOver partner member who got called back to the mothership`}
    },
    {
        tone: 'friendshipOver',
        relation: 'partner',
        why: 'dogRoll',
        message: function (personName) {
            return `${personName} the copy for a friendshipOver partner member whos dog rolled over`}
    },
    {
        tone: 'friendshipOver',
        relation: 'partner',
        why: 'napRecover',
        message: function (personName) {
            return `${personName} the copy for a friendshipOver partner member who needs to recover from a nap`}
    },
    {
        tone: 'friendshipOver',
        relation: 'partner',
        why: 'actualExcuse',
        message: function (personName) {
            return `${personName} the copy for a friendshipOver family member who has an actual excuse`}
    },
    {
        tone: 'friendsStill',
        relation: 'friend',
        why: 'reallyHot',
        message: function (personName) {
            return `${personName} the copy for a friendship-over, just a friend, really-hot`}
    },
    {
        tone: 'friendsStill',
        relation: 'friend',
        why: 'betterOffer',
        message: function (personName) {
            return `${personName} the copy for a friendshipOver just a friend and better offer`}
    },
    {
        tone: 'friendsStill',
        relation: 'friend',
        why: 'calledBack',
        message: function (personName) {
            return `${personName} the copy for a friendshipOver just a friend called back to mothership`}
    },
    {
        tone: 'friendsStill',
        relation: 'friend',
        why: 'dogRoll',
        message: function (personName) {
            return `${personName} the copy for a friendship over just a friend dog roll`}
    },
    {
        tone: 'friendsStill',
        relation: 'friend',
        why: 'napRecover',
        message: function (personName) {
            return `${personName} the copy for a friendship over just a friend nap recover`}
    },
    {
        tone: 'friendsStill',
        relation: 'friend',
        emoji: '🍟',
        name: '"Friend"',
        why: 'actualExcuse',
        message: function (personName) {
            return `${personName} the copy for a friendshipover just a friend actual excuse`}
    },
    {
        tone: 'friendsStill',
        relation: 'family',
        why: 'reallyHot',
        message: function (personName) {
            return `${personName} the copy for a friendship over family member really hot`}
    },
    {
        tone: 'friendsStill',
        relation: 'family',
        why: 'betterOffer',
        message: function (personName) {
            return `${personName} the copy for a friendship over family member better offer`}
    },
    {
        tone: 'friendsStill',
        relation: 'family',
        why: 'calledBack',
        message: function (personName) {
            return `${personName} the copy for a friendshipOver family member who got called back to the mothership`}
    },
    {
        tone: 'friendsStill',
        relation: 'family',
        why: 'dogRoll',
        message: function (personName) {
            return `${personName} the copy for a friendshipOver family member whos dog rolled over`}
    },
    {
        tone: 'friendsStill',
        relation: 'family',
        why: 'napRecover',
        message: function (personName) {
            return `${personName} the copy for a friendshipOver family member who needs to recover from a nap`}
    },
    {
        tone: 'friendsStill',
        relation: 'family',
        why: 'actualExcuse',
        message: function (personName) {
            return `${personName} the copy for a friendshipOver family member who has an actual excuse`}
    },
    {
        tone: 'friendsStill',
        relation: 'partner',
        why: 'reallyHot',
        message: function (personName) {
            return `${personName} the copy for a friendship over partner member really hot`}
    },
    {
        tone: 'friendsStill',
        relation: 'partner',
        why: 'betterOffer',
        message: function (personName) {
            return `${personName} the copy for a friendship over partner member better offer`}
    },
    {
        tone: 'friendsStill',
        relation: 'partner',
        why: 'calledBack',
        message: function (personName) {
            return `${personName} the copy for a friendshipOver partner member who got called back to the mothership`}
    },
    {
        tone: 'friendsStill',
        relation: 'partner',
        why: 'dogRoll',
        message: function (personName) {
            return `${personName} the copy for a friendshipOver partner member whos dog rolled over`}
    },
    {
        tone: 'friendsStill',
        relation: 'partner',
        why: 'napRecover',
        message: function (personName) {
            return `${personName} hey the copy for a friendshipOver partner member who needs to recover from a nap`}
    },
    {
        tone: 'friendsStill',
        relation: 'partner',
        why: 'actualExcuse',
        message: function (personName) {
            return `${personName} the  copy for a friendshipOver partner= who has an actual excuse`}
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
    