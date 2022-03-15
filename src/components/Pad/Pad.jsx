import React from 'react'
import AudioPad from 'react-audio-pad'
import './pad.css'

import Clap from '../../sounds/Clap.wav'
import Crash from '../../sounds/Crash.wav'
import Grid from '../../sounds/Grid.wav'
import Hat from '../../sounds/Hat.wav'
import LostIn from '../../sounds/LostInTtheWaves.wav'
import NBKick from '../../sounds/NBKick1.wav'
import RustLoop from '../../sounds/RustLoop.wav'
import Snare from '../../sounds/Snare.wav'

const Pad = () => {
  return (
    <section id='pad'>
        <h3>This drum pad is able to use by clicking one of many keys</h3>
        <h5>If you want to make some music just hit key that is listed below each pad</h5>
      

        <AudioPad audioUrl={NBKick} keyCode="49" keyUp={false} color={"#d127d1"} volume={0.3}>
          Kick - 1
        </AudioPad>
        <AudioPad audioUrl={Snare} keyCode="50" keyUp={false} color={"#d127d1"} volume={1}>
          Snare - 2
        </AudioPad>
        <AudioPad audioUrl={Hat} keyCode="51" keyUp={false} color={"#d127d1"} volume={1}>
          Hat - 3
        </AudioPad>
        <AudioPad audioUrl={Clap} keyCode="52" keyUp={false} color={"#d127d1"} volume={1}>
          Clap - 4
        </AudioPad>
        <AudioPad audioUrl={Crash} keyCode="53" keyUp={false} color={"#d127d1"} volume={1}>
          Crash - 5
        </AudioPad>
        <AudioPad audioUrl={Grid} keyCode="54" keyUp={true} color={"#d127d1"} volume={1}>
          Grid - 6
        </AudioPad>
        <AudioPad audioUrl={LostIn} keyCode="55" keyUp={true} color={"#d127d1"} volume={1}>
          LostInTheWaves - 7
        </AudioPad>
        <AudioPad audioUrl={RustLoop} keyCode="56" keyUp={true} color={"#d127d1"} volume={1}>
          RustLoop - 8
        </AudioPad>
    </section>
  )
}

export default Pad