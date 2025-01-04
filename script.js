/*const Score = { Wins:0 ,Losses:0 ,Ties:0};*/
let Score =JSON.parse(localStorage.getItem('Score')) || {
    Wins:0,Losses:0,Ties:0
};    
Qsel();

function pickComputerMove()
{   let computermove='';

    const randomnumber = Math.random();
    console.log(randomnumber)
    
        if (randomnumber >= 0 && randomnumber < 1/3)
        {
            computermove='rock';

        }
        else if (randomnumber >= 1/3 && randomnumber < 2/3)
        {
            computermove='paper';
            
        }

        else if (randomnumber >= 2/3 && randomnumber < 1)
        {
            computermove='scissor';
            
        }
        return computermove;
}

function gameplay(playerMove)
{   const computermove=pickComputerMove();

    let result='';

        if (playerMove==='rock')
        {
            if (computermove==='rock'){
                result='Tie';
            }

            else if (computermove==='paper'){
                result='You Loss';
            }

            else if (computermove==='scissor'){
                result='You Win';
            }
        }
        else if (playerMove==='paper')
        {
            if (computermove==='rock'){
                result='You Win';
            }

            else if (computermove==='paper'){
                result='Tie';
            }

            else if (computermove==='scissor'){
                result='You Loss';
            }
        }
        else if (playerMove==='scissor')
        {
            if (computermove==='rock'){
                result='You Loss';
            }

            else if (computermove==='paper'){
                result='You Win';
            }

            else if (computermove==='scissor'){
                result='Tie';
            }
        }
         if (result==='You Win') {
            Score.Wins += 1;
         }  
         if (result==='You Loss') {
            Score.Losses += 1;
         }  
         if (result==='Tie') {
            Score.Ties += 1;
         }  


         localStorage.setItem('Score',JSON.stringify(Score));
         Qsel();

         document.querySelector('.result').innerHTML=result;

         document.querySelector('.move').innerHTML=`You You - <img src="./${playerMove}-emoji.png" alt="r" class="icon">
         <img src="./${computermove}-emoji.png" alt="s" class="icon">- Computer.`
         
         }
         function Qsel(){
            document.querySelector('.JS').innerHTML = `Wins: ${Score.Wins}. Losses: ${Score.Losses}. Ties: ${Score.Ties}.`;

        
       }





