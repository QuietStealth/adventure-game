var button1 = document.getElementById('option1');
var button2 = document.getElementById('option2');
var button3 = document.getElementById('option3');
var button4 = document.getElementById('option4');
var button5 = document.getElementById('option5');
var title = document.getElementById('level_title');
var action = document.getElementById('action');
var image = document.getElementById('level_image');
var image2 = document.getElementById('level_image2');

// Variables start here
var victory = [false];
var item = [false];
var tempItem = [false];
var tempCondition = [false];
var trivia = [false];
var pName = [false];
var txt = '';

// Functions start here
function Level(level){
	image2.hidden = false;
	if(level == 1){
		title.innerHTML = 'Desolate cliff';
		image.src = 'img/bg/area1.png';
		image2.src = 'img/bg/area1_2.png';
		if(tempCondition[0]){

		}else{
			if(!victory[0]){
				document.getElementById('status').innerHTML = "You awaken on an empty and desolate cliff.<br/>You have no recollection of the past.<br/>You hear a wet 'splish' somewhere further away from the cliff wall.<br/>When you go to inestigate you encounter a weird gelatinous blob.<br/>The blob is agressive.";
				button1.innerHTML = 'Fight';
				button1.onclick = function(){
					battle(1);
				}
			}else{
				document.getElementById('status').innerHTML = 'You stand in the vicinity of a desolate cliff.<br/>A swift glance tells you there is nothing but a single viable exit leading north.';
				button1.innerHTML = 'venture north';
				button1.onclick = function(){
					travel(1);
				}
			}
		}
	}else if(level == 2){
		if(trivia[0]){
			title.innerHTML = 'Ruined city Earluis.';
		}else{
			title.innerHTML = 'Ruined city.';
		}
		image.src = 'img/bg/area2.png';
		image2.src = 'img/bg/area2_2.png';
		document.getElementById('status').innerHTML = txt+"Curiously you hear noises coming from one of the houses.<br/>You see a dilapidated signpost pointing north-east which has a barely readable text wich reads 'Anfallas'.<br/>You see a very wide road leading towards a moss covered castle.<br/>To the south you see a partly opened gate leading back to the large cliff.";

		button1.innerHTML = 'Enter the house';
		button1.onclick = function(){
			button2.hidden = true;
			button3.hidden = true;
			button4.hidden = true;

			travel(2);
		}

		button2.hidden = false;
		button2.innerHTML = 'Head towards Anfallas';
		button2.onclick = function(){
			button2.hidden = true;
			button3.hidden = true;
			button4.hidden = true;

			travel(3);
		}

		button3.hidden = false;
		button3.innerHTML = 'head towards the castle';
		button3.onclick = function(){
			if(tempItem[0]){
				button2.hidden = true;
				button3.hidden = true;
				button4.hidden = true;

				travel(4);
			}else{
				txt = "You reach the castle gate and discover it's locked.<br/>";
				Level(2);
			}
		}

		button4.hidden = false;
		button4.innerHTML = 'head towards the cliff';
		button4.onclick = function(){
			button2.hidden = true;
			button3.hidden = true;
			button4.hidden = true;

			travel(5);
		}
	}else if(level == 3){
		title.innerHTML = 'Decrepit house';
		image.src = 'img/bg/area3.png';
		image2.src = 'img/bg/area3_2.png';
		document.getElementById('status').innerHTML = txt+"Aside from the partly collapsed roof you see a smith's furnace, weapon racks, an anvil and blacksmith tools.<br/>It does not take a genius to discover this was a smithy once.<br/>Near the collapsed roof you see a guy trying to clean it up.<br/>You see a surprisingly intact door.";

		button1.innerHTML = "Inspect the smith's workplace";
		button1.onclick = function(){
			button2.hidden = true;
			button3.hidden = true;
			button1.innerHTML = 'continue';
			if(!item[0]){
				document.getElementById('status').innerHTML = "You walk over to the workplace and start looking through what's left of it.<br/>Most of what you find is either too rusty, broken or unfinished.<br/>On a weapon rack somewhere in a corner you find an old slightly dull sword.<br/>After some quick inspections you discover the sword is made with a very resilient material and is extremely well crafted.<br/>Obiously made by a grandmaster at smithing.";
				item[0] = true;

				button1.onclick = function(){
					Level(3);
				}
			}else{
				txt = 'There is nothing useful left regardless of how much you search.<br/>';
				Level(3);
			}
		}

		button2.hidden = false;
		if(!pName[0]){
			button2.innerHTML = 'Talk to the man';
		}else{
			button2.innerHTML = 'Talk to Telvarius';
		}
		button2.onclick = function(){
			button2.hidden = true;
			button3.hidden = true;
			button1.innerHTML = 'continue'
			if(!pName[0]){
				document.getElementById('status').innerHTML = 'You approach the man and, as if sensing your intentions, he starts talking to you.<br/>"My name is Telvarius Machden", he says while putting a rock down before turning to face you.<br/>"I am an archmage from the Liffanya Union."<br/>"But i am far away from Liffanya so nobody recognises me." He almost looks depressed after saying this.<br/>"Can'+"'"+'t be helped though. I am here to find out what the massive energy fluctuations were."<br/>"They came from the south somewhere but there is no trace of it left so i have no idea where to continue my search."<br/>"I will have to continue clening up this mess though. I do not want to sleep on the hard floor again."<br/>He turns around and continues cleaning indicating he is done talking.';
				pName[0] = true;
			}else{
				if(!trivia[0]){
					document.getElementById('status').innerHTML = 'As you walk up to Telvarius he, once again, begins talking without you announcing your intentions.<br/>"Did ou know that these ruins were once the capital of a powerful kingdom?", he asks with a hint of exitement in his voice.<br/>"A long time ago this city was called Earluis. I wonder wat happend to this place."<br/>"I am sure the answer to that lies within the castle, but the gate is locked and the key is nowhere to be found."<br/>Looking closely you can see sadness in his movements.<br/>"I had hoped to discover the secrets this city hold as it would answer many of my questions about the history of the southern domain."<br/>"Maybe I would even find out what is on top of that cloud piercing cliff", he says as he begins daydreaming.<br/>Despite your best efforts you fail to elicit a response from him.';
					trivia[0] = true;
				}else{
					document.getElementById('status').innerHTML = 'As you approach Telvarius you hear him talking to himsef instead of immediately talking to you as he previously did.<br/>"I swear i was talking to someone some time ago", he mutters in a barely audible tone, "but my memory fails me as to who it was and what they looked like."<br/>"Was I just talking to myself all this time? No, there clearly was a presence near me at that time."<br/>Despite your best efforts he fails to take notice of you entirely.';
				}
			}
			button1.onclick = function(){
				Level(3);
			}
		}

		button3.hidden = false;
		button3.innerHTML = 'leave the house';
		button3.onclick = function(){
			button2.hidden = true;
			button3.hidden = true;
			travel(6);
		}
	}else if(level == 4){
		title.innerHTML = 'Port city Anfallas';
		image.src = 'img/bg/area4.png';
		image2.src = 'img/bg/area4_2.png';
		document.getElementById('status').innerHTML = 'You stand in the port/marketsquare of the city.<br/>Somewhere in a forgotten corner of the square stands a dilapidated tavern.<br/>You notice a ship wich is oozing dark energies and a few magi near it who have noticed it.<br/>You notice a noticeboard with a map of all ruins in the area on it.<br/>Looking closely you can see Earluis on it with a tower somewhere east from it.';

		button1.innerHTML = 'Enter the tavern';
		button1.onclick = function(){
			
		}
	}
}

