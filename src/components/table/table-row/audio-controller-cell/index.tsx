import React, { useEffect, useRef, useState } from 'react'
import vivaldi from '../../../../assets/music/vivaldi.mp3'
import './styles.css'
import SVG_ICONS from '../../../../assets/images/Svg-Icons'
import processSecondsToMinutes from '../../../../utils/functions/process-seconds-to-minutes'

interface IAudioControllerCellProps {
  record: string | undefined,
  closeController: (e: any) => void,
  timeInSeconds: number
}

const AudioControllerCell = ({ record, closeController, timeInSeconds }: IAudioControllerCellProps) => {


  const [currentTime, setCurrentTime] = useState<number>(0);
  const [remainingTime, setRemainingTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null);
  const toggleRecord = () => {
    if (isPlaying) {
      audioRef.current?.pause()
      setIsPlaying(false)
    }
    else {
      audioRef.current?.play()
      setIsPlaying(true)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentAudioTime = audioRef.current.currentTime;
      setCurrentTime(currentAudioTime);

      if (audioRef.current.duration) {
        const calculatedRemainingTime = audioRef.current.duration - currentAudioTime;
        setRemainingTime(calculatedRemainingTime);
      }
    }
  };

  useEffect(() => {

    // Event listener to set initial values and calculate remaining time
    if (audioRef.current) {
      audioRef.current.addEventListener('loadedmetadata', () => {
        const duration = audioRef.current?.duration;

        if (duration !== undefined) {
          setCurrentTime(duration);
          setRemainingTime(duration);
        }
      });
    }

    // Timer interval for updating current and remaining time
    const interval = setInterval(() => {
      handleTimeUpdate();
    }, 1000);

    // Cleanup function to clear interval
    return () => {
      clearInterval(interval);
    };
  }, []);


  useEffect(() => {
    if (remainingTime === 0) setIsPlaying(false)
  }, [remainingTime])

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(event.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const getGradientStyles = () => {
    if (audioRef.current) {
      const value = currentTime;
      const max = audioRef.current.duration;
      const percentage = (value / max) * 100;
      return {
        background: `linear-gradient(to right, var(--accent-color-3) 0%, var(--accent-color-3) ${percentage}%, #ddd ${percentage}%, #ddd 100%)`
      };
    }
    return {};
  };

  const { minutes, seconds } = processSecondsToMinutes(Math.floor(remainingTime))

  return (
    <td className="table-row__cell">
      <div className='audio-controller__container'>
        <div>
          {`${minutes}:${seconds}`}
        </div>

        <div className='audio-controller__controls'>
          <button className='play-pause-button' onClick={toggleRecord}>
            {isPlaying ? SVG_ICONS.PAUSE : SVG_ICONS.PLAY}
          </button>
          <input
            type="range"
            min={0}
            max={audioRef.current?.duration || 0}
            value={currentTime}
            step={0.1}
            className='custom-range'
            style={getGradientStyles()}
            onChange={handleSeek}
          />
        </div>

        <div className='audio-controller__additional-buttons'>
          <a href={record || vivaldi} download={record || vivaldi} className='audio-controller__download-button'>{SVG_ICONS.DOWNLOAD}</a>
          <button onClick={(e) => closeController(e)} className='audio-controller__close-button'>{SVG_ICONS.CLOSE}</button>
          <audio onTimeUpdate={handleTimeUpdate} className="visually-hidden" ref={audioRef} src={record || vivaldi} />
        </div>


      </div>
    </td>
  )
}

export default AudioControllerCell