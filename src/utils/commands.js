import React from 'react'
import Time from '../components/Time'

export const handleCommand = (input, setHistory) => {
    const command = input.trim()
    const args = command.split(' ')
  
    switch (args[0]) {
      case 'help':
        setHistory((prevHistory) => [
          ...prevHistory,
          <div key={prevHistory.length}>List of available commands...</div>,
          <div key={prevHistory.length}>ls : list all files</div>,
          <div key={prevHistory.length}>clear : Clear the terminal</div>,
          <div key={prevHistory.length}>cat filename.txt : display contents of a file</div>,
          <div key={prevHistory.length}>time : display current time</div>,
          <div key={prevHistory.length}>help : display all commands</div>,
        ])
        break

      case 'clear':
        setHistory([])
        break

      case 'ls':
        setHistory((prevHistory) => [
            ...prevHistory,
            <div key={prevHistory.length}>List of files...</div>,
            <div key={prevHistory.length}>About_Me.txt</div>,
            <div key={prevHistory.length}>Github.txt</div>,
            <div key={prevHistory.length}>Linked-In.txt</div>,
        ])
        break
        
      case 'cat':
        
        break

      case 'time':
        setHistory((prevHistory) => [
          ...prevHistory,
          <div key={prevHistory.length}><Time /></div>,
        ])
        break

      case 'cd':
        
        break

      default:
        setHistory((prevHistory) => [
          ...prevHistory,
          <div key={prevHistory.length}>Command not found: {command}</div>,
        ])
        break
    }
  }