function battle(enemy){
	if(enemy == 1){
		document.getElementById('status').innerHTML = "The blob is slowly making it's way towards you.<br/>You get ready to beat the liquids out of this enigmatic lifeform.";

		document.getElementById('slime_image').hidden = false;

		button1.innerHTML = 'Punch it';
		button1.onclick = function(){
			document.getElementById('status').innerHTML = 'You punch the blob with all your might.<br/>The gelatinous entity is too shock absorbent to sustain any damage.<br/>The blob is still slowly moving towards you.';
		}

		button2.hidden = false;
		button2.innerHTML = 'Kick it';
		button2.onclick = function(){
			document.getElementById('status').innerHTML = 'You kick the pudding esque creature with all your might.<br/>The living snot flies back for approximately a metre.<br/>The blob begins moving towards you again.';
		}

		button3.hidden = false;
		button3.innerHTML = 'Stomp on it';
		button3.onclick = function(){
			document.getElementById('status').innerHTML = 'You stomp on the gelatinous entity with all your might.<br/>It does nothing but make your feet slightly sticky.<br/>The blob keeps jiggling for some time.';
		}

		button4.hidden = false;
		button4.innerHTML = 'Bop it';
		button4.onclick = function(){
			document.getElementById('status').innerHTML = 'You bop the blob with all your might.<br/>The enigmatic lifeform disintegrates immediately.<br/>You have succesfully slain the frightening blob.';

			button2.hidden = true;
			button3.hidden = true;
			button4.hidden = true;
			document.getElementById('slime_image').hidden = true;

			button1.innerHTML = 'continue';
			button1.onclick = function(){
				victory[0] = true;
				Level(1);
			}
		}
	}
}

