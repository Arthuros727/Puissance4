$(document).ready(function(){

    class Game {
        constructor() {
          this.x = prompt("How much columns");
          this.y = prompt("How much rows");
          this.j1color = prompt('Color for Player 1 ? \n (red, blue, yellow, green, black, purple)');
          while((this.j1color !== "red") && (this.j1color !== "blue") && (this.j1color !== "yellow") && (this.j1color !== "green") && (this.j1color !== "black") && (this.j1color !== "purple")){
            this.j1color = prompt('Color for Player 1 ? \n (red, blue, yellow, green, black, purple');

          }
          this.j2color = prompt('Color for Player 2 ? \n (red, blue, yellow, green, black, purple)');
          while((this.j2color !== "red") && (this.j2color !== "blue") && (this.j2color !== "yellow") && (this.j2color !== "green") && (this.j2color !== "black") && (this.j2color !== "purple") || (this.j2color === this.j1color)){
          this.j2color = prompt('Color for Player 2 ? \n (red, blue, yellow, green, black, purple)');

          }

          this.j = null;
          this.create()
          this.play();
        }

        create(){
            for(let i = 0; i < this.x; i++) {
                let col = jQuery('<div>', {
                    class: 'col',
                    id: "col" + i,
                }).appendTo('body');
                
                for(let j = 0; j < this.y; j++) {
                    jQuery('<div>', {
                        class: 'cell' ,
                        id: 'cell'+j,
                    }).appendTo(col);
                    this.j = j;
                    this.i = i
                }
            }
             this.winner1 = jQuery('<div>', {
              class: 'winner1',
              id: "winner1",
          }).appendTo('body');
        

          this.winner2 = jQuery('<div>', {
            class: 'winner2',
            id: "winner2",
        }).appendTo('body');

        this.current = jQuery('<div>', {
          class: 'current',
          id: "current",
      }).appendTo('body');

      this.newg = jQuery('<button>', {
        class: 'new',
        id: "new",
    }).appendTo('body');
      
           
        }

        play(){
          let wi1 = this.winner1
          let wi2 = this.winner2
          let current = this.current
          let newgame = this.newg
          let win1 = 0;
          let win2 = 0;
          let l = this.j
            let p = this.i
            let color1 = this.j1color
            let color2 = this.j2color
            let e = 0;
            var offsets = $('#col0').find("#cell" +this.j ).offset();
            while(e < this.i){
                e++
            }
            var top = offsets.top;
             var left = offsets.left;
            //  console.log(top)

             function getCookie(name) {
              const value = `; ${document.cookie}`;
              const parts = value.split(`; ${name}=`);
              if (parts.length === 2) return parts.pop().split(';').shift();
            }
            var oldValue1 = $.cookie('p1');

            var oldValue2 = $.cookie('p2');

             wi1.html("Player 1 : " + $.cookie('p1'))
             wi2.html("Player 2 : " + $.cookie('p2'))
             current.html("PLAYER 1 TURN !")
             newgame.html("NEWGAME")
             $('.new').click(function(){
              $.cookie('p1', 0);
              $.cookie('p2', 0);
              location.reload(true);




             })

             

            let columns = $('.col');
            let count = new Array(columns.length).fill(0);
            let j1 = new Array(columns.length).fill(0);
            let j2 = new Array(columns.length).fill(0);
            let ij1 = 0;
            let ij2 = 0;

            let color = 0;
            let test= 0
            let c1 =0;
            let c2 =0;
            columns.click(function() {
                // color++;
                let column = $(this);
                let index = columns.index(column);
                let index2 = $(".cell").index(".cell");
                // console.log(index2)
                let pionid = `pion-${index}-${count[index]}`;
                let pion = $('<div>', { class: 'pion', id: pionid }).appendTo(column);
                
                let top = offsets.top;
                for (let i = 0; i < count[index]; i++) {
                  
                  top -= 51.5;
                  
                  //     console.log(top)
                }
                
                if(color == 0){
                c1++
                let pionid = `${color1}-pion-${index}-${count[index]}`;
                let pion = $('<div>', { class: 'pion', id: pionid }).appendTo(column);
                pion.css("display", 'block').css("display", 'block').css("background-color", color1);
                // vict[index] = "red"
                pion.animate({ top: top + 'px' }, 1000, 'swing');
                count[index]++;
                j1[index]--
                j2[index] = color1 
                // console.log(j2)
                current.html("PLAYER 2 TURN !")
              }
              if(color == 1){
                c2++
                let pionid = `${color2}-pion-${index}-${count[index]}`;
              let pion = $('<div>', { class: 'pion', id: pionid }).appendTo(column);
                pion.css("display", 'block').css("display", 'block').css("background-color", color2);
                // vict[index] = "yellow"
                pion.animate({ top: top + 'px' }, 1000, 'swing');
                count[index]++;
                j1[index]++
                j2[index] = color2
                
                // console.log(j1)
                current.html("PLAYER 1 TURN !")


              }
             
              if(color == 1){
                  color--
              }else{
              
                color++
            }
            var IDs = [];
            $("body").find("div").each(function(){ IDs.push(this.id); });
            // console.log(IDs)
            let uu =0;
            // let uuu = 0;
            // let ll = 0;
            while (uu < p+1) {
              // console.log(p)
              if (j1[uu] == -4 ) {
                setTimeout(function() {

                  alert("PLAYER 1 WIN");
                  $.cookie('p1', ++oldValue1);
                  location.reload(true);
              }, 800);


              }if( j1[uu] == 4){
                setTimeout(function() {

                  alert("PLAYER 2 WIN");
                  $.cookie('p2', ++oldValue2);
                  location.reload(true);
              }, 800);
              }
            
              // console.log(uu);
              let ll = 0;
              while (ll < 100) {
                if (IDs.includes(`${color1}-pion-${uu}-${ll}`) && IDs.includes(`${color1}-pion-${uu+1}-${ll}`) && IDs.includes(`${color1}-pion-${uu+2}-${ll}`) && IDs.includes(`${color1}-pion-${uu+3}-${ll}`)) {
                  setTimeout(function() {

                    alert("PLAYER 1 WIN");
  
                    // document.cookie = "p1" + '=' + win1 + ';expires=' + 10000;
                                $.cookie('p1', ++oldValue1);
  
                    location.reload(true);
                  }, 800);
                }
                if (IDs.includes(`${color2}-pion-${uu}-${ll}`) && IDs.includes(`${color2}-pion-${uu+1}-${ll}`) && IDs.includes(`${color2}-pion-${uu+2}-${ll}`) && IDs.includes(`${color2}-pion-${uu+3}-${ll}`)) {
                  setTimeout(function() {

                    alert("PLAYER 2 WIN");
                    win2++;
                    // document.cookie = "p2" + '=' + win2 + ';expires=' + 10000;
                                $.cookie('p2', ++oldValue2);
  
                    location.reload(true);
                  }, 800);

                }
                if (IDs.includes(`${color2}-pion-${uu}-${ll}`) && IDs.includes(`${color2}-pion-${uu+1}-${ll+1}`) && IDs.includes(`${color2}-pion-${uu+2}-${ll+2}`) && IDs.includes(`${color2}-pion-${uu+3}-${ll+3}`)) {
                  setTimeout(function() {

                    alert("PLAYER 2 WIN");
                    win2++;
                    // document.cookie = "p2" + '=' + win2+1 + ';expires=' + 10000;
                    $.cookie('p2', ++oldValue2);
  
                    location.reload(true);
                  }, 800);


                }
                if (IDs.includes(`${color1}-pion-${uu}-${ll}`) && IDs.includes(`${color1}-pion-${uu+1}-${ll+1}`) && IDs.includes(`${color1}-pion-${uu+2}-${ll+2}`) && IDs.includes(`${color1}-pion-${uu+3}-${ll+3}`)) {
                  setTimeout(function() {

                    alert("PLAYER 1 WIN");
                    win1 = win1+1;
                    // document.cookie = "p1" + '=' + win1 + ';expires=' + 10000;
                    $.cookie('p1', ++oldValue1);
  
                    location.reload(true);
                  }, 800);


                }
                if (IDs.includes(`${color2}-pion-${uu}-${ll}`) && IDs.includes(`${color2}-pion-${uu-1}-${ll+1}`) && IDs.includes(`${color2}-pion-${uu-2}-${ll+2}`) && IDs.includes(`${color2}-pion-${uu-3}-${ll+3}`)) {
                  setTimeout(function() {

                    alert("PLAYER 2 WIN");
                    win2++;
                    // document.cookie = "p2" + '=' + win2 + ';expires=' + 10000;
                    $.cookie('p1', ++oldValue1);
  
                    location.reload(true);
                  }, 800);


                }
                if (IDs.includes(`${color1}-pion-${uu}-${ll}`) && IDs.includes(`${color1}-pion-${uu-1}-${ll+1}`) && IDs.includes(`${color1}-pion-${uu-2}-${ll+2}`) && IDs.includes(`${color1}-pion-${uu-3}-${ll+3}`)) {
                  setTimeout(function() {

                    alert("PLAYER 1 WIN");
                    win1 = win1+1;
  
                    // document.cookie = "p1" + '=' + win1 + ';expires=' + 10000;
                    $.cookie('p1', ++oldValue1);
  
                    location.reload(true);
                  }, 800);


                }
                ll++;
              }
            
              uu++;
            }
            

            });



        }
      }

      let myGame = new Game();
   

});
