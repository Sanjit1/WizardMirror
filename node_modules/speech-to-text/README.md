# Speech To Text

A speech recognition module to convert speech into text.

## Install

`npm install speech-to-text`

## Typical Usage

Here is the module being used in a React component

```
  componentDidMount() {
    const onAnythingSaid = text => {
      this.setState({ interimText: text });
    };

    const onEndEvent = () => {
      if (this.state.listening) {
        this.startListening();
      }
    };

    const onFinalised = text => {
      this.setState({
        finalisedText: [text, ...this.state.finalisedText],
        interimText: ''
      });
    };

    try {
      this.listener = new SpeechToText(onFinalised, onEndEvent, onAnythingSaid);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }
```

Above demo [here](http://apps.golightlyplus.com/speech-to-text-demo/).

## API

### The constructor

- onFinalised - a callback that will be passed the finalised transcription from the cloud. Slow, but accuate.
- onEndEvent - a callback that will be called when the end event is fired (speech recognition engine disconnects).
- onAnythingSaid - (optional) a callback that will be passed interim transcriptions. Fairly immediate, but less accurate than finalised text.
- language - (optional) the language to interpret against. Default is US English, and the supported languages are listed [here](https://cloud.google.com/speech-to-text/docs/languages).

The constructor will throw an error if speech recognition is not supported by the browser. [Currently only Chrome is supported](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition#Browser_compatibility).

```
if (!('webkitSpeechRecognition' in window)) {
  throw new Error("This browser doesn't support speech recognition. Try Google Chrome.");
}
```

### startListening

Initiates listening to speech input.

### stopListening

Does just that. Stops listening.

## License

MIT
