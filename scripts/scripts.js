
const messages = [
    {
        tone: 'friendshipOver',
        relation: 'justFriend',
        why: 'reallyHot',
        message: 'the copy for a friendship-over, just a friend, really-hot'
    },
    {
        tone: 'friendshipOver',
        relation: 'justFriend',
        why: 'betterOffer',
        message: 'the copy for a friendshipOver just a friend and better offer'
    },
    {
        tone: 'friendshipOver',
        relation: 'justFriend',
        why: 'calledBack',
        message: 'the copy for a friendshipOver just a friend called back to mothership'
    },
    {
        tone: 'friendshipOver',
        relation: 'justFriend',
        why: 'dogRoll',
        message: 'the copy for a friendship over just a friend dog roll'
    },
    {
        tone: 'friendshipOver',
        relation: 'justFriend',
        why: 'napRecover',
        message: 'the copy for a friendship over just a friend nap recover'
    },
    {
        tone: 'friendshipOver',
        relation: 'justFriend',
        why: 'actualExcuse',
        message: 'the copy for a friendshipover just a friend actual excuse'
    },
    {
        tone: 'friendshipOver', 
        relation: 'family', 
        why: 'reallyHot',
        message: 'the copy for a friendship over family member really hot'
    },
    {
        tone: 'friendshipOver',
        relation: 'family',
        why: 'betterOffer', 
        message: 'the copy for a friendship over family member better offer'
    },
    {
        tone: 'friendshipOver',
        relation: 'family',
        why: 'calledBack',
        message: 'the copy for a friendshipOver family member who got called back to the mothership'
    },
    {
        tone: 'friendshipOver',
        relation: 'family',
        why: 'dogRoll',
        message: 'the copy for a friendshipOver family member whos dog rolled over'
    },
    {
        tone: 'friendshipOver',
        relation: 'family',
        why: 'napRecover',
        message: 'the copy for a friendshipOver family member who needs to recover from a nap' 
    },
    {
        tone: 'friendshipOver',
        relation: 'family',
        why: 'actualExcuse', 
        message: 'the copy for a friendshipOver family member who has an actual excuse '
    },
    {
        tone: 'friendshipOver',
        relation: 'partner',
        why: 'reallyHot',
        message: 'the copy for a friendship over partner member really hot'
    },
    {
        tone: 'friendshipOver',
        relation: 'partner',
        why: 'betterOffer',
        message: 'the copy for a friendship over partner member better offer'
    },
    {
        tone: 'friendshipOver',
        relation: 'partner',
        why: 'calledBack',
        message: 'the copy for a friendshipOver partner member who got called back to the mothership'
    },
    {
        tone: 'friendshipOver',
        relation: 'partner',
        why: 'dogRoll',
        message: 'the copy for a friendshipOver partner member whos dog rolled over'
    },
    {
        tone: 'friendshipOver',
        relation: 'partner',
        why: 'napRecover',
        message: 'the copy for a friendshipOver partner member who needs to recover from a nap'
    },
    {
        tone: 'friendshipOver',
        relation: 'partner',
        why: 'actualExcuse',
        message: 'the copy for a friendshipOver family member who has an actual excuse '
    },
    {
        tone: 'friendsStill',
        relation: 'justFriend',
        why: 'reallyHot',
        message: 'the copy for a friendship-over, just a friend, really-hot'
    },
    {
        tone: 'friendsStill',
        relation: 'justFriend',
        why: 'betterOffer',
        message: 'the copy for a friendshipOver just a friend and better offer'
    },
    {
        tone: 'friendsStill',
        relation: 'justFriend',
        why: 'calledBack',
        message: 'the copy for a friendshipOver just a friend called back to mothership'
    },
    {
        tone: 'friendsStill',
        relation: 'justFriend',
        why: 'dogRoll',
        message: 'the copy for a friendship over just a friend dog roll'
    },
    {
        tone: 'friendsStill',
        relation: 'justFriend',
        why: 'napRecover',
        message: 'the copy for a friendship over just a friend nap recover'
    },
    {
        tone: 'friendsStill',
        relation: 'justFriend',
        why: 'actualExcuse',
        message: 'the copy for a friendshipover just a friend actual excuse'
    },
    {
        tone: 'friendsStill',
        relation: 'family',
        why: 'reallyHot',
        message: 'the copy for a friendship over family member really hot'
    },
    {
        tone: 'friendsStill',
        relation: 'family',
        why: 'betterOffer',
        message: 'the copy for a friendship over family member better offer'
    },
    {
        tone: 'friendsStill',
        relation: 'family',
        why: 'calledBack',
        message: 'the copy for a friendshipOver family member who got called back to the mothership'
    },
    {
        tone: 'friendsStill',
        relation: 'family',
        why: 'dogRoll',
        message: 'the copy for a friendshipOver family member whos dog rolled over'
    },
    {
        tone: 'friendsStill',
        relation: 'family',
        why: 'napRecover',
        message: 'the copy for a friendshipOver family member who needs to recover from a nap'
    },
    {
        tone: 'friendsStill',
        relation: 'family',
        why: 'actualExcuse',
        message: 'the copy for a friendshipOver family member who has an actual excuse '
    },
    {
        tone: 'friendsStill',
        relation: 'partner',
        why: 'reallyHot',
        message: 'the copy for a friendship over partner member really hot'
    },
    {
        tone: 'friendsStill',
        relation: 'partner',
        why: 'betterOffer',
        message: 'the copy for a friendship over partner member better offer'
    },
    {
        tone: 'friendsStill',
        relation: 'partner',
        why: 'calledBack',
        message: 'the copy for a friendshipOver partner member who got called back to the mothership'
    },
    {
        tone: 'friendsStill',
        relation: 'partner',
        why: 'dogRoll',
        message: 'the copy for a friendshipOver partner member whos dog rolled over'
    },
    {
        tone: 'friendsStill',
        relation: 'partner',
        why: 'napRecover',
        message: 'the copy for a friendshipOver partner member who needs to recover from a nap'
    },
    {
        tone: 'friendsStill',
        relation: 'partner',
        why: 'actualExcuse',
        message: 'the copy for a friendshipOver family member who has an actual excuse '
    }
]


