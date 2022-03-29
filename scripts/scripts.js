//prevent blank submissions in forms

const selectCommentForm = document.querySelector('.commentForm');
const selectCommentsSection = document.querySelector('.comments-section');

selectCommentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    //select the input fields in commentForm
    const selectName = document.querySelector('input[id=name]');
      //not doing anything for email field for now
    const selectCommentText = document.querySelector('textarea[id=commentText]');

    //store input field values in variables
    const commentName = selectName.value;
    const commentText = selectCommentText.value;

    //check if the fields have stuff inside
    // can probably check input for characters using split()

    if(commentName && commentText) {
    //create div element
        const commentParentDiv = document.createElement('div');
        commentParentDiv.classList.add(`comment`);
        commentParentDiv.innerHTML = `
            <div class="img-container">
                <img src="https://placebear.com/100/100" alt="profile picture">
            </div>`
        //create text div
        const commentTextDiv = document.createElement('div');
        commentTextDiv.classList.add(`text`);
          //Name Element
        const commentTextName = document.createElement('h6');
        commentTextName.classList.add('date');
        commentTextName.innerText = commentName;
          //P Element
        const commentTextP = document.createElement('p');
        commentTextP.innerText = commentText;
          //append field values as h6 and p to text div
        commentTextDiv.appendChild(commentTextName);
        commentTextDiv.appendChild(commentTextP);
        //append text div to parent div
        commentParentDiv.appendChild(commentTextDiv);
        //append parentDiv to comments-section
        selectCommentsSection.appendChild(commentParentDiv);


        //reset text values
        selectName.value = '';
        selectCommentText.value = '';

    } // end if

});