function travel(road){
	title.innerHTML = 'Traveling';
	image.src = 'img/bg/travel.png';
	image2.hidden = true;
	button1.innerHTML = 'continue';
	if(road == 1){//area1 -> area2
		document.getElementById('status').innerHTML = 'You begin to walk the lone road leading away from the cliff.<br/>Some time later you look behind you to see if there is something on top of the cliff but see nothing but a massive rock face reaching into the heavens.<br/>After a few hours worth of walking you see the ruins of a city rising from behind a hill.<br/>You walk several minutes until you walk through the slightly opened city gates.';

		button1.onclick = function(){
			Level(2);
			txt = 'You stand in the main street of the ruined city.<br/>';
		}
	}else if(road == 2){//area2 -> area3
		document.getElementById('status').innerHTML = 'You head towards the house in the south-east of the street.<br/>You cautiously peek through the window and see a peron trying to clean up the collapsed roof within the house.<br/>Upon seeing this you walk towards the door and open it.<br/>The person within the house immediately turns to see who has arrived.<br/>You take a good look at the person.<br/>He is a rather feminine guy with a gentle smile on his face and snow white shoulder length hair.<br/>He is wearing robes with an insignia wich naturally meand nothing to you.<br/>After looking you over a bit he returns to cleaning the mess.';

		button1.onclick = function(){
			Level(3);
			txt = 'You stand within a decrepit house.<br/>';
		}
	}else if(road == 3){//area2 -> area4
		document.getElementById('status').innerHTML = 'You walk down the north-eastern road leading to Anfallas.<br/>Surprisingly the journey that would take months on foot was nearing it'+"'"+'s end after mere hours.<br/>Unlike the many merchants and travelers waiting in line you easily walk through the gates with only a few magi giving you confused looks.<br/>You quickly arrive on the main square.';

		button1.onclick = function(){
			Level(4);
		}
	}else if(road == 5){//area2 -> area1
		document.getElementById('status').innerHTML = 'You step through the partly opened door onto the lone road leading towards the massive cliff.<br/>You eventually reach the place you first woke up at.';

		button1.onclick = function(){
			Level(1);
		}
	}else if(road == 6){//area3 -> area2
		document.getElementById('status').innerHTML = 'You open the door and leave the building<br/>You hear some bricks falling as you close the door.';

		button1.onclick = function(){
			Level(2);
		}
	}
}