$(function() {
    $('form').on('submit', function(e){
        // preventing submit default 
        e.preventDefault();
        // variable to determine what the users realtionship is 
        const personName= $('input[name=who-bail]').val();
        const personPhoneNumber = $('input[name=phone-number]').val();
        const userRelationChoice = $('input[name=who-are-they]:checked').val();
        // variable to determine what the users reason why choice is 
        const userWhyBailChoice = $('input[name=why-bail]:checked').val();
        // variable to determine what the users tone choice was 
        const userToneChoice = $('input[name=tone]:checked').val();
        console.log(personName, personPhoneNumber, userRelationChoice, userWhyBailChoice, userToneChoice);

        // filter method to determine what object should display
        const firstFilteredArray = messages.filter(message => message.relation === userRelationChoice);
        // console.log(firstFilteredArray);
        const secondFilteredArray = firstFilteredArray.filter(message => message.why === userWhyBailChoice);
        // console.log(secondFilteredArray);
        const finalFilteredArray = secondFilteredArray.filter(message => message.tone === userToneChoice);
        console.log(finalFilteredArray);

        $('.your-excuse').html(`<p>${finalFilteredArray}</p>`);
    });
});















// I want to create a document.ready
    // listen for the form submit
        // I want to prevent the default action on the from submit 
        // I want to create variables for the users choices:  
            // name of the person
            // phone number ??
        // This is what we're going to use to get the right message from our array of messages 
            // who they are to the user (userChoiceWho)
            // why they're bailing (userChoiceWhy)
            // what the tone of the message
        // check each of the objects in the messages array 




    