import React from "react";
import C from "../sounds/c.mp3";
import CS from "../sounds/cs.mp3";
import D from "../sounds/d.mp3";
import DS from "../sounds/ds.mp3";
import E from "../sounds/e.mp3";
import F from "../sounds/f.mp3";
import FS from "../sounds/fs.mp3";
import G from "../sounds/g.mp3";
import GS from "../sounds/gs.mp3";
import A from "../sounds/a.mp3";
import AS from "../sounds/as.mp3";
import B from "../sounds/b.mp3";

function Set() {
   var audioC = new Audio(C);
   var audioCS = new Audio(CS);
   var audioD = new Audio(D);
   var audioDS = new Audio(DS);
   var audioE = new Audio(E);
   var audioF = new Audio(F);
   var audioFS = new Audio(FS);
   var audioG = new Audio(G);
   var audioGS = new Audio(GS);
   var audioA = new Audio(A);
   var audioAS = new Audio(AS);
   var audioB = new Audio(B);

  return (
    <div class="set">
<ul>

 <li class="white c piano" onClick={() => { audioC.play(); }}><span>C</span></li>
  <li class="black cs piano" onClick={() => { audioCS.play(); }}><span class="black-key">C#</span></li>
  <li class="white d piano" onClick={() => { audioD.play(); }}><span>D</span></li>
  <li class="black ds piano" onClick={() => { audioDS.play(); }}><span class="black-key">D#</span></li>
  <li class="white e piano" onClick={() => { audioE.play(); }}><span>E</span></li>
  <li class="white f piano" onClick={() => { audioF.play(); }}><span>F</span></li>
  <li class="black fs piano" onClick={() => { audioFS.play(); }}><span class="black-key">F#</span></li>
  <li class="white g piano" onClick={() => { audioG.play(); }}><span>G</span></li>
   <li class="black gs piano" onClick={() => { audioGS.play(); }}><span class="black-key">G#</span></li> 
  <li class="white a piano" onClick={() => { audioA.play(); }}><span>A</span></li> 
  <li class="black as piano" onClick={() => { audioAS.play(); }}><span class="black-key">A#</span></li>
  <li class="white b piano"  onClick={() => { audioB.play(); }}><span>B</span></li>
   
</ul>
    </div>
    );
}

export default Set;